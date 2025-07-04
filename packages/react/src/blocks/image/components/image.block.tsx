"use client";

import { BlockProps } from "@/types/block";
import { FC } from "react";
import { ImageSettingsType } from "../types";

import placeholder from "@/assets/images/placeholder.png";

const ImageBlock: FC<BlockProps<ImageSettingsType>> = ({ settings, meta }) => {
  const locale = meta?.locale || "en";
  const captionText = settings.caption?.text?.[locale];

  const img = (
    <>
      <img
        width={settings.media?.originalWidth ?? 500}
        height={settings.media?.originalWidth ?? 500}
        src={settings.media?.url ?? placeholder.src}
        alt={settings.media?.name ?? "image"}
      />
      {captionText && <figcaption className="block-img-caption">{captionText}</figcaption>}
    </>
  );

  return (
    <figure className="block-img">
      {settings.link?.url ? (
        <a
          href={settings.link?.url}
          rel={settings.link.nofollow ? "nofollow" : undefined}
          target={settings.link.newWindow ? "_blank" : undefined}
        >
          {img}
        </a>
      ) : (
        img
      )}
    </figure>
  );
};

export default ImageBlock;
