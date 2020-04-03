import React, { useState, useEffect } from 'react';
import {Table} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux'
import {getListAuthStart} from '../../actions';
function Authority(props) {
    const dataAuthority = useSelector(state => state.redux.app.resource.dataAuth ||[])
    const dispatch = useDispatch();
    const listAuth = useSelector(state => state.dataAuth);
    useEffect(()=>{
                dispatch(getListAuthStart());
    }, [])
    return (
        <div>
            <div className="overflow-top-table">
                <Table style={{marginTop:"20px"}}>
                    <thead>
                        <tr>
                        <th>Mã</th>
                        <th>uuid</th>
                        <th>Mô tả</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataAuthority.map((value,key)=>
                            {
                                return <tr className="" key={key} 
                                        style={{cursor:"pointer"}}
                                        onClick={()=>{
                                            props.history.push(`/authority/${value.id}`)
                                        }}>
                                    <td>{value.id}</td>
                                    <td>{value.uuid}</td>
                                    <td>{value.description}</td> 
                                    </tr>
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default Authority;