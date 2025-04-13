import { Button, Card, Col, Divider, Row } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import PHForm from "../../../components/form/PHForm";
import { bloodGroupOptions, genderOptions } from "../../../constants/semester";
import PHInput from "../../../components/form/PHInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { FcPortraitMode, FcBusinessman } from "react-icons/fc";
import { FaPersonChalkboard } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";
import { MdLocalLibrary } from "react-icons/md";
import PHDatePicker from "../../../components/form/PHDataPicker";

const studentData = {
  password: "student123",
  student: {
    name: {
      firstName: "I am ",
      middleName: "Student",
      lastName: "Number 1",
    },
    gender: "male",
    dateOfBirth: "1990-01-01",
    email: "student2@gmail.com",
    contactNo: "1235678",
    emergencyContactNo: "987-654-3210",
    bloogGroup: "A+",
    presentAddress: "123 Main St, Cityville",
    permanentAddress: "456 Oak St, Townsville",
    guardian: {
      fatherName: "James Doe",
      fatherOccupation: "Engineer",
      fatherContactNo: "111-222-3333",
      motherName: "Mary Doe",
      motherOccupation: "Teacher",
      motherContactNo: "444-555-6666",
    },
    localGuardian: {
      name: "Alice Johnson",
      occupation: "Doctor",
      contactNo: "777-888-9999",
      address: "789 Pine St, Villageton",
    },
    admissionSemester: "65b0104110b74fcbd7a25d92",
    academicDepartment: "65b00fb010b74fcbd7a25d8e",
  },
};

const CreateStudent = () => {
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log({ data });
    const formData = new FormData();
    formData.append("password", "studentDatPP");
    console.log(Object.fromEntries(formData));
  };

  // Object.fromEntries(formData) this is used to convert FormData to a regular object

  return (
    <>
      <Card
        title={
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <FcPortraitMode
              style={{
                fontSize: "18px",
                marginRight: "8px",
              }}
            />
            <span>Add Student Info</span>
          </div>
        }
        style={{
          width: "100%",
          margin: "auto",
          marginTop: "5%",
          padding: "12px 18px",
        }}
      >
        <PHForm
          onSubmit={onSubmit}
          // resolver={zodResolver(academicSemesterSchema)}
        >
          {/* personal info */}
          <Divider>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <FaPersonChalkboard />
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
          </Row>
          {/* contact info */}
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
          {/* Guardian info */}
          <Divider>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <FcBusinessman />
              <span>Guardian Info</span>
            </div>
          </Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                name="fatherName"
                placeholder="Your father name"
                type="text"
                label="Father Name"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                name="fatherOccupation"
                placeholder="Your father occupation"
                type="text"
                label="Father Occupation"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                name="fatherContactNo"
                placeholder="Your father content number"
                type="text"
                label="Father Contact Number"
              />
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                name="motherName"
                placeholder="Your mother name"
                type="text"
                label="Mother Name"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                name="motherOccupation"
                placeholder="Your mother occupation"
                type="text"
                label="Mother Occupation"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                name="motherContactNo"
                placeholder="Your mother contact number"
                type="text"
                label="Mother Contact Number"
              />
            </Col>
          </Row>
          {/* local Guardian */}

          <Divider>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <MdLocalLibrary />
              <span>Local Guardian</span>
            </div>
          </Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                name="localGuardian.name"
                placeholder="Name"
                type="text"
                label="Name"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                name="localGuardian.occupation"
                placeholder="occupation"
                type="text"
                label="Occupation"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                name="localGuardian.contactNo"
                placeholder="content number"
                type="text"
                label="Contact Number"
              />
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                name="localGuardian.address"
                placeholder="address"
                type="text"
                label="Address"
              />
            </Col>
          </Row>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </PHForm>
      </Card>
    </>
  );
};

export default CreateStudent;
