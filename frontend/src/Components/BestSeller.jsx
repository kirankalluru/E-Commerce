import React,{useContext,useState,useEffect} from 'react'
import { ShopContext } from '../Context/ShopContext'; 
import Title from '../Components/Title'
import ProductItem from '../Components/ProductItem'
const BestSeller = () => {
    const {products} = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestProduct = products.filter((item) => (item.bestseller));
        setBestSeller(bestProduct.slice(0,5));
    }, [])

    
    
  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
        <Title text1={'BEST'} text2={'SELLER'}/>
        <p className='w-3/4 m-auto sm:text-sm text-xs md:text-base text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui rerum tempora natus, autem consectetur numquam nam voluptate blanditiis ullam minima!</p>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
            bestSeller.map((item,index)=>(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
        }
      </div>
    </div>
  )
}

export default BestSeller
