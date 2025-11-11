function Button() {
    return (
        <div className="max-w-lg bg-gray-100 mx-auto">
            <button className="bg-green-700 text-white p-2 rounded-lg">
                Primary
            </button>

            <button className="bg-white-700 text-black 900 p-2 rounded-lg">
                Secondary
            </button >

            <button className="bg-green-700 text-white p-2 rounded-lg">
                Danger
            </button>

            <button className="bg-green-700 text-white p-2 rounded-lg">
                Success
            </button>

            <button className="rounded-lg">
                Large Size
            </button>

            <button >
                Small Size
            </button>
        </div>
    )
}

export default Button;