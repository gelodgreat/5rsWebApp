import React, { useState, useEffect } from 'react';
import SimpleTable from "./SimpleTable";
import PaginationTable from "./PaginationTable";
import { Breadcrumb, SimpleCard } from "matx";
import MaterialTable from "material-table";
import Connection from "../../../../common/Connection";
const connection = new Connection();

const AppTable = () => {

  const path = window.location.pathname;
  const [data, setData] = useState([])
  const [columns, setColumns] = useState([])
  const [title, setTitle] = useState("");

  useEffect(() => {
    async function load() {
      if (path === "/material/table1") {
        setTitle("Reports")
        await getReports();
      } else if (path === "/material/table2") {
        setTitle("Repairs")
        await getRepairs();
      } else if (path === "/material/table3") {
        setTitle("Recommend")
        await getRecommend();
      } else if (path === "/material/table4") {
        setTitle("Recognize")
        await getRecognize();
      } else if (path === "/material/table5") {
        setTitle("React")
        await getReact();
      }
    }
    load()
  }, []);

  const getReports = async () => {
    try {
      const reports = await connection.get('api/v1/report')
      setData(reports.data.data)
      console.log(reports.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getRepairs = async () => {
    try {
      const repair = await connection.get('api/v1/repair')
      setData(repair.data.data)
      console.log(repair.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getRecommend = async () => {
    try {
      const recommend = await connection.get('api/v1/recommend')
      setData(recommend.data.data)
      console.log(recommend.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getRecognize = async () => {
    try {
      const recognize = await connection.get('api/v1/recognize')
      setData(recognize.data.data)
      console.log(recognize.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getReact = async () => {
    try {
      const react = await connection.get('api/v1/react')
      setData(react.data.data)
      console.log(react.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Material", path: "/material" },
            { name: "Table" }
          ]}
        />
      </div>

      <SimpleCard title={title}>
        <MaterialTable
          title={title}
          columns={[
            { title: "Subject", field: "subject", editable: 'never', },
            { title: "Description", field: "description", },
            { title: "Photo", field: "photo", editable: 'never', },
            { title: "User", field: "user", editable: 'never', },
            { title: "Created At", field: "createdAt", editable: 'never', },
          ]}
          data={data}
          options={{
            grouping: true,
            searchFieldAlignment: "right",
            sorting: true
          }}
        />
      </SimpleCard>
    </div>
  );
};

export default AppTable;
