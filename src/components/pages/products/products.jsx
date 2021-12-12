import "./products.css";
import apple from "../../common/images/apple.jpg";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import { DeleteOutline } from "@mui/icons-material";
import Button from "./../../common/button";
import { Link } from "react-router-dom";

const rows = [
  {
    id: 1,
    name: "Apple iphone",
    company: "Apple.Inc",
    image: apple,
    price: 3500,
    status: "Approved",
  },
  {
    id: 2,
    name: "Apple iphone",
    company: "Apple.Inc",
    image: apple,
    price: 3500,
    status: "Approved",
  },
  {
    id: 3,
    name: "Apple iphone",
    company: "Apple.Inc",
    image: apple,
    price: 3500,
    status: "Declined",
  },
  {
    id: 4,
    name: "Apple iphone",
    company: "Apple.Inc",
    image: apple,
    price: 3500,
    status: "Pending",
  },
];

const Products = () => {
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
      field: "name",
      headerName: "Brand Name",
      width: 150,
      renderCell: (params) => {
        return <div className="productProfile">{params.row.name}</div>;
      },
    },
    { field: "company", headerName: "Company", width: 130 },
    {
      field: "image",
      headerName: "Image",
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.image} alt="" className="productImg" />;
      },
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      width: 70,
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
            <Link to={"/products/" + params.row.id}>
              <button className="productEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productDelete"
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
    <div className="productsList">
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

export default Products;
