import { useEffect, useState } from 'react'
import { useQuery } from 'react-apollo'
import GET_LISTS from '../../queries/lists.graphql'
import { groupBy, values } from 'lodash'
import {
  Heading1,
  Heading2,
  ListContainer,
  List,
  ListItem,
  IconGroup,
  ItemIconGroup,
  StyledEditableInput,
  MenuArrow,
  Trash,
  Edit
} from './styles'
import Spinner from '../Spinner'

const ListListing = () => {
  const {
    error,
    loading,
    data: { userLists }
  } = useQuery(GET_LISTS)

  const [visibilityFilter, setVisibilityFilter] = useState(null)

  useEffect(() => {
    if (userLists) {
      const initialListState = userLists.reduce((obj, item) => {
        obj[item._id] = {
          ...item,
          open: false
        }
        return obj
      }, {})

      setVisibilityFilter(initialListState)
    }
  }, [userLists])

  if (error) return null
  if (!visibilityFilter) return null
  if (loading) return <Spinner />

  return (
    <React.Fragment>
      <Heading1>YOUR LISTS</Heading1>
      {userLists.map((list, listIndex) => (
        <React.Fragment key={listIndex}>
          <ListContainer
            className={visibilityFilter[list._id].open && 'list--open'}
          >
            <Heading2
              onClick={(e) => {
                const state = {...visibilityFilter}
                state[list._id].open = !state[list._id].open
                setVisibilityFilter(state)
              }}
            >
              {list.name}
              <IconGroup>
                <Trash />
                <MenuArrow />
              </IconGroup>
            </Heading2>
            <List key={listIndex}>
              {list.list.map((item, itemIndex) => (
                <ListItem key={itemIndex}>
                  <StyledEditableInput
                    defaultValue={item}
                  />
                <ItemIconGroup>
                  <Edit />
                  <Trash />
                </ItemIconGroup>
                </ListItem>
              ))}
            </List>
          </ListContainer>
        </React.Fragment>
      ))}
    </React.Fragment>
  )
}

export default ListListing