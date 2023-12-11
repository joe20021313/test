import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import Accessory from "../components/Accessory";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";


import NavBar from "@/Components/NavBar";

const AccessoryProducts = ({ auth, accessories }) => {

    return (
        <div>
            <NavBar auth={auth} />

            <Accessory accessories={accessories} />

            <InertiaLink className="text-white" href={route('basket')}>Go to Basket</InertiaLink>
        </div>
    );
}

export default AccessoryProducts;