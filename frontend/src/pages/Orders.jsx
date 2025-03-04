import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from '../Components/Title'
const Orders = () => {
  const {products,currency} = useContext(ShopContext);
  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'}/>
        </div>
        <div> 
            {
              products.slice(1,4).map((item,index)=>(
                <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                  <div className='flex items-start gap-6 text-sm'>
                    <img className='w-16 sm:w-20' src={item.image[0]} alt="img" />
                    <div>
                      <p className='sm:text-base font-medium '>{item.name}</p>
                      <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                          <p className='text-lg '>{currency}{item.price}</p>
                          <p className='text-base'>Quantity: 1</p>
                      </div>
                    </div>

                  </div>

                  
                </div>
              ))
            }
        </div>
    </div>
  )
}

export default Orders
