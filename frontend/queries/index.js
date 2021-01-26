import gql from 'graphql-tag'

export const USER = gql`
  query User {
    user {
      _id
      commands {
        add
        remove
        confirm
      }
    }
  }
`

export const UPDATE_USER = gql`
  mutation UpdateUser($input: UpdateUserInput) {
    updateUser(input: $input) {
      _id
      commands {
        add
        remove
        confirm
      }
    }
  }
`

