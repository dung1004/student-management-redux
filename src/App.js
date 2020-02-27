import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'reactstrap';

import './App.css';
import './components/style.css';
import ModalComponent from './components/modals';
import Search from './components/Search';
import TaskList from './components/TaskList';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col md="12">
              <h2 className="mt-3">
                Quản lý sinh viên
              </h2>
            
            </Col>
            <Col md="3">
              <ModalComponent buttonLabel="Thêm sinh viên"  />
            </Col>
          </Row>
        </Container>
        <hr />
        
        <Search />

        <TaskList />
        

      </div>
    );
  }
}

export default App;
