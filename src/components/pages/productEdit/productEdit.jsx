import React from "react";
import { Link } from "react-router-dom";
import apple from "../../common/images/apple.jpg";
import "./productEdit.css";
import Chart from "./../../chart/chart";
import Input from "../../common/input";
import { Publish } from "@mui/icons-material";

const ProductEdit = () => {
  return (
    <div className="productsEdit">
      <div className="productEditTop">
        <span className="editTitle">Edit Product</span>
        <Link to="/newProduct" className="link">
          <span className="btnAdd">Create New</span>
        </Link>
      </div>
      <div className="productInfoContainer">
        <div className="productLeft">
          <div className="productLeftBottom">
            <Chart title="Product Analytics" />
          </div>
        </div>
        <div className="productRight">
          <div className="productRightTop">
            <img src={apple} alt="" className="prodImg" />
            <span className="prodName">Apple Airpods</span>
          </div>
          <div className="productRightBottom">
            <div className="prodInfo">
              <span className="prodKey">ID:</span>
              <span className="prodValue">12</span>
            </div>
            <div className="prodInfo">
              <span className="prodKey">Sales:</span>
              <span className="prodValue">5000</span>
            </div>
            <div className="prodInfo">
              <span className="prodKey">Active:</span>
              <span className="prodValue">Approved</span>
            </div>
            <div className="prodInfo">
              <span className="prodKey">In Stock:</span>
              <span className="prodValue">No</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productEditEnd">
        <div className="productEditEndLeft">
          <div className="product-attribute-input">
            <Input
              label="Product Name"
              name="product-name"
              plHolder="Apple Airpod"
              type="text"
            />
          </div>
          <div className="product-attribute">
            <label className="Label" htmlFor="active">
              Active
            </label>
            <select name="active" id="active" className="productSelect">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="product-attribute">
            <label className="Label" htmlFor="stock">
              In Stock
            </label>
            <select name="stock" id="stock" className="productSelect">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <div className="productEditEndRight">
          <div className="productEditEndRightTop">
            <img src={apple} alt="" className="prodImage Large" />
            <label htmlFor="file">
              <Publish />
            </label>
            <input id="file" type="file" style={{ display: "none" }} />
          </div>
          <button className="userUpdateButton">Update</button>
        </div>
      </div>
    </div>
  );
};

export default ProductEdit;
