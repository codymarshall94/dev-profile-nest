
import React, { useEffect } from "react";
import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import { Button } from "@/components/ui/button";
import { useProfile } from "@/utils/profileContext";
import { Link } from "react-router-dom";
import { Edit3, Copy } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

// Framer-motion is not installed, so let's create a simple motion component
const MotionDiv: React.FC<{
  children: React.ReactNode;
  className?: string;
  initial?: any;
  animate?: any;
  transition?: any;
}> = ({ children, className, initial, animate, transition }) => {
  const [isAnimated, setIsAnimated] = React.useState(false);
  
  React.useEffect(() => {
    setIsAnimated(true);
  }, []);
  
  const style = {
    opacity: isAnimated ? animate?.opacity || 1 : initial?.opacity || 0,
    transform: isAnimated 
      ? `translateY(${animate?.y || 0}px)` 
      : `translateY(${initial?.y || 20}px)`,
    transition: `all ${transition?.duration || 0.5}s ${transition?.ease || 'ease-out'}`
  };
  
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

const Profile: React.FC = () => {
  const { profile } = useProfile();
  const { toast } = useToast();

  useEffect(() => {
    document.title = `${profile.name} - Developer Profile`;
  }, [profile.name]);

  const handleCopyLink = () => {
    const currentUrl = window.location.href;
    
    navigator.clipboard.writeText(currentUrl).then(() => {
      toast({
        title: "Link copied!",
        description: "Your profile link has been copied to clipboard.",
        duration: 3000,
      });
    });
  };

  return (
    <div 
      className="min-h-screen transition-colors"
      style={{ background: profile.background }}
    >
      <Header />
      
      <div className="container mx-auto max-w-6xl pt-28 pb-20 px-4">
        <MotionDiv
          className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center sm:text-left">
            <h1 className="text-3xl font-bold tracking-tight">Developer Profile</h1>
            <p className="text-gray-600">Share your professional information with others.</p>
          </div>
          
          <div className="flex flex-wrap justify-center sm:justify-end gap-3">
            <Button 
              variant="outline" 
              className="flex items-center gap-2" 
              onClick={handleCopyLink}
            >
              <Copy className="w-4 h-4" />
              <span>Copy Link</span>
            </Button>
            
            <Button asChild className="flex items-center gap-2">
              <Link to="/editor">
                <Edit3 className="w-4 h-4" />
                <span>Edit Profile</span>
              </Link>
            </Button>
          </div>
        </MotionDiv>
        
        <MotionDiv
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ProfileCard />
        </MotionDiv>
      </div>
    </div>
  );
};

export default Profile;
