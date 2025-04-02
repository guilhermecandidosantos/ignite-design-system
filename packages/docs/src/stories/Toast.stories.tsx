import type { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@guilherme-ignite-design-system/react'

export default {
  title: 'Surfaces/Toast',
  component: Toast,

  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
    duration: 5000
  },

} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
