import React from 'react'

const About = () => {
    return (
        <div className="bg-[#f9f6ef] ">
            {/* Header */}
            <div className="text-center w-[1440px] h-[335.3px] mb-16  bg-[#f3f0ec] flex items-center justify-center flex-col  ">
                <h1 className="text-4xl md:text-5xl text-gray-900">About Us</h1>
                <p className="text-sm text-gray-600 mt-2">Home » About Us</p>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto text-center  md:px-8 mb-">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
                    I'm Obsessed With The Dress Pippa Middleton Wore To Her Brother's Wedding.
                </h2>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    Kim Kardashian West needs no introduction. In the 14 years since she first graced our screens in
                    <span className="italic"> Keeping Up With The Kardashians</span>, she has built her KKW beauty empire,
                    filmed her show, wrapped her show, become a billionaire, studied law, campaigned for the rights
                    of death row inmates, travelled the world to attend events such as Paris Fashion Week, raised
                    four children and launched her wildly successful shapewear brand SKIMS.
                </p>
            </div>
        </div>
    );
};


export default About
