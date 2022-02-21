import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";

function RenderStaff({ staff }) {
  return (
    <div className="col-xs-12 col-md-4 col-lg-3">
      <Card>
        <CardImg src={staff.image} alt={staff.name}></CardImg>
      </Card>
    </div>
  );
}

function RenderComments({ staff }) {
  if (staff != null) {
    return (
      <div className="col-xs-12 col-md-8 col-lg-9">
        <Card>
          <CardBody>
            <p style={{ fontWeight: "bold", fontSize: 20 }}>
              {" "}
              Họ Và tên : {staff.name}
            </p>
            <p> Ngày sinh : {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
            <p>
              Ngày vào công ty : {dateFormat(staff.startDate, "dd/mm/yyyy")}
            </p>
            <p>Phòng ban : {staff.department.name}</p>
            <p>Số ngày nghỉ còn lại : {staff.annualLeave}</p>
            <p>Số ngày đã làm thêm : {staff.overTime}</p>
          </CardBody>
        </Card>
      </div>
    );
  } else return <div></div>;
}

const StaffDetail = (props) => {
  if (props.staff != null)
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/staffs">Nhân viên</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
          </Breadcrumb>

          <hr></hr>
        </div>
        <div className="row">
          <RenderStaff staff={props.staff} />
          <RenderComments staff={props.staff} />
        </div>
      </div>
    );
  else return <div></div>;
};

export default StaffDetail;
