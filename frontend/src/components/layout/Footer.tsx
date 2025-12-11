import { Link,useNavigate } from 'react-router-dom';
import { Facebook } from 'lucide-react';
import logo2 from "../../assets/logo.png";
import whatsapp from "../../assets/whatsapp.svg";
import linkedin from "../../assets/linkedin.svg";

const Footer = () => {
  const navigate = useNavigate();
  return (
    // bg-[linear-gradient(to_right,#BFA585,#D8C6A0,#EAD9B0)]
    <footer className="bg-[#176a79] text-white">
      <div className="container mx-auto px-4 py-12">

        {/* GRID → Quick Links + Contact Us stay on the same row */}
        <div className="grid grid-cols-1 md:grid-cols-[auto,auto,auto,auto] gap-10 items-start">

          {/* Brand */}
          <div>
            <img src={logo2} alt="Holistic Wellness Logo" className="w-32 md:w-64" />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-1  font-semibold">
              <li><Link to="/carepathway" className="text-sm hover:text-[#4B2E16]">Care Pathway</Link></li>
              <li><Link to="/programmes/mental-health" className="text-sm hover:text-[#4B2E16]">Mental Health</Link></li>
              <li><Link to="/programmes/wellness-longevity" className="text-sm hover:text-[#4B2E16]">Wellness & Longevity</Link></li>
              <li><Link to="/programmes/holistic-wellbeing" className="text-sm hover:text-[#4B2E16]">Holistic Wellbeing</Link></li>
              <li><Link to="/levels-of-engagement" className="text-sm hover:text-[#4B2E16]">Levels of Engagement</Link></li>
              <li><Link to="/about" className="text-sm hover:text-[#4B2E16]">About us</Link></li>
              <li><Link to="/faq" className="text-sm hover:text-[#4B2E16]">FAQ</Link></li>
              <li><Link to="/privacy-notice" className="text-sm hover:text-[#4B2E16]">Privacy Notice</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-bold mb-4 cursor-pointer" onClick={() => navigate('/contact')}>Contact Us</h4>
            <ul className="space-y-3 font-semibold">
              <li className="text-sm"><span className="">Address: </span>12-18 Theobalds Rd, London, WC1X 8SL</li>
              <li className="text-sm"><span className="">Phone: </span>+44 7770 778104</li>
              <li className="text-sm"><span className="">Email: </span>admin@holisticwell-beingsolutions.com</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <div className="flex gap-4">
              <a className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-[#4B2E16]">
                <Facebook className="size-6" color='black' />
              </a>
              <a className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-[#4B2E16]">
                <img src={whatsapp} className="size-6" />
              </a>
              <a className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-[#4B2E16]">
                <img src={linkedin} className="size-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copy */}
        <div className="mt-8 pt-8 text-center text-sm ">
          <p>&copy; {new Date().getFullYear()} Holistic Well-being Solutions Ltd. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
