import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import MyCourses from "../pages/faculty/MyCourses";
import MyStudents from "../pages/faculty/MyStudents";

export const facultyPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <FacultyDashboard />,
  },
  {
    name: "My Course",
    path: "courses",
    element: <MyCourses />,
  },
  {
    path: "courses/:semesterRegistration/:courseId",
    element: <MyStudents />,
  },
];
