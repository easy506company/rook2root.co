import { ComponentProps, ReactNode } from "react";
import NextImage from "next/image";

type Height = ComponentProps<typeof NextImage>["height"];
type Width = ComponentProps<typeof NextImage>["width"];

type Props = ComponentProps<"img"> & {
  caption?: ReactNode;
};

export default function Image({
  src,
  alt = "alt",
  width = 800,
  height = 350,
  caption,
  ...props
}: Props) {
  if (!src) return null;

  return (
    <div style={{ textAlign: "center" }}>
      <NextImage
        src={typeof src === "string" ? src : URL.createObjectURL(src)}
        alt={alt}
        width={width as Width}
        height={height as Height}
        quality={40}
        {...props}
      />
      {caption && (
        <p style={{
          fontSize: "0.9em", color: "gray",
          marginTop: "0.5em", textAlign: "left"
        }}>
          {caption}
        </p>
      )}
    </div>
  );
}
