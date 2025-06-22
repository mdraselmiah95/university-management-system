import { Button, Card } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
import PHInput from "../../../components/form/PHInput";
import {
  useGetAcademicDepartmentsQuery,
  useGetAcademicFacultiesQuery,
} from "../../../redux/features/admin/academicManagement.api";
import PHSelectWithWatch from "../../../components/form/PHSelectWithWatch";
import { useState } from "react";
import PHTimePicker from "../../../components/form/PHTimePicker";
import { weekDaysOptions } from "../../../constants/globals";

const offerCourseData = {
  semesterRegistration: "65b6185f13c0a33cdf61589a",
  academicFaculty: "65b00f3510b74fcbd7a25d86",
  academicDepartment: "65b00fb010b74fcbd7a25d8e",
  course: "65b6001fd6ffdd9bfc058329",
  faculty: "65b0844ccb87974826d0b7af",
  section: 1,
  maxCapacity: 30,
  days: ["Mon", "Wed"],
  startTime: "12:30",
  endTime: "14:00",
};

const OfferCourse = () => {
  const [id, setId] = useState("");

  console.log("Inside parent component", id);
  const { data: academicDepartmentsData } =
    useGetAcademicDepartmentsQuery(undefined);
  const { data: academicFacultyData } = useGetAcademicFacultiesQuery(undefined);

  const academicFacultyOptions = academicFacultyData?.data?.map((item) => ({
    value: item._id,
    label: item.name,
  }));

  const academicDepartmentOptions = academicDepartmentsData?.data?.map(
    (item) => ({
      value: item._id,
      label: item.name,
    })
  );

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log("Form submitted with data:", data);
  };

  return (
    <div>
      <Card
        title="Semester Registration"
        style={{
          width: "auto",
          maxWidth: "400px",
          margin: "auto",
          marginTop: "5%",
          padding: "12px 18px",
        }}
      >
        <PHForm
          onSubmit={onSubmit}
          // resolver={zodResolver(academicSemesterSchema)}
        >
          <PHSelectWithWatch
            onValueChange={setId}
            label="Academic Faculty"
            name="academicFaculty"
            options={academicFacultyOptions}
          />

          <PHSelect
            label="Academic Department"
            name="academicDepartment"
            options={academicDepartmentOptions}
          />

          <PHInput disabled={!id} type="text" name="test" label="Test" />
          <PHSelect options={[]} name="faculty" label="Faculty" />
          <PHInput type="text" name="section" label="Section" />
          <PHInput type="text" name="maxCapacity" label="Max Capacity" />

          <PHSelect
            mode="multiple"
            options={weekDaysOptions}
            name="days"
            label="Days"
          />
          <PHTimePicker name="startTime" label="Start Time" />
          <PHTimePicker name="endTime" label="End Time" />

          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </PHForm>
      </Card>
    </div>
  );
};

export default OfferCourse;
