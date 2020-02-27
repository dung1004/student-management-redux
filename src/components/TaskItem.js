import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';

import pencil from './../icon/pencil.png';
import deleteIcon from './../icon/delete.png';
import { deleteStudent } from './../actions/index';
import ModalComponent from './modals'


class TaskItem extends Component {
  
    deleteStudent = () => {
        this.props.deleteStudent(this.props.item.id)
    }
    render() {
        const { item, index} = this.props;
        
        return (
            <tr>
                <th scope="row" >{index+1}</th>
                <td>{item.fullName}</td>
                <td>{item.emailStudent}</td>
                <td>{item.phoneStudent}</td>
                <td>
                {item.genderStudent === 0 ? 'Nam' : 'Nữ'}
                </td>
                <td>{item.classRoomStudent}</td>
                <td className="flex">
                    <ModalComponent src={pencil} item={item} />
                    <Button className="bg-danger ml-2" onClick={this.deleteStudent}>
                        <img src={deleteIcon} alt="" />
                    </Button>
                </td>
            </tr>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {

//     }
// }
 
const mapDispatchToProps = (dispatch, props) => {
    return {
        deleteStudent: (id) => {
            dispatch(deleteStudent(id))
        }
    }
}

export default connect(null, mapDispatchToProps)(TaskItem);