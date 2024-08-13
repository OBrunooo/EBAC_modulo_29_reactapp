import styled from 'styled-components'
import { Props } from './index'

export const Titulo = styled.h3<Props>`
  color: ${(props) => props.theme.corPrincipal};
  font-size: ${(Props) => (Props.fontSize ? Props.fontSize + 'px' : '14px')};
  font-weigth: bold;
  margin-bottom: 16px;
`
