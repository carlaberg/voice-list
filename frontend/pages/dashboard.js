import styled from 'styled-components'
import SigninRequired from '../components/SigninRequired'
import Tabs from '../components/Tabs'
import ListMaker from '../components/ListMaker'
import ListListing from '../components/ListListing'
import { Section, HalignSmall } from '../layout/mixins'

const Tab = styled.div`
  width: 100%;
`

const Dashboard = () => (
  <SigninRequired>
    <Section>
      <HalignSmall>
        <Tabs>
          <Tab id="1" title="Lists"><ListListing /></Tab>
          <Tab id="2" title="Create List"><ListMaker /></Tab>
          <Tab id="3" title="Profile">Tab3 content</Tab>
        </Tabs>
      </HalignSmall>
    </Section>
  </SigninRequired>
)
export default Dashboard
