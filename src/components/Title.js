import { useDispatch, useSelector } from "react-redux";
import { inputText } from "../redux/actions";


function Title(props) {
    const text = useSelector(state => {
        return state.input.text
    })
    const dispatch = useDispatch()

    const handleChange = (e) => {
        let val = e.target.value
        dispatch(inputText(val))
    }

    return (
        <div className={'card-title'}>
            <div className={'card-title-top'}>
                <input
                    placeholder="write something..."
                    type="text"
                    onChange={handleChange}
                    value={text}
                />
            </div>
            <p>{text}</p>
        </div>
    )
}

export default Title