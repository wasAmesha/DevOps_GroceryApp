import React, { useReducer,useEffect } from "react";
import { getAll,search } from "../../../Services/foodService";
import ThumbnailsFirst from "../../Thumbnails/ThumbnailsFirst";
import { useParams } from "react-router";
import Search from "../../Search/Search";
import NotFound from "../../NotFound/NotFound";


const initialState = { foods:[] };

const reducer = (state,action) => {
  switch(action.type){
  case 'FOODS_LOADED':
      return { ...state, foods: action.payload };
    default:
      return state;
}
};


export default function Categories() {
  const [state,dispatch] = useReducer(reducer,initialState);
  const {foods} = state;
  const {searchTerm} =useParams();

  useEffect(() => {
    const loadFoods = searchTerm ? search(searchTerm):getAll();
    loadFoods.then(foods => dispatch({ type: 'FOODS_LOADED', payload: foods }));
  }, [searchTerm]);
  
  return (
  
    <>
    <Search/>
    
    {foods.length === 0 && <NotFound linkText="Reset Search" />}
    <ThumbnailsFirst foods={foods}/>
    
    
    </>
  )
}
