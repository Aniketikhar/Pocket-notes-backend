import notes from "../Model/notes.js";
import note from "../Model/notes.js";

export async function createNotesController(req, res) {
  const { name, color } = req.body;

  // Validate the request
  if (!name || !color) {
    return res.status(400).json({ message: "Name and color are required." });
  }

  // Create a new note instance
  const note = new notes({
    name,
    color,
    notes: [], // Initialize with an empty array for notes
  });

  try {
    // Save the note to the database
    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (error) {
    res.status(500).json({ message: "Error creating note", error });
  }
}

export async function getAllNotesController(req, res) {
  try {
    // Retrieve all notes from the database
    const notes = await note.find({});
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: "Error getting list of notes", error });
  }
}

export async function getSingleNoteController(req, res) {
  const notecontent = await note.findById(req.params.id);
  if (!notecontent) {
    return res.status(404).json({ message: "Note not found" });
  }
  res.status(200).json(notecontent);
}

export async function insertNoteController(req, res) {
    const { id } = req.params;
    const { content } = req.body;
  
    if (!content) {
      return res.status(400).json({ message: 'Content is required' });
    }
  
    try {
      // Find the note by ID and push new content to the notes array
      const updatedNote = await note.findByIdAndUpdate(
        id,
        { $push: { notes: { content } } },
        { new: true, useFindAndModify: false }
      );
  
      if (!updatedNote) {
        return res.status(404).json({ message: 'Note not found' });
      }
  
      res.json(updatedNote);
    } catch (error) {
      res.status(500).json({ message: 'Error adding new content', error });
    }
}
