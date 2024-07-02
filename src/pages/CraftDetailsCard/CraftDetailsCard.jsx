import { Fade } from "react-awesome-reveal"
import { Link } from "react-router-dom"

const CraftDetailsCard = ({ CraftDetail }) => {
  const { _id, photo, item, subcategory, short, price, rating, email, name } =
    CraftDetail

  return (
    // <div className="flex lg:flex-row flex-col card card-side bg-base-100 shadow-xl">
    //
    //   <div className="card-body">
    //     <h2 className="card-title">{item}</h2>
    //     <p>Sub: {subcategory}</p>
    //     <p>Short: {short}</p>
    //     <p>Price: {price}</p>
    //     <p>Rating: {rating}</p>
    //     <p>Email: {email}</p>
    //     <p>Name: {name}</p>
    //     <div className="">
    //       <Link to={'/'}><button className="btn btn-primary">Back Home</button></Link>
    //     </div>
    //   </div>
    // </div>
    //<div className="card w-96 bg-base-100 shadow-xl">
    <Fade direction="left">
      <div className="card w-96 bg-base-100 shadow-xl">
        <Fade direction="left">
          <figure>
            <img src={photo} alt="" />
          </figure>
        </Fade>
        <Fade direction="left">
          <div className="card-body">
            <h2 className="card-title">{item}</h2>
            <p>Sub: {subcategory}</p>
            <p>Short: {short}</p>
            <p>Price: {price}</p>
            <p>Rating: {rating}</p>
            <p>Email: {email}</p>
            <p>Name: {name}</p>
            <div className="">
              <Link to={"/"}>
                <button className="btn btn-primary">Back Home</button>
              </Link>
            </div>
          </div>
        </Fade>
      </div>
    </Fade>
  )
}

export default CraftDetailsCard
