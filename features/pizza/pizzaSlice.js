//import { createSlice } from "@reduxjs/toolkit";
const { createSlice } = require("@reduxjs/toolkit");


const initialState ={
    pizzaBase:1000
}


const pizzaSlice= createSlice({
    name: "pizza",
    initialState,
    reducers:{
        pizza_order:(state,action)=>{
            state.pizzaBase--
        }
    }
    
})
 console.log(pizzaSlice)
 module.exports=pizzaSlice.reducer // default export
 module.exports.pizzaActions=pizzaSlice.actions; // named export