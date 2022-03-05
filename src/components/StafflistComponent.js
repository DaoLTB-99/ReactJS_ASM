import React, { Component } from "react";
import { Card, CardText, CardTitle } from 'reactstrap';
import dateFormat from "dateformat";
import './components.css';

class Stafflist extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedStaff: null
        }
    }

    onStaffSelect(staff) {
        this.setState({ selectedStaff: staff });
    }

    renderStaff(staff) {
        if (staff != null) {
            return (
                <div className='col-12 col-sm-6 col-md-4 mt-1'>
                    <Card className="staffCardText">
                        <CardTitle className="font-weight-bold h5">Họ và tên: {staff.name}</CardTitle>
                        <CardText>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</CardText>
                        <CardText>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</CardText>
                        <CardText>Phòng ban: {staff.department.name}</CardText>
                        <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                        <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
                    </Card>
                </div>
            );
        }
    }

    render() {

        const stafflist = this.props.staffs.map((staff) => {
            return (
                <div key={staff.id} className='col-12 col-sm-6 col-md-4 mt-1 detailCard'>
                    <Card onClick={() => this.onStaffSelect(staff)}>
                        <CardTitle>{staff.name}</CardTitle>
                    </Card>

                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {stafflist}
                </div>
                <div className="row">
                    {this.renderStaff(this.state.selectedStaff)}
                </div>
            </div>
        )
    }
}

export default Stafflist;