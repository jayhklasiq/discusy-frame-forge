
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-discusy-blue text-white p-6">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Oops! Page not found</p>
      <Button 
        variant="outline" 
        className="text-white border-white hover:bg-white hover:text-discusy-blue"
        asChild
      >
        <a href="/dashboard" className="flex items-center gap-2">
          <Home size={18} />
          Return to Home
        </a>
      </Button>
    </div>
  );
};

export default NotFound;
