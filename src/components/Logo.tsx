import React from 'react';

interface LogoProps {
  isScrolled: boolean;
}

const Logo = ({ isScrolled }: LogoProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className={`transition-all duration-300 ${isScrolled ? 'h-20 sm:h-24' : 'h-24 sm:h-32'}`}>
        <img
          src="https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBME0rSlE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--c374bf833319704c62f35510ef33b22103b1b281/Logo_1.jpg"
          alt="JC Gold Buyers Logo"
          className="h-full w-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Logo;