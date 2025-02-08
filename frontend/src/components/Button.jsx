import React, { useContext } from 'react';
import styled from 'styled-components';
import { useLanguageContext } from '../context/LanguageContext';

const Button = () => {
  const { language } = useLanguageContext();

  // Translations
  const buttonText = {
    en: 'Explore',
    ne: 'अन्वेषण गर्नुहोस्',
  };

  return (
    <StyledWrapper>
      <button className='cta'>
        <span className='hover-underline-animation'>
          {buttonText[language]}
        </span>
        <svg
          id='arrow-horizontal'
          xmlns='http://www.w3.org/2000/svg'
          width={30}
          height={10}
          viewBox='0 0 46 16'
        >
          <path
            id='Path_10'
            data-name='Path 10'
            d='M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z'
            transform='translate(30)'
          />
        </svg>
      </button>
    </StyledWrapper>
  );
};

// Keep all your existing styled components
const StyledWrapper = styled.div`
  .cta {
    border: 2px solid black;
    background: black;
    color: white;
    cursor: pointer;
    padding: 12px 28px;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    display: flex;
    align-items: center;
    gap: 12px;
    transition: all 0.3s ease;
    border-radius: 6px;
  }

  .cta:hover {
    background: transparent;
    color: black;
  }

  .cta:hover svg {
    fill: black;
    transform: translateX(4px);
  }

  .cta:active {
    transform: scale(0.96);
  }

  .hover-underline-animation {
    position: relative;
    padding-bottom: 4px;
  }

  .hover-underline-animation::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: white;
    transform-origin: bottom right;
    transition: transform 0.3s ease-out;
  }

  .cta:hover .hover-underline-animation::after {
    background-color: black;
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  .cta svg {
    transition: transform 0.3s ease, fill 0.3s ease;
    fill: white;
  }
`;

export default Button;
