import React ,{memo, useContext} from 'react'
import { ThemeContext } from '../App';

 function  Content({handleIncrement}) {
    console.log("component render của memo");

    let {count,setCount} = useContext(ThemeContext)
  return (
    <div>
        <span>{count}</span>
        <button onClick={()=>setCount(count+1)}>changeCount</button>
      <button onClick={handleIncrement}>Bấm vô đây</button>
    </div>
  )
}
export default memo(Content)
