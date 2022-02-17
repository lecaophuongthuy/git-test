import React from 'react';
import { Card, CardImg, CardImgOverlay,CardTitle, Breadcrumb, BreadcrumbItem, CardBody} from 'reactstrap';
import { Link} from 'react-router-dom';

function RenderPhongban({department}) {
    return (
        <Card  style={{marginBottom:8,marginTop:8}}>
            <CardTitle>
               <p style={{fontWeight:"bold",fontSize:30}}>{department.name}</p> 
            </CardTitle>
            <CardBody>
            <p> Số lượng nhân viên : {department.numberOfStaff}</p>
            </CardBody>
        </Card>
    )
}



const Phongban = (props) => {
    const phongban = props.departments.map((department) => {
        return (
            <div key={department.id} className='col-xs-12 col-md-6 col-lg-4'>
               
                <RenderPhongban department={department}>
               </RenderPhongban>
              
               
            </div>
        )
    });
    return (
        <div className='container'>
            <div className='row'>

                    {phongban}
            </div>
        </div>

    );
    }
      
export default Phongban;