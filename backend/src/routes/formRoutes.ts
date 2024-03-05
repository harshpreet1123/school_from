import express from 'express';
import { addForm } from '../controller/formController';

const router = express.Router();

router.post('/add-form',addForm);
export default router;