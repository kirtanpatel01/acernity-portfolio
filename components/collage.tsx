import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { collageItems } from "@/constants/collage";

export default function Collage() {
  return (
    <DraggableCardContainer className="relative flex min-h-124 w-full items-center justify-center overflow-clip">
      {collageItems.map((item) => (
        <DraggableCardBody key={item.title} className={item.className}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-40 w-80 object-cover"
          />
          <h3 className="mt-4 text-center text-base font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
