import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-white">Contact Us</h3>
          <p>123 Architecture Street, New York, NY</p>
          <p>Phone: +1 234 567 890</p>
          <p>Email: info@rayietechnologies.com</p>
        </div>

        {/* Map */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-white">Our Location</h3>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.8434857929677!2d-74.00601538459372!3d40.71277597933001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDAlNDInNDYuMCJOIDc0wrAwMCcwMC4wIlc!5e0!3m2!1sen!2sin!4v1580000000000!5m2!1sen!2sin"
            width="100%"
            height="150"
            className="rounded-lg"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-white">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-400 border p-2 rounded-2xl"><FaFacebookF /></a>
            <a href="#" className="hover:text-red-400 border p-2 rounded-2xl"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-400 border p-2 rounded-2xl"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-blue-400 border p-2 rounded-2xl"><FaTwitter /></a>
          </div>
        </div>

      </div>

      <div className="mt-8 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Rayie Technologies. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
