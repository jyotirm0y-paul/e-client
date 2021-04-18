import React from 'react';
import alexender from '../../../images/man-1.jpg';
import john from '../../../images/man-2.jpg';
import silvia from '../../../images/man-3.jpg';
import Review from '../Review/Review';
import './Reviews.css'
const Reviews = () => {
    const reviewData=[
        {
            image: alexender,
            name: "Alexender Gary",

        },
        {
            image: john,
            name: "John Abraham",
        },
        {
            image: silvia,
            name: "Silvia Stan",
        }
    ]
    return (
        <section className="reviews pt-5">
            <div className="container">
                <div className="row">
                    <div className="service-section text-center mb-5">
                        <h1 className="pt-5">Reviews</h1>
                    </div>
                    {
                        reviewData.map(data => <Review data={data}></Review>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Reviews;