import React, { Component } from 'react';
import { Container, Row, Col, InputGroup, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';

import iconSearch from './../icon/research.png';
import { onSearch } from './../actions/index';

class Search extends Component {
    constructor(){
        super();
        this.state = {
            keyWord: ''
        }
    }

    onSearch = () => {
        this.props.onSearch(this.state.keyWord);
    }

    onChange = (e) => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    render() {
        const { keyWord } = this.state;
        
        return (
            <Container>
                <Row>
                <Col md="12" className="mb-4">
                    <InputGroup>
                        <Input 
                            name='keyWord'
                            value={ keyWord }
                            onChange={ this.onChange }
                            placeholder="Tên sinh viên" 
                            onKeyDown={this.onSearch}
                            className="pr-5 inputSearch" />
                        <Button className='iconSearch' onClick={this.onSearch}>
                            <img src={iconSearch} alt="" />
                        </Button>
                    </InputGroup>
                </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onSearch: (keyWord) => {
            dispatch(onSearch(keyWord));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);