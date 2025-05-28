
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface OnboardingSlideProps {
  title: string;
  description: string;
  imageUrl: string;
  active: boolean;
  index: number;
  totalSlides: number;
}

const OnboardingSlide: React.FC<OnboardingSlideProps> = ({ title, description, imageUrl, active, index, totalSlides }) => {
  return (
    <div className={cn(
      "absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-300 ease-in-out",
      active ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
    )}>
      <div className="flex w-full justify-center mb-10">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <div 
            key={i} 
            className={cn(
              "h-1 w-16 mx-1 rounded-full", 
              i === index ? "bg-white" : "bg-white/30"
            )}
          />
        ))}
      </div>
      
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      <p className="text-white text-center mb-8">{description}</p>
      
      <div className="w-full max-w-xs mb-16">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-40 object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

const Onboarding: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Collaborate easily",
      description: "Connect with peers and grow",
      imageUrl: "public/lovable-uploads/10306dd2-7d2d-4f3e-9171-51b14de8ec35.png"
    },
    {
      title: "Stay Organised",
      description: "Access courses and materials fast",
      imageUrl: "public/lovable-uploads/f9632960-0b1b-445e-aa1e-45a5908e65d0.png"
    },
    {
      title: "Engage faculty",
      description: "Get support directly from faculty",
      imageUrl: "public/lovable-uploads/31f92e14-0dc1-4bce-b5df-505ef208d857.png"
    },
    {
      title: "Stay updated",
      description: "Real time notifications always informed",
      imageUrl: "public/lovable-uploads/1abcdbfa-84d4-402e-a8ae-51464692b8de.png"
    }
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigate('/auth');
    }
  };

  const finalSlide = currentSlide === slides.length - 1;

  return (
    <div className="min-h-screen bg-discusy-blue relative overflow-hidden">
      {slides.map((slide, index) => (
        <OnboardingSlide
          key={index}
          title={slide.title}
          description={slide.description}
          imageUrl={slide.imageUrl}
          active={currentSlide === index}
          index={index}
          totalSlides={slides.length}
        />
      ))}
      
      <div className="absolute bottom-10 w-full flex justify-center px-6">
        <Button 
          className={cn(
            "w-full max-w-xs py-6 rounded-full bg-white text-discusy-blue hover:bg-white/90",
            finalSlide ? "bg-discusy-pink hover:bg-discusy-pink/90 text-white" : ""
          )}
          onClick={handleNext}
        >
          {finalSlide ? "Get started" : "Next"}
        </Button>
      </div>
    </div>
  );
};

export default Onboarding;
