const fakingoose = require('fakingoose');
const mongoose = require('mongoose')
const ListSchema = require('../../graphql-api/list/list.model.js');
const { fakeUser1 } = require('./users')

const fakeList1 = {
  objectId: mongoose.Types.ObjectId('5f54d28ebef1e6f60116380b'),
  stringId: '5f54d28ebef1e6f60116380b'
}

const fakeList2 = {
  objectId: mongoose.Types.ObjectId('5f54d28ebef1e6f60116380d'),
  stringId: '5f54d28ebef1e6f60116380d'
}

const options = {
  _id: {
    tostring: false,
    value: fakeList1.objectId
  },
  name: {
    type: 'firstname'
  },
  createdBy: {
    value: fakeUser1.objectId,
    tostring: false
  }
}
const listFactory = fakingoose(ListSchema, options);

const lists = [
  listFactory.generate({
    _id: fakeList1.objectId
  }),
  listFactory.generate({
    _id: fakeList2.objectId
  })
];

module.exports = {
  lists,
  fakeList1,
  fakeList2
}