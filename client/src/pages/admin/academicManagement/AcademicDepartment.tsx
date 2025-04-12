import { useGetAcademicDepartmentsQuery } from "../../../redux/features/admin/academicManagement.api";
import { Button, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { TTableData } from "./AcademicFaculty";

const AcademicDepartment = () => {
  const {
    data: DepartmentData,
    isLoading,
    isFetching,
  } = useGetAcademicDepartmentsQuery(undefined);

  console.log({ DepartmentData });

  const tableData = DepartmentData?.data?.map(({ _id, name }) => ({
    key: _id,
    name,
  }));

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Department Name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Action",
      key: "action",
      render: () => {
        return (
          <div>
            <Button>Action</Button>
          </div>
        );
      },
    },
  ];

  if (isLoading) {
    return <p>Loading..</p>;
  }

  const onChange: TableProps<TTableData>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    console.log(filters, extra);
  };

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

export default AcademicDepartment;
