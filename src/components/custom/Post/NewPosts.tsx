import React, { useEffect, useState } from "react";
import SideBar from "../sidebar/SideBar";
import { Image, ImagePlus } from "lucide-react";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";

import ImageEditorDialogue from "./ImageEditorDialogue";
import type { UploadedImage } from "@/types/post.types";

const NewPosts = () => {
  const [content, setContent] = useState("");
  const [images, setImages] = useState<UploadedImage[]>([]);

  const [tagInput, setTagInput] = useState("");

  const [tags, setTags] = useState<string[]>([]);

  const [selectedImage, setSelectedImage] = useState<{
    file: File;
    index: number;
  } | null>(null);
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    // setImages((previousImages) => [...previousImages, ...Array.from(files)]);

    const uploadedImages: UploadedImage[] = Array.from(files).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages((prev) => [...prev, ...uploadedImages]);

    e.target.value = "";

    // console.log(e.target.files);
  };

  const removeImage = (index: number) => {
    URL.revokeObjectURL(images[index].preview);
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const addTag = () => {
    const tag = tagInput.trim();

    if (!tag) return;

    if (tags.includes(tag)) {
      setTagInput("");
      return;
    }
    setTags((prev) => [...prev, tag]);
    console.log("tag added:", tag);
    setTagInput("");
  };

  const removeTag = (tag: string) => {
    setTags((prev) => prev.filter((t) => t !== tag));
  };

  const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag();
    }
  };

  useEffect(() => {
    return () => {
      images.forEach((image) => {
        URL.revokeObjectURL(image.preview);
      });
    };
  }, [images]);
  return (
    <div className="flex ">
      <SideBar />
      <div className="p-3 flex-1 ">
        <div className="inline-flex items-center gap-2 p-2 border-2 border-amber-600 rounded-3xl">
          <Image size={24} />
          <div className="px-2 font-semibold">{`Post`}</div>
        </div>

        <div className="new-post-box mt-4 rounded-xl border border-gray-200 p-6 shadow-sm">
          <FieldGroup>
            <Field>
              <FieldLabel>Enter the Content Here</FieldLabel>
              <textarea
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
                placeholder="Enter the Caption Here"
                className="min-h-32 w-full resize-none rounded-lg border p-3"
              />
            </Field>
            <Field>
              <FieldLabel className="mb-2">Upload Images</FieldLabel>

              <label
                htmlFor="image-upload"
                className="
                    flex flex-col items-center justify-center
                    w-full h-48
                    border-2 border-dashed border-gray-300
                    rounded-xl
                    cursor-pointer
                    hover:border-cyan-500
                    hover:bg-blue-50
                    transition-all
                    "
              >
                <ImagePlus size={48} className="text-blue-500" />

                <p className="mt-3 text-lg font-medium">
                  Click to upload images
                </p>

                <p className="text-sm text-gray-500">
                  PNG, JPG, JPEG • Multiple images supported
                </p>
              </label>

              <input
                id="image-upload"
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                className="hidden"
              />
            </Field>
            <Field>
              {images.length > 0 && <FieldLabel>Preview</FieldLabel>}
              <div className="flex gap-4 overflow-x-auto py-2 self-center">
                {images.map((image, index) => {
                  return (
                    <div key={index} className="relative group shrink-0">
                      <img
                        src={image.preview}
                        alt={image.file.name}
                        className="h-56 w-72 rounded-xl object-cover shadow-md transition-transform duration-300 group-hover:scale-[1.02]"
                        onClick={() =>
                          setSelectedImage({
                            file: image.file,
                            index,
                          })
                        }
                      />
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeImage(index);
                        }}
                        className="
                            absolute
                            top-2
                            right-2
                            hidden
                            group-hover:flex
                            h-8
                            w-8
                            items-center
                            justify-center
                            rounded-full
                            bg-black/70
                            text-white
                        "
                      >
                        ✕
                      </button>
                    </div>
                  );
                })}
              </div>
            </Field>
            <ImageEditorDialogue
              image={selectedImage?.file ?? null}
              open={selectedImage !== null}
              onClose={() => setSelectedImage(null)}
              onApply={(editedImage) => {
                if (!selectedImage) return;

                setImages((prev) =>
                  prev.map((img, index) => {
                    if (index !== selectedImage.index) return img;

                    URL.revokeObjectURL(img.preview);

                    return {
                      file: editedImage,
                      preview: URL.createObjectURL(editedImage),
                    };
                  }),
                );

                setSelectedImage(null);
              }}
            />

            <Field>
              <FieldLabel>Tags</FieldLabel>

              <div className="space-y-3">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={handleTagKeyDown}
                    placeholder="Type a tag and press Enter"
                    className="flex-1 rounded-lg border p-2"
                  />

                  <button
                    type="button"
                    onClick={addTag}
                    className="rounded-lg bg-blue-600 px-4 text-white"
                  >
                    Add
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <div
                      key={tag}
                      className="flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-sm"
                    >
                      #{tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="font-bold text-red-600"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </Field>
          </FieldGroup>
        </div>
      </div>
    </div>
  );
};

export default NewPosts;
