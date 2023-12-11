// Desc: BikeParts page for the user to view all bike parts
// We use react because we are using react components
import React from "react";
// We use inertia link to link to other pages
import { InertiaLink } from '@inertiajs/inertia-react';
// We import the bikepart component to use in the page
import Clothes from "@/Components/Clothes";  // Updated import name
// We import the authenticated layout to use the navbar
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

// We import the navbar component to use the navbar
import NavBar from "@/Components/NavBar";

// In React, we use a function to create a component, which can be a page or a component
// In this case, this is a page, so we create a function called BikeParts
// In the page bikeparts, we pass in the props auth and bikeparts, which we get from the controller, to use in the page

const Clothing = ({ auth, clothes }) => {

    return (
        <div>
            <NavBar auth={auth} />

            <Clothes clothes={clothes} />

            <InertiaLink className="text-white" href={route('basket')}>Go to Basket</InertiaLink>
        </div>
    );
}

// We export the component so we can use it in other pages
export default Clothing;