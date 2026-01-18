import React from 'react';
import Cards from './Cards';
import Coffees from './Coffees';
import Login from './AddCard';
import { useLoaderData } from 'react-router';

const Home = () => {
    const datas = useLoaderData();
    
    return (
        <div>
             <Cards datas={datas}></Cards>
             <Coffees></Coffees>
              
        </div>
    );
};

export default Home;