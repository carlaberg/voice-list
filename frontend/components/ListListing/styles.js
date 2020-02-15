import styled from 'styled-components'
import { FontLarge, FontMedium } from '../../layout/mixins'

export const Heading1 = styled.h1`
  ${FontLarge}
  margin-bottom: ${({ theme }) => theme.gutter};
`

export const Heading2 = styled.h2`
  ${FontMedium}
  margin-bottom: ${({ theme }) => theme.gutter};
  cursor: pointer;
`

export const ListContainer = styled.div``

export const List = styled.ul`
  margin-bottom: ${({ theme }) => theme.gutterLarge};
  border: 1px solid ${({ theme }) => theme.colorAccent};
  background: ${({ theme }) => theme.colorWhite};
  padding: ${({ theme }) => theme.gutterSmall};

  ${({ open, theme }) => !open && `
    height: 0;
    overflow: hidden;
    border: none;
    padding: 0;
    margin-bottom: 0;
  `}
`

export const ListItem = styled.li`

  &:hover {
    background: ${({ theme }) => theme.colorGrayOpacity};
    color: ${({ theme }) => theme.colorWhite};
  }
`