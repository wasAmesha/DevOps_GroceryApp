import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Categories from './components/Pages/Categories/Categories';
import Fish from './components/Pages/Categories/Fish';
import Vegetables from './components/Pages/Categories/Vegetables';
import Fruits from './components/Pages/Categories/Fruits';
import Meat from './components/Pages/Categories/Meat';
import FoodPage from './components/Pages/Food/FoodPage';
import Orders from './components/Pages/Orders/OrdersPage';
import CartPage from './components/Pages/Cart/CartPage';
import LoginPage from './components/Pages/Login/LoginPage';
import RegisterPage from './components/Pages/Register/RegisterPage';
import ProfilePage from './components/Pages/Profile/ProfilePage';
import CheckoutPage from './components/Pages/Checkout/CheckoutPage';
import AuthRoute from './components/AuthRoute/AuthRoute';
import PaymentPage from './components/Pages/Payment/PaymentPage';
import OrdersPage from './components/Pages/Orders/OrdersPage';
import OrderTrackPage from './components/Pages/OrderTrack/OrderTrackPage';
import ContactPage from './components/Pages/Contact/ContactPage';





export default function AppRoutes() {
  return (
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route exact path="/home" element={<Home/>} />
      <Route exact path="/about" element={<About/>} /> 
      <Route exact path='/categories' element={<Categories/>} />
      <Route exact path='/food/Fish' element={<Fish/>} />
      <Route exact path='/food/Vegetables' element={<Vegetables/>} />
      <Route exact path='/food/Fruits' element={<Fruits/>} />
      <Route exact path='/food/Meat' element={<Meat/>} />
      <Route exact path='/food/:id' element={<FoodPage/>} />
      <Route exact path="/search/:searchTerm" element={<Categories/>} />
      <Route exact path='/cart' element={<CartPage/>}/>
      <Route exact path='/login' element={<LoginPage/>}/>
      <Route exact path='/register' element={<RegisterPage/>}/>
  
      <Route 
      exact path ='/checkout' 
      element={
      <AuthRoute>
        <CheckoutPage/>
      </AuthRoute>}/>


      <Route 
      exact path ='/payment' 
      element={
      <AuthRoute>
        <PaymentPage/>
      </AuthRoute>}/>


      <Route 
      exact path ='/profile' 
      element={
      <AuthRoute>
        <ProfilePage/>
      </AuthRoute>}/>

      <Route 
      exact path ="/orders/:filter?"
      element={
      <AuthRoute>
        <OrdersPage/>
      </AuthRoute>}/>
      
      <Route 
      exact path ='/track/:orderId' 
      element={
      <AuthRoute>
        <OrderTrackPage/>
      </AuthRoute>}/>







      <Route exact path='/contact' element={<ContactPage/>}/>
      <Route exact path='/orders' element={<Orders/>}/>
      



    </Routes>

  
    
  );
}
