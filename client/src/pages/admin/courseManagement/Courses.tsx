import { useState } from "react";
import { useGetAllCoursesQuery } from "../../../redux/features/admin/courseManagement.api";
import { Button, Modal, Table } from "antd";
import { useGetAllFacultiesQuery } from "../../../redux/features/admin/userManagement.api";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";

const Courses = () => {
  const {
    data: courseData,
    isFetching,
    isLoading,
  } = useGetAllCoursesQuery(undefined);

  const tableData = courseData?.data?.map(({ _id, title, prefix, code }) => ({
    key: _id,
    title,
    prefix,
    code: `${prefix} ${code}`,
  }));

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },

    {
      title: "Code",
      dataIndex: "code",
      key: "code",
    },

    {
      title: "Action",
      key: "action",
      render: (items) => {
        return <AddFacultyModal data={items} />;
      },
    },
  ];

  if (isLoading) {
    return <p>Loading..</p>;
  }

  return (
    <div>
      <Table
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
    </div>
  );
};

const AddFacultyModal = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: facultyData } = useGetAllFacultiesQuery(undefined);

  console.log({ facultyData, data });

  const handleSubmit = (data) => {
    console.log({ data });
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button onClick={showModal}>Add Faculty</Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <PHForm onSubmit={handleSubmit}>
          <PHSelect label="" />
        </PHForm>
      </Modal>
    </>
  );
};

export default Courses;
