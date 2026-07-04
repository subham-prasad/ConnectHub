import * as React from "react";

export function MoreOutlinedIcon({
  size = 1024,
  color = "currentColor",
  strokeWidth = 2,
  className,
  ...props
}: React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      fill={color}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M456 231a56 56 0 1 0 112 0a56 56 0 1 0-112 0m0 280a56 56 0 1 0 112 0a56 56 0 1 0-112 0m0 280a56 56 0 1 0 112 0a56 56 0 1 0-112 0"/>
    </svg>
  );
}
