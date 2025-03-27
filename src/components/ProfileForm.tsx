
import React from "react";
import { useProfile } from "@/utils/profileContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { BadgeCheck } from "lucide-react";

const ProfileForm: React.FC = () => {
  const { profile, updateProfile } = useProfile();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    updateProfile({ [name]: value });
  };

  const handleSwitchChange = (checked: boolean) => {
    updateProfile({ showHireabilityScore: checked });
  };

  const handleScoreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= 100) {
      updateProfile({ hireabilityScore: value });
    }
  };

  return (
    <Card className="shadow-sm border border-border">
      <CardHeader>
        <CardTitle>Basic Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            name="name"
            value={profile.name}
            onChange={handleChange}
            placeholder="John Smith"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="title">Professional Title</Label>
          <Input
            id="title"
            name="title"
            value={profile.title}
            onChange={handleChange}
            placeholder="Frontend Developer"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            name="location"
            value={profile.location}
            onChange={handleChange}
            placeholder="San Francisco, CA"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            id="bio"
            name="bio"
            value={profile.bio}
            onChange={handleChange}
            placeholder="A brief description about yourself"
            className="resize-none h-24"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="avatar">Avatar URL</Label>
          <Input
            id="avatar"
            name="avatar"
            value={profile.avatar}
            onChange={handleChange}
            placeholder="https://example.com/avatar.jpg"
          />
          <p className="text-sm text-muted-foreground">
            Enter a URL for your profile picture
          </p>
        </div>

        {/* Hireability Score Settings */}
        <div className="pt-4 border-t">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <BadgeCheck className="w-5 h-5 text-gray-700" />
              <Label htmlFor="showHireabilityScore" className="font-medium">
                Show Hireability Score
              </Label>
            </div>
            <Switch 
              id="showHireabilityScore"
              checked={profile.showHireabilityScore}
              onCheckedChange={handleSwitchChange}
            />
          </div>
          
          {profile.showHireabilityScore && (
            <div className="space-y-2">
              <Label htmlFor="hireabilityScore">Hireability Score (0-100)</Label>
              <Input
                id="hireabilityScore"
                type="number"
                min="0"
                max="100"
                value={profile.hireabilityScore ?? 0}
                onChange={handleScoreChange}
              />
              <p className="text-sm text-muted-foreground">
                Set your hireability score from 0 to 100
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileForm;
