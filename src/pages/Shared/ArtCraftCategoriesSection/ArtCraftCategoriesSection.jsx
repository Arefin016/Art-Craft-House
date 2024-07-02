import { Fade } from "react-awesome-reveal"
import { Link } from "react-router-dom"

const ArtCraftCategoriesSection = ({ sCategory }) => {
  const { image, SubcategoryName, Desc } = sCategory
  return (
    
    <div className="card w-96 bg-base-100 shadow-xl">
     <Fade direction="left">
     <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
     </Fade>
     <Fade direction="left">
     <div className="card-body">
        <h2 className="card-title">{SubcategoryName}</h2>
        <p>Desc: {Desc}</p>
        <div className="">
          <Link to='/allArtCraftItem'>
          <button className="btn">Show Details</button>
          </Link>
        </div>
      </div>
     </Fade>
    </div>
  )
}

export default ArtCraftCategoriesSection
