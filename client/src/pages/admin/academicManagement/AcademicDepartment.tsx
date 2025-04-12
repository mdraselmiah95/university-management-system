import { useGetAcademicDepartmentsQuery } from "../../../redux/features/admin/academicManagement.api";

const AcademicDepartment = () => {
  const {
    data: DepartmentData,
    isLoading,
    isFetching,
  } = useGetAcademicDepartmentsQuery(undefined);

  console.log({ DepartmentData });

  return <div>AcademicDepartment</div>;
};

export default AcademicDepartment;
