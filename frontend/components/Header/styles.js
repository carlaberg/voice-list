import styled from 'styled-components'
import { animated } from 'react-spring'
import { FontLarge } from '../../layout/mixins'

export const HeaderWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colorGrayOpacity};
`

export const HeaderBar = styled.div`
  height: ${({ theme }) => theme.headerHeight};
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`

export const Home = styled.a`
  color: ${({ theme }) => theme.colorAccent};
  cursor: pointer;
  ${FontLarge}
  text-transform: uppercase;
`

export const ButtonWrapper = styled(animated.div)`
  margin-left: auto;
`

export const LoginButtons = styled(animated.div)`
  position: absolute;
  top: 50%;
  transform: translateY(50%);
  right: 0;
`

export const SignoutButton = styled(animated.div)`
  position: absolute;
  top: 50%;
  transform: translateY(50%);
  right: 0;
`
