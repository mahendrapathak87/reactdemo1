import { useSelector, useDispatch } from "react-redux";

const Info = () => {

    const test = useSelector((state) => state.data);

    return (
        <div>
            Info
            {test.data.map(t => 
                <div>
                    <div>{t.name}</div>
                    <div>{t.phone}</div>
                </div>
                
            )}
        </div>
    )
}

export default Info;