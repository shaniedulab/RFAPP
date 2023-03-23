import React,{useState} from 'react'
function ProductForm(props){
    let [name,updatename]=useState('')
    let [price,updateprice]=useState('')

    function nameinputhandler(e){
        updatename(e.target.value)
    }
    
    function priceinputhandler(e){
        updateprice(e.target.value);
    }
    
    function createproduct(event){
        event.preventDefault()
        let products={
            id:1,
            name:name,
            addresses:price
        }
        
        updatename('');
        updateprice('')
        console.log(products);
        props.onProductForm(products)

    }
    
    return (<div>
        <form onSubmit={createproduct}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="text" onChange={nameinputhandler} value={name} className="form-control" id="exampleInputEmail1"/>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="text" onChange={priceinputhandler} value={price} className="form-control" id="exampleInputPassword1" />

        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>)
}

export default ProductForm

