import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import RepairKit from "../components/RepairKit";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import NavBar from "@/Components/NavBar";

const RepairKits = ({ auth, repairKit }) => {
    return (
        <div>
            <NavBar auth={auth} />

            <RepairKit repairKit={repairKit} />

            <InertiaLink className="text-white" href={route("basket")}>Go to Basket</InertiaLink>
        </div>
    );
}

export default RepairKits;