import React from 'react';

const Hero = ({ heading, subheading, bg }) => {
  const style = {
    backgroundImage: `url(${bg})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  return (
    <div className="container">
      <div 
        className="my-8 h-[45vh] bg-red-200 rounded-2xl flex flex-col gap-3 justify-end px-4 md:px-8 py-6" 
        style={style}
      >
        <h1 className="text-white">{heading}</h1>
        <h3 className="text-white">{subheading}</h3>
      </div>
    </div>
  );
};

export default Hero;
