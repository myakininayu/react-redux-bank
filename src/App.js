import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCustomerAction, removeCustomerAction } from './store/reducers/customerReducer';
import { addCashAction, getCashAction } from './store/reducers/cashReducer';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cashReducer.cash);
  const customers = useSelector(state => state.customerReducer.customers);

  const addCash = (amount) => {
    dispatch(addCashAction(amount))
  }

  const getCash = (amount) => {
    dispatch(getCashAction(amount))
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now()
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer))
  }

  return (
    <div className="App">
      <div>Деньги на счету: {cash}</div>
      <div className='actionsContainer'>
        <button onClick={() => addCash(Number(prompt()))}>Положить деньги</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять деньги</button>
        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
      </div>
      {customers.length > 0 ?
        <div>
          {customers.map(customer => <div onClick={()=>removeCustomer(customer)}>{customer.name}</div>)}
        </div>
        : <div>Клиенты отсутствуют</div>}
    </div>
  );
}

export default App;
