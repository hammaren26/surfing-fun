import SingleComment from "./SingleComment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uniqid from "uniqid"
import { commentCreate, commentsLoad } from "../redux/actions";

function Comments(props) {

    const [textComment, setTextComent] = useState('')
    const comments = useSelector(state => {
        return state.comments.comments
    })


    const dispatch = useDispatch()

    const handleInput = (e) => {
        setTextComent(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const id = uniqid()
        dispatch(commentCreate(textComment, id))
    }

    useEffect(() => {
        dispatch(commentsLoad())
    }, [])
    return (
        <div className={'card-comments'}>
            <form onSubmit={handleSubmit} action="#" className="comments-item-create">
                <input
                    className="comments-item-create__input"
                    type="text" value={textComment}
                    onChange={handleInput}
                    placeholder='write something and press enter...'
                />
                <input type="submit" hidden />
            </form>
            {!!comments.length && comments.map(res => {
                return <SingleComment key={res.id} data={res} />
            })}
        </div>
    )
}

export default Comments