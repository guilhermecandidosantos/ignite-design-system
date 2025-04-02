import * as ToastRadix  from '@radix-ui/react-toast'
import {  ToastRoot, ToastTitle, ToastDescription, ToastClose } from './styles'
import { X } from '@phosphor-icons/react'

export interface ToastProps {
  title: string
  description: string
  duration?: number
}

export function Toast({ title, description, duration = 5000 }: ToastProps) {
  return (
    <ToastRadix.Provider duration={duration}>
      <ToastRadix.Root asChild>
        <ToastRoot>
          <ToastTitle>
            {title}
          </ToastTitle>
          <ToastDescription>
            {description}
          </ToastDescription>

          <ToastClose>
            <X size={20} weight='bold' />
          </ToastClose>
        </ToastRoot>
        
      </ToastRadix.Root>

      <ToastRadix.Viewport />
    </ToastRadix.Provider>
  )
}

Toast.displayName = 'Toast'
