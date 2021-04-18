import React from 'react';
import './Order.css';
const Order = (props) => {
    const {name, email, service, pay,status} = props.order;
    return (
        <div className="order-table">
            <table class="table pl-5">      
                <tbody>
                    <tr>                       
                        <th scope="row">1</th>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{service}</td>
                        <td>{pay}</td>
                        <td>{status}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};


export default Order;