import React from 'react'

const Header = () => {
  return (
    <div className='grid bg-gray-300 p-4'>
        <div className='flex p-2 rounded-xl'>
        <h1 className=' p-2 text-3xl'>Chaperone</h1>
        <input className=' w-4/12' type='text' placeholder='searching products'/>
        </div>
        <div className='flex flex-row-reverse mt-[-3rem]'>   
            <ul className='flex flex-row-reverse'>
                <li className='p-2 text-lg'>
                    Home
                </li>
                <li className='p-2 text-lg'>
                    Cart
                </li>
            </ul>
            <img className='h-14 w-14 p-2  rounded-full' alt='profile' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAx4m1Iu7nHxuybT7Xuw4YREAVcm98Oobpv4UT-GJNQ8M_i4l9NuqbpRpPLBdvNe-aTbc&usqp=CAU'/>
        </div>
      
    </div>
  )
}

export default Header
