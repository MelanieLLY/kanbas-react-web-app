import express from "express";
import * as dao from "./dao.js";

const router = express.Router();

// 注册课程
router.post("/", (req, res) => {
  const { userId, courseId } = req.body;
  const enrollment = dao.enrollUserInCourse(userId, courseId);
  console.log("New enrollment created:", enrollment);
  res.status(201).json(enrollment); // 返回新注册信息
});


// 取消注册
router.delete("/:enrollmentId", (req, res) => {
  const { enrollmentId } = req.params;
  console.log(`Unenrolling ID: ${enrollmentId}`);
  dao.unenrollUserFromCourse(enrollmentId);
  res.sendStatus(204); // 成功返回 204
});

// 获取用户的注册列表
router.get("/:userId", (req, res) => {
  const { userId } = req.params;
  const enrollments = dao.findEnrollmentsByUserId(userId);
  console.log(`Enrollments for user in Routes ${userId}:`, enrollments);
  res.json(enrollments); // 返回用户注册的课程
});


export default router;
