import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cashReducer.cash);

  const addCash = (amount) => {
    dispatch({type:"ADD_CASH",payload:amount})
  }

  const getCash = (amount) => {
    dispatch({type:"GET_CASH",payload:amount})
  }

  return (
    <div className="App">
      <div className='actionsContainer'>
        <button onClick={() => addCash(Number(prompt()))}>Положить деньги</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять деньги</button>
      </div>
      <div>Деньги на счету: {cash}</div>
    </div>
  );
}

export default App;
