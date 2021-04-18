import React from 'react';
import './Admin.css';
import AdminNavbar from './AdminNavbar/AdminNavbar';
import Orders from './Orders/Orders';
const Admin = () => {
    return (
        <div className="admin-navbar pt-5 pb-5  d-flex justify-content-around">
            <div className="col-md-3 col-sm-12">
            
                <AdminNavbar></AdminNavbar>
            </div>
            <div className="col-sm-12 col-md-9">
                <div className="admin-details">
                    <div className="container">
                        <div className="row">
                        <Orders></Orders>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Admin;