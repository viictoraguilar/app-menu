import { Routes, Route } from "react-router-dom";

import { FoodplateScreen } from "../components/foodplate/FoodplateScreen"
import { Navbar } from "../components/ui/Navbar"
import { SearchScreen } from "../components/search/SearchScreen"
import { FoodScreen } from "../components/food/FoodScreen"

export const DashboardRoutes = () => {
    return (
        <>
           <Navbar/> 
           <div className="container">
                <Routes>
                    <Route path="menu" element={<FoodplateScreen />} />
                    <Route path="search" element={<SearchScreen />} />
                    <Route path="platillo/:menuId" element={<FoodScreen />}/>
                    <Route path="/" element={<FoodplateScreen />} />
                </Routes>
           </div>
        </>
    )
}
