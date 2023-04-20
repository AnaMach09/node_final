const UserService = require('./user.service');
const safeControllerWrapper = require('../tools/safeController');



const deleteUser = safeControllerWrapper (async (req, res) => {
  const { id } = req.params;
 
  const message = await UserService.deleteUser(id);
  console.log(message,'message');
  return res.json(message)

});
const createUsers = safeControllerWrapper(async (req, res) => {
  const payload = req.body;
  const message =  await UserService.createUsers(payload);
  console.log(message,'message');
  return res.json(message);
});


  module.exports = {
    deleteUser,
    createUsers,
  }