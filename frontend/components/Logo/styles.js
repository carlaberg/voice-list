import styled from 'styled-components'
import LogoIcon from '../../layout/icons/logo.svg'

export const StyledLogo = styled(LogoIcon)`
  fill: ${({ theme }) => theme.colorAccent};
  width: 5rem;
  height: 5rem;
`
