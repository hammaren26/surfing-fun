import './App.css';
import Likes from "./components/Likes";
import Title from "./components/Title";
import Comments from "./components/Comments";
import Spin from "./components/Spin";
import { useSelector } from "react-redux";
// import store from "./redux/store";

function App() {
  const error = useSelector(state => state.app.error)
  return (
    <div className="App">
      <div className="wrap">
        <Spin />
        <div className="card">
          {error && (
            <div className='error-message'>
              {error}
            </div>
          )}
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing" />
            {/*<Likes store={store}/>*/}
            <Title />
            <Likes />
          </div>
          <Comments />
        </div>
      </div>
    </div>
  );
}

export default App;
