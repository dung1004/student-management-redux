// /* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    Button, 
    Modal, 
    ModalHeader, 
    ModalFooter, 
    Input, 
    InputGroup, 
    InputGroupAddon, 
    InputGroupText, 
    Container, 
    Row,
    Col
} from 'reactstrap';

import user from './../icon/user.png';
import userName from './../icon/userName.png';
import email from './../icon/mail.png';
import phone from './../icon/phone.png';
import classRoom from './../icon/classRoom.png';
import gender from './../icon/gender.png';
import { addUser, editStudent, updateStudent, openFormReset } from './../actions/index';


class ModalComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false,
            students: {
                id: '',
                fullName: '',
                emailStudent: '',
                phoneStudent: '',
                genderStudent: 0,
                classRoomStudent: ''
            }
        }
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    openForm = () => {
        this.setState({
            modal: true
        })
            
        this.props.openFormReset();
        
    }

    editStudent = () => {
        this.toggle();
        this.props.editStudent(this.props.item);
        
    }

    updateStudent = () => {
        this.props.updateStudent(this.state.students);

        this.setState({
            students: {
                id: '',
                fullName: '',
                emailStudent: '',
                phoneStudent: '',
                genderStudent: 0,
                classRoomStudent: ''
            }
        })
        this.toggle();

    }

    onAddStudent = () => {
        this.props.onAddStudent(this.state.students);

        this.setState({
            students: {
            id: '',
            fullName: '',
            emailStudent: '',
            phoneStudent: '',
            genderStudent: 0,
            classRoomStudent: ''
            }
        });
        this.toggle();
    }

    onChange = (e) => {
       let name = e.target.name;
       let value = e.target.value;

       if (name === 'genderStudent') {
           value = value === '1' ? 1 : 0
       }

       this.setState({
            students: {
                ...this.state.students,
                [name]: value
            }
          
       })
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.student.id) {
            this.setState({
                students: {
                    id: nextProps.student.id,
                    fullName: nextProps.student.fullName,
                    emailStudent: nextProps.student.emailStudent,
                    phoneStudent: nextProps.student.phoneStudent,
                    genderStudent: nextProps.student.genderStudent,
                    classRoomStudent: nextProps.student.classRoomStudent
                }
            })
        }else if(!nextProps.student.id) {
            this.setState({
                students: {
                    id: '',
                    fullName: '',
                    emailStudent: '',
                    phoneStudent: '',
                    genderStudent: 0,
                    classRoomStudent: ''
                }
            })
        }
        
    }

    render() {
        const { buttonLabel, src, item, student} = this.props;
        const { id, fullName, emailStudent, phoneStudent, genderStudent, classRoomStudent } = this.state.students;

        return (
            <div>
                {
                    !item ? <Button color="primary" onClick={this.openForm}>{buttonLabel}</Button> : <Button color="primary" onClick={this.editStudent}>{<img src={src} alt="" />}</Button>
                }
                
                <Modal isOpen={this.state.modal} >
                    {
                        !student.id ? <ModalHeader toggle={this.toggle}>Thêm mới sinh viên</ModalHeader> : <ModalHeader toggle={this.toggle}>Cập nhật sinh viên</ModalHeader>
                    }
                    
                    <Container>
                        <Row>
                            <Col sm="12">
                                <InputGroup className="mb-3 mt-4">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <img src={user} alt="" />
                                        </InputGroupText>
                                    </InputGroupAddon>

                                    {
                                        !student.id ? <Input 
                                        name="id"
                                        value={id}
                                        onChange={this.onChange}
                                        required
                                        placeholder="Mã sinh viên" /> 
                                        : <Input 
                                        name="id"
                                        value={id}
                                        readOnly
                                        onChange={this.onChange}
                                        required
                                        />
                                    }
                                    
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <img src={userName} alt="" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        name="fullName"
                                        value={fullName}
                                        onChange={this.onChange}
                                        required
                                        placeholder="Họ tên sinh viên" />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <img src={email} alt="" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        type="email"
                                        name="emailStudent"
                                        value={emailStudent}
                                        onChange={this.onChange}
                                        required
                                        placeholder="email" />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <img src={phone} alt="" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        type="number"
                                        name="phoneStudent"
                                        min={10}
                                        max={11}
                                        value={phoneStudent}
                                        onChange={this.onChange}
                                        required
                                        placeholder="Số điện thoại" />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <img src={gender} alt="" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        type="select"
                                        name="genderStudent" 
                                        value={genderStudent}
                                        onChange={this.onChange}
                                        required
                                        placeholder="giới tính">
                                            <option value={0}>Nam</option>
                                            <option value={1}>Nữ</option>
                                    </Input>
                                </InputGroup>
                                <InputGroup className="mb-4">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <img src={classRoom} alt="" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        name="classRoomStudent" 
                                        value={classRoomStudent}
                                        onChange={this.onChange}
                                        required
                                        placeholder="Lớp học" />
                                </InputGroup>
                            </Col>
                        </Row>
                    </Container>
                    
                    <ModalFooter>
                        {
                            !student.id ? <Button color="success" onClick={this.onAddStudent}>Thêm mới</Button> : <Button color="success" onClick={this.updateStudent}>Cập nhật</Button>
                        }
                        
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                </div>
        )
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddStudent: (infoStudent) => {
            dispatch(addUser(infoStudent))
        },
        editStudent: (item) => {
            dispatch(editStudent(item));
        },
        updateStudent: (student) => {
            dispatch(updateStudent(student))
        },
        openFormReset: () => {
            dispatch(openFormReset());
        }

    }
}

const mapStateToProps = (state) => {
    return {
        student: state.editStudent
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (ModalComponent);
