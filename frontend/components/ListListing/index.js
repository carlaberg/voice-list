import { useEffect, useState } from 'react'
import { useQuery } from 'react-apollo'
import GET_LISTS from '../../queries/lists.graphql'
import { groupBy, values } from 'lodash'
import {
  Heading1,
  Heading2,
  List,
  ListItem
} from './styles'
import Spinner from '../Spinner'
import EditableInput from '../EditableInput'

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
          <Heading2
            onClick={(e) => {
              const state = {...visibilityFilter}
              state[list._id].open = !state[list._id].open
              setVisibilityFilter(state)
            }}
          >
            {list.name}
          </Heading2>
          <List open={visibilityFilter[list._id].open} key={listIndex}>
            {list.list.map((item, itemIndex) => (
              <ListItem key={itemIndex}>
                <EditableInput
                  defaultValue={item}
                />
              </ListItem>
            ))}
          </List>
        </React.Fragment>
      ))}
    </React.Fragment>
  )
}

export default ListListing