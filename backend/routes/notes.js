const express = require("express");
const router = express.Router();
const fetchUser = require("../Middleware/fetchUser");
const Note = require("../models/Note");
const { body, validationResult } = require("express-validator");

//route 1
router.get("/fetchallnotes", fetchUser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internel server error");
  }
});
//route 2
router.post(
  "/addnote",
  fetchUser,
  [
    body("title", "Enter a vlid title").isLength({ min: 3 }),
    body("description", "description must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const saveNote = await note.save();
      res.json(saveNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internel server error");
    }
  }
);

//route 2
router.put("/updatenote/:id", fetchUser, async (req, res) => {
  const { title, description, tag } = req.body;

  try {
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not found");
    }

    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({ note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internel server error");
  }
});
//route 3

router.post("/deletenote/:id", fetchUser, async (req, res) => {
  try {
    // Find the note to be delete and delete it
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not found");
    }

    //Allow deletion
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    note = await Note.findByIdAndDelete(req.params.id);
    res.json({ Sucess: "not have been deleted", note: note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internel server error");
  }
});
module.exports = router;
