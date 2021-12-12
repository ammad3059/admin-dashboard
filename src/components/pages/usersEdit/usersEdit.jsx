import React from "react";
import { Link } from "react-router-dom";
import {
  Person,
  CalendarToday,
  PhoneAndroid,
  Mail,
  LocationOn,
  Publish,
} from "@mui/icons-material";
import "./usersEdit.css";
import Input from "./../../common/input";

const UsersEdit = () => {
  return (
    <div className="usersEdit">
      <div className="userEditTop">
        <span className="editTitle">Edit User</span>
        <Link to="/newUser" className="link">
          <span className="btnAdd">Create</span>
        </Link>
      </div>
      <div className="usersEditBottom">
        <div className="usersDetailsLeft">
          <div className="usersDetailsTop">
            <img
              src="https://www.coca-colascholarsfoundation.org/wp-content/uploads/2019/06/cokescholarsgrad_grace-obrien_2019.06.25-576x768.jpg"
              alt=""
              className="usersImage"
            />
            <div className="usersDetails">
              <span className="usersName">Alex Marker</span>
              <span className="usersJob">Software Engineer</span>
            </div>
          </div>
          <div className="usersDetailsBottom">
            <span className="userAccountTitle">Account Details</span>
            <div className="userAccount">
              <Person className="userIcon" />
              <span className="">alexwarker2035</span>
            </div>
            <div className="userAccount">
              <CalendarToday className="userIcon" />
              <span className="">10.12.1998</span>
            </div>
            <div className="userAccount">
              <PhoneAndroid className="userIcon" />
              <span className="">+92-1316548</span>
            </div>
            <div className="userAccount">
              <Mail className="userIcon" />
              <span className="">alexwarker@gmail.com</span>
            </div>
            <div className="userAccount">
              <LocationOn className="userIcon" />
              <span className="">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="usersEditRight">
          <span className="usersFormTitle">Edit</span>
          <form className="editForm">
            <div className="editLeft">
              <Input
                label="Username"
                name="userName"
                plHolder="alexwarker2035"
                type="text"
              />
              <Input
                label="Full name"
                name="fullName"
                plHolder="Alex Warker"
                type="text"
              />
              <Input
                label="Email"
                name="email"
                plHolder="alexwarker@hotmail.com"
                type="email"
              />
              <Input
                label="Phone"
                name="phone"
                plHolder="0340-841165119"
                type="tel"
              />
              <Input
                label="Address"
                name="address"
                plHolder="New York"
                type="text"
              />
            </div>
            <div className="editRight">
              <div className="userUpload">
                <img
                  src="https://www.coca-colascholarsfoundation.org/wp-content/uploads/2019/06/cokescholarsgrad_grace-obrien_2019.06.25-576x768.jpg"
                  alt=""
                  className="usersImage Large"
                />
                <label htmlFor="file">
                  <Publish />
                </label>
                <input id="file" type="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UsersEdit;
