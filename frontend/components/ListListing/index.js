import { useEffect, useState } from 'react'
import { useQuery, useMutation } from 'react-apollo'
import GET_LISTS from '../../queries/lists.graphql'
import DELETE_LIST_AND_ITEMS from '../../queries/deleteListAndItems.graphql'
import { groupBy, values } from 'lodash'
import { Toggle, Modal } from 'carls-components'
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
import ApproveOrDeny from '../ApproveOrDeny'

const ListListing = () => {
  const {
    error,
    loading,
    data
  } = useQuery(GET_LISTS)

  const [deleteListAndItems, { deleteListAndItemsData }] = useMutation(
    DELETE_LIST_AND_ITEMS, {
      update(cache, { data: { deleteListAndItems: deletedList } }) {
        const { userLists } = cache.readQuery({ query: GET_LISTS })
        const updatedList = userLists.filter((item) => item._id !== deletedList._id)  
        cache.writeQuery({
          query: GET_LISTS,
          data: { userLists: updatedList }
        })
      }
    }
  )

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
                <Toggle>
                  {({ on, toggle }) => (
                    <React.Fragment>
                      <Trash onClick={toggle} />
                      <Modal toggle={toggle} on={on}>
                        {() => (
                          <ApproveOrDeny
                            approveCallback={() => {
                              deleteListAndItems({ variables: { id: list._id } })
                            }}
                            denyCallback={toggle}
                          />
                        )}
                      </Modal>
                    </React.Fragment>
                  )}
                </Toggle>
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
                    <Toggle>
                      {({ on, toggle }) => (
                        <React.Fragment>
                          <Trash onClick={toggle} />
                          <Modal toggle={toggle} on={on}>
                            {() => (
                              <ApproveOrDeny
                                approveCallback={() => console.log('yes delete')}
                                denyCallback={toggle}
                              />
                            )}
                          </Modal>
                        </React.Fragment>
                      )}
                    </Toggle>
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