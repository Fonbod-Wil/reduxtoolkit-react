const { configureStore } = require('@reduxjs/toolkit');
const pizzaReducer=require('../features/pizza/pizzaSlice')
const buggerReducer=require('../features/bugger/buggerSlice')
//const reduxLogger=require('redux-logger');
//const logger=reduxLogger.createLogger();
const productReducer=require('../features/products/productSlice')



const store=configureStore({

    reducer:{
         pizza:pizzaReducer,
         bugger:buggerReducer,
         product:productReducer,
    },

    //middleware:(getDefaultMiddleware)=>getDefaultMiddleware()
    //.concat(logger)
})

module.exports=store