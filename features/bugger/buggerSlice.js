const { createSlice } = require("@reduxjs/toolkit");
const { pizzaActions } = require("../pizza/pizzaSlice");
const buggerSlice= createSlice({
    name: "bugger",
    initialState:{
        buggerBase:1000
    },
    reducers:{
        bugger_order:(state,action)=>{
            state.buggerBase--
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(pizzaActions.pizza_order, (state)=>{
            state.buggerBase--;
        })
    }
})
 console.log(buggerSlice)
 module.exports=buggerSlice.reducer // default export
 module.exports.buggerActions=buggerSlice.actions; // named export