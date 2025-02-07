'use client';

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Founder & CEO',
    image: 'https://via.placeholder.com/150',
    social: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Jane Smith',
    role: 'Head of Operations',
    image: 'https://via.placeholder.com/150',
    social: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Robert Brown',
    role: 'Marketing Manager',
    image: 'https://via.placeholder.com/150',
    social: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
      linkedin: '#',
    },
  },
];

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className='relative h-96 flex items-center justify-center bg-cover bg-center'
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb')",
        }}
      >
        <div className='absolute inset-0 opacity-50'></div>
      </section>

      {/* Mission & Vision */}
      <section className='py-16 px-6 text-center'>
        <h2 className='text-4xl font-extrabold'>
          Our Mission & Vision
        </h2>
        <p className='text-lg mt-4 max-w-3xl mx-auto'>
          We are dedicated to providing unforgettable travel experiences by
          offering top-notch hospitality and customized tourism services. Our
          goal is to make your journey seamless and enjoyable, ensuring
          cherished memories for a lifetime.
        </p>
      </section>

      {/* Team Section */}
      <section className='py-16 '>
        <h2 className='text-4xl font-extrabold text-center mb-10'>
          Meet Our Team
        </h2>
        <div className='flex flex-wrap justify-center gap-10'>
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className=' p-6 rounded-lg shadow-lg text-center w-64'
            >
              <img
                src={member.image}
                alt={member.name}
                className='w-32 h-32 rounded-full mx-auto mb-4 border-4 border-yellow-500'
              />
              <h3 className='text-2xl font-semibold'>{member.name}</h3>
              <p className=' text-lg mb-4'>{member.role}</p>
              <div className='flex justify-center gap-4 '>
                <a
                  href={member.social.facebook}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href={member.social.twitter}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href={member.social.instagram}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href={member.social.linkedin}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className='py-16 text-center'>
        <h2 className='text-4xl font-extrabold '>Get in Touch</h2>
        <p className='text-lg  mt-4 max-w-2xl mx-auto'>
          Have questions or need assistance? Contact us anytime! We are happy to
          help make your travel experience extraordinary.
        </p>
        <a
          href='mailto:info@tourism.com'
          className=' btn btn-primary btn- shadow-lg hover:bg-primary transition duration-200'
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default AboutPage;
