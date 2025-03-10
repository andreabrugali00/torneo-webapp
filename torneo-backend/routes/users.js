import express from 'express'
import { getAllUsers, getUsersById, inserUser, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();


router.get('/', getAllUsers)
router.get('/:id', getUsersById)
router.post('/', inserUser)
router.delete('/:id', deleteUser)
router.patch('/:id', updateUser)
export default router