import React, {Component} from "react";
import dateFormat from "dateformat";
import {Card} from "reactstrap";

class StaffList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedStaff : null
        }
    }
     
    onStaffSelect(staff) {
        this.setState({selectedStaff : staff})
    }
    
    renderStaff(staff) {
        if (staff != null) {
            return (
                <Card className="card" style={{padding:7}}>
                    <p style={{fontWeight:"bold",fontSize:20}}> Họ Và tên : {staff.name}</p>
                    <p> Ngày sinh : {dateFormat(staff.doB,"dd/mm/yyyy" )}</p>
                    <p>Ngày vào công ty : {dateFormat(staff.startDate,"dd/mm/yyyy")}</p>
                    <p>Phòng ban : {staff.department.name}</p>
                    <p>Số ngày nghỉ còn lại : {staff.annualLeave}</p>
                    <p>Số ngày đã làm thêm : {staff.overTime}</p>       
                </Card>
            ) 
        }

         else {
            return (
                <div></div>
            )
        }
     }
        render() {
            
            const staffList = this.props.staffs.map((staff) => {
                return (
                    <div key={staff.id} className="col-xs-12 col-sm-12 col-md-5 col-lg-3 m-1">
                    <Card onClick={() => this.onStaffSelect(staff)}>
                        {staff.name}
                    </Card>
                </div>

                )
            })

            return (
            <div className="container">
                <div className="row">
                    {staffList}
                </div>
                
                <div class="row">
                    <div className="col-xs-12 col-sm-12 col-md-5 col-lg-3 m-1">
                        {this.renderStaff(this.state.selectedStaff)}
                    </div>                    
                </div>               
            </div>
            );         
      }
 }

 export default StaffList;