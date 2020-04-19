import { useEffect, useState } from 'react'
import { useQuery, useMutation, gql } from 'react-apollo'
import { apolloClient as client } from '../../lib/init-apollo'
import debounce from 'just-debounce-it'
import LISTS from '../../queries/lists.graphql'
import DELETE_LIST_AND_ITEMS from '../../queries/deleteListAndItems.graphql'
import DELETE_LIST_ITEM from '../../queries/deleteListItem.graphql'
import UPDATE_LIST_VISIBILITY_FILTER from '../../queries/updateListVisibilityFilter.graphql'
import UPDATE_LIST_ITEM from '../../queries/updateListItem.graphql'
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

  let itemInput = React.createRef()

  const {
    error: listsError,
    loading: listsLoading,
    data: listsData
  } = useQuery(LISTS)

  const [deleteListAndItems, { deleteListAndItemsData }] = useMutation(
    DELETE_LIST_AND_ITEMS, {
      update(cache, { data: { deleteListAndItems: deletedList } }) {
        const { userLists } = cache.readQuery({ query: LISTS })
        const updatedList = userLists.filter((item) => item._id !== deletedList._id)  
        cache.writeQuery({
          query: LISTS,
          data: { userLists: updatedList }
        })
      }
    }
  )

  const [deleteListItem, { deleteListItemData }] = useMutation(DELETE_LIST_ITEM, {
    refetchQueries: [{ query: LISTS }]
  })

  const [updateListItem, { updateListItemData }] = useMutation(UPDATE_LIST_ITEM)

  const [updateListVisibilityFilter, { updateListVisibilityFilterData }] = useMutation(UPDATE_LIST_VISIBILITY_FILTER)
  const [activeInput, setactiveInput] = useState(null)

  const handleListItemChange = debounce((id, value) => {
    updateListItem({ variables: { id, input: { text: value } } })
  }, 500)

  if (listsError) return null
  if (listsLoading) return <Spinner />


  return (
    <React.Fragment>
      <Heading1>YOUR LISTS</Heading1>
      {listsData.userLists.map((list, listIndex) => (
        <React.Fragment key={list._id}>
          <ListContainer
            className={listsData.userLists.find((item) => item._id == list._id)?.open && 'list--open'}
          >
            <Heading2
              onClick={(e) => {
                updateListVisibilityFilter({ variables: { id: list._id } })
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
                              toggle()
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
            <List key={list._id}>
              {list.items.map((item, itemIndex) => (
                <ListItem
                  ref={itemInput}
                  className={activeInput === item._id ? 'active' : ''} 
                  key={item._id}
                  onClick={() => setactiveInput(item._id)}
                >
                  <StyledEditableInput
                    defaultValue={item.text}
                    isFocused={activeInput === item._id}
                    onBlur={() => setactiveInput(null)}
                    onChange={(e) => {
                      const value = e.target.value
                      handleListItemChange(item._id, value)
                    }}                    
                  />
                  <ItemIconGroup>
                    <Edit onClick={() => setactiveInput(item._id)} />
                    <Trash onClick={() => {
                      deleteListItem({ variables: { id: item._id } })
                    }} />
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