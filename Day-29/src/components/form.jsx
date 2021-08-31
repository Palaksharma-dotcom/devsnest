import { useSelector, useDispatch } from "react-redux";
import { updatefData, updatePlace, updatePlaceData } from "../actions";

const Form = () => {
    const place = useSelector((state) => state.place);
    const theme = useSelector((state) => state.theme);
    const dispatch = useDispatch();
    return (
        <div className="container">
            <div className="row">
                <div className="form">
                        <input type="text" 
                                value={place}
                                type="text"
                                onChange={(e) => {
                                dispatch(updatePlace(e.target.value));}}/>
                               <button className={theme ? "btn btn-light" : "btn btn-dark"}  onClick={() => {
                                dispatch(updatePlaceData(place)); dispatch(updatefData(place))}}>Submit</button>
                 </div>
             </div>
        </div>
  
  )}
  export default Form;