const store = require('./app/store');
const { fetchUsers } = require('./features/user/userSlice');
const cakeActions = require('./features/cake/cakeSlice').cakeActions;
const icecreamActions = require('./features/icecream/icecreamSlice').icecreamActions;

console.log('Initial state: ', store.getState()); // inspect the state using store.getState()

const unsubscribe = store.subscribe(() => {       // listen to changes store.subscribe()
    console.log('Updated state: ', store.getState());  
})

/* store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(3))

store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.restocked(10))

unsubscribe() */

store.dispatch(fetchUsers())