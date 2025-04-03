import { Arrow, Content } from "@radix-ui/react-tooltip";
import { styled } from "../../styles";


export const TooltipContent = styled(Content, {
  backgroundColor: '$gray900',
  color: '$gray100',
  padding: '$3 $4',
  borderRadius: '$sm',
  fontFamily: '$default'
})

export const TooltipArrow = styled(Arrow, {
  fill: '$gray900'
})