import { useState } from "react";
import { useGetAllCoursesQuery } from "../../../redux/features/admin/courseManagement.api";
import { Button, Modal, Table } from "antd";

const Courses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    data: courseData,
    isFetching,
    isLoading,
  } = useGetAllCoursesQuery(undefined);
  console.log({ courseData });

  const tableData = courseData?.data?.map(({ _id, title, prefix, code }) => ({
    key: _id,
    title,
    prefix,
    code: `${prefix} ${code}`,
  }));

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
      render: () => {
        return (
          <div>
            <Button onClick={() => showModal()}>Assign Faculty</Button>
          </div>
        );
      },
    },
  ];

  if (isLoading) {
    return <p>Loading..</p>;
  }

  return (
    <div>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <Table
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
    </div>
  );
};

export default Courses;
