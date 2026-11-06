import Image from "next/image";
import type { ComponentPropsWithoutRef } from "react";
import styles from "./mdx.module.css";

export function Figure({
  src,
  alt,
  caption,
  width = 1200,
  height = 750,
}: {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}) {
  return (
    <figure className={styles.figure}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 900px) 100vw, 760px"
        unoptimized
      />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export function MarkdownImage({
  src,
  alt = "",
  width,
  height,
}: ComponentPropsWithoutRef<"img">) {
  if (!src || typeof src !== "string") return null;
  const parsedWidth = Number(width);
  const parsedHeight = Number(height);
  return (
    <Image
      className={styles.inlineImage}
      src={src}
      alt={alt}
      width={parsedWidth > 0 ? parsedWidth : 1200}
      height={parsedHeight > 0 ? parsedHeight : 750}
      sizes="(max-width: 900px) 100vw, 760px"
      unoptimized
    />
  );
}
