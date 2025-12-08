import { Link } from 'react-router-dom';
import { Facebook,Mail, Phone, MapPin } from 'lucide-react';
import logo2 from "../../assets/logo.png"
import whatsapp from "../../assets/whatsapp.svg"
import linkedin from "../../assets/linkedin.svg"

const Footer = () => {
  return (
    <footer className="bg-[linear-gradient(to_right,#BFA585,#D8C6A0,#EAD9B0)]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid items-center justify-center grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <img src={logo2} alt="Holistic Wellness Logo" className='w-32 md:w-64'/>
            
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-1 text-[#4B2E16] font-semibold">
              <li>
                <Link to="/programmes/mental-health" className="text-sm hover:text-[#E8D7BA] transition-smooth">
                  Mental Health
                </Link>
              </li>
              <li>
                <Link to="/programmes/wellness-longevity" className="text-sm hover:text-[#E8D7BA] transition-smooth">
                  Wellness & Longevity
                </Link>
              </li>
              <li>
                <Link to="/programmes/holistic-wellbeing" className="text-sm  hover:text-[#E8D7BA] transition-smooth">
                  Holistic Wellbeing
                </Link>
              </li>
              <li>
                <Link to="/privacy-notice" className="text-sm hover:text-[#E8D7BA] transition-smooth">
                  Privacy Notice
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-[#4B2E16] font-semibold">
              <li className="flex items-center gap-2 text-sm ">
                <MapPin className="h-4 w-4 text-black" />
                12-18 Theobalds Rd, London, WC1X 8SL
              </li>
              <li className="flex items-center gap-2 text-sm ">
                <Phone className="h-4 w-4 text-black" />
                +44 7770 778104
              </li>
              <li className="flex items-center gap-2 text-sm ">
                <Mail className="h-4 w-4 text-black" />
                admin@holisticwell-beingsolutions.com
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-[#E8D7BA] hover:text-[#E8D7BA]-foreground transition-smooth"
              >
                <Facebook className="size-6"  />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-[#E8D7BA] hover:text-[#E8D7BA]-foreground transition-smooth"
              >
                <img src={whatsapp} alt="" className='size-6' />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-[#E8D7BA] hover:text-[#E8D7BA]-foreground transition-smooth"
              >
                <img src={linkedin} alt="" className='size-6' />
              </a>
            </div>
          </div>
        </div>

        <div className=" mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Holistic Wellness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
