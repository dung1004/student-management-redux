import React, { Component } from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import { connect } from 'react-redux';

import setup from './../icon/setup.png';
import TaskItem from './TaskItem';
import { listStudents } from './../actions/index'

class TaskList extends Component {

    componentWillMount(){
        this.props.listStudent();
    }
  
    render() {

        let { students, keyWord } = this.props;

        if (keyWord) {
            students = students.filter(task => {
               return task.fullName.toLowerCase().indexOf(keyWord.toLowerCase()) !== -1;
            })
            
        }


        const task = students.map((item, index) => {
            return <TaskItem 
                        item = {item}
                        key = {index}
                        index = {index}
                     />
        })
        return (
            <Container>
                <Row>
                    <Col md="12">
                        <Table dark>
                            <thead>
                                <tr>
                                    <th>Stt</th>
                                    <th>Họ và tên</th>
                                    <th>Email</th>
                                    <th>Số điện thoại</th>
                                    <th>Giới tính</th>
                                    <th>Lớp</th>
                                    <th>
                                    <img src={setup} alt="" />
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                { task }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        students: state.students,
        keyWord: state.keyWord
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        listStudent: () => {
            dispatch(listStudents());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);