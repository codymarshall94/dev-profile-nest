
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Define all the types for our profile data
export type SocialLink = {
  id: string;
  platform: string;
  url: string;
  icon: string;
};

export type Skill = {
  id: string;
  name: string;
};

export type Stat = {
  id: string;
  label: string;
  value: string | number;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  link?: string;
  imageUrl?: string;
};

export type ProfileData = {
  name: string;
  title: string;
  location: string;
  bio: string;
  avatar: string;
  headerImage: string;
  background: string;
  links: SocialLink[];
  skills: Skill[];
  stats: Stat[];
  projects: Project[];
};

// Default profile data
const defaultProfile: ProfileData = {
  name: "John Smith",
  title: "Fullstack Developer",
  location: "Palo Alto, CA",
  bio: "Passionate developer with experience in building web applications",
  avatar: "",
  headerImage: "",
  background: "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)",
  links: [
    { id: "1", platform: "github", url: "https://github.com", icon: "github" },
    { id: "2", platform: "linkedin", url: "https://linkedin.com", icon: "linkedin" },
    { id: "3", platform: "email", url: "mailto:example@example.com", icon: "mail" },
    { id: "4", platform: "website", url: "https://example.com", icon: "link" }
  ],
  skills: [
    { id: "1", name: "JavaScript" },
    { id: "2", name: "HTML" },
    { id: "3", name: "CSS" },
    { id: "4", name: "TypeScript" },
    { id: "5", name: "React" },
  ],
  stats: [
    { id: "1", label: "Years of experience", value: 5 },
    { id: "2", label: "Projects completed", value: 20 },
    { id: "3", label: "Teams led", value: 3 },
  ],
  projects: []
};

type ProfileContextType = {
  profile: ProfileData;
  updateProfile: (profile: Partial<ProfileData>) => void;
  updateStat: (id: string, data: Partial<Stat>) => void;
  addStat: (stat: Omit<Stat, "id">) => void;
  removeStat: (id: string) => void;
  updateSkill: (id: string, data: Partial<Skill>) => void;
  addSkill: (skill: Omit<Skill, "id">) => void;
  removeSkill: (id: string) => void;
  updateLink: (id: string, data: Partial<SocialLink>) => void;
  addLink: (link: Omit<SocialLink, "id">) => void;
  removeLink: (id: string) => void;
  updateProject: (id: string, data: Partial<Project>) => void;
  addProject: (project: Omit<Project, "id">) => void;
  removeProject: (id: string) => void;
  resetProfile: () => void;
};

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize state with default or saved data
  const [profile, setProfile] = useState<ProfileData>(() => {
    const savedProfile = localStorage.getItem("devProfileData");
    return savedProfile ? JSON.parse(savedProfile) : defaultProfile;
  });

  // Save profile data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("devProfileData", JSON.stringify(profile));
  }, [profile]);

  // Generate a unique ID for new items
  const generateId = () => Math.random().toString(36).substring(2, 9);

  // Update the entire profile or parts of it
  const updateProfile = (newProfileData: Partial<ProfileData>) => {
    setProfile(prev => ({ ...prev, ...newProfileData }));
  };

  // Stats management
  const updateStat = (id: string, data: Partial<Stat>) => {
    setProfile(prev => ({
      ...prev,
      stats: prev.stats.map(stat => stat.id === id ? { ...stat, ...data } : stat)
    }));
  };

  const addStat = (stat: Omit<Stat, "id">) => {
    const newStat = { id: generateId(), ...stat };
    setProfile(prev => ({ ...prev, stats: [...prev.stats, newStat] }));
  };

  const removeStat = (id: string) => {
    setProfile(prev => ({
      ...prev,
      stats: prev.stats.filter(stat => stat.id !== id)
    }));
  };

  // Skills management
  const updateSkill = (id: string, data: Partial<Skill>) => {
    setProfile(prev => ({
      ...prev,
      skills: prev.skills.map(skill => skill.id === id ? { ...skill, ...data } : skill)
    }));
  };

  const addSkill = (skill: Omit<Skill, "id">) => {
    const newSkill = { id: generateId(), ...skill };
    setProfile(prev => ({ ...prev, skills: [...prev.skills, newSkill] }));
  };

  const removeSkill = (id: string) => {
    setProfile(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill.id !== id)
    }));
  };

  // Links management
  const updateLink = (id: string, data: Partial<SocialLink>) => {
    setProfile(prev => ({
      ...prev,
      links: prev.links.map(link => link.id === id ? { ...link, ...data } : link)
    }));
  };

  const addLink = (link: Omit<SocialLink, "id">) => {
    const newLink = { id: generateId(), ...link };
    setProfile(prev => ({ ...prev, links: [...prev.links, newLink] }));
  };

  const removeLink = (id: string) => {
    setProfile(prev => ({
      ...prev,
      links: prev.links.filter(link => link.id !== id)
    }));
  };

  // Projects management
  const updateProject = (id: string, data: Partial<Project>) => {
    setProfile(prev => ({
      ...prev,
      projects: prev.projects.map(project => project.id === id ? { ...project, ...data } : project)
    }));
  };

  const addProject = (project: Omit<Project, "id">) => {
    const newProject = { id: generateId(), ...project };
    setProfile(prev => ({ ...prev, projects: [...prev.projects, newProject] }));
  };

  const removeProject = (id: string) => {
    setProfile(prev => ({
      ...prev,
      projects: prev.projects.filter(project => project.id !== id)
    }));
  };

  // Reset to default profile
  const resetProfile = () => {
    setProfile(defaultProfile);
  };

  return (
    <ProfileContext.Provider
      value={{
        profile,
        updateProfile,
        updateStat,
        addStat,
        removeStat,
        updateSkill,
        addSkill,
        removeSkill,
        updateLink,
        addLink,
        removeLink,
        updateProject,
        addProject,
        removeProject,
        resetProfile
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
};
