import {connect} from "react-redux";
import {decrementLikes, incrementLikes} from "../redux/actions";


function Likes(props) {

    const decrementLikesHandler = (likes) => {
        if (likes > 0) {
            props.onDecrementLikes()
        }
    }
    return (
        <div className={'button-controls'}>
            <button onClick={props.onIncrementLikes}>{props.likes} ❤</button>
            <button onClick={() => {decrementLikesHandler(props.likes)}}>Dislike</button>
        </div>
    )
}


function mapStateToProps(state) {
    return {
        likes: state.likes.likes
    }
}


function mapDispatchToProps(dispatch) {
    return {
        onIncrementLikes: () => {
            dispatch(incrementLikes())
        },
        onDecrementLikes: () => {
            dispatch(decrementLikes())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes)