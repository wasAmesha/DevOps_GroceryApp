import React, { useReducer,useEffect } from "react";
import { getFruits } from '../../../Services/foodService';
import Thumbnails from "../../Thumbnails/Thumbnails";



const initialState = { foods:[] };

const reducer = (state,action) => {
  switch(action.type){
  case 'FOODS_LOADED':
      return { ...state, foods: action.payload };
    default:
      return state;
}
};


export default function Products() {
    const [state,dispatch] = useReducer(reducer,initialState);
    const {foods} = state; 
    useEffect(() => {
        getFruits().then((data) => dispatch({ type: 'FOODS_LOADED', payload: data }));
      }, []);
      

     return (
    <>
    <Thumbnails foods={foods}/>
    
    </>
    
  )
}
