import React from 'react';
import { Card, CardImg, CardImgOverlay,CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link} from 'react-router-dom';

function RenderBangluong({staff}) {
    return (
    
            <Card  style={{marginBottom:8,marginTop:8}}>
            <CardTitle>
               <p style={{fontWeight:"bold",fontSize:30}}>{staff.name}</p> 
            </CardTitle>
            <p> Mã nhân viên: {staff.id}</p>
            <p> Hệ số lương: {Math.round(staff.salaryScale)}</p>
            <p></p>
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