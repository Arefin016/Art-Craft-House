import { useLoaderData } from "react-router-dom";
import MyArtCraftListCard from "../MyArtCraftListCard/MyArtCraftListCard";
import { useState } from "react";
import { useTypewriter } from "react-simple-typewriter";
import { Helmet } from "react-helmet";

const MyArtCraftList = () => {
    const [text] = useTypewriter({
        words: ['My Art&Craft List'],
        loop:{},
    })

    const loadedMyArtCraftLists = useLoaderData();
    const[MyArtCraftLists, setMyArtCraftLists] = useState(loadedMyArtCraftLists);
    return (
        <div>
            <Helmet>
                <title>My Art Craft List</title>
            </Helmet>
            <h2 className="text-blue-500 text-center text-3xl mb-4 font-semibold">{text}</h2>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mb-5">
                {
                    MyArtCraftLists.map(MyArtCraftList => <MyArtCraftListCard
                    key={MyArtCraftList._id}
                    MyArtCraftList={MyArtCraftList}
                    MyArtCraftLists={MyArtCraftLists}
                    setMyArtCraftLists={setMyArtCraftLists}
                    ></MyArtCraftListCard>)
                }
            </div>
        </div>
    );
};

export default MyArtCraftList;