
import React, { useState } from "react";
import { useProfile, SocialLink } from "@/utils/profileContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PlusCircle, Trash2, Github, Linkedin, Mail, Link as LinkIcon, Twitter, Instagram, Facebook, Youtube, Dribbble, Figma } from "lucide-react";

const platformOptions = [
  { value: "github", label: "GitHub", icon: <Github className="w-4 h-4" /> },
  { value: "linkedin", label: "LinkedIn", icon: <Linkedin className="w-4 h-4" /> },
  { value: "email", label: "Email", icon: <Mail className="w-4 h-4" /> },
  { value: "website", label: "Website", icon: <LinkIcon className="w-4 h-4" /> },
  { value: "twitter", label: "Twitter", icon: <Twitter className="w-4 h-4" /> },
  { value: "instagram", label: "Instagram", icon: <Instagram className="w-4 h-4" /> },
  { value: "facebook", label: "Facebook", icon: <Facebook className="w-4 h-4" /> },
  { value: "youtube", label: "YouTube", icon: <Youtube className="w-4 h-4" /> },
  { value: "dribbble", label: "Dribbble", icon: <Dribbble className="w-4 h-4" /> },
  { value: "figma", label: "Figma", icon: <Figma className="w-4 h-4" /> },
];

const getPlatformIcon = (platform: string) => {
  const option = platformOptions.find(opt => opt.value === platform);
  return option ? option.icon : <LinkIcon className="w-4 h-4" />;
};

const LinksSection: React.FC = () => {
  const { profile, updateLink, addLink, removeLink } = useProfile();
  const [newLink, setNewLink] = useState<Omit<SocialLink, "id">>({
    platform: "website",
    url: "",
    icon: "link"
  });

  const handleAddLink = () => {
    if (newLink.url.trim()) {
      addLink(newLink);
      setNewLink({
        platform: "website",
        url: "",
        icon: "link"
      });
    }
  };

  const handlePlatformChange = (id: string, platform: string) => {
    const icon = platformOptions.find(opt => opt.value === platform)?.value || "link";
    updateLink(id, { platform, icon });
  };

  const handleNewPlatformChange = (platform: string) => {
    const icon = platformOptions.find(opt => opt.value === platform)?.value || "link";
    setNewLink(prev => ({ ...prev, platform, icon }));
  };

  return (
    <Card className="shadow-sm border border-border">
      <CardHeader>
        <CardTitle>Social Links</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {profile.links.map((link) => (
          <div key={link.id} className="flex items-center gap-2">
            <div className="flex-shrink-0 w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center">
              {getPlatformIcon(link.platform)}
            </div>
            
            <Select
              value={link.platform}
              onValueChange={(value) => handlePlatformChange(link.id, value)}
            >
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Platform" />
              </SelectTrigger>
              <SelectContent>
                {platformOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value} className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                      {option.icon}
                      <span>{option.label}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Input
              value={link.url}
              onChange={(e) => updateLink(link.id, { url: e.target.value })}
              placeholder="https://example.com"
              className="flex-1"
            />
            
            <Button 
              size="icon" 
              variant="outline" 
              onClick={() => removeLink(link.id)}
              className="flex-shrink-0"
            >
              <Trash2 className="w-4 h-4 text-red-500" />
            </Button>
          </div>
        ))}
        
        <div className="flex items-center gap-2">
          <div className="flex-shrink-0 w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center">
            {getPlatformIcon(newLink.platform)}
          </div>
          
          <Select
            value={newLink.platform}
            onValueChange={handleNewPlatformChange}
          >
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Platform" />
            </SelectTrigger>
            <SelectContent>
              {platformOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  <div className="flex items-center gap-2">
                    {option.icon}
                    <span>{option.label}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Input
            value={newLink.url}
            onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
            placeholder="https://example.com"
            className="flex-1"
          />
          
          <Button
            size="icon"
            variant="outline"
            onClick={handleAddLink}
            disabled={!newLink.url.trim()}
            className="flex-shrink-0"
          >
            <PlusCircle className="w-4 h-4 text-green-500" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LinksSection;
