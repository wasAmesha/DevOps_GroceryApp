import {Router} from "express";
import { FoodModel } from "../models/food.model.js";
import { SampleFoodModel } from "../models/samplefoods.model.js";
import handler from 'express-async-handler';

const router =Router();

router.get('/fish',handler(async (req, res) => {
  const foods = await FoodModel.find({category: 'fish'});
  res.send(foods);
}));
  router.get('/fruits',handler(async (req, res) => {
    const foods = await FoodModel.find({category: 'fruits'});
    res.send(foods);
  }));
  router.get('/meat',handler(async (req, res) => {
    const foods = await FoodModel.find({category: 'meat'});
    res.send(foods);
  }));
  router.get('/vegetables',handler(async (req, res) => {
    const foods = await FoodModel.find({category: 'vegetables'});
    res.send(foods);
  }));

router.get('/samples',handler(async (req, res) => {
  const foods = await SampleFoodModel.find({});
  res.send(foods);
}));

  router.get('/search/:searchTerm', handler(async (req, res) => {
    const { searchTerm } = req.params;
    const searchRegex = new RegExp(searchTerm, 'i');
    const foods = await FoodModel.find({ name: { $regex: searchRegex } });
    res.send(foods);
  })
);

    /*const categories = ['fish', 'fruits', 'meat', 'vegetables'];
    let searchResults = [];

    for (const category of categories) {
    const itemsInCategory = foodData[category];

  
     const categoryResults= itemsInCategory.filter((item) =>
     item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  searchResults = searchResults.concat(categoryResults);
}

//return searchResults;

res.send(searchResults);
}));*/


router.get('/:foodId', handler(async (req, res) => {
  const { foodId } = req.params;
  const food = await FoodModel.findById(foodId);
    res.send(food);
  })
);


  /*const categories = ['fish', 'fruits', 'meat', 'vegetables'];
  let foundItem = null;

for (const category of categories) {

  const itemInCategory = foodData[category].find((item) => item.id === foodId);

  if (itemInCategory) {
    foundItem = itemInCategory;
    break;
  }
}

//return foundItem;
res.send(foundItem);

}));*/


export default router;