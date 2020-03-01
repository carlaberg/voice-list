import React from 'react'
import Button from '../Button'
import {
  Wrapper,
  Title,
  ButtonGroup
} from './styles'

const ApproveOrDeny = ({ approveCallback, denyCallback }) => {
  return (
    <Wrapper>
      <Title>Do you want to remove this item?</Title>
      <ButtonGroup>
        <Button
          theme="light"
          onClick={denyCallback}
        >
          No Thanks
        </Button>
        <Button
          theme="light"
          onClick={approveCallback}
        >
          Yes Please!
        </Button>
      </ButtonGroup>
    </Wrapper>
  )
}

export default ApproveOrDeny