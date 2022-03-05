import React, { Component } from "react";
import { Card, CardText, CardTitle } from 'reactstrap';
import dateFormat from "dateformat";
import './components.css';

class Stafflist extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedStaff: null,
            class: null,
            column: null
        }
    }

    onColumnSelect(event) {
        var column = event.target.value;
        if (column === "two") {
            this.setState({ class: 'col-md-6' });
        } else if (column === "three") {
            this.setState({ class: 'col-md-4' });
        } else if (column === "four") {
            this.setState({ class: 'col-md-3' });
        } else if (column === "six") {
            this.setState({ class: 'col-md-2' });
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
                <div key={staff.id} className={`col-12 col-sm-6 ${this.state.class} mt-1 detailCard`}>
                    <Card onClick={() => this.onStaffSelect(staff)}>
                        <CardTitle>{staff.name}</CardTitle>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div>
                    <span>Bấm vào tên nhân viên để xem thông tin</span>
                    <form>
                        <label htmlFor="columns">Chọn cột hiển thị:</label>
                        <select name="columns" value={this.state.column} onChange={(event) => this.onColumnSelect(event)}>
                            <option value="two">2 Cột</option>
                            <option value="three">3 Cột</option>
                            <option value="four">4 Cột</option>
                            <option value="six">6 Cột</option>
                        </select>
                    </form>

                </div>
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