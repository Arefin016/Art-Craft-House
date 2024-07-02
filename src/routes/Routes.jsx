import { createBrowserRouter } from "react-router-dom"
import Root from "../layouts/Root"
import Home from "../pages/Home/Home"
import ErrorPage from "../ErrorPage/ErrorPage"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"
import AddCraftItem from "../pages/AddCraftItem/AddCraftItem"
import PrivateRoute from "./PrivateRoute"
import MyArtCraftList from "../pages/MyArtCraftList/MyArtCraftList"
import CraftDetailsPage from "../pages/CraftDetailsPage/CraftDetailsPage"
import UpdatedCraft from "../pages/UpdatedCraft/UpdatedCraft"
import AllArtCraftItem from "../pages/AllArtCraftItem/AllArtCraftItem"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://b9-a10-server-virid.vercel.app/subCategories'),
      },
      {
        path: '/subCategory/:id',
        element: <PrivateRoute><CraftDetailsPage></CraftDetailsPage></PrivateRoute>,
        loader: () => fetch('https://b9-a10-server-virid.vercel.app/addCrafts')
      },
      {
        path: "/addCraftItem",
        element: (
          <PrivateRoute>
            <AddCraftItem></AddCraftItem>
          </PrivateRoute>
        ),
      },
      {
        path: "/myArtCraftList",
        element: (
          <PrivateRoute>
            <MyArtCraftList></MyArtCraftList>
          </PrivateRoute>
        ),
        loader: () => fetch('https://b9-a10-server-virid.vercel.app/addCrafts')
      },
      {
        path: '/updatedCraft/:id',
        element: <PrivateRoute><UpdatedCraft></UpdatedCraft></PrivateRoute>,
        loader: ({params}) => fetch(`https://b9-a10-server-virid.vercel.app/addCrafts/${params.id}`)
      },
      {
        path: '/allArtCraftItem',
        element: <AllArtCraftItem></AllArtCraftItem>,
        loader: () => fetch('https://b9-a10-server-virid.vercel.app/addCrafts')
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
])
export default router
