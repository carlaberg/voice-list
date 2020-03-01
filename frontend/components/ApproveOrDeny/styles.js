import styled from 'styled-components'

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colorBackground};
  padding: ${({ theme }) => theme.gutter};
  border-radius: ${({ theme }) => theme.borderRadius};
`

export const ButtonGroup = styled.div`
  display: flex;

  button:first-child {
    margin-left: 0;
  }
`

export const Title = styled.div`
  margin-bottom: ${({ theme }) => theme.gutter};
`