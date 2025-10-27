import { SlEnvolope } from "react-icons/sl";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg text-center text-dark p-5 ' >
      <h3>CONTACT US</h3>
      <h6 className="mt-4"><SlEnvolope className="fs-4"/>rbuilder@gmail.com</h6>
      <h6><FaPhoneAlt className="fs-4"/>
        9865962751</h6>
        <h5>Contact with us</h5>
        <div className="d-flex justify-content-center align-item-center">
          <FaInstagram className="fs-4 me-3"/>
          <FaFacebook className="fs-4 me-3"/>
          <FaLinkedin className="fs-4 me-3"/>
        </div>
        <p className="mt-3">Designed & build using react</p>
    </div>
    
  )
}

export default Footer