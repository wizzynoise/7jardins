
import React from 'react';

interface ProcessStepProps {
  title: string;
  description: string;
  image: string;
  stepNumber: number;
  isReversed?: boolean;
}

const ProcessStep = ({ title, description, image, stepNumber, isReversed }: ProcessStepProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
      <div className={isReversed ? 'md:order-2 md:pl-12' : 'md:text-right md:pr-12'}>
        <h4 className="text-xl font-serif font-bold mb-2">{`${stepNumber}. ${title}`}</h4>
        <p>{description}</p>
      </div>
      <div className="hidden md:block absolute left-1/2 top-4 w-8 h-8 bg-garden-accent rounded-full -translate-x-1/2"></div>
      <div className={isReversed ? 'md:order-1 md:text-right md:pr-12' : 'md:pl-12'}>
        <img 
          src={image} 
          alt={title} 
          className="rounded-lg shadow-md w-full h-48 object-cover"
        />
      </div>
    </div>
  );
};

export default ProcessStep;
