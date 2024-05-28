
import { Router } from "express";
import { userRoutes } from "../../module/user/user.routes";
import { StudentRoutes } from "../../module/student/student.route";
import { semesterRoutes } from "../../module/academicSemester/semester.routes";

const router = Router()

const moduleRoutes =[
    {
        path: '/users',
        route:userRoutes
    },
    {
        path:'/students',
        route :StudentRoutes
    },
    {
        path:'/semesters',
        route:semesterRoutes
    }
]

moduleRoutes.forEach((route)=>router.use(route.path ,route.route))

export default router