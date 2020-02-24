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
    data
  } = useQuery(GET_LISTS)
  
  const [visibilityFilter, setVisibilityFilter] = useState(null)
  const [activeInput, setactiveInput] = useState(null)

  useEffect(() => {
    if (data.userLists) {
      const initialListState = data.userLists.reduce((obj, item) => {
        obj[item._id] = {
          ...item,
          open: false
        }
        return obj
      }, {})

      setVisibilityFilter(initialListState)
    }
  }, [data.userLists])

  if (error) return null
  if (!visibilityFilter) return null
  if (loading) return <Spinner />

  return (
    <React.Fragment>
      <Heading1>YOUR LISTS</Heading1>
      {data.userLists.map((list, listIndex) => (
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
              {list.items.map((item, itemIndex) => (
                <ListItem
                  className={activeInput === item._id ? 'active' : ''} 
                  key={itemIndex}
                  onClick={() => setactiveInput(item._id)}
                >
                  <StyledEditableInput
                    defaultValue={item.text}
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