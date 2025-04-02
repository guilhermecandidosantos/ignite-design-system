import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@guilherme-ignite-design-system/react'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: <Text>Testando o elemento box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: 'object',
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
