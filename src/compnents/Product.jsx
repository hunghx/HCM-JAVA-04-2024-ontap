import React from 'react'
import { useDispatch } from 'react-redux';
import { action_delete, action_edit } from '../redux/actions';

export default function Product({ info }) {
    let { id, name, imgUrl, sex, birthday, address } = info;
    const dispatch = useDispatch();
    const handleDelete = () => {
        console.log(id);
        // hỏi ngta 
        if (window.confirm('Bạn có muốn xóa người này không?')) {
            dispatch(action_delete(id))
        }
    }

    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td><img src={imgUrl} alt="" width={100} height={100} style={{ objectFit: 'cover' }} /></td>
            <td>{sex ? 'Nam' : 'Nữ'}</td>
            <td>{birthday}</td>
            <td>{address}</td>
            <td><button className='btn btn-warning' onClick={()=>dispatch(action_edit(id))}>Edit</button></td>
            <td><button className='btn btn-danger' onClick={handleDelete}>Delete</button></td>
        </tr>
    )
}
