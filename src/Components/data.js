import React, {useState} from 'react'

function Data(props){
    let [count,updateCount]=useState(0)
    // let count=0
    function fin1(){
        updateCount(++count)
        console.log(count);
    }
    function fin2(){
        updateCount(--count)

            console.log(count);
        }
    return (<span>
        {/* <h1>{count}</h1> */}
        <h1>{props.id}</h1>
        <h1>{props.name}</h1>
        <h1>{props.addresses}</h1>
        {/* {props.children} */}
        <button onClick={fin1}>Click1+</button>
        <button onClick={fin2}>Click2-</button>
    </span>)
}   

export default Data