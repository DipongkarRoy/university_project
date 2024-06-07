import { Router } from 'express';
import { userRoutes } from '../../module/user/user.routes';
import { StudentRoutes } from '../../module/student/student.route';
import { semesterRoutes } from '../../module/academicSemester/semester.routes';
import { facultyRoutes } from '../../module/academicfaculty/faculty.routes';
import { departmentRoutes } from '../../module/departmentAcdemic/department.Routes';
import { CourseRoutes } from '../../module/course/Course.routes';
import { Reg_semesterRouter } from '../../module/resgisterSemester/reg.semester.routes';
import { OfferCourseRouter } from '../../module/offerCourse/offer.course.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/semesters',
    route: semesterRoutes,
  },
  {
    path: '/facultys',
    route: facultyRoutes,
  },
  {
    path: '/departments',
    route: departmentRoutes,
  },
  {
    path: '/course',
    route: CourseRoutes,
  },
  {
    path: '/reg_semesters',
    route: Reg_semesterRouter,
  },
  {
    path: '/offer-coures',
    route: OfferCourseRouter,
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
