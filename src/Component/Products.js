import './Products.css'

const Products = ({content, categoryName}) => {

    return (
        <div>
            <h1 className="product-category"><u>{categoryName}</u></h1>
            <div>{content}</div>
        </div>
    )
}

export default Products