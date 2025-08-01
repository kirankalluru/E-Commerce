import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from 'axios'
import {backendUrl} from '../App' 
import { toast } from "react-toastify";

const Add = ({token}) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestSeller, setBestSeller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async(e)=>{
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name",name)
      formData.append("description",description)
      formData.append("price",price)
      formData.append("category",category)
      formData.append("subCategory",subCategory)
      formData.append("bestSeller",bestSeller)
      formData.append("sizes",JSON.stringify(sizes))

      image1 && formData.append("image1",image1)
      image2 && formData.append("image2",image2)
      image3 && formData.append("image3",image3)
      image4 && formData.append("image4",image4)

      const response = await axios.post(backendUrl+"/api/product/add",formData,{headers:{token}});
      
      
      if(response.data.success)
      {
        toast.success(response.data.message);
        setName('');
        setDescription('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice('')
      }
      else{
        toast.error(response.data.message)
      }
      

    } catch (error) {
      console.log(error);
      toast.error(error.message)
      
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-[#FCE8EF]">
      <div className="w-full max-w-3xl p-6 bg-white shadow-lg rounded-md border border-gray-300">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Upload Images</h2>
        <form onSubmit={onSubmitHandler} className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-center">
            <label
              htmlFor="image1"
              className="cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-lg p-4 hover:bg-gray-100 transition"
            >
              <img
                className="w-20 h-20 object-contain"
                src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}
                alt="upload area"
              />
              <input
                type="file"
                id="image1"
                className="hidden"
                
                onChange={(e) => setImage1(e.target.files[0])}
              />
            </label>
            <label
              htmlFor="image2"
              className="cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-lg p-4 hover:bg-gray-100 transition"
            >
              <img
                className="w-20 h-20 object-contain"
                src={!image2 ? assets.upload_area : URL.createObjectURL(image2)}
                alt="upload area"
              />
              <input
                type="file"
                id="image2"
                className="hidden"
                
                onChange={(e) => setImage2(e.target.files[0])}
              />
            </label>
            <label
              htmlFor="image3"
              className="cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-lg p-4 hover:bg-gray-100 transition"
            >
              <img
                className="w-20 h-20 object-contain"
                src={!image3 ? assets.upload_area : URL.createObjectURL(image3)}
                alt="upload area"
              />
              <input
                type="file"
                id="image3"
                className="hidden"
                
                onChange={(e) => setImage3(e.target.files[0])}
              />
            </label>
            <label
              htmlFor="image4"
              className="cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-lg p-4 hover:bg-gray-100 transition"
            >
              <img
                className="w-20 h-20 object-contain"
                src={!image4 ? assets.upload_area : URL.createObjectURL(image4)}
                alt="upload area"
              />
              <input
                type="file"
                id="image4"
                className="hidden"
                
                onChange={(e) => setImage4(e.target.files[0])}
              />
            </label>
          </div>
          <div className="space-y-2">
            <p className="text-gray-700">Product Name</p>
            <input
              type="text"
              placeholder="Product Name"
              className="w-full p-2 border rounded-md bg-gray-100 text-gray-900"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <p className="text-gray-700">Product Description</p>
            <textarea
              placeholder="Description"
              className="w-full p-2 border rounded-md bg-gray-100 text-gray-900"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <p className="text-gray-700">Product Category</p>
              <select
                className="w-full p-2 border rounded-md bg-gray-100 text-gray-900"
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Kids">Kids</option>
              </select>
            </div>
            <div>
              <p className="text-gray-700">Sub Category</p>
              <select
                className="w-full p-2 border rounded-md bg-gray-100 text-gray-900"
                required
                value={subCategory}
                onChange={(e) => setSubCategory(e.target.value)}
              >
                <option value="TopWear">TopWear</option>
                <option value="BottomWear">BottomWear</option>
                <option value="WinterWear">WinterWear</option>
              </select>
            </div>
            <div>
              <p className="text-gray-700">Product Price</p>
              <input
                type="number"
                placeholder="Price"
                className="w-full p-2 border rounded-md bg-gray-100 text-gray-900"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="bestSeller"
              className="w-4 h-4"
              checked={bestSeller}
              onChange={() => setBestSeller(!bestSeller)}
            />
            <label htmlFor="bestSeller" className="text-gray-700">
              Add to BestSeller
            </label>
          </div>

          <div className="space-y-2">
            <p className="text-gray-700">Product Size</p>
            <div className="flex flex-wrap gap-2">
              <div
                className={`px-4 py-2 border rounded-md cursor-pointer ${
                  sizes.includes("S") ? "bg-pink-500 text-white" : "bg-gray-200"
                }`}
                onClick={() =>
                  setSizes(
                    sizes.includes("S")
                      ? sizes.filter((s) => s !== "S")
                      : [...sizes, "S"]
                  )
                }
              >
                S
              </div>
              <div
                className={`px-4 py-2 border rounded-md cursor-pointer ${
                  sizes.includes("M") ? "bg-pink-500 text-white" : "bg-gray-200"
                }`}
                onClick={() =>
                  setSizes(
                    sizes.includes("M")
                      ? sizes.filter((s) => s !== "M")
                      : [...sizes, "M"]
                  )
                }
              >
                M
              </div>
              <div
                className={`px-4 py-2 border rounded-md cursor-pointer ${
                  sizes.includes("L") ? "bg-pink-500 text-white" : "bg-gray-200"
                }`}
                onClick={() =>
                  setSizes(
                    sizes.includes("L")
                      ? sizes.filter((s) => s !== "L")
                      : [...sizes, "L"]
                  )
                }
              >
                L
              </div>
              <div
                className={`px-4 py-2 border rounded-md cursor-pointer ${
                  sizes.includes("XL")
                    ? "bg-pink-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() =>
                  setSizes(
                    sizes.includes("XL")
                      ? sizes.filter((s) => s !== "XL")
                      : [...sizes, "XL"]
                  )
                }
              >
                XL
              </div>
              <div
                className={`px-4 py-2 border rounded-md cursor-pointer ${
                  sizes.includes("XXL")
                    ? "bg-pink-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() =>
                  setSizes(
                    sizes.includes("XXL")
                      ? sizes.filter((s) => s !== "XXL")
                      : [...sizes, "XXL"]
                  )
                }
              >
                XXL
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#FF3F6C] cursor-pointer text-white p-2 rounded-md hover:bg-[#D32F4F] transition"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
