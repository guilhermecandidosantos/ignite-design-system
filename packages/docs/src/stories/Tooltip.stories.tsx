import type { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps } from '@guilherme-ignite-design-system/react'

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,

  args: {
    message: '21 de Outubro - Indisponível',
    componentTrigger: <span>21</span>
  },

} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
