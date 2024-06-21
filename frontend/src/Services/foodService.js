import axios from 'axios';


export const getAll = async () => {
const {data}= await axios.get('api/foods/samples');
return data;
};
export const getFish = async () => {
  const {data}= await axios.get('api/foods/fish');
  return data;
  };
export const getFruits = async () => {
  const {data}= await axios.get('api/foods/fruits');
  return data;
  };
export const getMeat = async () =>{
  const {data}= await axios.get('api/foods/meat');
  return data;
  };
export const getVegetables = async () => {
  const {data}= await axios.get('api/foods/vegetables');
  return data;
  };

export const getById = async (foodId) => {
  {
    const {data}= await axios.get('api/foods/'+ foodId);
    return data;
    };
  };
  
  export const getByName = async (foodName) => {
    {
      const {data}= await axios.get('api/foods/'+ foodName);
      return data;
      };
    };
  

    
  

export const search = async (searchTerm) => {
  {
    const {data}= await axios.get('api/foods/search/'+searchTerm);
    return data;
    };
};
  
  

