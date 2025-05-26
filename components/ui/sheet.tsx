"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;

const SheetContent = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Content>, React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content> & { side?: "left" | "right" | "top" | "bottom" }>(({ className, side = "right", children, ...props }, ref) => (
	<SheetPrimitive.Portal>
		<SheetPrimitive.Overlay className="fixed inset-0 z-50 bg-black/50 transition-opacity" />
		<SheetPrimitive.Content ref={ref} className={cn("fixed z-50 bg-background p-6 shadow-lg transition-all", side === "right" && "top-0 right-0 h-full w-80 border-l", side === "left" && "top-0 left-0 h-full w-80 border-r", side === "bottom" && "bottom-0 left-0 w-full h-80 border-t", side === "top" && "top-0 left-0 w-full h-80 border-b", className)} {...props}>
			{children}
		</SheetPrimitive.Content>
	</SheetPrimitive.Portal>
));
SheetContent.displayName = "SheetContent";

export { Sheet, SheetContent, SheetTrigger };
