const facultyDefaultData = {
  designation: "Lecturer",
  name: {
    firstName: "Mridul ",
    middleName: "Das",
    lastName: "Rahman",
  },
  gender: "male",
  contactNo: "123",
  emergencyContactNo: "123",
  bloogGroup: "A+",
  presentAddress: "123 Main St, Cityville",
  permanentAddress: "456 Oak St, Townsville",
};

import { Button, Card, Col, Divider, Form, Input, Row } from "antd";
import { useAddUserAcademicFacultyMutation } from "../../../redux/features/admin/userManagement.api";
import { FcBusinessman, FcGraduationCap } from "react-icons/fc";
import PHForm from "../../../components/form/PHForm";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import PHSelect from "../../../components/form/PHSelect";
import PHInput from "../../../components/form/PHInput";
import { bloodGroupOptions, genderOptions } from "../../../constants/semester";
import PHDatePicker from "../../../components/form/PHDataPicker";
import { RiContactsFill } from "react-icons/ri";
import { useGetAcademicDepartmentsQuery } from "../../../redux/features/admin/academicManagement.api";
import { toast } from "sonner";

const CreateFaculty = () => {
  const { data: departmentData, isLoading: dIsLoading } =
    useGetAcademicDepartmentsQuery(undefined);

  const [addUserAcademicFaculty, { isLoading }] =
    useAddUserAcademicFacultyMutation();

  const departmentOptions = departmentData?.data?.map((item) => ({
    value: item._id,
    label: `${item.name}`,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating Faculty...");
    const facultyData = {
      password: "faculty01",
      faculty: data,
    };

    const formData = new FormData();
    formData.append("data", JSON.stringify(facultyData));
    formData.append("file", data.image);
    addUserAcademicFaculty(formData);

    try {
      const result = (await addUserAcademicFaculty(formData)) as TResponse;
      console.log(result);
      if (result?.error) {
        toast.error(result?.error?.data?.message, { id: toastId });
      } else {
        toast.success(result?.data?.message, { id: toastId });
        // navigate("/admin/students-data");
      }
    } catch (error) {
      toast.error("Something went wrong", { id: toastId });
    }
  };

  return (
    <>
      <Card
        title={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "12px",
            }}
          >
            <FcBusinessman
              style={{
                fontSize: "18px",
                marginRight: "8px",
              }}
            />
            <span>Add Faculty Info</span>
          </div>
        }
        style={{
          width: "100%",
          margin: "auto",
          padding: "12px 18px",
        }}
      >
        <PHForm
          onSubmit={onSubmit}
          defaultValues={facultyDefaultData}
          // resolver={zodResolver(academicSemesterSchema)}
        >
          <Divider>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <FcBusinessman />
              <span>Personal Info</span>
            </div>
          </Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                name="name.firstName"
                placeholder="Your first name"
                type="text"
                label="First Name"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                name="name.middleName"
                placeholder="Your middle name"
                type="text"
                label="Middle Name"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                name="name.lastName"
                placeholder="Your last name"
                type="text"
                label="Last Name"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                label="Gender"
                name="gender"
                placeholder="Your gender"
                options={genderOptions}
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHDatePicker
                name="dateOfBirth"
                placeholder="Your date of birth"
                label="Date Of Birth"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                label="Blood Group"
                name="bloogGroup"
                placeholder="Your blood group"
                options={bloodGroupOptions}
              />
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <Controller
                name="image"
                render={({ field: { onChange, value, ...field } }) => (
                  <Form.Item label="Picture">
                    <Input
                      type="file"
                      value={value?.fileName}
                      {...field}
                      onChange={(e) => onChange(e.target.files?.[0])}
                    />
                  </Form.Item>
                )}
              />
            </Col>
          </Row>
          <Divider>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <RiContactsFill />
              <span>Contact Info</span>
            </div>
          </Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                name="email"
                placeholder="Your valid email"
                type="text"
                label="Email"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                name="contactNo"
                placeholder="Your contact number"
                type="text"
                label="Contact Number"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                name="emergencyContactNo"
                placeholder="Your valid emergency content"
                type="text"
                label="Emergency Contact Number"
              />
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                name="presentAddress"
                placeholder="Your present address"
                type="text"
                label="Present Address"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                name="permanentAddress"
                placeholder="Your permanent address"
                type="text"
                label="Permanent Address"
              />
            </Col>
          </Row>

          {/* Academic info */}
          <Divider>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <FcGraduationCap />
              <span>Academic Info</span>
            </div>
          </Divider>

          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }}>
              <PHSelect
                label="Select Department"
                name="academicDepartment"
                placeholder="Select your department"
                disabled={dIsLoading}
                options={departmentOptions}
              />
            </Col>
          </Row>
          <Button
            htmlType="submit"
            type="primary"
            loading={isLoading}
            disabled={isLoading}
          >
            Submit
          </Button>
        </PHForm>
      </Card>
    </>
  );
};

export default CreateFaculty;
