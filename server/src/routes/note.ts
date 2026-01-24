import { Router } from "express";
import { createNote, deleteNote, getNotes, updateNote } from "../controllers";

const router = Router();

router.route("/").post(createNote).get(getNotes);
router.route("/:id").patch(updateNote).delete(deleteNote);

export const noteRouter = router;
