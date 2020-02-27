import { useState, useEffect } from 'react'
import { useQuery, useMutation } from 'react-apollo'
import gql from 'graphql-tag'
import debounce from 'just-debounce-it'
import {
  Wrapper, ListInput, Form, SubmitButton, ListItem, InputGroup
} from './styles'
import CREATE_LIST_WITH_ITEMS from '../../queries/createListWithItems.graphql'
import CURRENT_LIST from '../../queries/currentList.graphql'
import GET_LISTS from '../../queries/lists.graphql'

const UPDATE_CURRENT_LIST = gql`
  mutation UpdateCurrentList($name: String!, $items: [String!]!) {
      updateCurrentList(name: $name, items: $items) @client
  }
`

const ListMaker = (props) => {
  const [createListWithItems, { error: createListError, data }] = useMutation(
    CREATE_LIST_WITH_ITEMS,
    {
      update(cache, { data: { createListWithItems } }) {
        const { userLists } = cache.readQuery({ query: GET_LISTS })
        cache.writeQuery({
          query: GET_LISTS,
          data: { userLists: userLists.concat([createListWithItems])}
        })
      }
    }
  )
  const [updateCurrentList, { error: updateCurrentListError, data: updateCurrentListData }] = useMutation(UPDATE_CURRENT_LIST)
  const { error: currentListError, data: currentListData } = useQuery(CURRENT_LIST)

  const [listname, setListname] = useState(currentListData.currentList ? currentListData.currentList.name : '')
  const [nameMessage, setNameMessage] = useState('')
  const [listitem, setListitem] = useState('')
  const [itemMessage, setItemMessage] = useState('')
  const [items, setListitems] = useState(currentListData.currentList ? currentListData.currentList.items : [])
  const [itemsMessage, setItemsMessage] = useState('')

  const { data: queryData } = useQuery(CURRENT_LIST)

  const handleInputChange = (target) => {
    const { name, type, value } = target
    const val = type === 'number' ? parseFloat(value) : value
    const dynamicFunction = eval(`set${name}`)

    dynamicFunction(val)
  }

  const handleBlur = () => {
    updateCurrentList({
      variables: {
        name: listname,
        items
      }
    })
  }

  const resetForm = () => {
    setListitems([])
    setListname('')
    updateCurrentList({
      variables: {
        name: '',
        items: []
      }
    })
  }

  const updateMessages = () => {
    let theNameMessage = ''
    let theItemMessage = ''
    let theItemsMessage = ''

    if (!listname) {
      theNameMessage = 'Please fill in a list name'
    }

    if (!listitem) {
      theItemMessage = 'Please fill in a list item'
    }

    if (items.length < 1) {
      theItemsMessage = 'Add an item to the list'
    }

    setNameMessage(theNameMessage)
    setItemMessage(theItemMessage)
    setItemsMessage(theItemsMessage)
  }

  const addListItem = () => {
    updateMessages()
    if (!listitem) return
    setListitems([listitem, ...items])
    setListitem('')
    updateCurrentList({
      variables: {
        name: listname,
        items: [listitem, ...items]
      }
    })
  }

  return (
    <Wrapper>
      <Form
        onSubmit={(e) => {
          e.preventDefault()
          // updateMessages()
          if (items.length < 1 || !listname) return
          createListWithItems({
            variables: {
              input: {
                name: listname,
                items
              }
            }
          })

          if (!createListError) {
            resetForm();
          }
        }}
      >
        <InputGroup>
          <ListInput
            name="Listname"
            placeholder="List name"
            onChange={({ target }) => handleInputChange(target)}
            onBlur={handleBlur}
            // onChange={({ target }) => {
            //   handleInputChange(target)
            //   // debounce(() => updateCurrentList({
            //   //   variables: {
            //   //     name: listname
            //   //     // list: items
            //   //   }
            //   // }), 500)
            //   debouncedHandler()
            // }}
            value={listname}
            valid={listname !== ''}
            showMessage={nameMessage !== ''}
            message={nameMessage}
          />
        </InputGroup>
        <InputGroup>
          <ListInput
            name="Listitem"
            placeholder="List item"
            // onChange={handleInputChange}
            onChange={({ target }) => handleInputChange(target)}
            value={listitem}
            valid={listitem !== ''}
            message={itemMessage}
            showMessage={itemMessage !== ''}
          />
          <SubmitButton
            type="button"
            onClick={() => addListItem()}
            theme="light"
          >
            Add
          </SubmitButton>
        </InputGroup>
        {items.map(item => <ListItem key={item}>{item}</ListItem>)}
        {itemsMessage}
        <InputGroup>
          <SubmitButton type="submit" style={{ margin: '0 auto' }} theme="light">
            Save list
          </SubmitButton>
        </InputGroup>
      </Form>
    </Wrapper>
  )
}

export default ListMaker