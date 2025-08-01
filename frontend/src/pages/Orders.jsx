import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "../Components/Title";
import axios from "axios";
const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      }

      const response = await axios.post(
        backendUrl + "/api/order/userorders",
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        let allOrdersItem = [];
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;
            allOrdersItem.push(item);
          });
        });

        setOrderData(allOrdersItem).reverse();
      }
    } catch (error) {}
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className="border-t pt-10 px-4 md:px-8 lg:px-12">
  <div className="text-2xl font-semibold text-center md:text-left">
    <Title text1={"MY"} text2={"ORDERS"} />
  </div>
  <div className="mt-6 space-y-6">
    {orderData.map((item, index) => (
      <div
        key={index}
        className="p-4 border rounded-lg shadow-sm bg-white flex flex-col md:flex-row md:items-center md:justify-between gap-6"
      >
        {/* Product Image & Details */}
        <div className="flex items-start gap-4 text-sm w-full md:w-2/3">
          <img className="w-20 h-20 object-cover rounded-md" src={item.image[0]} alt="product" />
          <div>
            <p className="sm:text-base font-medium text-gray-900">{item.name}</p>
            <div className="flex flex-wrap items-center gap-3 mt-1 text-gray-700 text-sm">
              <p className="text-base font-semibold">
                {currency} {item.price}
              </p>
              <p>Qty: <span className="font-medium">{item.quantity}</span></p>
              <p>Size: <span className="font-medium">{item.size}</span></p>
            </div>
            <p className="text-gray-600 mt-1 text-xs">
              Date: <span className="text-gray-500">{new Date(item.date).toDateString()}</span>
            </p>
            <p className="text-gray-600 mt-1 text-xs">
              Payment: <span className="text-gray-500">{item.paymentMethod}</span>
            </p>
          </div>
        </div>

        {/* Status & Actions */}
        <div className="w-full md:w-1/3 flex flex-col md:flex-row md:justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <p className="px-4 py-1 text-xs md:text-sm font-medium bg-gray-100 rounded-md">{item.status}</p>
          </div>
          <button 
            onClick={loadOrderData} 
            className="border px-4 py-2 text-sm font-medium rounded-md cursor-pointer bg-gray-800 text-white hover:bg-gray-700 transition"
          >
            Track Order
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default Orders;
