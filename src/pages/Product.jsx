/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getProductsData } from "../redux/features/userSlice";

const Product = () => {
  const dispatch = useDispatch()
  const { productsData } = useSelector(state => state.user)
  console.log(productsData);

  useEffect(() => {
    dispatch(getProductsData())
  }, [])
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full border mt-5">
              <thead className="bg-slate-200 ">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    RESİM
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    ÜRÜN ADI
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    FİYAT
                  </th>
                </tr>
              </thead>
              <tbody>
                {productsData?.map((item) => (
                  <tr
                    key={item.id}
                    className="bg-white transition duration-300 ease-in-out hover:bg-gray-100"
                  >
                    <td className="text-sm text-gray-900 font-light px-6 py-4 border whitespace-nowrap">
                      <img className="w-16" src={item.imageUrl} alt="image" />
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 border whitespace-nowrap">
                      {item.name}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 border  whitespace-nowrap">
                      {item.price.toFixed(2)} TL
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product