import React, { useState, useEffect } from 'react';
import {Button, Table} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';

function AuthorityData(props) {
        const [auth, setAuth] = useState({});
        const userAuth = useSelector(state => state.redux.app.resourse.dataAuth);
        useEffect(()=>{
            // const userInfo = localStorage.getItem('user-info');
            console.log(props.match.params.id);
            console.log(userAuth);
            const id = props.match.params.id;
            const authInfo=userAuth.filter(user => user.id == id);
            // const userInfo = 
            console.log(authInfo);
            setAuth(authInfo[0]);
        },[]);
        const keyss=Object.keys(auth);
        const elm = keyss.map((number)=>
            <tr>
                <td>{number}</td>
                <td>{JSON.stringify(auth[number])}</td>
            </tr>
        )
        return (
            <div style={{marginTop:"30px"}}>
            <div className="user-info-edit">
                <p className="page-userinfo-text">Trang thông tin phân quyền: </p>
                {/* <div>
                <Button  style={{marginRight:"30px"}} variant="success">Create User</Button>
                <Button  style={{marginRight:"141px",width:"100px"}} variant="success">Edit</Button>
                </div> */}
            </div>
            <div className="table-user">
                <Table className="table-user-info">
                    <thead>
                        <tr>
                            <th colSpan="2">Thông tin vai trò: {auth.id} </th>
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

export default AuthorityData;