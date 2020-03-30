import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import ListUserTable from './UserList/ListUserTable.js';
import Sidebar from './Sidebar.js';
import Hello from './Hello.js';
import UserInfo from './UserList/UserInfo.js';
import Edit from './UserEdit/Edit.js';
import Create from './UserCreate/Create.js';
import Role from './Role/Role.js';
import Authority from './Authority/Authority.js';
import RoleData from './Role/RoleData';
import AuthorityData from './Authority/AuthorityData'
function Menu() {
        return (
            <div>
                <Hello />
            <Row>
                <Col xs={2}>
                    <Sidebar />
                </Col>
                <Col xs={10} >
                    <Switch>
                        <Route exact path='/user-list' component={ListUserTable} />
                        <Route exact path='/user-list/user-info/:id' component={UserInfo} />
                        <Route exact path='/user-list/edit' component={Edit} />
                        <Route exact path='/user-list/add' component={Create} />
                        <Route exact path='/role' component={Role} />
                        <Route exact path='/role/:id' component={RoleData} />
                        <Route exact path='/authority' component={Authority} />
                        <Route exact path='/authority/:id' component={AuthorityData} />
                    </Switch>
                </Col>
            </Row>
            </div>
        );
    }
export default Menu;