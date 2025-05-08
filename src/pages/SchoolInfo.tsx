
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import DiscusyLogo from '@/components/DiscusyLogo';

const SchoolInfo: React.FC = () => {
  const navigate = useNavigate();
  const [schoolName, setSchoolName] = useState('');
  const [schoolWebsite, setSchoolWebsite] = useState('');
  
  const handleSubmit = () => {
    // In a real app, we would extract the domain from the website
    // and use it for SSO authentication
    const domainMatch = schoolWebsite.match(/^(?:https?:\/\/)?(?:www\.)?([^\/]+)/i);
    const domain = domainMatch ? domainMatch[1] : schoolWebsite;
    
    console.log('Submitting school info:', {
      schoolName,
      schoolWebsite,
      extractedDomain: domain
    });
    
    // Navigate to dashboard for demo purposes
    navigate('/dashboard');
  };
  
  return (
    <div className="min-h-screen bg-discusy-blue p-6 flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-full max-w-md">
          <div className="flex flex-col items-center mb-8">
            <DiscusyLogo className="mb-6" />
            <p className="text-white text-xl">School Information</p>
          </div>

          <div className="w-full animate-fade-in">
            <h2 className="text-white text-2xl font-semibold mb-4 text-center">Find Your School</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="schoolName" className="text-white mb-1 block">
                  School Name
                </label>
                <Input
                  id="schoolName"
                  type="text"
                  placeholder="e.g. University of California"
                  className="bg-white/90 py-6"
                  value={schoolName}
                  onChange={(e) => setSchoolName(e.target.value)}
                />
              </div>
              
              <div>
                <label htmlFor="schoolWebsite" className="text-white mb-1 block">
                  School Website
                </label>
                <Input
                  id="schoolWebsite"
                  type="text"
                  placeholder="e.g. berkeley.edu"
                  className="bg-white/90 py-6"
                  value={schoolWebsite}
                  onChange={(e) => setSchoolWebsite(e.target.value)}
                />
              </div>
              
              <Button 
                className="w-full py-6 bg-gray-200 text-discusy-blue hover:bg-gray-300"
                onClick={handleSubmit}
                disabled={!schoolName || !schoolWebsite}
              >
                Continue
              </Button>
              
              <button 
                className="text-white hover:underline w-full text-center mt-4"
                onClick={() => navigate('/auth')}
              >
                Back to Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolInfo;
