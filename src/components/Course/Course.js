import React from 'react';
import './Course.css'

const Course = (props) => {
   const{name, author, price} = props.course
    return (
        <div className="course">
            <div>
                <h4 className="course-name">{name}</h4>
                <br />
                <p>Author Name :{author}</p>
                <br/>
                <p>${price}</p>
                <button className="main-button"
                onClick={()=>props.handleAddCourse(props.course)}>
                    add to cart
                </button>
            </div>
        </div>
    );
};

export default Course;