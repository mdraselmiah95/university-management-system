import { Button, Table } from "antd";
import { useGetAcademicFacultiesQuery } from "../../../redux/features/admin/academicManagement.api";
import type { TableColumnsType, TableProps } from "antd";

import { TAcademicFaculty } from "../../../types";

export type TTableData = Pick<TAcademicFaculty, "name">;

const AcademicFaculty = () => {
  const {
    data: FacultyData,
    isLoading,
    isFetching,
  } = useGetAcademicFacultiesQuery(undefined);

  console.log({ FacultyData });

  const tableData = FacultyData?.data?.map(({ _id, name }) => ({
    key: _id,
    name,
  }));

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Faculty Name",
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

export default AcademicFaculty;
