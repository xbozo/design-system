import { Box, Button, Tooltip, TooltipProps } from '@bozo-ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: {
    children: <Button>Hover me!</Button>,
    content: 'This is a tooltip',
  },
  argTypes: {
    children: {
      control: {
        type: 'null',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '$20',
            background: '$gray500',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
