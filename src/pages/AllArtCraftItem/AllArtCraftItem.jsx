import { useLoaderData } from "react-router-dom";
import AllArtCraftItemCard from "../AllArtCraftItemCard/AllArtCraftItemCard";
import { Helmet } from "react-helmet";

const AllArtCraftItem = () => {
    const loadedAllArtCraftItem = useLoaderData();

    return (
        <div>
            <Helmet>
                <title>All Art & Craft List</title>
            </Helmet>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mb-5">
                {
                    loadedAllArtCraftItem.map(allArtCraftItem => <AllArtCraftItemCard
                    key={allArtCraftItem._id}
                    allArtCraftItem={allArtCraftItem}
                    ></AllArtCraftItemCard>)
                }
            </div>
        </div>
    );
};

export default AllArtCraftItem;