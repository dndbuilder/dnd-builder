import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

interface TooltipProps extends TooltipPrimitive.TooltipProps {}

const Tooltip = ({ children, ...props }: TooltipProps) => {
  return (
    <TooltipPrimitive.Provider delayDuration={0}>
      <TooltipPrimitive.Root {...props}>{children}</TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};

Tooltip.displayName = TooltipPrimitive.Root.displayName;

const Trigger = forwardRef<
  ElementRef<typeof TooltipPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger>
>(({ children, ...props }, ref) => {
  return (
    <TooltipPrimitive.Trigger ref={ref} {...props}>
      {children}
    </TooltipPrimitive.Trigger>
  );
});

Trigger.displayName = TooltipPrimitive.Trigger.displayName;

const TriggerContent = forwardRef<
  ElementRef<typeof TooltipPrimitive.Content>,
  ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ children, ...props }, ref) => {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade z-50 select-none rounded-[4px] bg-black px-2 py-1.5 text-[10px] leading-none text-slate-50  will-change-[transform,opacity]"
        sideOffset={5}
        ref={ref}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="fill-black" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
});

TriggerContent.displayName = TooltipPrimitive.Content.displayName;

Tooltip.Trigger = Trigger;
Tooltip.Content = TriggerContent;
Tooltip.Portal = TooltipPrimitive.Portal;

export default Tooltip;
