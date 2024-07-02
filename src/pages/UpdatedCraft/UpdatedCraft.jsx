import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter";
import Swal from "sweetalert2";

const UpdatedCraft = () => {

  const [text] = useTypewriter({
    words: ['Craft Item'],
    loop:{},
})

    const UpdatedCrafts = useLoaderData();
    const {photo, item, subcategory, short, price, rating, customization, processing, stock, _id} = UpdatedCrafts;

    const handleUpdateCraft = event => {
        event.preventDefault();

        const form = event.target;

        const photo = form.photo.value;
        const item = form.item.value;
        const subcategory = form.subcategory.value;
        const short = form.short.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processing = form.processing.value;
        const stock = form.stock.value;

        const updateCraftItem ={photo, item, subcategory, short, price, rating, customization, processing, stock};
        console.log(updateCraftItem);

        //send data to the server
        fetch(`https://b9-a10-server-virid.vercel.app/addCrafts/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body:JSON.stringify(updateCraftItem)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount){
                Swal.fire({
                    title: 'Success!',
                    text: 'Update Craft Item Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
        
    }

    return (
        <div className="bg-gray-200 lg:p-16 mb-4 border border-black">
          <Helmet>
            <title>Updated Craft:{_id}</title>
          </Helmet>
        <h2 className="text-3xl text-blue-500 text-center font-semibold">
          Update {text} : {item}
        </h2>
        <Fade direction="right">
        <form onSubmit={handleUpdateCraft}>
          {/* form image and item-name row */}
          <div className="lg:flex lg:flex-row flex-col gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Image"
                  name="photo"
                  defaultValue={photo}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Item_name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Item_name"
                  name="item"
                  defaultValue={item}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form subcategory and description row */}
          <div className="lg:flex lg:flex-row flex-col gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Subcategory_Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Subcategory_Name"
                  name="subcategory"
                  defaultValue={subcategory}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Short description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Short description"
                  name="short"
                  defaultValue={short}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form price and rating row */}
          <div className="lg:flex lg:flex-row flex-col gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Price"
                  name="price"
                  defaultValue={price}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Rating"
                  name="rating"
                  defaultValue={rating}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form  customization- example and processing_time
   row */}
          <div className="lg:flex lg:flex-row flex-col gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Customization</span>
              </label>
              <label className="input-group">
                <input
                  type="boolean"
                  placeholder="Customization"
                  name="customization"
                  defaultValue={customization}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Processing_time</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Processing_time"
                  name="processing"
                  defaultValue={processing}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form stockStatus and email row */}
          <div className="lg:flex lg:flex-row flex-col gap-5 mb-5">
            <div className="form-control md:w-full">
              <label className="label">
                <span className="label-text">StockStatus</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="StockStatus"
                  name="stock"
                  defaultValue={stock}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Update"
            className="btn text-white bg-black btn-block"
          />
        </form>
        </Fade>
      </div>
    );
};

export default UpdatedCraft;