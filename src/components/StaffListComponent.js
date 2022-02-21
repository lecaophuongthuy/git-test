import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderStaffItem({ staff, onClick }) {
  return (
    <Card>
      <Link to={`/staffs/${staff.id}`}>
        <CardImg width="100%" src={staff.image} alt={staff.name} />

        <CardTitle style={{ textAlign: "center", color: "black" }}>
          {staff.name}
        </CardTitle>
      </Link>
    </Card>
  );
}

const StaffList = (props) => {
  const staff = props.staffs.map((staff) => {
    return (
      <div key={staff.id} className="col-xs-6 col-md-4 col-lg-2">
        <RenderStaffItem staff={staff}></RenderStaffItem>
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3>Nhân viên</h3>
          <hr></hr>
        </div>
      </div>
      <div className="row">{staff}</div>
    </div>
  );
};

export default StaffList;
