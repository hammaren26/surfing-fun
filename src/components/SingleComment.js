import {useEffect, useState} from "react";
import {commentDelete, commentUpdate} from "../redux/actions";
import {useDispatch} from "react-redux";

function SingleComment({data}) {

    const {id, text} = data
    const [commentText, setCommentText] = useState('')
    const dispatch = useDispatch()


    useEffect(() => {
        if (text) {
            setCommentText(text)
        }
    }, [text])

    const handleInput = (e) => {
        setCommentText(e.target.value)
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        dispatch(commentUpdate(commentText, id))
    }

    const handleDelete = (e) => {
        e.preventDefault()
        dispatch(commentDelete(id))
    }

    return (
        <form action="#" className="comments-item" onSubmit={handleUpdate}>
            <div className="comments-item-delete" onClick={handleDelete}>&times;</div>
            <input type="text" value={commentText} onChange={handleInput}/>
            <input type="submit" hidden/>
        </form>
    )
}

export default SingleComment