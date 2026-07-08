import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Cropper from "react-easy-crop";
import React, { useEffect, useState } from "react";
import { FieldLabel } from "@/components/ui/field";
import { getCroppedImage } from "@/utils/cropImage";

interface ImageEditorDialogueProps {
  image: File | null;
  open: boolean;
  onClose: () => void;
  onApply: (editedImage: File) => void;
}

const ImageEditorDialogue = ({
  image,
  open,
  onClose,
  onApply,
}: ImageEditorDialogueProps) => {
  const [crop, setCrop] = useState({
    x: 0,
    y: 0,
  });

  const [zoom, setZoom] = useState(1);

  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);

  const imageUrl = React.useMemo(() => {
    if (!image) return "";

    return URL.createObjectURL(image);
  }, [image]);

  useEffect(() => {
    return () => {
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, [imageUrl]);

  useEffect(() => {
    if (!image) return;

    setCrop({ x: 0, y: 0 });
    setZoom(1);
    setRotation(0);
  }, [image]);

  const handleApply = async () => {
    if (!image || !croppedAreaPixels) return;

    const editedImage = await getCroppedImage(
      imageUrl,
      croppedAreaPixels,
      rotation,
    );





    onApply(editedImage);

    onClose();
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          onClose();
        }
      }}
    >
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Preview</DialogTitle>
        </DialogHeader>

        {image && (
          <>
            <div className="relative h-[500px] w-full">
              <Cropper
                image={imageUrl}
                crop={crop}
                zoom={zoom}
                rotation={rotation}
                aspect={1}
                cropShape="rect"
                showGrid={true}
                objectFit="contain"
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onRotationChange={setRotation}
                onCropComplete={(_, croppedAreaPixels) => {
                  setCroppedAreaPixels(croppedAreaPixels);
                }}
              />
            </div>

            {/* Controls */}
            <div className="mt-6 space-y-5">
              <div>
                <FieldLabel>Zoom</FieldLabel>
                <input
                  type="range"
                  min={1}
                  max={3}
                  step={0.1}
                  value={zoom}
                  onChange={(e) => setZoom(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div>
                <FieldLabel>Rotation</FieldLabel>
                <input
                  type="range"
                  min={0}
                  max={360}
                  value={rotation}
                  onChange={(e) => setRotation(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div className="flex justify-end gap-3">
                <button
                  className="rounded-lg border px-4 py-2"
                  onClick={onClose}
                >
                  Cancel
                </button>

                <button
                  className="rounded-lg bg-blue-600 px-4 py-2 text-white"
                  onClick={handleApply}
                >
                  Apply
                </button>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ImageEditorDialogue;
