const List = require('./list.model')

const list = async (_, args, ctx) => {
  ctx.callbackWaitsForEmptyEventLoop = false
  // if (!ctx.request.userId) {
  //   throw new Error('You must be logged in to see this list')
  // }
  
  return List.findById(args.id)
    .exec()
}

const createList = async (_, args, ctx) => {
  ctx.callbackWaitsForEmptyEventLoop = false
  // 1. Check if user is logged in
  if (!ctx.request.userId) {
    throw new Error('You must be logged in to create a list')
  }

  // Save a post to the database and return the saved post from the resolver
  return List.create({ ...args.input, createdBy: ctx.request.userId })
}

const userLists = async (_, __, ctx) => {
  ctx.callbackWaitsForEmptyEventLoop = false
  if (!ctx.request.userId) {
    throw new Error('You must be logged in to query a list')
  }
  
  return List.find({ createdBy: ctx.request.userId })
    .exec()
}

const updateList = async (_, args, ctx) => {
  ctx.callbackWaitsForEmptyEventLoop = false
  if (!ctx.request.userId) {
    throw new Error('You must be logged in to update a list')
  }
  
  const update = args.input
  
  return List.findByIdAndUpdate(args.id, update, { new: true })
    .exec()
}

const deleteList = async (_, args, ctx) => {
  ctx.callbackWaitsForEmptyEventLoop = false
  if (!ctx.request.userId) {
    throw new Error('You must be logged in to delete a list')
  }
  
  return List.findByIdAndRemove(args.id)
    .exec()
}

module.exports = {
  Query: {
    list,
    userLists
  },
  Mutation: {
    createList,
    updateList,
    deleteList
  }
}