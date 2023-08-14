
import Counter from '@/app/components/Counter';
import { Provider } from 'react-redux';
//import { store } from '@/app/redux/store';

const CounterPage = () => {
  return (
    <div className="p-10">
        {/* <Provider store={store}>
            <Counter />
        </Provider>      */}
        <Counter />
    </div>
  )
}

export default CounterPage
