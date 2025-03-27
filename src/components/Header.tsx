
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, Edit3, User, Eye } from "lucide-react";

const Header: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isEditor = location.pathname === "/editor";
  const isProfile = location.pathname === "/profile";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-lg border-b border-gray-200 transition-all duration-300 ease-in-out">
      <div className="container mx-auto py-4 px-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-semibold tracking-tight transition-colors hover:text-gray-600 flex items-center gap-2"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-md bg-gray-900 text-white">D</span>
          <span>DevProfile</span>
        </Link>
        
        <div className="flex items-center gap-3">
          {isHome && (
            <Button asChild>
              <Link to="/editor" className="group flex items-center gap-2">
                <span>Create Profile</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          )}
          
          {isEditor && (
            <>
              <Button variant="outline" asChild>
                <Link to="/" className="flex items-center gap-2">
                  <ChevronLeft className="w-4 h-4" />
                  <span>Back</span>
                </Link>
              </Button>
              
              <Button asChild>
                <Link to="/profile" className="group flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span>Preview</span>
                </Link>
              </Button>
            </>
          )}
          
          {isProfile && (
            <>
              <Button variant="outline" asChild>
                <Link to="/editor" className="flex items-center gap-2">
                  <Edit3 className="w-4 h-4" />
                  <span>Edit</span>
                </Link>
              </Button>
              
              <Button variant="secondary" asChild>
                <Link to="/" className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Home</span>
                </Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
