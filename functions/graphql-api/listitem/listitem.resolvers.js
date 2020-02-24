const ListItem = require('./listitem.model')

const createListItem = async (_, args, ctx) => {
  if (!ctx.request.userId) {
    throw new Error('You must be logged in to see this listitem')
  }

  return ListItem.create({ ...args.input })
}

const updateListItem = async (_, args, ctx) => {
  if (!ctx.request.userId) {
    throw new Error('You must be logged in to see this listitem')
  }
  
  return await ListItem.findByIdAndUpdate(args.id, args.input, { new: true })
    .exec()
}

const deleteListItem = async (_, args, ctx) => {
  if (!ctx.request.userId) {
    throw new Error('You must be logged in to delete a listitem')
  }
  
  return await ListItem.findByIdAndRemove(args.id)
    .exec()
}

module.exports = {
  Mutation: {
    createListItem,
    updateListItem,
    deleteListItem
  }
}