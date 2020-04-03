import React, { useState, useEffect } from 'react';
import {Table} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux'
import {getListRoleStart} from '../../actions';
function Role(props) {
    
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getListRoleStart());
    },[])
    const dataRole = useSelector(state => state.redux.app.resource.dataRole )
    // console.log(dataRole);
    return (
        <div>
            <div className="overflow-top-table">
                <Table style={{marginTop:"20px"}} >
                    <thead>
                        <tr>
                        <th>Mã</th>
                        <th>Tên</th>
                        <th>Mô tả</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataRole.map((value,key)=>
                            {
                                return <tr className="" key={key} style={{cursor:"pointer"}}
                                        onClick={()=>{
                                            props.history.push(`/role/${value.id}`)
                                        }}>
                                    <td>{value.id}</td>
                                    <td>{value.name}</td>
                                    <td>{value.description}</td> 
                                    </tr>
                            })}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}


export default Role;