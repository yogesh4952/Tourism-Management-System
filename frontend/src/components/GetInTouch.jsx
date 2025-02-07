import { PhoneCall, Mail, MapPin } from 'lucide-react';

const GetInTouch = () => {
  return (
    <section className=' py-16 px-6 text-center'>
      <h2 className='text-4xl font-extrabold mb-6 drop-shadow-lg'>
        Get in Touch
      </h2>
      <p className='text-lg mb-10  max-w-2xl mx-auto'>
        We're here to assist you in planning your perfect trip. Reach out to us
        anytime!
      </p>

      <div className='grid md:grid-cols-3 gap-10 max-w-5xl mx-auto'>
        {/* Call Us */}
        <div className=' p-8 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 '>
          <PhoneCall className='mx-auto mb-4 text-primary'  size={40} />
          <h3 className='text-xl font-semibold'>Call Us</h3>
          <p className='text-lg mt-3 '>+977 9806498176</p>
          <p className='text-sm mt-1 opacity-75'>Available 24/7</p>
        </div>

        {/* Email Us */}
        <div className='p-8 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 '>
          <Mail className=' mx-auto mb-4 text-primary' size={40} />
          <h3 className='text-xl font-semibold '>Email Us</h3>
          <p className='text-lg mt-3 '>
            info.nepalyatra@gmail.com
          </p>
          <p className='text-sm mt-1 opacity-75'>Quick response guaranteed</p>
        </div>

        {/* Visit Us */}
        <div className=' p-8 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 '>
          <MapPin className=' mx-auto mb-4 text-primary' size={40} />
          <h3 className='text-xl font-semibold '>Visit Us</h3>
          <p className='text-lg mt-3'>Thamel, Kathmandu</p>
          <p className='text-lg'>Bagmati Province, Nepal</p>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
