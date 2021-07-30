import { render } from "@testing-library/react";

const Card3 = () => {

        const mystyle={
            width: "207px",
            position: "absolute",
            height: "202px",
        };

    return(
    <div className="grid3" >
        <img src="https://images.theconversation.com/files/38926/original/5cwx89t4-1389586191.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip" alt="image"  
        style={mystyle}/>
        <h1>React card</h1>
    </div>
    );
};

export default Card3;