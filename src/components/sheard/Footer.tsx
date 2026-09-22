import Image from "next/image";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

import advanceHE from "@/assets/footer/advanceHe.webp";
import cyber from "@/assets/footer/cyber-ess.webp";
import qaa from "@/assets/footer/menmer.webp";

import bgImage from "@/assets/footer/circles.webp";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right top",
      }}
      className="relative overflow-hidden bg-[#060B2F] text-white "
    >
      <div className="container mx-auto relative z-10 px-6 py-16 border-t border-[#384584]">
        <div className="flex flex-col lg:flex-row justify-between gap-14 ">
          {/* Left */}
          <div className="space-y-10">
            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                <FaFacebookF key="fb" />,
                <BsTwitterX key="x" />,
                <FaLinkedinIn key="in" />,
                <FaInstagram key="ig" />,
                <FaYoutube key="yt" />,
                <FaTiktok key="tk" />,
              ].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className={`w-11 h-11 rounded-full border-y border-[#9399b5] flex items-center justify-center bg-[#1b213d] hover:bg-white hover:border-none hover:text-[#033d61] transition-colors duration-300 ease-in-out `}
                >
                  {icon}
                </a>
              ))}
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-10 gap-y-6 uppercase text-primaryText text-base leading-6 ">
              <Link href="#">About VCAD</Link>
              <Link href="#">Our Story</Link>
              <Link href="#">Campuses</Link>
              <Link href="#">Policies</Link>

              <Link href="#">Career</Link>
              <Link href="#">Our Partners</Link>
              <Link href="#">Cookies Policy</Link>
              <Link href="#">FAQs</Link>
            </div>
          </div>

          {/* Right */}
          <div className="">
            <h3 className="text-3xl lg:text-[36px] font-semibold leading-10">
              enquiry_office@vcad.co.uk
            </h3>

            <p className="mt-5 text-xl text-white/80">020 3278 9857</p>

            {/* Logos */}
            <div className="flex gap-4 mt-10">
              <Image src={advanceHE} alt="Advance HE" height={56} />
              <Image src={qaa} alt="QAA" height={56} />
              <Image src={cyber} alt="Cyber Essentials" height={56} />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#384584] my-12" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between gap-4 text-primaryText text-sm">
          <p>
            © {new Date().getFullYear()} Victoria College of Arts and Design.
          </p>

          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
