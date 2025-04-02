import * as TooltipRadix  from "@radix-ui/react-tooltip";
import { ReactNode } from "react";
import { TooltipArrow, TooltipContent } from "./styles";


export interface TooltipProps {
  componentTrigger: ReactNode
  message: string
}

export function Tooltip({componentTrigger, message}: TooltipProps) {
  return (
    <TooltipRadix.Provider>
      <TooltipRadix.Root>
         <TooltipRadix.Trigger asChild>
          {componentTrigger}
         </TooltipRadix.Trigger>

         <TooltipRadix.Portal>
          <TooltipContent>
            {message}
            <TooltipArrow />
          </TooltipContent>
         </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  )
}

Tooltip.displayName = "Tooltip"