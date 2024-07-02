import { Fade } from "react-awesome-reveal"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"

const MyArtCraftListCard = ({
  MyArtCraftList,
  setMyArtCraftLists,
  MyArtCraftLists,
}) => {
  const { _id, photo, item, price, rating, customization, stock } =
    MyArtCraftList

  const handleDelete = (_id) => {
    console.log(_id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://b9-a10-server-virid.vercel.app/addCrafts/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Craft And Art Items has been deleted.",
                icon: "success",
              })
              const remaining = MyArtCraftLists.filter((cof) => cof._id !== _id)
              setMyArtCraftLists(remaining)
            }
          })
      }
    })
  }

  return (
    <Fade direction="left">
      <div className="card w-96 bg-base-100 shadow-xl">
        <Fade direction="left">
          <figure>
            <img src={photo} alt="Shoes" />
          </figure>
        </Fade>
        <Fade direction="left">
          <div className="card-body">
            <h2 className="card-title">{item}</h2>
            <p>Price: {price}</p>
            <p>Rating: {rating}</p>
            <p>Customization: {customization}</p>
            <p>Stock Status: {stock}</p>
            <div className="space-x-5">
              <Link to={`/updatedCraft/${_id}`}>
                <button className="btn bg-blue-500 text-white">Update</button>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn bg-red-500 text-white"
              >
                Delete
              </button>
            </div>
          </div>
        </Fade>
      </div>
    </Fade>
  )
}

export default MyArtCraftListCard
