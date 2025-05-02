import { useGetAllCoursesQuery } from "../../../redux/features/admin/courseManagement.api";

const Courses = () => {
  const { data: courseData } = useGetAllCoursesQuery(undefined);
  console.log({ courseData });

  return <div>courses</div>;
};

export default Courses;
