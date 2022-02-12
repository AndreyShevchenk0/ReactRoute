import { Route, Routes, useParams } from 'react-router-dom';

import Offers from './Offers';

function ProductDetails() {
    const { id } = useParams()

  return (
    <div className='content'>
        <div className='product'>
            <div className='image'>
                <img src="https://via.placeholder.com/520x460" alt="" />
            </div>
            <div className='details'>
                <h2>Product - {id}</h2>
                <p> Lorem ipsum dolar sit amet consecuturnelit
                Lorem ipsum dolar sit amet consecuturnelit
                Lorem ipsum dolar sit amet consecuturnelit
                Lorem ipsum dolar sit amet consecuturnelit
                </p>
            </div>
        </div>

        <Routes>
          <Route path="offers" element={<Offers />}/>
        </Routes> 

    </div>
    )
}

export default ProductDetails;
