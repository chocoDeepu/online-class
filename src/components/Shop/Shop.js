import React, { useState } from 'react';
import Course from '../Course/Course';
import Cart from '../Cart/Cart';
import './Shop.css'

const Shop = () => {
    const product = [
        {name:'Course 1', author:'Mr.abc', price:199},
        {name:'Course 2', author:'Mr.ab', price:299},
        {name:'Course 3', author:'Mr.a', price:99},
        {name:'Course 4', author:'Mr.a', price:909},
        {name:'Course 5', author:'Mr.a', price:499},
        {name:'Course 6', author:'Mr.a', price:9},
        {name:'Course 7', author:'Mr.a', price:59},
        {name:'Course 8', author:'Mr.a', price:999},
        {name:'Course 9', author:'Mr.a', price:49},
    ]

    const [courses,setCourses] = useState();
    const [cart, setCart] = useState([]);
    
   const handleAddCourse = (course)=>{
    const newCart = [...cart, course]
    setCart(newCart);
   }
    
    return (
        <div className="shop-container">
            <div className="product-container">
            <ul>
                {
                     product.map(pd => <Course
                        handleAddCourse={handleAddCourse}
                        course={pd}></Course>)
                }    
                    
            </ul>
            </div>

            <div className="cart-container"></div>
                <Cart cart={cart}></Cart>
        </div>
    );
 };

export default Shop;