import express from "express";
import {
  createUser,
  findAllUsers,
  findUserById,
  findUserByUsername,
  findUserByCredentials,
  updateUser,
  deleteUser,
} from "./dao.js"; 

const router = express.Router();

router.post("/", (req, res) => {
  const newUser = createUser(req.body);
  res.status(201).json(newUser);
});

router.get("/", (req, res) => {
  const users = findAllUsers();
  res.json(users);
});

router.get("/:id", (req, res) => {
  const user = findUserById(parseInt(req.params.id));
  if (!user) {
    res.status(404).json({ message: "User not found" });
  } else {
    res.json(user);
  }
});

router.get("/:username", (req, res) => {
    const user = findUserByUsername(parseInt(req.params.username));
    if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.json(user);
    }
  });

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = findUserByCredentials(username, password);
  if (!user) {
    res.status(401).json({ message: "Invalid credentials" });
  } else {
    res.json(user);
  }
});

router.put("/:id", (req, res) => {
  updateUser(parseInt(req.params.id), req.body);
  res.sendStatus(200);
});

router.delete("/:id", (req, res) => {
  deleteUser(parseInt(req.params.id));
  res.sendStatus(200);
});

export default router;
