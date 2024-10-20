import { useState } from "react";

const AddToCart = () => {
    const [count, setCount] = useState(0);
  
    const handleClick = () => {
      setCount(count + 1);
    };
  
    return (
      <button className='bg-green-800 text-white w-52 h-7 rounded-lg' onClick={handleClick}>- Add to Cart +</button>
    );
  };
  
  export default AddToCart;