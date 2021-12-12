import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import { DeleteOutline } from "@mui/icons-material";
import "./users.css";
import Button from "./../../common/button";
import { Link } from "react-router-dom";

const rows = [
  {
    id: 1,
    userName: "Snow",
    email: "Jon@gmail.com",
    userImage:
      "https://www.coca-colascholarsfoundation.org/wp-content/uploads/2019/06/cokescholarsgrad_grace-obrien_2019.06.25-576x768.jpg",
    transaction: 3500,
    status: "Approved",
  },
  {
    id: 2,
    userName: "Snow",
    email: "Jon@gmail.com",
    userImage:
      "https://www.coca-colascholarsfoundation.org/wp-content/uploads/2019/06/cokescholarsgrad_grace-obrien_2019.06.25-576x768.jpg",
    transaction: 3500,
    status: "Approved",
  },
  {
    id: 3,
    userName: "Snow",
    email: "Jon@gmail.com",
    userImage:
      "https://www.coca-colascholarsfoundation.org/wp-content/uploads/2019/06/cokescholarsgrad_grace-obrien_2019.06.25-576x768.jpg",
    transaction: 3500,
    status: "Declined",
  },
  {
    id: 4,
    userName: "Snow",
    email: "Jon@gmail.com",
    userImage:
      "https://www.coca-colascholarsfoundation.org/wp-content/uploads/2019/06/cokescholarsgrad_grace-obrien_2019.06.25-576x768.jpg",
    transaction: 3500,
    status: "Pending",
  },
];

const Users = () => {
  const [data, setData] = useState(rows);
  const handleDelete = (id) => {
    setData(
      data.filter((item) => {
        return item.id !== id;
      })
    );
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 130,
      renderCell: (params) => {
        return (
          <div className="userProfile">
            <img src={params.row.userImage} alt="" className="userImg" />
            {params.row.userName}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 130 },
    { field: "userImage", headerName: "Image", width: 130 },
    {
      field: "transaction",
      headerName: "Transaction",
      type: "number",
      width: 130,
    },
    {
      field: "status",
      headerName: "Status",
      width: 90,
      renderCell: (params) => {
        return <Button title={params.row.status} />;
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 90,
      renderCell: (params) => {
        return (
          <React.Fragment>
            <Link to={"/users/" + params.row.id}>
              <button className="userEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userDelete"
              onClick={() => {
                handleDelete(params.row.id);
              }}
            />
          </React.Fragment>
        );
      },
    },
  ];
  return (
    <div className="usersList">
      <DataGrid
        disableSelectionOnClick
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default Users;
