import * as React from "react"

import { cn } from "../lib/utils"


const Button = React.forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
<div
  ref={ref}
  className={cn(
    "inline-flex items-center h-10 justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:text-sm sm:leading-6",
    className
  )}
  {...props}
/>
))
Button.displayName = "Button"

export {Button}