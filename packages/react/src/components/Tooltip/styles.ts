import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContent = styled(TooltipPrimitive.Content, {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$xs',
  filter: 'drop-shadow(4px 16px 24px rgba(0, 0, 0, 0.25))',

  color: '$gray100',
  fontSize: '$sm',
  fontFamily: '$default',
})

export const TooltipArrow = styled(TooltipPrimitive.Arrow, {
  fill: '$gray900',
})
