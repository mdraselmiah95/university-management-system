import { Button, Card } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";

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
          <PHSelect
            label="Academic Semester"
            name="academicSemester"
            placeholder="Select academic semester"
            disabled={academicSemesterLoading}
            options={academicSemestersOptions}
          />

          <PHSelect
            label="Academic Status"
            name="status"
            placeholder="Select status"
            options={semesterStatusOptions}
          />

          <PHDatePicker
            name="startDate"
            label="Start Date"
            placeholder="Select start date"
          />

          <PHDatePicker
            name="endDate"
            label="End Date"
            placeholder="Select end date"
          />

          <PHInput
            type="text"
            name="minCredit"
            label="Min Credit"
            placeholder="Min credit"
          />

          <PHInput
            type="text"
            name="maxCredit"
            label="Max Credit"
            placeholder="Max credit"
          />

          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </PHForm>
      </Card>
    </div>
  );
};

export default OfferCourse;
