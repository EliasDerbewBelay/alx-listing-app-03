import React from "react";
import Image from "next/image";
import type { CardProps } from "../../interfaces";
import Button from "./Button";

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  imageSrc,
  ctaLabel = "Details",
  onCta,
}) => {
  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
      {imageSrc && (
        <div className="relative h-44 w-full">
          <Image src={imageSrc} alt={title} fill className="object-cover" />
        </div>
      )}
      <div className="space-y-1 p-4">
        <h3 className="text-base font-semibold">{title}</h3>
        {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
        {onCta && (
          <Button className="mt-2" onClick={onCta}>
            {ctaLabel}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Card;
