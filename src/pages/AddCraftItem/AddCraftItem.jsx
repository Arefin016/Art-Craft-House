import { Fade } from 'react-awesome-reveal';
import { Helmet } from 'react-helmet';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Swal from 'sweetalert2'

const AddCraftItem = () => {
  const [text] = useTypewriter({
    words: ['Craft Item'],
    loop:{},
})

    const handleAddCraft = event => {
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
        const email = form.email.value;
        const name = form.name.value;

        const newCraftItem ={photo, item, subcategory, short, price, rating, customization, processing, stock, email, name};
        console.log(newCraftItem);

        //send data to the server
        fetch('https://b9-a10-server-virid.vercel.app/addCrafts',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body:JSON.stringify(newCraftItem)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Add Craft Item Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
        
    }

  return (
    <div className="bg-gray-200 lg:p-16 mb-4 border border-black">
      <Helmet>
        <title>Add Craft Item</title>
      </Helmet>
      <h2 className="text-3xl text-blue-500 text-center font-semibold">
        Add {text}<Cursor></Cursor>
      </h2>
      <Fade direction='right'>
      <form onSubmit={handleAddCraft}>
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
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form stockStatus and email row */}
        <div className="lg:flex lg:flex-row flex-col gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">StockStatus</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="StockStatus"
                name="stock"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="User Email"
                name="email"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form row */}
        <div className="mb-8">
          <div className="form-control">
            <label className="label">
              <span className="label-text"> User Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder=" User Name"
                name="name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Add"
          className="btn text-white bg-black btn-block"
        />
      </form>
      </Fade>
    </div>
  )
}

export default AddCraftItem
