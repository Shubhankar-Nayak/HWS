import { useNavigate } from "react-router-dom";
import { Facebook } from "lucide-react";
import logo2 from "../../assets/logo.png";
import whatsapp from "../../assets/whatsapp.svg";
import linkedin from "../../assets/linkedin.svg";
import PrivacyPolicy from "../../assets/PrivacyPolicy.pdf";

const Footer = () => {
  const navigate = useNavigate();
    const handleDownload = (file, filename) => {
    console.log("Downloading:", filename);
    const link = document.createElement("a");
    link.href = file;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <footer className="w-full flex flex-col items-center justify-center">
      <div className="bg-[#053d57] flex flex-col w-full">
        <div
          className="
            text-[#ebf0f2]
            grid grid-cols-1
            md:grid-cols-2
            lg:grid-cols-[1fr_1fr_1fr_1fr_2fr]
            gap-6 md:gap-8
            px-6 md:px-12 lg:px-[100px]
            py-8 md:py-10
          "
          style={{ fontFamily: "Josefin Sans" }}
        >
          {/* Logo */}
          <div className="flex items-center justify-center md:justify-start" onClick={() => (navigate("/"))}>
            <img
              src={logo2}
              alt="Logo"
              className="size-32 md:size-36 lg:size-40"
            />
          </div>

          {/* Links */}
          {[
            [
              { text: "Mental Health", link: "/programmes/mental-health" },
              { text: "Wellness & Longevity", link: "/programmes/wellness-longevity" },
              { text: "Holistic Wellbeing", link: "/programmes/holistic-wellbeing" },
            ],
            [
              { text: "Care Pathway", link: "/carepathway" },
              { text: "Levels of Engagement", link: "/levels-of-engagement" },
              { text: "About", link: "/about" },
            ],
            [
              { text: "Contact", link: "/contact" },
              { text: "FAQ", link: "/faq" },
              { text: "Privacy Policy", onclick: () => handleDownload(PrivacyPolicy, "HWS Privacy Policy.pdf")  },
            ],
          ].map((group, idx) => (
            <div
              key={idx}
              className="
                flex flex-col
                items-center md:items-start
                justify-center
                gap-2 md:gap-3
                text-xs md:text-sm
              "
            >
              {group.map(({ text, link,onclick }, i) => (
                <p
                  key={i}
                  onClick={() => {
                    if (onclick) {
                      onclick();
                    } else {
                      navigate(link);
                    }
                  }}
                  className="
                    relative cursor-pointer
                    after:absolute after:left-0 after:bottom-0
                    after:h-[2px] after:w-full after:bg-[#ebf0f2]
                    after:origin-left after:scale-x-0
                    after:transition-transform after:duration-300
                    hover:after:scale-x-100
                    hover:text-[#ebf0f2]/50
                  "
                >
                  {text}
                </p>
              ))}
            </div>
          ))}

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-center lg:items-start justify-center w-full">
            <ul className="space-y-2 md:space-y-3 text-center md:text-left text-xs md:text-sm">
              <li>
                <span>Address: </span>
                12-18 Theobalds Rd, London, WC1X 8SL
              </li>
              <li>
                <span>Phone: </span>
                +44 7770 778104
              </li>
              <li>
                <span>Email: </span>
                admin@holisticwell-beingsolutions.com
              </li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div
          className="
            flex items-center justify-center
            md:justify-end
            w-full gap-3 md:gap-4
            pb-4 md:pb-5
            px-4 md:pr-[100px] lg:pr-[380px]
          "
        >
          <div className="cursor-pointer rounded-full size-8 md:size-10 flex items-center justify-center bg-[#ebf0f2] hover:bg-[#ebf0f2]/50">
            <Facebook
              size={20}
              className="md:w-[25px] md:h-[25px]"
              color="black"
            />
          </div>
          <div className="cursor-pointer rounded-full size-8 md:size-10 flex items-center justify-center bg-[#ebf0f2] hover:bg-[#ebf0f2]/50">
            <img src={whatsapp} alt="WhatsApp" className="size-4 md:size-5" />
          </div>
          <div className="cursor-pointer rounded-full size-8 md:size-10 flex items-center justify-center bg-[#ebf0f2] hover:bg-[#ebf0f2]/50">
            <img src={linkedin} alt="LinkedIn" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        className="
          bg-[#053d57]
          w-full
          text-[#ebf0f2]
          text-xs
          py-2
          text-center md:text-left
          px-4 md:pl-[100px] lg:pl-[300px]
        "
        style={{ fontFamily: "Josefin Sans" }}
      >
        <p>
          &copy; {new Date().getFullYear()} Holistic Well-being Solutions Ltd. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
