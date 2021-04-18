import React from 'react';
import './AddService.css';
const AddService = () => {
    return (
        <div className=" d-flex justify-content-between">
            <div className="col-md-7 p-4">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label input-title text-sm-start">Name</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label input-title text-sm-start">Price</label>
                    <input type="value" class="form-control" id="exampleFormControlInput1" placeholder="Price" />
                </div>
            </div>
            <div className="col-md-5 p-4">
                <div class="mb-3">
                    <label for="formFile" class="form-label input-title text-sm-start">Image</label>
                    <input class="form-control" type="file" id="formFile"/>
                </div>
            </div>
            </div>
    );
};

export default AddService;