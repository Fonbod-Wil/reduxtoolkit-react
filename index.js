const store = require('./app/store');
const pizzaActions = require('./features/pizza/pizzaSlice').pizzaActions;
const buggerActions =require('./features/bugger/buggerSlice').buggerActions;
const fetchProducts = require('./features/products/productSlice').fetchProducts;

console.log('Initial State', store.getState());

const unsubscribe = store.subscribe(() => {
    //console.log('Updated State', store.getState());
});
store.dispatch(fetchProducts()).then(()=>{
    console.log('Final state after update', store.getState());
})

//store.dispatch(pizzaActions.pizza_order());
//store.dispatch(buggerActions.bugger_order());

unsubscribe();