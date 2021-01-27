import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.gutter};
  background: ${({ theme }) => theme.colorWhite};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colorAccentOpacity};
  padding: ${({ theme }) => theme.gutterMedium};  
`