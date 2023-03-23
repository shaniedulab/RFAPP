import Data from './data';

function ProductList(props){
console.log(props.newProduct);
    return (<div className='row'>
        <div className='col-lg-8 mx-auto'>
        {
            props.newProduct.map((product)=>{
                return <Data 
                key={product.id}
                id={product.id} 
                name={product.name} 
                addresses={product.addresses} 
                >
                <h1>shani</h1>
                </Data>
            })
        }
        </div>
    </div>)
}

export default ProductList;