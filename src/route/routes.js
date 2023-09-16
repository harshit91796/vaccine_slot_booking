const express = require('express')
const router = express.Router()
const {register,Login,update,deleteUser,getUser,follow,unFollow} = require('../controller/users')
const {createPost,updatePost,deletePost,likePost,getPost,getTimeLinePost,getAllPost} = require('../controller/post')
const {hashPass} = require('../middleware/auth')



//user

router.post('/register',hashPass,register)
router.post('/login',Login)
router.route('/:id')
  .get(getUser)
  .put(hashPass, update)
  .delete(deleteUser);

router.put('/:id/follow',follow)
router.put('/:id/unfollow',unFollow)

//post

router.post('/createpost',createPost)
router.put('/:id/updatepost',updatePost)
router.delete('/:id/deletepost',deletePost)
router.put('/:id/likepost',likePost)
router.get('/:id/getpost',getPost)
router.get('/profile/:username',getAllPost)
router.get('/timeline/:userId', getTimeLinePost)




module.exports = router

