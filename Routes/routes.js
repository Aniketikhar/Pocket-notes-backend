import express from 'express';
import { createNotesController, getAllNotesController, getSingleNoteController, insertNoteController } from '../Controller/notesController.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API!' });
});

router.post("/create-notes", createNotesController);

router.get('/allnotes', getAllNotesController);

router.get('/single-note/:id', getSingleNoteController);

router.patch("/insert-note/:id", insertNoteController);


export default router;