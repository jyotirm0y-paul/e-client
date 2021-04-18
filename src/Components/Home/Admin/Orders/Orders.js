import React from 'react';
import Order from '../Order/Order';

const Orders = () => {
    const orderData = [
        {
            name: "tapos",
            email: "tapos@gmail.com",
            service: "Office Interior Design",
            pay: "Ceadit Card",
            status: "Pending"

        },
        {
            name: "tapos",
            email: "tapos@gmail.com",
            service: "Office Interior Design",
            pay: "Ceadit Card",
            status: "Pending"

        },
        {
            name: "tapos",
            email: "tapos@gmail.com",
            service: "Office Interior Design",
            pay: "Ceadit Card",
            status: "Pending"

        },
        {
            name: "tapos",
            email: "tapos@gmail.com",
            service: "Office Interior Design",
            pay: "Ceadit Card",
            status: "Pending"

        }
    ]
    return (
        <div>
            <div className="container">
                <div className="row">
                <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Service</th>
                        <th scope="col">Pay With</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                </table>
                    {
                        orderData.map(order => <Order order={order}></Order>)
                    }
                   
                </div>
            </div>

        </div>
    );
};

export default Orders;