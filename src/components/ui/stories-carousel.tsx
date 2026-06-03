import type { ComponentProps, HTMLAttributes } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export type StoriesProps = ComponentProps<typeof Carousel>;

export const Stories = ({ className, opts, ...props }: StoriesProps) => (
  <Carousel
    className={cn("w-full", className)}
    opts={{
      align: "start",
      loop: false,
      dragFree: true,
      ...opts,
    }}
    {...props}
  />
);

export type StoriesContentProps = ComponentProps<typeof CarouselContent>;

export const StoriesContent = ({
  className,
  ...props
}: StoriesContentProps) => (
  <CarouselContent className={cn("gap-2", className)} {...props} />
);

export type StoryProps = HTMLAttributes<HTMLDivElement>;

export const Story = ({ className, ...props }: StoryProps) => (
  <CarouselItem className={cn("basis-auto !w-[200px] pl-2 md:pl-4", className)}>
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl bg-muted/40",
        "cursor-pointer transition-all duration-200",
        "hover:scale-[1.02] hover:shadow-lg",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
      role="button"
      tabIndex={0}
      {...props}
    />
  </CarouselItem>
);

export type StoryImageProps = ComponentProps<"img"> & {
  alt: string;
};

export const StoryImage = ({ className, alt, ...props }: StoryImageProps) => (
  <img
    alt={alt}
    className={cn(
      "absolute inset-0 h-full w-full object-cover",
      "transition-opacity duration-200",
      "group-hover:opacity-90",
      className
    )}
    {...props}
  />
);

export type StoryOverlayProps = HTMLAttributes<HTMLDivElement> & {
  side?: "top" | "bottom";
};

export const StoryOverlay = ({
  className,
  side = "bottom",
  ...props
}: StoryOverlayProps) => {
  const positionClasses =
    side === "top" ? "top-0 bg-gradient-to-b" : "bottom-0 bg-gradient-to-t";

  return (
    <div
      className={cn(
        "absolute right-0 left-0 h-10 from-black/20 to-transparent",
        positionClasses,
        className
      )}
      {...props}
    />
  );
};