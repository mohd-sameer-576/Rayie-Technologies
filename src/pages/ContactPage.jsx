import { MapPin, Phone, Mail } from "lucide-react";
import Navbar from '../components/global/Navbar'

const ContactPage = () => {
  return (

    <section className="min-h-screen bg-white">
      <Navbar/>
      {/* Header */}
      <div className="bg-gray-900 text-white py-20 text-center pt-32">
        <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
        <p className="mt-4 text-gray-300">
          Let’s discuss your next architectural project
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>

          <p className="text-gray-600 mb-8">
            Reach out to us for consultations, project inquiries, or collaborations.
            Our team is ready to bring your vision to life.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="text-accent mt-1" />
              <p className="text-gray-700">
                Rayie Technologies<br />
                Yakutpura, Hyderabad, Telengana, India
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-accent" />
              <p className="text-gray-700">+91 9391294997</p>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-accent" />
              <p className="text-gray-700">contact@rayietechnologies.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 p-8 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-accent"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-accent"
              />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-accent"
              />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-accent"
            />

            <button
              type="submit"
              className="bg-accent text-white px-6 py-3 font-semibold rounded 
              hover:scale-105 hover:shadow-lg transition duration-300"
              >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-full h-100">
        <iframe
          title="Google Map"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=hyderabad-yakutpura&output=embed"
          
        />
      </div>
    </section>
  );
};

export default ContactPage;
