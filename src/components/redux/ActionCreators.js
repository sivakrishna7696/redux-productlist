// action creators are functions which will return a plain object

// import Product from "../Products.js/Product";
import { ActionTypes } from "./ActionTypes";

const addToCart = (product)=>{
    return{
        type : ActionTypes.ADD_TO_CART,
        payload:product
    }
}