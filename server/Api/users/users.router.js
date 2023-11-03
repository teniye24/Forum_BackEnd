
const  router  = require("express").Router();

const auth = require("../midleware/auth");
const {createUser, getUsers, getUsersById, login} = require("./users.controller")

router.post('/', createUser);
router.get('/all', getUsers);
router.get('/', auth, getUsersById);
router.post('/login', login);



module.exports = router;


    
