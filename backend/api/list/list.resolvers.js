const List = require('./list.model')

const createList = async (_, args, ctx) => {
  // 1. Check if user is logged in
  if (!ctx.request.userId) {
    throw new Error('You must be logged in to create a post')
  }

  // Save a post to the database and return the saved post from the resolver
  return List.create({ ...args.input, createdBy: ctx.request.userId })
}

const userLists = async (_, __, ctx) => {
  if (!ctx.request.userId) {
    throw new Error('You must be logged in to query a post')
  }
  
  return List.find({ createdBy: ctx.request.userId })
    .exec()
}

const updateList = async (_, args, ctx) => {
  if (!ctx.request.userId) {
    throw new Error('You must be logged in to update a post')
  }
  
  const update = args.input
  
  return List.findByIdAndUpdate(args.id, update, { new: true })
    .exec()
}

const deleteList = async (_, args, ctx) => {
  if (!ctx.request.userId) {
    throw new Error('You must be logged in to delete a post')
  }
  
  return List.findByIdAndRemove(args.id)
    .exec()
}

module.exports = {
  Query: {
    userLists
  },
  Mutation: {
    createList,
    updateList,
    deleteList
  }
}