import { HeadingProps } from "@/types/heroType";
import React from "react";

export default function Heading({
  subtitle,
  title,
  description,
}: HeadingProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
      <div className="flex-1">
        <p className="text-primary font-bold text-xl tracking-wide leading-[120%] uppercase">
          {subtitle}
        </p>
        <h2 className="text-primaryText text-5xl font-semibold leading-14 mt-4">
          {title}
        </h2>
      </div>
      <p className="text-white text-base font-normal leading-6 max-w-lg">
        {description}
      </p>
    </div>
  );
}
