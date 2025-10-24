import ProductCard from './components/ProductCard'
import './App.css'

function App() {
  return (
    <div className='container'>
      <ProductCard
        name= "School Bag"
        price="₦50,000"
        image="https://i.pinimg.com/1200x/cb/dd/2f/cbdd2ffb60946be0748523ae0d30b5f7.jpg"
        instock={true}
      />

      <ProductCard
        name= "HP Laptop"
        price="₦600,000"
        image="https://i.pinimg.com/1200x/05/71/a1/0571a140c8f2c73d60ad88ffd4a2bbb4.jpg"
        instock={false}
      />

      <ProductCard
        name= "Apple Laptop"
        price="₦1,000,000"
        image="https://i.pinimg.com/736x/51/e5/2f/51e52f2230858280c98c7ae4067b682e.jpg"
        instock={true}
      />
    </div>
  )
}

export default App
