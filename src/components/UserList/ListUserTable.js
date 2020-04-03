import React, { useState, useEffect } from 'react';
import {Table} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
// import { useDispatch} from 'react-redux';
import {getListUer, getUserInfo, getListUerStart} from '../../actions';
// import { browserHistory } from 'react-router';
function ListUserTable(props) {
    const dataUserInfo = useSelector(state=> state.redux.app.resource.dataUser ||[]);
    // neu trong store khong co can check va get lai
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getListUerStart());
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