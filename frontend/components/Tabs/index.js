import styled from 'styled-components'
import { FontMedium } from '../../layout/mixins'
import { StyledButton } from '../Button/styles'
import buttonTheme from '../Button/themes'

const TabsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TabNavigation = styled.nav`
  display: inline-block;
  border: 2px solid ${({ theme }) => theme.colorAccent};
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-bottom: ${({ theme }) => theme.gutter};
`

const TabNavList = styled.ul`
  display: flex;
`

const TabNavItem = styled(StyledButton)`
  ${({ active }) => active ? buttonTheme.dark : buttonTheme.light}
  position: relative;
  line-height: 2em;
  margin: 0;
  border: none;
  border-radius: 0;
  ${({ active, theme }) => active && 
  `
    &:before {
      content: "";
      position: absolute;
      left: -1px;
      top: 50%;
      transform: translateY(-50%);
      width: 1px;
      height: 100%;
      background: ${theme.colorAccent};
      display: block;
    }
  `};

  &:after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 1em;
    background: ${({ theme }) => theme.colorAccent};
    display: block;
  }

  &:last-child:after {
    display: none;
  }
`

class Tabs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeTab: props.children[0]
    }
  }

  handleTabClick(Tab) {
    this.setState({ activeTab: Tab })
  }

  render() {
    const { children } = this.props
    const { activeTab } = this.state
    return (
      <TabsContainer>
        <TabNavigation>
          <TabNavList>
            {children.map((tab) => {
              const { id } = activeTab.props
              const isActive = tab.props.id === id
              return (
                <TabNavItem
                  as="li"
                  key={tab.props.id}
                  onClick={() => this.handleTabClick(tab)}
                  active={isActive}
                >
                  {tab.props.title}
                </TabNavItem>
              )
            })}
          </TabNavList>
        </TabNavigation>
        {activeTab}
      </TabsContainer>
    )
  }
}

export default Tabs