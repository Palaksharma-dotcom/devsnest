const Card = (props) => {
    console.log(props);
    return (
        <div className="container">
            <div className="card">
                <div className="title"><h1>{props.title || "Card"}</h1></div>
                <h3>you have consumed <span className="cal">{props.cal || "56"}</span> cals today</h3>
            </div>
        </div>
    );
};

export default Card;