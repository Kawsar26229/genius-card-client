import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
  return (
    <div className='hero my-20'>
      <div className='hero-content flex-col lg:flex-row'>
        <div className='relative w-1/2'>
          <img
            src={person}
            alt='parson'
            className='w-4/5 h-full rounded-lg shadow-2xl'
          />
          <img
            src={parts}
            alt='parts'
            className='absolute right-5 top-1/2 border-8 w-3/5 rounded-lg shadow-2xl'
          />
        </div>
        <div className='w-1/2'>
          <p className='text-2xl text-orange-600 font-bold'>About Us</p>
          <h1 className='my-5 text-5xl font-bold'>
            We are quailfied <br />
          </h1>
          & of experience <br />
          in this field
          <p className='py-6'>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className='py-6'>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className='btn btn-primary bg-orange-600 border-0'>
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
