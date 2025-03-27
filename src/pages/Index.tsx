
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Share2, Palette, Link as LinkIcon, Copy } from "lucide-react";
import Header from "@/components/Header";

// Landing page thumbnail image
const ThumbnailImage = () => (
  <div className="relative overflow-hidden rounded-lg shadow-lg border border-gray-200 max-w-md mx-auto">
    <div className="relative aspect-[3/4] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100"></div>
      
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
      
      <div className="absolute top-1/6 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full border-4 border-white bg-gray-200"></div>
      
      <div className="absolute top-1/3 pt-10 inset-x-0 text-center">
        <div className="w-32 h-6 rounded-full bg-gray-800 mx-auto"></div>
        <div className="w-24 h-4 rounded-full bg-gray-400 mx-auto mt-2"></div>
        <div className="w-20 h-3 rounded-full bg-gray-300 mx-auto mt-2"></div>
        
        <div className="flex justify-center gap-2 mt-4">
          <div className="w-8 h-8 rounded-full bg-gray-800"></div>
          <div className="w-8 h-8 rounded-full bg-gray-800"></div>
          <div className="w-8 h-8 rounded-full bg-gray-800"></div>
        </div>
        
        <div className="flex justify-center gap-4 mt-6">
          <div className="w-16 h-16 rounded-md bg-gray-200 flex flex-col items-center justify-center">
            <div className="w-8 h-5 bg-gray-800 rounded"></div>
            <div className="w-12 h-2 bg-gray-400 rounded mt-2"></div>
          </div>
          <div className="w-16 h-16 rounded-md bg-gray-200 flex flex-col items-center justify-center">
            <div className="w-8 h-5 bg-gray-800 rounded"></div>
            <div className="w-12 h-2 bg-gray-400 rounded mt-2"></div>
          </div>
          <div className="w-16 h-16 rounded-md bg-gray-200 flex flex-col items-center justify-center">
            <div className="w-8 h-5 bg-gray-800 rounded"></div>
            <div className="w-12 h-2 bg-gray-400 rounded mt-2"></div>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-1 mt-6 px-4">
          <div className="h-6 rounded-full bg-gray-200 px-3"></div>
          <div className="h-6 rounded-full bg-gray-200 px-4"></div>
          <div className="h-6 rounded-full bg-gray-200 px-2"></div>
          <div className="h-6 rounded-full bg-gray-200 px-5"></div>
          <div className="h-6 rounded-full bg-gray-200 px-3"></div>
        </div>
      </div>
    </div>
  </div>
);

// Feature card component
const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="rounded-xl p-6 border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight animate-slide-down">
                Create Your Developer Profile in Minutes
              </h1>
              
              <p className="mt-6 text-gray-600 text-lg max-w-lg mx-auto lg:mx-0 animate-slide-down" style={{ animationDelay: "100ms" }}>
                Build a beautiful, shareable profile page to showcase your skills, experience, and projects to potential employers.
              </p>
              
              <div className="mt-8 animate-slide-down" style={{ animationDelay: "200ms" }}>
                <Button asChild size="lg" className="rounded-full text-base px-8">
                  <Link to="/editor" className="flex items-center gap-2">
                    Create Your Profile
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="lg:w-1/2 animate-slide-down" style={{ animationDelay: "300ms" }}>
              <ThumbnailImage />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Designed for Developers</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Code className="w-6 h-6 text-gray-800" />}
              title="Showcase Skills"
              description="Highlight your technical skills, languages, and frameworks to potential employers."
            />
            
            <FeatureCard
              icon={<Share2 className="w-6 h-6 text-gray-800" />}
              title="Shareable Link"
              description="Get a dedicated URL to share on your resume, LinkedIn, or directly with recruiters."
            />
            
            <FeatureCard
              icon={<Palette className="w-6 h-6 text-gray-800" />}
              title="Customizable Design"
              description="Choose from various themes, backgrounds, and layouts to match your personal style."
            />
            
            <FeatureCard
              icon={<LinkIcon className="w-6 h-6 text-gray-800" />}
              title="Connect Everything"
              description="Link to your GitHub, portfolio, LinkedIn, and other professional profiles."
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Stand Out?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Create your professional developer profile today and make a lasting impression on potential employers.
          </p>
          
          <Button asChild size="lg" variant="secondary" className="rounded-full text-base px-8">
            <Link to="/editor">Get Started Now</Link>
          </Button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-100 border-t border-gray-200">
        <div className="container mx-auto max-w-6xl text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} DevProfile. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
