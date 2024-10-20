import React from "react"
import AddToCart from "./AddToCart"
import ViewCart from "./ViewCart"
const Products = () => {  
  return (
    <div className='p-2 '>
        <div className='grid grid-cols-4'>
            <div className=''>
                <div className='w-52 border border-black '>
                    <img className='h-[255px] w-[197px]' alt='pic' src='https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__'/>
                    <ViewCart/>
                </div>
                <div className='w-52 h-52'>
                    <h1 className='font-bold'>Monsterra</h1>
                    <h4 className='opacity-50'>Indoor Plant, Low maintenance</h4>
                    <h4>⭐️⭐️⭐️⭐️⭐️ 4.9</h4>
                    <h4 className='font-bold '>₹ 299</h4>
                    <AddToCart/>
                </div>
            </div>
            <div>
                <div className='w-52 border border-black'>
                    <img className='h-[255px] w-[197px]' alt='pic' src='https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__'/>
                    <ViewCart/>
                </div>
                <div className='w-52 h-52'>
                    <h1 className='font-bold'>Monsterra</h1>
                    <h4 className='opacity-50'>Indoor Plant, Low maintenance</h4>
                    <h4>⭐️⭐️⭐️⭐️⭐️ 4.9</h4>
                    <h4 className='font-bold'>₹ 299</h4>
                    <AddToCart/>
                </div>  
            </div>
            <div className=''>
                <div className='w-52 border border-black '>
                    <img className='h-[255px] w-[197px]' alt='pic' src='https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__'/>
                    <ViewCart/>
                </div>
                <div className='w-52 h-52'>
                    <h1 className='font-bold'>Monsterra</h1>
                    <h4 className='opacity-50'>Indoor Plant, Low maintenance</h4>
                    <h4>⭐️⭐️⭐️⭐️⭐️ 4.9</h4>
                    <h4 className='font-bold '>₹ 299</h4>
                    <AddToCart/>
                </div>
            </div>
            <div className=''>
                <div className='w-52 border border-black '>
                    <img className='h-[255px] w-[197px]' alt='pic' src='https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__'/>
                    <ViewCart/>
                </div>
                <div className='w-52 h-52'>
                    <h1 className='font-bold'>Monsterra</h1>
                    <h4 className='opacity-50'>Indoor Plant, Low maintenance</h4>
                    <h4>⭐️⭐️⭐️⭐️⭐️ 4.9</h4>
                    <h4 className='font-bold '>₹ 299</h4>
                    <AddToCart/>
                </div>
            </div>
            <div className=''>
                <div className='w-52 border border-black '>
                    <img className='h-[255px] w-[197px]' alt='pic' src='https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__'/>
                    <ViewCart/>
                </div>
                <div className='w-52 h-52'>
                    <h1 className='font-bold'>Monsterra</h1>
                    <h4 className='opacity-50'>Indoor Plant, Low maintenance</h4>
                    <h4>⭐️⭐️⭐️⭐️⭐️ 4.9</h4>
                    <h4 className='font-bold '>₹ 299</h4>
                    <AddToCart/>
                </div>
            </div>
            <div className=''>
                <div className='w-52 border border-black '>
                    <img className='h-[255px] w-[197px]' alt='pic' src='https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__'/>
                    <ViewCart/>
                </div>
                <div className='w-52 h-52'>
                    <h1 className='font-bold'>Monsterra</h1>
                    <h4 className='opacity-50'>Indoor Plant, Low maintenance</h4>
                    <h4>⭐️⭐️⭐️⭐️⭐️ 4.9</h4>
                    <h4 className='font-bold '>₹ 299</h4>
                    <AddToCart/>
                </div>
            </div>
            <div className=''>
                <div className='w-52 border border-black '>
                    <img className='h-[255px] w-[197px]' alt='pic' src='https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__'/>
                    <ViewCart/>
                </div>
                <div className='w-52 h-52'>
                    <h1 className='font-bold'>Monsterra</h1>
                    <h4 className='opacity-50'>Indoor Plant, Low maintenance</h4>
                    <h4>⭐️⭐️⭐️⭐️⭐️ 4.9</h4>
                    <h4 className='font-bold '>₹ 299</h4>
                    <AddToCart/>
                </div>
            </div>
            <div className=''>
                <div className='w-52 border border-black '>
                    <img className='h-[255px] w-[197px]' alt='pic' src='https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__'/>
                    <ViewCart/>
                </div>
                <div className='w-52 h-52'>
                    <h1 className='font-bold'>Monsterra</h1>
                    <h4 className='opacity-50'>Indoor Plant, Low maintenance</h4>
                    <h4>⭐️⭐️⭐️⭐️⭐️ 4.9</h4>
                    <h4 className='font-bold '>₹ 299</h4>
                    <AddToCart/>
                </div>
            </div>
            <div className=''>
                <div className='w-52 border border-black '>
                    <img className='h-[255px] w-[197px]' alt='pic' src='https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__'/>
                    <ViewCart/>
                </div>
                <div className='w-52 h-52'>
                    <h1 className='font-bold'>Monsterra</h1>
                    <h4 className='opacity-50'>Indoor Plant, Low maintenance</h4>
                    <h4>⭐️⭐️⭐️⭐️⭐️ 4.9</h4>
                    <h4 className='font-bold '>₹ 299</h4>
                    <AddToCart/>
                </div>
            </div>
            <div className=''>
                <div className='w-52 border border-black '>
                    <img className='h-[255px] w-[197px]' alt='pic' src='https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__'/>
                    <ViewCart/>
                </div>
                <div className='w-52 h-52'>
                    <h1 className='font-bold'>Monsterra</h1>
                    <h4 className='opacity-50'>Indoor Plant, Low maintenance</h4>
                    <h4>⭐️⭐️⭐️⭐️⭐️ 4.9</h4>
                    <h4 className='font-bold '>₹ 299</h4>
                    <AddToCart/>
                </div>
            </div>
            <div className=''>
                <div className='w-52 border border-black '>
                    <img className='h-[255px] w-[197px]' alt='pic' src='https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__'/>
                    <ViewCart/>
                </div>
                <div className='w-52 h-52'>
                    <h1 className='font-bold'>Monsterra</h1>
                    <h4 className='opacity-50'>Indoor Plant, Low maintenance</h4>
                    <h4>⭐️⭐️⭐️⭐️⭐️ 4.9</h4>
                    <h4 className='font-bold '>₹ 299</h4>
                    <AddToCart/>
                </div>
            </div>
            <div className=''>
                <div className='w-52 border border-black '>
                    <img className='h-[255px] w-[197px]' alt='pic' src='https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__'/>
                    <ViewCart/>
                </div>
                <div className='w-52 h-52'>
                    <h1 className='font-bold'>Monsterra</h1>
                    <h4 className='opacity-50'>Indoor Plant, Low maintenance</h4>
                    <h4>⭐️⭐️⭐️⭐️⭐️ 4.9</h4>
                    <h4 className='font-bold '>₹ 299</h4>
                    <AddToCart/>
                </div>
            </div>
            <div className=''>
                <div className='w-52 border border-black '>
                    <img className='h-[255px] w-[197px]' alt='pic' src='https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__'/>
                    <ViewCart/>
                </div>
                <div className='w-52 h-52'>
                    <h1 className='font-bold'>Monsterra</h1>
                    <h4 className='opacity-50'>Indoor Plant, Low maintenance</h4>
                    <h4>⭐️⭐️⭐️⭐️⭐️ 4.9</h4>
                    <h4 className='font-bold '>₹ 299</h4>
                    <AddToCart/>
                </div>
            </div>
            <div className=''>
                <div className='w-52 border border-black '>
                    <img className='h-[255px] w-[197px]' alt='pic' src='https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__'/>
                    <ViewCart/>
                </div>
                <div className='w-52 h-52'>
                    <h1 className='font-bold'>Monsterra</h1>
                    <h4 className='opacity-50'>Indoor Plant, Low maintenance</h4>
                    <h4>⭐️⭐️⭐️⭐️⭐️ 4.9</h4>
                    <h4 className='font-bold '>₹ 299</h4>
                    <AddToCart/>
                </div>
            </div>
            <div className=''>
                <div className='w-52 border border-black '>
                    <img className='h-[255px] w-[197px]' alt='pic' src='https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__'/>
                    <ViewCart/>
                </div>
                <div className='w-52 h-52'>
                    <h1 className='font-bold'>Monsterra</h1>
                    <h4 className='opacity-50'>Indoor Plant, Low maintenance</h4>
                    <h4>⭐️⭐️⭐️⭐️⭐️ 4.9</h4>
                    <h4 className='font-bold '>₹ 299</h4>
                    <AddToCart/>
                </div>
            </div>
            <div className=''>
                <div className='w-52 border border-black '>
                    <img className='h-[255px] w-[197px]' alt='pic' src='https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__'/>
                    <ViewCart/>
                </div>
                <div className='w-52 h-52'>
                    <h1 className='font-bold'>Monsterra</h1>
                    <h4 className='opacity-50'>Indoor Plant, Low maintenance</h4>
                    <h4>⭐️⭐️⭐️⭐️⭐️ 4.9</h4>
                    <h4 className='font-bold '>₹ 299</h4>
                    <AddToCart/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Products
