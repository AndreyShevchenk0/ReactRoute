import { Route, Routes, useNavigate } from "react-router-dom"
import Offers from "./Offers"

function About() {
    const navigate = useNavigate()

  return (
    <div className="content">
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolar sit amet consecuturnelit Lorem ipsum dolar sit amet
        consecuturnelit Lorem ipsum dolar sit amet consecuturnelit Lorem ipsum
        dolar sit amet consecuturnelit
      </p>

      <p>
        Lorem ipsum dolar sit amet consecuturnelit Lorem ipsum dolar sit amet
        consecuturnelit Lorem ipsum dolar sit amet consecuturnelit Lorem ipsum
        dolar sit amet consecuturnelit
      </p>

      <button onClick={() => navigate('/products')}>See our products</button>


      <Routes>
        <Route path="offers" element={<Offers />} />
      </Routes>

    </div>
  )
}

export default About;
