import React from 'react';
import Cards from './Cards';
import Coffees from './Coffees';
import Login from './AddCard';
import { useLoaderData } from 'react-router';
import Baner from '../componet/Baner';
import Info from '../componet/Info';

const Home = () => {
    const datas = useLoaderData();
    
    return (
        <div>
             <Baner></Baner>
             <Info></Info>
             <Cards datas={datas}></Cards>
             <Coffees></Coffees>
              
        </div>
    );
};

export default Home;