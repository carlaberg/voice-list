import styled from 'styled-components'
import { FontMedium } from '../../layout/mixins'
import { StyledButton } from '../Button/styles'
import ButtonTheme from '../Button/themes'
import Input from '../Input'
import { Message } from '../Input/styles'

export const Wrapper = styled.div`
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.gutter};
  background: ${({ theme }) => theme.colorWhite};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colorAccentOpacity};
  padding: ${({ theme }) => theme.gutterMedium};

`

export const SubmitButton = styled(StyledButton)`
  ${ButtonTheme.light}
  outline: none;
`

export const InputGroup = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.gutter};

  &:last-child {
    margin-top: ${({ theme }) => theme.gutter};
  }
`

export const ListInput = styled(Input)`
  // ${Message} {
  //   display: none;
  // }
`

export const ListItem = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colorWhite};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colorGrayOpacity};
  padding: ${({ theme }) => theme.gutterMedium};
  ${FontMedium}
  color: ${({ theme }) => theme.colorBlack};
  margin-bottom: ${({ theme }) => theme.gutter};

  &:last-child {
    margin-bottom: 0;
  }
`