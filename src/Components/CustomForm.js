import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { inc, setData } from "../Store/CustomReducers/DataSlice";


const CustomForm =() => {

    const [name, setName]  = useState('');
    const [phone, setPhone]  = useState('');

    const data = useSelector((state) => state.data);

    const dispatch = useDispatch();

    const nameChangeHandler = (e) => {
        setName(e.target.value);
    }

    const phoneChangeHandler = (e) => {
        setPhone(e.target.value);
    }

    const handleSubmit =(e) => {
        e.preventDefault();
        let newNameObje = {
            name: name,
            phone: phone
        }
        dispatch(inc(newNameObje));
    }
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name="name" onChange={nameChangeHandler} />
            </div>
            <div>
                <label>Phone:</label>
                <input type="text" name="phone" onChange={phoneChangeHandler}/>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}

export default CustomForm;