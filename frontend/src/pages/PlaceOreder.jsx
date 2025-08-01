import React, { useContext, useState } from "react";
import Title from "../Components/Title";
import CartTotal from "../Components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../Context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
const PlaceOreder = () => {
  const [method, setMethod] = useState("cod");
  const {
    navigate,
    backendUrl,
    token,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_fee,
    products,
  } = useContext(ShopContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
  });

  const onchangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const orderItems = [];

      for(const items in cartItems){
        for(const item in cartItems[items])
        {
          if(cartItems[items][item]>0){
            const itemInfo = structuredClone(products.find(product => product._id === items))
            if (itemInfo) {
              itemInfo.size = item
              itemInfo.quantity = cartItems[items][item]
              orderItems.push(itemInfo)
            }
          }
        }
      }



      let orderData = {
        address:formData,
        items: orderItems,
        amount:getCartAmount()+delivery_fee
      }
      console.log("Final Order Data:", orderData);


      switch (method) {
        //api call for cod
        case 'cod':
          const response = await axios.post(backendUrl+'/api/order/place',orderData,{headers:{token}})
          if (response.data.success) {
            setCartItems({})
            navigate('/order')
          }
          else{
            toast.error(response.data.message);
          }
          break;
          
        case 'stripe':
          const responseStripe = await axios.post(backendUrl+'/api/orders/stripe',orderData,{token});
          if (responseStripe.data.success) {
            const {session_url} = responseStripe.data;
            window.location.replace(session_url);

          }
          else{
            toast.error(responseStripe.data.message);
          }


          break;
      
        default:
          break;
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      
    }
  };
  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t"
    >
      {/* -------------Left Side----------------- */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3 ">
          <input
            onChange={onchangeHandler}
            name="firstName"
            value={formData.firstName}
            className="border border-gray-300 py-1.5 px-3.5 w-full"
            placeholder="First Name"
            type="text"
            required
          />
          <input
            onChange={onchangeHandler}
            name="lastName"
            value={formData.lastName}
            className="border border-gray-300 py-1.5 px-3.5 w-full"
            placeholder="Last Name"
            type="text"
            required
          />
        </div>
        <input
          onChange={onchangeHandler}
          name="email"
          value={formData.email}
          className="border border-gray-300 py-1.5 px-3.5 w-full"
          placeholder="Email Address"
          type="email"
          required
        />
        <input
          onChange={onchangeHandler}
          name="street"
          value={formData.street}
          className="border border-gray-300 py-1.5 px-3.5 w-full"
          placeholder="Street"
          type="text"
          required
        />

        <div className="flex gap-3 ">
          <input
            onChange={onchangeHandler}
            name="city"
            value={formData.city}
            className="border border-gray-300 py-1.5 px-3.5 w-full"
            placeholder="City"
            type="text"
            required
          />
          <input
            onChange={onchangeHandler}
            name="state"
            value={formData.state}
            className="border border-gray-300 py-1.5 px-3.5 w-full"
            placeholder="State"
            type="text"
            required
          />
        </div>

        <div className="flex gap-3 ">
          <input
            onChange={onchangeHandler}
            name="zipCode"
            value={formData.zipCode}
            className="border border-gray-300 py-1.5 px-3.5 w-full"
            placeholder="ZipCode"
            type="number"
            required
          />
          <input
            onChange={onchangeHandler}
            name="country"
            value={formData.country}
            className="border border-gray-300 py-1.5 px-3.5 w-full"
            placeholder="Country"
            type="text"
            required
          />
        </div>
        <input
          onChange={onchangeHandler}
          name="phone"
          value={formData.phone}
          className="border border-gray-300 py-1.5 px-3.5 w-full"
          placeholder="Phone"
          type="number"
          required
        />
      </div>

      {/*-------------------------- Right Side--------------------- */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          {/* ---------Payment Method Seclection---------------- */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "stripe" ? "bg-gray-400" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="slogo" />
            </div>

            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "razorpay" ? "bg-gray-400" : ""
                }`}
              ></p>
              <img
                className="h-5 mx-4"
                src={assets.razorpay_logo}
                alt="slogo"
              />
            </div>

            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "cod" ? "bg-gray-400" : ""
                }`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          <div className="w-full text-end">
            <button
              type="submit"
              className="bg-black text-white font-semibold my-8 py-3 px-8 rounded-lg shadow-md active:bg-gray-800 cursor-pointer"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOreder;
