function GreetingCard({name, message, color = "green"}) {
    return (
        <div style={{backgroundColor: color}} className="cont">
            <h1>{name}</h1>
            <p>{message}</p>
        </div>
    )
};

export default GreetingCard;