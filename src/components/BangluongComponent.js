import React from 'react';
import { Card, CardImg, CardBody, CardImgOverlay,CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link} from 'react-router-dom';

function RenderBangluong({staff}) {
    return (
    
            <Card  style={{marginBottom:8,marginTop:8}}>
            <CardTitle>
               <p style={{fontWeight:"bold",fontSize:30}}>{staff.name}</p> 
            </CardTitle>
            <CardBody>
            <p> Mã nhân viên: {staff.id}</p>
            <p> Hệ số lương: {Math.round(staff.salaryScale)}</p>
            <p> Số giờ làm thêm: {staff. overTime}</p>
            <div style={{backgroundColor:"#d6d4d8",width:250,marginLeft:8}}>
                 Lương:{Math.round((Math.round(staff.salaryScale) * 3000000) + staff.overTime * 200000)} </div>
            </CardBody>
        </Card>
    
    )
}



const Bangluong = (props) => {
    const bangluong = props.staffs.map((staff) => {
        return (
            <div key={staff.id} className='col-xs-12 col-md-6 col-lg-4'>
               
                <RenderBangluong staff={staff}>
               </RenderBangluong>
              
               
            </div>
        )
    });
    return (
        <div className='container'>
            <div className='row'>

                    {bangluong}
            </div>
        </div>

    );
    }
      
export default Bangluong;