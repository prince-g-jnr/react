import jollofImg from "../assets/jollofrice.jpg";

function ProductCard(){
    const product = [
        {
            id: 1,
            name: "Jollof Rice",
            price: "1,500",
            image: "https://i.pinimg.com/1200x/b8/b5/d7/b8b5d7b7bb12ba423afc38d3401025c1.jpg",
            alt: "img"
        },
        {
            id: 2,
            name: "Ankara Fabric",
            price: "5,000",
            image: "https://i.pinimg.com/1200x/a9/22/20/a922203c08c2c07861f00f16cb11b2d1.jpg",
            alt: "img"
        },
        {
            id: 3, 
            name: "Suya Spice", 
            price: "1000", 
            image: "https://i.pinimg.com/1200x/f7/fc/1c/f7fc1c338f67ee734f3377de54dec73c.jpg",
            alt: "img"
        },
        {id: 4, 
            name: "Aso-Ebi", 
            price: "15,000", 
            image: "https://i.pinimg.com/1200x/52/33/26/523326ea59dedb1ea0b79384c99292c7.jpg",
            alt: "img"
        },
        {
            id: 5,
            name: "Palm Wine", 
            price:"1,200", 
            image: "https://i.pinimg.com/736x/b0/65/8e/b0658e369dab40a24a0b9c469df44ea8.jpg",
            alt: "img"
        },
        {
            id: 6, 
            name: "Agbada", 
            price: "25,000", 
            image: "https://i.pinimg.com/1200x/87/43/91/8743918bd41cb75d372d9c3642f50959.jpg",
            alt: "img"
        },
        {
            id: 7, 
            name: "Chin Chin", 
            price: "500", 
            image: "https://i.pinimg.com/1200x/8c/43/51/8c43517573225c2ba7b4eb857acf5c2d.jpg",
            alt: "img"
        },
        {
            id: 8,
            name: "Puff Puff",
            price: "300",
            image: "https://i.pinimg.com/736x/74/77/d0/7477d00b25fd23d6a29a9cde35dc948a.jpg",
            alt: "img"
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Nigerian Products</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {product.map(product => (
                        <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-6xl">
                                <img src={product.image} alt={product.alt} className="w-full h-60 object-cover" />
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between item-start mb-2">
                                    <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                                        {product.category}
                                    </span>
                                </div>

                                <p className="text-2xl font-bold text-green-600 mb-4">
                                    ₦{product.price}
                                </p>

                                <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductCard;