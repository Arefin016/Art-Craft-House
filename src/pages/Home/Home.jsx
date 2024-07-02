import { useLoaderData } from "react-router-dom";
import Banner from "../Shared/Banner/Banner";
import SubCategoryCard from "../SubCategoryCard/SubCategoryCard";
import AskQuestion from "../Shared/AskQuestion/AskQuestion";
import ArtCraftCategoriesSection from "../Shared/ArtCraftCategoriesSection/ArtCraftCategoriesSection";
import CustomerReview from "../Shared/CustomerReview/CustomerReview";
import { useTypewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";

const Home = () => {
    const [text] = useTypewriter({
        words: ['items section'],
        loop:{},
    })
    const subCategories = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <h2 className="text-blue-500 text-3xl text-center font-semibold mt-5">Craft {text}</h2>
            <Fade direction="right">
            <p className="text-center mb-8 font-semibold">Unleash your creativity with our exquisite collection of artisanal crafts. <br /> Explore, inspire, and craft your dreams into reality.</p>
            </Fade>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mb-5">
           {
                subCategories.map(subCategory => <SubCategoryCard
                key={subCategory._id}
                subCategory={subCategory}
                >
                </SubCategoryCard>)
            }
           </div>
           <h2 className="text-blue-500 text-3xl text-center font-semibold my-5">Art & Craft Categories Section</h2>
           <p className="text-center mb-5">Dive into a world of creativity with our diverse art & craft categories. From painting to pottery, <br /> explore endless possibilities to fuel your imagination</p>
           <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mb-5">
            {
                subCategories.map(sCategory => <ArtCraftCategoriesSection
                key={sCategory}
                sCategory={sCategory}
                ></ArtCraftCategoriesSection>)
            }
            </div> 
           <AskQuestion></AskQuestion>
           <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;