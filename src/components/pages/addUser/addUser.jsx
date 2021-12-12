import React from "react";
import "./addUser.css";
import Input from "./../../common/input";

const AddUser = () => {
  return (
    <div className="newUser">
      <div className="title">New User</div>
      <form className="userForm">
        <div className="ipt">
          <Input
            name="userName"
            label="User Name"
            plHolder="john"
            type="text"
          />
        </div>
        <div className="ipt">
          <Input
            name="fullName"
            label="Full Name"
            plHolder="john Smith"
            type="text"
          />
        </div>

        <div className="ipt">
          <Input
            name="email"
            label="Email"
            plHolder="john@gmail.com"
            type="email"
          />
        </div>

        <div className="ipt">
          <Input
            name="pass"
            label="Password"
            plHolder="password"
            type="password"
          />
        </div>
        <div className="ipt">
          <Input name="phone" label="Phone" plHolder="+92-31568" type="tel" />
        </div>
        <div className="ipt">
          <Input
            name="address"
            label="Address"
            plHolder="Karachi"
            type="text"
          />
        </div>
        <div className="userFieldItem">
          <div className="sample">
            <span className="Label">Gender</span>
            <span className="genderValue">
              <input type="radio" id="male" name="gender" value="male" />
              <label htmlFor="male">Male</label>
              <input type="radio" id="female" name="gender" value="female" />
              <label htmlFor="female">Female</label>
              <input type="radio" id="others" name="gender" value="others" />
              <label htmlFor="others">Others</label>
            </span>
          </div>
        </div>
        <div className="userFieldItem">
          <div className="sample">
            <label className="Label" htmlFor="active">
              Active
            </label>
            <select name="active" id="active" className="userSelect">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <div className="userFieldItem">
          <button className="btnCreate">Create User</button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
