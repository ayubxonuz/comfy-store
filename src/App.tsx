import {RouterProvider, createBrowserRouter} from "react-router-dom"
import {
  About,
  Cart,
  Checkout,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from "./pages"
import Error from "./pages/Error"
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/products/:id",
          element: <SingleProduct />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Register />,
    },
  ])
  return <RouterProvider router={router} />
}

export default App
