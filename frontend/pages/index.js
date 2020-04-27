import styled from 'styled-components'
import { Toggle, Modal } from 'carls-components'
import AuthForm from '../components/AuthForm'
import Button from '../components/Button'
import { 
  Section,
  HalignSmall,
  FontLarge,
  FontSmall
} from '../layout/mixins'
import Logo from '../components/Logo'

export const LogoWrapper = styled.div`
  padding-top: ${({ theme }) => theme.gutter};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledLogo = styled(Logo)`
  width: 13rem;
  height: 13rem;
  margin-bottom: ${({ theme }) => theme.gutterSmall};
`

export const Title = styled.div`
  color: ${({ theme }) => theme.colorAccent};
  cursor: pointer;
  ${FontLarge}
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.gutter};
`

export const Tagline = styled.span`
  color: ${({ theme }) => theme.colorAccent};
  ${FontSmall}
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.gutter};
`

export default () => (
  <Section>
    <HalignSmall>
      <LogoWrapper>
        <StyledLogo />
        <Title>Voice List</Title>
        <Tagline>Create lists by dictating the list items</Tagline>
        <Toggle>
          {({ on, toggle }) => (
            <React.Fragment>
              <Button theme="light" onClick={toggle}>
                Start now
              </Button>
              <Modal toggle={toggle} on={on}>
                {() => (
                  <AuthForm
                    formType="create"
                    title="Create a new account"
                    toggleModal={toggle}
                    onSubmitSuccess={props => props.router.replace('/dashboard')}
                  />
                )}
              </Modal>
            </React.Fragment>
          )}
        </Toggle>
      </LogoWrapper>
    </HalignSmall>
  </Section>
)
