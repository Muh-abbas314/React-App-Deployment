
import { Outlet } from "react-router-dom";
import DashHeader from "./DashboardHeader";
export default function Host()
{
    return(<>
    <DashHeader/>
    <Outlet/>
    </>)
}