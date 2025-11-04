"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";

export function CTAButton({
  className,
  ...rest
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const handleClick = () => {
    (
      window as typeof window & { glyphChatApi: { open: () => void } }
    ).glyphChatApi.open();
  };
  return (
    <Button
      size="lg"
      className={cn("bg-blue-600 font-bold cursor-pointer", className)}
      onClick={handleClick}
      {...rest}
    >
      Discutons de votre projet
    </Button>
  );
}
