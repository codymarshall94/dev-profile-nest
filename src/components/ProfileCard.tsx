
import React from "react";
import { useProfile } from "@/utils/profileContext";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Link as LinkIcon, Twitter, Instagram, Facebook, Youtube, Dribbble, Figma } from "lucide-react";

const getIconComponent = (platform: string) => {
  switch (platform) {
    case "github":
      return <Github className="w-5 h-5" />;
    case "linkedin":
      return <Linkedin className="w-5 h-5" />;
    case "email":
      return <Mail className="w-5 h-5" />;
    case "twitter":
      return <Twitter className="w-5 h-5" />;
    case "instagram":
      return <Instagram className="w-5 h-5" />;
    case "facebook":
      return <Facebook className="w-5 h-5" />;
    case "youtube":
      return <Youtube className="w-5 h-5" />;
    case "dribbble":
      return <Dribbble className="w-5 h-5" />;
    case "figma":
      return <Figma className="w-5 h-5" />;
    default:
      return <LinkIcon className="w-5 h-5" />;
  }
};

const ProfileCard: React.FC = () => {
  const { profile } = useProfile();
  
  const headerStyle = profile.headerImage 
    ? { backgroundImage: profile.headerImage } 
    : { background: "linear-gradient(90deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%)" };
  
  const avatarUrl = profile.avatar || "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80";

  return (
    <div className="profile-card max-w-md mx-auto animate-scale" style={{ background: profile.background }}>
      {/* Header Section */}
      <div className="profile-header" style={headerStyle}>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Avatar */}
      <div className="profile-avatar w-24 h-24">
        <img 
          src={avatarUrl} 
          alt={profile.name} 
          className="w-full h-full object-cover rounded-full"
          loading="lazy"
        />
      </div>
      
      {/* Profile Info */}
      <div className="mt-14 text-center px-6 pb-6">
        <h1 className="text-2xl font-bold tracking-tight">{profile.name}</h1>
        <p className="text-gray-600 mt-1">{profile.title}</p>
        <p className="text-sm text-gray-500 mt-1">{profile.location}</p>
        
        {profile.bio && (
          <p className="text-gray-700 mt-4 text-sm text-balance">{profile.bio}</p>
        )}
        
        {/* Social Links */}
        <div className="flex justify-center gap-3 mt-5">
          {profile.links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors"
              aria-label={link.platform}
            >
              {getIconComponent(link.platform)}
            </a>
          ))}
        </div>
        
        {/* Stats Section */}
        {profile.stats.length > 0 && (
          <div className="grid grid-cols-4 gap-3 mt-8">
            {profile.stats.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1 text-balance">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
        
        {/* Skills Section */}
        {profile.skills.length > 0 && (
          <div className="mt-8">
            <div className="flex flex-wrap justify-center gap-2">
              {profile.skills.map((skill) => (
                <Badge key={skill.id} variant="outline" className="px-3 py-1">
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
