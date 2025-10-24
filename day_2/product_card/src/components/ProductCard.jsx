import './ProductCard.css'

function ProductCard({name, price, image, instock}) {
    return (
        <div className={`product-name ${instock ? "Instock" : "Out of stock"}`}>
            <div className='product-img'>
                <img src={image} alt={`${name}picture`} />
            </div>
            <h2>{name}</h2>
            <h3>{price}</h3>
            {instock && <div className='in-stock'>In Stock</div>}
            {!instock && <div className='out-of-stock'>Out of Stock</div>}
        </div>
    )
};

export default ProductCard;