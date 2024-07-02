import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const AllArtCraftItemCard = ({ allArtCraftItem }) => {
  const {_id, photo, item, subcategory, short, price, rating, email, name} = allArtCraftItem;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <Fade direction="left">
      <figure>
        <img
          src={photo}
          alt=""
        />
      </figure>
      </Fade>
      <Fade direction="left">
      <div className="card-body">
        <h2 className="card-title">{item}</h2>
        <p>Sub Name: {subcategory}</p>
        <p>Short: {short}</p>
        <div className="flex lg:flex-row flex-col">
          <p>Price: {price}</p>
          <p>Rating: {rating}</p>
        </div>
        <div>
          <Link
           to={`/subCategory/${_id}`}
           ><button className="btn">View Details</button></Link>
        </div>
      </div>
      </Fade>
    </div>
  )
}

export default AllArtCraftItemCard
