import React from 'react';
import './Service.css'

const Service = (props) => {
    const { title, description, image } = props.data;
    return (
        <div className="col-md-4 col-sm-12">
            <div className="card-body " >
                <img src={image} className="service-box" width="100%" height="200px" alt="" />
                <h5 className="card-title mt-4">{title}</h5>
                <p style={{color:"silver"}}className="card-text">{description}</p>
                <button className="btn btn read-btn">READ MORE</button>
                
            </div>
        </div> 
    );
};

export default Service;