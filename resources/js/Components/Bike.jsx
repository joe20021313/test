import { useForm } from "@inertiajs/react";
import React, { useState } from "react";
import InputError from "@/Components/InputError";

const Bike = ({ bikes, success }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        bikeid_hidden: "",
        quantity: "",
    });

    const [selectedBikeId, setSelectedBikeId] = useState("");

    const submit = (e) => {
        e.preventDefault();
        post("/addBasket", data);
    };

    const bikeList = bikes.map((bike) => (
        <div
            key={bike.bikeid}
            className={`col-md-6 mb-4 ${selectedBikeId === bike.bikeid ? "selected-bike" : ""
                }`}
            onClick={() => {
                setSelectedBikeId(bike.bikeid);
                setData("bikeid_hidden", bike.bikeid);
            }}
        >
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title text-center h4">{bike.productname}</h5>
                    <p className="card-text">{bike.description}</p>
                    <p className="card-text">
                        <strong>Price:</strong> £{bike.price}
                    </p>
                    <p className="card-text">
                        <strong>Category:</strong> {bike.category}
                    </p>
                    <div className="form-group">
                        <label htmlFor={`quantity_${bike.bikeid}`}>Quantity</label>
                        <input
                            id={`quantity_${bike.bikeid}`}
                            className="form-control"
                            min="0"
                            type="number"
                            value={data.quantity}
                            name="quantity"
                            onChange={(e) => setData("quantity", e.target.value)}
                        />
                        <InputError message={errors.quantity} className="mt-2" />
                    </div>
                </div>
                <div className="card-footer">
                    <button type="submit" className="btn btn-dark text-dark">
                        Add to basket
                    </button>
                </div>
            </div>
        </div>
    ));

    return (
        <div>
            <form onSubmit={submit}>
                <div className="container">
                    <div className="row">{bikeList}</div>
                    <p className="text-white">{success}</p>
                </div>
            </form>
        </div>
    );
};

export default Bike;