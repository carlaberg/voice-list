// const jwt = require('jsonwebtoken')
// const path = require('path')
// require('dotenv').config({ path: path.join(__dirname, '.env') })

// const authentication = async (resolve, root, args, context, info) => {
//   const authHeader = context.event.headers['Authorization']

//   if (authHeader) { 
//     const token = authHeader.split(' ')[1]
//     try {
//       const { userId } = jwt.verify(token, process.env.JWT_SECRET)
//       context.event.body.userId = userId

//     } catch (err) {
//       console.error(err)
//     }
//   }
  
// }

// module.exports = [
//   authentication
// ]

