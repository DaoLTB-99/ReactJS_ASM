import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Stafflist extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }



    render() {

        const stafflist = this.props.staffs.map((staff) => {
            return (
                <div key={staff.id} className='col-12 col-sm-6 col-md-4 mt-1'>
                    <Card>
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
            </div>
        )
    }
}

export default Stafflist;