import { useForm } from "@inertiajs/react";
import React, { useState } from "react";
import InputError from "@/Components/InputError";

const RepairKit = ({ repairKit, success }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        repairkitsid_hidden: "",
        quantity: "",
    });

    const [selectedRepairKit, setSelectedRepairKit] = useState("");

    const submit = (e) => {
        e.preventDefault();
        post("/addBasketRepairkit", data);
    };

    const repairKitList = repairKit.map((kit) => (
        <div
            key={kit.repairkitsid}
            className={`col-md-6 mb-4 ${selectedRepairKit === kit.repairkitsid ? "selected-repair-kit" : ""
                }`}
            onClick={() => {
                setSelectedRepairKit(kit.repairkitsid);
                setData("repairkitsid_hidden", kit.repairkitsid);
            }}
        >
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title text-center h4">{kit.productname}</h5>
                    <p className="card-text">{kit.description}</p>
                    <p className="card-text">
                        <strong>Price:</strong> £{kit.price}
                    </p>
                    <p className="card-text">
                        <strong>Category:</strong> {kit.category}
                    </p>
                    <p className="card-text">
                        <strong>Compatible with:</strong> {kit.CompatibleWithType}
                    </p>
                    <div className="form-group">
                        <label htmlFor={`quantity_${kit.repairkitsid}`}>Quantity</label>
                        <input
                            id={`quantity_${kit.repairkitsid}`}
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
        <form onSubmit={submit}>
            <div className="container">
                <div className="row">{repairKitList}</div>
            </div>
        </form>
    );
};

export default RepairKit;