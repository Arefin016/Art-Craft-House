import { Fade } from "react-awesome-reveal"
import { Link } from "react-router-dom"

const SubCategoryCard = ({ subCategory }) => {
  const { image, Category, SubcategoryName, _id, Desc } = subCategory
  return (
    <Fade direction="left">
      <div className="card w-96 bg-base-100 shadow-xl">
        <Fade direction="left">
          <figure>
            <img src={image} alt="" />
          </figure>
        </Fade>
        <Fade direction="left">
          <div className="card-body">
            <h2 className="text-2xl text-orange-400">Category:{Category}</h2>
            <h2 className="text-xl text-blue-400">
              Sub Category:{SubcategoryName}
            </h2>
            <p>Desc: {Desc}</p>
            <div className="">
              <Link to={`/subCategory/${_id}`}>
                <button className="btn">View Details</button>
              </Link>
            </div>
          </div>
        </Fade>
      </div>
    </Fade>
  )
}

export default SubCategoryCard
