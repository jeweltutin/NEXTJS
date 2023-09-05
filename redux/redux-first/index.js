//console.log('Welcome from Redux');
const redux = require('redux');
const bindActionCreators = redux.bindActionCreators;

const createStore = redux.createStore

const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';

const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';

function orderCake(){
    return{
        type: CAKE_ORDERED,
        //quantity: 1,
        payload: 1
    }
    
}
function restockCake(qty = 1){
    return{
        type: CAKE_RESTOCKED,
        //quantity: qty,
        payload: qty
    }
}

function orderIceCream(qty=1){
    return{
        type: ICECREAM_ORDERED,
        payload: qty
    }
}

function restockIceCream(qty=1){
    return{
        type: ICECREAM_RESTOCKED,
        payload: qty
    }
}

// (previousState, action) => newState

const initialState = {
    numOfCakes: 10,
    numOfIceCreams: 20
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return{
                ...state,
                numOfCakes: state.numOfCakes -1,
            }
        case CAKE_RESTOCKED:
            return{
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            }
        
        case ICECREAM_ORDERED:
            return{
                ...state,
                numOfIceCreams: state.numOfIceCreams -1,
            }
        case ICECREAM_RESTOCKED:
            return{
                ...state,
                numOfIceCreams: state.numOfIceCreams + action.payload
            }

        default:
            return state
    }
}

const store = createStore(reducer)
console.log('Initial state', store.getState())

const unsubscribe = store.subscribe(() => {
    console.log('Update State ', store.getState())
})

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake()) 
// store.dispatch(restockCake(5))

const actions = bindActionCreators({ orderCake, restockCake }, store.dispatch);
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(5)

store.dispatch(orderIceCream())
store.dispatch(orderIceCream())
store.dispatch(orderIceCream())
store.dispatch(restockIceCream(2))

unsubscribe()