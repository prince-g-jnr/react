import { useState } from "react"

function Counter () {
    const [count, setCount] = useState(0)

    function increment() {
        count = setCount(count + 1)
    }

    function decrement() {
        if (count > 0) {
            setCount(prevCount => prevCount - 1)
        }
    }

    return (
        <div className="container">
            <h1>count : {count}</h1>
            <div className="button-container">
                <button className="increment" onClick={increment}>+</button>
                <button className="decrement" onClick={decrement}>-</button>
                <button className="reset" onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    )
}

export default Counter