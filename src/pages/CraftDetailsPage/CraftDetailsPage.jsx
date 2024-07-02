import { useLoaderData } from "react-router-dom";
import CraftDetailsCard from "../CraftDetailsCard/CraftDetailsCard";

const CraftDetailsPage = () => {
    const CraftDetails = useLoaderData();
    return (
        <div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mb-5">
                {
                    CraftDetails.map(CraftDetail => <CraftDetailsCard
                    key={CraftDetail._id}
                    CraftDetail={CraftDetail}
                    ></CraftDetailsCard>)
                }
            </div>


        </div>
    );
};

export default CraftDetailsPage;