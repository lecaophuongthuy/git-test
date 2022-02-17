import React from 'react';
import { Card, CardImg, CardImgOverlay,CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link} from 'react-router-dom';

function RenderBangluong({staff}) {
    return (
        <Card></Card>
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