import styled from 'styled-components'
import { FontMedium, FontLarge } from '../../layout/mixins'

export const FormWrapper = styled.form`
  width: 400px;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colorBackground};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 40px;
`

export const FormTitle = styled.div`
  ${FontLarge}
  color: ${({ theme }) => theme.colorGray};
  text-transform: uppercase;
  margin-bottom: 40px;
`

export const InputGroup = styled.div`
  background: ${({ theme }) => theme.colorWhite};
  width: 100%;
  padding: 20px 40px;
  margin-bottom: 40px;
  border-radius: ${({ theme }) => theme.borderRadius};
`

export const BackendMessage = styled.div`
  width: 100%;
  text-align: center;
  ${FontMedium}
  color: ${({ theme }) => theme.colorGray};
  margin-bottom: 40px;
`
