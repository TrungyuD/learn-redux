import React, { useState, useEffect } from 'react';
import {Table,Button} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import './User.css';
import {useSelector,useDispatch} from 'react-redux'
function UserInfo(props) {
    const [user, setUser] = useState([]);
    // id
    const userData = useSelector(state => state.redux.app.resource.dataUser);
    // const userSelected = userInfo.filter(user => user.id === id);
    useEffect(()=>{
        // const userInfo = localStorage.getItem('user-info');
        console.log(props.match.params.id);
        console.log(userData);
        const id = props.match.params.id;
        const userInfo=userData.filter(user => user.id === id);
        // const userInfo = 
        console.log(userInfo[0]);
        setUser(userInfo[0]);
    },[]);
    const editUser = () => {
        props.history.push('/user-list/edit');
    }
    const addUser = () => {
        props.history.push('/user-list/add');
    }
    const keyss=Object.keys(user);
    const elm = keyss.map((number)=>
        <tr>
            <td>{number}</td>
            <td>{JSON.stringify(user[number])}</td>
        </tr>
    )
    return (
        <div style={{marginTop:"30px"}}>
            <div className="user-info-edit">
                <p className="page-userinfo-text">Trang thông tin người dùng</p>
                <div>
                <Button onClick={addUser} style={{marginRight:"30px"}} variant="success">Create User</Button>
                <Button onClick={editUser} style={{marginRight:"141px",width:"100px"}} variant="success">Edit</Button>
                </div>
            </div>
            <div className="table-user">
                <Table className="table-user-info">
                    <thead>
                        <tr>
                            <th colSpan="2">Thông tin người dùng: {user.username}</th>
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
export default withRouter(UserInfo);