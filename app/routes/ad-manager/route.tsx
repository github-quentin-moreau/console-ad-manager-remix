import {Outlet} from "@remix-run/react";
import AdManagerHeaderComponent from "~/components/basics/ad-manager.header.component";


const AdManagerRoute = () => {
    return (
        <div>
            <AdManagerHeaderComponent/>
            <Outlet/>
        </div>
    )
}

export default AdManagerRoute;