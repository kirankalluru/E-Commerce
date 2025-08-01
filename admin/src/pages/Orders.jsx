import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";
const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }

    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };


  const statusHandler = async (e,orderId)=>{
    try {
      const response = await axios.post(backendUrl+'/api/order/status',{orderId,status:e.target.value},{headers:{token}})
      if (response.data.success) {
        await fetchAllOrders();
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, [token]);
  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
  <h3 className="text-xl font-semibold mb-6">My Orders</h3>
  <div className="space-y-6">
    {orders.map((order, index) => (
      <div key={index} className="bg-white p-4 md:p-6 shadow-md rounded-lg">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          {/* Order Image */}
          <img
            src={assets.parcel_icon}
            alt="parcel"
            className="w-16 md:w-20 h-16 md:h-20"
          />

          {/* Order Details */}
          <div className="flex-1 ">
            <div className="space-y-1">
              {order.items.map((item, idx) => (
                <p key={idx} className="text-sm text-gray-700">
                  {item.name} × {item.quantity}{" "}
                  <span className="text-gray-500">{item.size}</span>
                </p>
              ))}
            </div>
            <p className="text-sm font-medium mt-2">
              {order.address.firstName} {order.address.lastName}
            </p>
            <p className="text-sm text-gray-600 break-words whitespace-normal max-w-3/4 md:max-w-full">
              {order.address.street}, {order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipCode}
            </p>
            <p className="text-sm text-gray-600">{order.address.phone}</p>
          </div>

          {/* Order Summary */}
          <div className="text-sm text-gray-700">
            <p>Items: {order.items.length}</p>
            <p>Method: {order.paymentMethod}</p>
            <p>
              Payment:{" "}
              <span className={order.payment ? "text-green-500" : "text-red-500"}>
                {order.payment ? "Done" : "Pending"}
              </span>
            </p>
            <p>Date: {new Date(order.date).toLocaleDateString()}</p>
            <p className="text-lg font-semibold mt-2">{currency}{order.amount}</p>
          </div>
        </div>

        {/* Status Dropdown */}
        <div className="mt-4">
          <select onChange={(e)=>statusHandler(e,order._id)} value={order.status} className="border border-gray-300 px-4 py-2 rounded-md text-sm w-full md:w-auto">
            <option value="Order Placed">Order Placed</option>
            <option value="Packing">Packing</option>
            <option value="Shipped">Shipped</option>
            <option value="Out For Delivery">Out For Delivery</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
      </div>
    ))}
  </div>
</div>


  );
};

export default Orders;
