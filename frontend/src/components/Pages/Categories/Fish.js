import React, { useReducer,useEffect } from "react";
import { getFish } from '../../../Services/foodService';
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
        getFish().then(foods => dispatch({ type: 'FOODS_LOADED', payload: foods }));
      }, []);
      

     return ( 
     <>
      <Thumbnails foods={foods}/>
  
    </>
    
  )
}
