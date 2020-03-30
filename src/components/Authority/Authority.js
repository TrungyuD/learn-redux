import React, { useState, useEffect } from 'react';
import {Table} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux'
import {getListAuth} from '../../actions';
function Authority(props) {
    const [dataAuthority, setData] = useState([]);
    const getTokenType = useSelector(state => state.redux.user.token_type);
    const getAccessToken = useSelector(state => state.redux.user.access_token);
    const dispatch = useDispatch();
    const listAuth = useSelector(state => state.dataAuth);
    useEffect(()=>{
        const getTokenType = localStorage.getItem('token_type');
        const getAccessToken = localStorage.getItem('access_token');
        const url = 'http://test.itechcorp.com.vn:38765/auth/secured/ws/rest/v1/authority';
        let headers = new Headers();
        headers.append('Authorization', getTokenType +' '+ getAccessToken);
        fetch(url, { method: 'GET', headers:headers})
        .then(res => {
            return res.json().then((data)=>{
                dispatch(getListAuth(data.body));
                setData(data.body);
                return
            })
        })
    }, [])
    // const getData = () => {
    //     return dataAuthority.map((value,key)=>
    //         {
    //             return <tr className="" key={key} >
    //                 <td>{value.id}</td>
    //                 <td>{value.uuid}</td>
    //                 <td>{value.description}</td> 
    //                 </tr>
    //         }
    //     );
    // }
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