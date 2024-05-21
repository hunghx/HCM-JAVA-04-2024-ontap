import React from 'react'
import Product from './Product'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'

export default function ListProduct() {
// lấy ra danh sách
    const products  =  useSelector(state=>state.products.data)
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Image</th>
          <th>Sex</th>
          <th>BirthDay</th>
          <th>Address</th>
          <th colSpan={2}>Action</th>
        </tr>
      </thead>
      <tbody>
        {
            products?.map((pro) =><Product key={pro.id} info={pro}/>)
        }
      </tbody>
    </Table>
  )
}
