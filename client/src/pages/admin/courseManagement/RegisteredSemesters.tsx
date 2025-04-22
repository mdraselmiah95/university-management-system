import { Button, Dropdown, Table, Tag } from "antd";
import type { MenuProps, TableColumnsType, TableProps } from "antd";
import { TSemester } from "../../../types";
import { useGetAllRegisteredSemestersQuery } from "../../../redux/features/admin/courseManagement.api";
import moment from "moment";
import { FcSportsMode } from "react-icons/fc";
import { MdUpcoming } from "react-icons/md";
import { FaHourglassEnd } from "react-icons/fa6";
import { useState } from "react";

export type TTableData = Pick<TSemester, "startDate" | "endDate" | "status">;

const items: MenuProps["items"] = [
  {
    label: "Upcoming",
    key: "UPCOMING",
    icon: <MdUpcoming />,
  },
  {
    label: "Ongoing",
    key: "ONGOING",
    icon: <FcSportsMode />,
  },
  {
    label: "Ended",
    key: "ENDED",
    icon: <FaHourglassEnd />,
  },
];

const RegisteredSemesters = () => {
  const [semesterId, setSemesterId] = useState("");

  const {
    data: semesterData,
    isLoading,
    isFetching,
  } = useGetAllRegisteredSemestersQuery(undefined);

  const tableData = semesterData?.data?.map(
    ({ _id, academicSemester, startDate, endDate, status }) => ({
      key: _id,
      name: `${academicSemester?.name} ${academicSemester?.year}`,
      startDate: moment(new Date(startDate)).format("MMMM"),
      endDate: moment(new Date(endDate)).format("MMMM"),
      status,
    })
  );

  console.log({ semesterId });

  const handleStatusChange = (data: string) => {
    console.log({ data });
  };

  const menuProps = {
    items,
    onClick: handleStatusChange,
  };

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (item) => {
        let color;
        if (item === "UPCOMING") {
          color = "blue";
        }
        if (item === "ONGOING") {
          color = "green";
        }
        if (item === "ENDED") {
          color = "red";
        }
        return <Tag color={color}>{item}</Tag>;
      },
    },

    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate",
    },
    {
      title: "Action",
      key: "action",
      render: (item) => {
        return (
          <Dropdown menu={menuProps} trigger={["click"]}>
            <Button onClick={() => setSemesterId(item?.key)}>Update</Button>
          </Dropdown>
        );
      },
    },
  ];

  const onChange: TableProps<TTableData>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {};

  if (isLoading) {
    return <p>Loading..</p>;
  }

  return (
    <div>
      <Table
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
    </div>
  );
};

export default RegisteredSemesters;
