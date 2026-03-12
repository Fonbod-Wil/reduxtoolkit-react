const { createSlice } = require("@reduxjs/toolkit");
const { default: axios } = require("axios");
const createAsyncThunk=require('@reduxjs/toolkit').createAsyncThunk


const initialState={
    loading:false,
    products:[],
    error:""
}

const fetchProducts=createAsyncThunk('product/fetchProducts',async()=>{
    //const response=await fetch('https://fakestoreapi.com/products')
    //const data=await response.json()
    return axios.get('https://fakestoreapi.com/products')
    .then((res)=>console.log(res.data.map((product)=>product.title)))
})

const productSlice= createSlice({
   name:"product",
   initialState,
   extraReducers:(builder)=>{
       builder.addCase(fetchProducts.pending, (state)=>{
           state.loading=true
       })
       builder.addCase(fetchProducts.fulfilled, (state,action)=>{
           state.loading=false
           state.products=action.payload
       })
       builder.addCase(fetchProducts.rejected, (state,action)=>{
           state.loading=false
           state.error=action.error.message
       })
   }

})
 console.log(productSlice)
 module.exports=productSlice.reducer // default export
 module.exports.productActions=productSlice.actions; // named export
 module.exports.fetchProducts=fetchProducts;