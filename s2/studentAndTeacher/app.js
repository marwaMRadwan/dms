"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var teacher_class_1 = require("./controllers/teacher.class");
var d = new Date("1985/06/28");
var t1 = new teacher_class_1.Teacher(1, "marwa", 39, d, "01234567891", []);
t1.getData();
