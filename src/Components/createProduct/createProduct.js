import ProductForm from './productForm'

function CreateProduct(props){
    function onProductForm(product){
        props.oncreateProduct(product)
    }
    return (
        <div className="row">
            <div className="col-lg-8 mx-auto">
                <ProductForm onProductForm={onProductForm}></ProductForm>
            </div>
        </div>
    )
}

export default CreateProduct