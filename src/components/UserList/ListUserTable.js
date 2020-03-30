import React, { useState, useEffect } from 'react';
import {Table} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
// import { useDispatch} from 'react-redux';
import {getListUer, getUserInfo} from '../../actions';
// import { browserHistory } from 'react-router';
function ListUserTable(props) {
    // const CircularJSON = require('circular-json');
    const [dataUserInfo, setUserInfo] = useState([]);
    const getTokenType = useSelector(state => state.redux.user.token_type);
    const getAccessToken = useSelector(state => state.redux.user.access_token);
    const dispatch = useDispatch();
    useEffect(()=>{
        // const getTokenType = localStorage.getItem('token_type');
        // const getAccessToken = localStorage.getItem('access_token');
        const url = 'http://test.itechcorp.com.vn:38765/auth/secured/ws/rest/v1/user';
        let headers = new Headers();
        headers.append('Authorization', getTokenType +' '+ getAccessToken);
        fetch(url, { method: 'GET', headers:headers})
        .then(res => {
            return res.json().then((data)=>{
                dispatch(getListUer(data.body));
                // console.log(data.body);
                
                setUserInfo(data.body);
            })
        })
        // debugger;
    },[])
    console.log(dataUserInfo);
    
    return (
        <div>
            <div className="table-list-user overflow-top-table">
                <Table style={{marginTop:"20px" }}>
                    <thead>
                        <tr>
                        <th>id</th>
                        <th>Username</th>
                        <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            dataUserInfo.map((value,key)=>
                                {
                                    if(value.person !==null){
                                        return <tr className="choose-user" 
                                        style={{textAlign:"center"}} key={key} 
                                        onClick={()=>{
                                            // const json = JSON.stringify(value);
                                            // localStorage.setItem('user-info',json);
                                            dispatch(getUserInfo(value))
                                            props.history.push(`/user-list/user-info/${value.id}`);
                                        }}>
                                            <td>{value.id}</td>
                                            <td>{value.username}</td>
                                            <td>{value.phoneNumber}</td> 
                                        </tr>
                                    }
                                }
                                )
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
}


export default withRouter(ListUserTable);