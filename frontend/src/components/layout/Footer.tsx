import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import logo2 from "../../assets/logo.png"

const Footer = () => {
  return (
    <footer className="bg-[linear-gradient(to_right,#BFA585,#D8C6A0,#EAD9B0)]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <img src={logo2} alt="Holistic Wellness Logo" className='w-32 md:w-64'/>
            
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-1 text-[#4B2E16] font-semibold">
              <li>
                <Link to="/programmes" className="text-sm hover:text-[#E8D7BA] transition-smooth">
                  Programmes
                </Link>
              </li>
              <li>
                <Link to="/exclusive-access" className="text-sm hover:text-[#E8D7BA] transition-smooth">
                  Exclusive Access
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-sm  hover:text-[#E8D7BA] transition-smooth">
                  Book Now
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm hover:text-[#E8D7BA] transition-smooth">
                  FAQ
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
                123 Wellness Ave, Serenity City
              </li>
              <li className="flex items-center gap-2 text-sm ">
                <Phone className="h-4 w-4 text-black" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-sm ">
                <Mail className="h-4 w-4 text-black" />
                hello@holisticwellness.com
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
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-[#E8D7BA] hover:text-[#E8D7BA]-foreground transition-smooth"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-[#E8D7BA] hover:text-[#E8D7BA]-foreground transition-smooth"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Holistic Wellness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
