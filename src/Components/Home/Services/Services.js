import React from 'react';
import Service from '../Service/Service';
import lost from '../../../images/service-1.jpg';
import perfect from '../../../images/service-2.jpg';
import clients from '../../../images/service-3.jpg'
import './Services.css'


const Services = () => {
    const serviceData = [
        {
            image: lost,
            title: "Places to get lost",
            description: "mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at",
        },
        {
            image: perfect,
            title: "Perfect Design",
            description: "mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at",
        },
        {
            image: clients,
            title: "Happy Clients",
            description: "mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at",
        }
    ]
    return (
        <section className="services mt-5">
            <div className="container">
                <div className="row">
                <div className="service-section text-center mb-5">
                    <h1>Services</h1>
                </div>
                {
                    serviceData.map(data => <Service data={data}></Service>)
                }
            </div>
            </div>
        </section>
    );
};

export default Services;