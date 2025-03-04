import React from 'react'

const NewsLetter = () => {

    const onSubmitHandler = (e) => {
        e.preventDefault();
        
    }

  return (
    <div className="text-center px-4">
    <p className="text-2xl font-medium text-gray-800">Subscribe Now And Get 20% Off</p>
    <p className="text-gray-700 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, at tempore adipisci dolorum, totam perferendis aliquid tenetur provident laudantium fugiat tempora debitis reiciendis! Error maiores iure sapiente non, quo labore.
    </p>

    <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 mx-auto my-6 flex items-center gap-2 border border-gray-300 rounded-md overflow-hidden">
        <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full flex-1 outline-none p-3 text-gray-700"
            required
        />
        <button className="bg-black text-white py-4 px-10 text-sm font-medium hover:bg-gray-800 transition cursor-pointer">
            Subscribe
        </button>
    </form>
</div>

  )
}

export default NewsLetter
