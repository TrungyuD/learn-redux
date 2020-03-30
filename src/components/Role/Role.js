import React, { useState, useEffect } from 'react';
import {Table} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux'
import {getListRole} from '../../actions';
function Role(props) {
    const [dataRole, setDataRole] = useState([]);
    const getTokenType = useSelector(state => state.redux.user.token_type);
    const getAccessToken = useSelector(state => state.redux.user.access_token);
    const dispatch = useDispatch();
    useEffect(()=>{
        const url = 'http://test.itechcorp.com.vn:38765/auth/secured/ws/rest/v1/role';
        let headers = new Headers();
        headers.append('Authorization', getTokenType +' '+ getAccessToken);
        fetch(url, { method: 'GET', headers:headers})
        .then(res => {
            return res.json().then((data)=>{
                // localStorage.setItem('role',JSON.stringify(data.body));  
                dispatch(getListRole(data.body));
                setDataRole(data.body);
                return
            })
        })
    },[])
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