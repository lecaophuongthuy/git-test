import React, { Component } from "react";
import StaffList from "./StaffListComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { STAFFS } from "../shared/staffs";
import { DEPARTMENTS } from "../shared/staffs";
import { Switch, Route, Redirect } from "react-router-dom";
import Bangluong from "./BangluongComponent";
import Phongban from "./PhongbanComponent";
import StaffDetail from "./DetailStaffComponent";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staffs: STAFFS,
      departments: DEPARTMENTS,
    };
  }

  render() {
    const StaffWithId = ({ match }) => {
      return (
        <StaffDetail
          staff={
            this.state.staffs.filter(
              (staff) => staff.id === parseInt(match.params.staffId, 10)
            )[0]
          }
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/staffs"
            component={() => <StaffList staffs={this.state.staffs} />}
          />
          <Route
            exact
            path="/phongban"
            component={() => <Phongban departments={this.state.departments} />}
          />
          <Route
            exact
            path="/bangluong"
            component={() => <Bangluong staffs={this.state.staffs} />}
          />
          <Route path="/staffs/:staffId" component={StaffWithId} />
          <Redirect to="/staffs" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
