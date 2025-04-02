import { Close, Description, Title } from "@radix-ui/react-toast";
import { styled } from "../../styles";
import { Box } from "../Box";

export const ToastRoot = styled(Box, {
  width: '22.5rem',
  position: 'relative'
})

export const ToastTitle = styled(Title, {
  fontSize: '$4xl',
  fontWeight: '$bold',
  lineHeight: "$base",
  color: '$white',
  fontFamily: 'Roboto, sans-serif'
})

export const ToastDescription = styled(Description, {
  fontSize: '$sm',
  fontWeight: '$regular',
  lineHeight: '$base',
  color: '$gray200',
  fontFamily: '$default'
})

export const ToastClose = styled(Close, {
  background: 'transparent',
  border: 'none',
  position: 'absolute',
  top: '$2',
  right: '$2',
  cursor: 'pointer',
  color: '$gray200'
})