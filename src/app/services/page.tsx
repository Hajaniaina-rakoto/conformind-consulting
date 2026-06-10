import Quality from "@/components/sections/services/quality/page";
import OrganicAgriculture from "@/components/sections/services/agriculture/page";
import EnvironmentSocial from "@/components/sections/services/environment/page";
import FoodSafety from "@/components/sections/services/food-safety/page";
import Hse from "@/components/sections/services/hse/page";
import Performance from "@/components/sections/services/performance/page";

export default function ServicesPage(){
    return(
        <main>
            <Quality/>
            <OrganicAgriculture/>
            <EnvironmentSocial/>
            <FoodSafety/>
            <Hse/>
            <Performance/>
        </main>
    );
}