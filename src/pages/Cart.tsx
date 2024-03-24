import {nanoid} from "@reduxjs/toolkit"
import {useSelector} from "react-redux"
import {RootState, useAppDispatch} from "../redux/store"
import {delSelectData} from "../redux/cart/cartSlice"
import SectionTitle from "../components/SectionTitle"

function Cart() {
  const {selectData, subtotal, shipping, orderTotal, tax} = useSelector(
    (store: RootState) => store.cart
  )
  const dispatch = useAppDispatch()

  return (
    <div>
      {selectData.length ? (
        <>
          <SectionTitle text="Shopping cart" />
          <div className="flex mt-4 max-[990px]:block justify-between">
            <div className="grid gap-y-6">
              {selectData?.map((data) => (
                <div
                  key={data.data.data.id}
                  className="flex max-[717px]:block gap-x-20 items-center"
                >
                  <img
                    className="w-32 h-32 object-cover rounded-lg"
                    src={data.data.data.attributes.image}
                    alt=""
                  />
                  <div className="max-w-28 w-full">
                    <p className="capitalize font-medium">
                      {data.data.data.attributes.title}
                    </p>
                    <p className="opacity-70 my-2 text-sm">
                      {data.data.data.attributes.company}
                    </p>
                    <div className="flex items-center my-2">
                      <p className="text-sm">Colors:</p>{" "}
                      <button className={`badge w-6 h-6`}>d</button>
                    </div>
                  </div>
                  <div className="grid gap-y-2 w-min">
                    <p className="text-sm">Amount</p>
                    <select className="select my-2 select-bordered select-xs">
                      {Array.from({length: 20}, (_, index) => (
                        <option key={nanoid()}>
                          {index + (data?.amount ?? 1)}
                        </option>
                      ))}
                    </select>
                    <button
                      onClick={() => {
                        dispatch(delSelectData(data.data.data.id))
                      }}
                      className="btn flex btn-outline btn-sm"
                    >
                      Remove
                    </button>
                  </div>
                  <p className="font-bold text-lg opacity-80">
                    $
                    {(+data.data.data.attributes.price)
                      .toFixed(2)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </p>
                </div>
              ))}
            </div>
            <div className="bg-primary-content max-[990px]:w-full max-[990px]:mt-4 h-[180px] text-base-content text-opacity-75 pt-5 w-72 px-5 rounded-lg">
              <p className="flex border-b-[1px] border-base-content border-opacity-25 pb-2 text-xs justify-between mb-3">
                Subtotal
                <span>${subtotal.toLocaleString("en-US")}</span>
              </p>
              <p className="flex border-b-[1px] border-base-content border-opacity-25 pb-2 text-xs justify-between mb-3">
                Shipping
                <span>${shipping.toFixed(2)}</span>
              </p>
              <p className="flex border-b-[1px] border-base-content border-opacity-25 pb-2 text-xs justify-between mb-3">
                Tax
                <span>${tax.toFixed(2)}</span>
              </p>
              <p className="flex text-base-content my-5 text-sm justify-between">
                Order Total
                <span>${orderTotal.toLocaleString("en-US")}</span>
              </p>
            </div>
          </div>
        </>
      ) : (
        <SectionTitle text="Your cart is empty" />
      )}
    </div>
  )
}
export default Cart
