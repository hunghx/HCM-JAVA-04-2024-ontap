import React, { useEffect, useState } from 'react'

export default function Form() {
    const [student, setStudent] = React.useState({})
    const [isOpen, setOpen] = useState(false);
    // {
    //     name :"nguyễn văn a",
    //     age: 19,
    //     sex:"nam",
    //     address : "HN"
    // }

    const onChangeInputName = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        // cập nhật state
        setStudent({
            ...student,
            [name]: value
        }) // component ko rerender ngay lập tức 
    }
    // useEffect : quản lí vòng đời của component : 3 cách dùng
    // useEffect(()=>{
    //   // c1 : ko có phụ thuộc 
    //   // gọi mỗi lần sau khi component render hoặc rerender
    //   console.log("useEffect ko có phụ thuộc");  
    // })

    // useEffect(()=>{
    //     // có phụ thuộc là mảng rỗng
    //     console.log("userEffect có phụ thuộc là []");
    // },[])
    console.log(isOpen);
    useEffect(() => {
        // có danh sách tham số 
        // gọi mỗi khi biến phục thuộc thay đổi hoặc component mount lần đầu
        console.log("userEffect có tham số");
    }, [isOpen])
    return (
        <div>
            <form>
                <input type="text" name='name' value={student.name ?? ""} placeholder='name' onChange={e => onChangeInputName(e)} /> <br />
                <input type="text" name='age' value={student.age ?? ""} placeholder='age' onChange={e => onChangeInputName(e)} /> <br />
                <input type="text" name='sex' value={student.sex ?? ""} placeholder='sex' onChange={e => onChangeInputName(e)} /> <br />
                <input type="text" name='address' value={student.address ?? ""} placeholder='address' onChange={e => onChangeInputName(e)} /><br />
            </form>
            <button onClick={() => setOpen(!isOpen)}>Toggle</button>
        </div>
    )
}
