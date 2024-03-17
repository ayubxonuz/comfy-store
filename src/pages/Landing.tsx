import {NavLink} from "react-router-dom"

function Landing() {
  const imgs = [
    {
      id: 1,
      photo: "/assets/hero1.webp",
    },
    {
      id: 2,
      photo: "/assets/hero2.webp",
    },
    {
      id: 3,
      photo: "/assets/hero3.webp",
    },
    {
      id: 4,
      photo: "/assets/hero4.webp",
    },
  ]
  return (
    <>
      <div className="grid grid-cols-2 mt-16 justify-between">
        <div>
          <h2 className="text-6xl mt-9 font-medium opacity-65 tracking-wide">
            We are changing the way people shop
          </h2>
          <p className="opacity-75 tracking-wide max-w-[450px] w-full my-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            repellat explicabo enim soluta temporibus asperiores aut obcaecati
            perferendis porro nobis.
          </p>
          <NavLink to={"/products"} className="uppercase btn btn-outline">
            our products
          </NavLink>
        </div>
        <div className="carousel h-[460px] ml-auto carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
          <div className="carousel-item gap-x-4">
            {imgs.map((img) => (
              <img
                className="rounded-md w-80 object-cover"
                key={img.id}
                src={img.photo}
              />
            ))}
          </div>
        </div>
      </div>
      <>
        <p className="my-8 tracking-wide opacity-90 capitalize text-3xl">
          featured products
        </p>
        <hr />
      </>
      <div className="grid grid-cols-3 my-9">
        <div className="card w-96 bg-base-100 shadow-lg">
          <figure className="p-3">
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title capitalize font-medium">
              avant-garde lamp
            </h2>
            <p className="">$179.99</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Landing
