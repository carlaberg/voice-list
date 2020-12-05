const fakingoose = require('fakingoose');
const mongoose = require('mongoose')
const ListItemSchema = require('../../graphql-api/listitem/listitem.model.js');
const { fakeList1 } = require('./lists')

const fakeListItem1 = {
  objectId: mongoose.Types.ObjectId('5f54d28ebef1e6f60116380e'),
  stringId: '5f54d28ebef1e6f60116380e'
}

const fakeListItem2 = {
  objectId: mongoose.Types.ObjectId('5f54d28ebef1e6f60116380f'),
  stringId: '5f54d28ebef1e6f60116380f'
}

const options = {
  _id: {
    tostring: false,
    value: fakeListItem1.objectId
  },
  list: {
    value: fakeList1.objectId
  }
}
const listItemFactory = fakingoose(ListItemSchema, options);

const listItems = [
  listItemFactory.generate({
    _id: fakeListItem1.objectId
  }),
  listItemFactory.generate({
    _id: fakeListItem2.objectId
  })
];

module.exports = {
  listItems,
  fakeListItem1,
  fakeListItem2
}