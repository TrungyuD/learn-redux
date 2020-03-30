import React, { useState, useEffect } from 'react';
import {Button, Table} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
function RoleData(props) {
        const [role, setRole] = useState({});
        const userRole = useSelector(state => state.redux.app.resourse.dataRole);
        useEffect(()=>{
            // const userInfo = localStorage.getItem('user-info');
            console.log(props.match.params.id);
            console.log(userRole);
            const id = props.match.params.id;
            const roleInfo=userRole.filter(user => user.id == id);
            // const userInfo = 
            console.log(roleInfo);
            setRole(roleInfo[0]);
        },[]);
        const keyss=Object.keys(role);
        const elm = keyss.map((number)=>
            <tr>
                <td>{number}</td>
                <td>{JSON.stringify(role[number])}</td>
            </tr>
        )
        return (
            <div style={{marginTop:"30px"}}>
            <div className="user-info-edit">
                <p className="page-userinfo-text">Trang thông tin vai trò: </p>
                {/* <div>
                <Button  style={{marginRight:"30px"}} variant="success">Create User</Button>
                <Button  style={{marginRight:"141px",width:"100px"}} variant="success">Edit</Button>
                </div> */}
            </div>
            <div className="table-user">
                <Table className="table-user-info">
                    <thead>
                        <tr>
                            <th colSpan="2">Thông tin vai trò: {role.id}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {elm}
                    </tbody>
                </Table>
            </div>
        </div>
        );
    
}

export default RoleData;