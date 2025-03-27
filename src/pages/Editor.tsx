
import React from "react";
import Header from "@/components/Header";
import ProfileForm from "@/components/ProfileForm";
import LinksSection from "@/components/LinksSection";
import StatsSection from "@/components/StatsSection";
import SkillsSection from "@/components/SkillsSection";
import BackgroundSelector from "@/components/BackgroundSelector";
import PreviewCard from "@/components/PreviewCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useProfile } from "@/utils/profileContext";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { ArrowRight, Copy, Eye, Save } from "lucide-react";

const Editor: React.FC = () => {
  const { profile, resetProfile } = useProfile();
  const { toast } = useToast();

  const handleCopyLink = () => {
    const origin = window.location.origin;
    const profileUrl = `${origin}/profile`;
    
    navigator.clipboard.writeText(profileUrl).then(() => {
      toast({
        title: "Link copied!",
        description: "Your profile link has been copied to clipboard.",
        duration: 3000,
      });
    });
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset your profile? This will delete all your changes.")) {
      resetProfile();
      toast({
        title: "Profile reset",
        description: "Your profile has been reset to default settings.",
        duration: 3000,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header />
      
      <div className="container mx-auto max-w-6xl pt-28 px-4">
        <h1 className="text-3xl font-bold tracking-tight mb-1">Create Your Profile</h1>
        <p className="text-gray-600 mb-8">Customize your developer profile and share it with the world.</p>
        
        <div className="grid lg:grid-cols-[1fr,350px] gap-8">
          {/* Editor Column */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Copy className="w-5 h-5" />
                    Share Profile
                  </CardTitle>
                  <CardDescription>
                    Get a link to share your profile
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    onClick={handleCopyLink}
                  >
                    Copy Profile Link
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    Preview Profile
                  </CardTitle>
                  <CardDescription>
                    See how your profile looks
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link to="/profile">
                      View Profile
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <ProfileForm />
            
            <div className="grid gap-8 md:grid-cols-2">
              <BackgroundSelector />
              <LinksSection />
            </div>
            
            <StatsSection />
            <SkillsSection />
            
            <Card className="shadow-sm border border-border">
              <CardHeader>
                <CardTitle>Actions</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                <Button variant="destructive" onClick={handleReset}>
                  Reset Profile
                </Button>
                
                <Button asChild>
                  <Link to="/profile" className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    View Profile
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Preview Column */}
          <div>
            <PreviewCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
