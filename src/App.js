import React, { Component} from 'react';
import './App.css';
import { Navbar} from 'reactstrap';
import {STAFFS} from './shared/staffs';
import StaffList from './components/StaffListComponent';
import {DEPARTMENTS} from './shared/staffs';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        staffs : STAFFS,
        departments : DEPARTMENTS
    }
}
  render () {
    return (
        <div className="App">
          <Navbar style={{fontSize:35,color: "white",backgroundColor : "blue"} }>
            <p> Ứng dụng quản lý nhân sự v1.0</p> 
          </Navbar> 
          <div className='body'>
            <div className="row">
              <StaffList staffs={this.state.staffs} departments={this.state.departments}/>
            </div> 
            <p>Bấm vào tên nhân viên để xem thông tin.</p>           
          </div>
        </div> 
    );

  }
  
}

export default App;

