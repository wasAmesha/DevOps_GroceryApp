import React, { useEffect } from 'react';
import AppRoutes from "./AppRoutes";
//import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Loading from './components/Loading/Loading';
import { useLoading } from './Hooks/useLoading';
import {setLoadingInterceptor} from './interceptors/loadingInterceptor';
import Footer from './components/Footer/Footer';

/*
            <div
                style={{
                    minHeight: "400px",
                    color: "green",
                }}
            >
            </div>
            <Footer />*/

function App() {
const {showLoading,hideLoading } =useLoading();

useEffect(() => {
  setLoadingInterceptor({ showLoading, hideLoading });
}, []);


  return( 
    <>
    <Loading/>
    <Header/>  
    <AppRoutes/> 

    <Footer/>
    

    </>
    
  );
}

export default App;



           