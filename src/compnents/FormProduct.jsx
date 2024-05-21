import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { action_add, action_update } from '../redux/actions';
const initState = {
    id: '',
    name: '',
    imgUrl: '',
    sex: '',
    birthday: '',
    address: '',
}
export default function FormProduct() {
    const [product, setProduct] = React.useState(initState)
    const dispatch = useDispatch();
    const handleInputChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setProduct({
            ...product,
            [name]: value
        })
    }

    const handleSubmitForm = () => {
        if (isAdd) {
            // add product
            dispatch(action_add({ ...product, sex: (product.sex == "nam" ? true : false) }))
        } else {
            dispatch(action_update({ ...product, sex: (product.sex == "nam" ? true : false) }))
            setIsAdd(true)
            setProduct(initState)

        }
    }
    console.log(product);
    const [isAdd, setIsAdd] = useState(true)

    let idEdit = useSelector(state => state.products.idEdit)
    let products = useSelector(state => state.products.data)
    useEffect(() => {
        if (idEdit) {
            setIsAdd(false)
            let product = products.find(product => product.id === idEdit);
            setProduct({ ...product, sex: product.sex ? "Nam" : "Nữ" })
        }
        // cập nhật product 
    }, [idEdit])
    return (
        <div>
            <h2>{isAdd ? "Thêm mới" : "Chỉnh sửa"}</h2>
            <Form>
                {
                    !isAdd &&
                    <Form.Group className="mb-3" controlId="formId">
                        <Form.Label>ID</Form.Label>
                        <Form.Control type="text" readOnly value={product.id}/>
                    </Form.Group>
                }

                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' value={product.name} onChange={e => handleInputChange(e)} type="text" placeholder="Enter product name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="imageUrl">
                    <Form.Label>Image</Form.Label>
                    <Form.Control name='imgUrl' value={product.imgUrl} onChange={e => handleInputChange(e)} type="text" placeholder="Enter URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Sex">
                    <Form.Label>Sex</Form.Label>
                    <Form.Control name='sex' value={product.sex} onChange={e => handleInputChange(e)} type="text" placeholder="Enter Sex" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="birthday">
                    <Form.Label>BirthDay</Form.Label>
                    <Form.Control name='birthday' value={product.birthday} onChange={e => handleInputChange(e)} type="date" placeholder="Enter Birthday" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control name='address' value={product.address} onChange={e => handleInputChange(e)} type="text" placeholder="address" />
                </Form.Group>
                <Button variant="primary" type="button" onClick={handleSubmitForm}>
                    {isAdd ? "Add" : "Update"}
                </Button>
            </Form>
        </div>
    )
}
