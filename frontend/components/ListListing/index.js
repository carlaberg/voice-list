import { useQuery } from 'react-apollo'
import GET_LISTS from '../../queries/lists.graphql'
import Spinner from '../Spinner'

const ListListing = () => {
  const {
    error,
    loading,
    data: { userLists }
  } = useQuery(GET_LISTS)

  if (error) return null
  if (loading) return <Spinner />

  return (
    <React.Fragment>
      <h1>YOUR LISTS</h1>
      {userLists.map((list, index) => <h2 key={index}>{list.name}: {list.list.map((item) => `${item}, `)}</h2>)}
    </React.Fragment>
  )
}

export default ListListing