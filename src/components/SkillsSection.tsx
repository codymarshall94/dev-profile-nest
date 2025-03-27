
import React, { useState } from "react";
import { useProfile, Skill } from "@/utils/profileContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, X } from "lucide-react";

const SkillsSection: React.FC = () => {
  const { profile, addSkill, removeSkill } = useProfile();
  const [newSkill, setNewSkill] = useState("");

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      addSkill({ name: newSkill.trim() });
      setNewSkill("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && newSkill.trim()) {
      e.preventDefault();
      handleAddSkill();
    }
  };

  return (
    <Card className="shadow-sm border border-border">
      <CardHeader>
        <CardTitle>Skills</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {profile.skills.map((skill) => (
            <Badge key={skill.id} variant="secondary" className="flex items-center gap-1 px-3 py-1.5">
              {skill.name}
              <button 
                onClick={() => removeSkill(skill.id)} 
                className="ml-1 rounded-full hover:bg-gray-200 p-0.5 transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center gap-2">
          <Input
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Add a skill (e.g. JavaScript)"
            className="flex-1"
          />
          
          <Button
            size="sm"
            variant="outline"
            onClick={handleAddSkill}
            disabled={!newSkill.trim()}
            className="flex-shrink-0"
          >
            <PlusCircle className="w-4 h-4 mr-2" />
            Add
          </Button>
        </div>
        
        <p className="text-sm text-muted-foreground">
          Press Enter to add a skill
        </p>
      </CardContent>
    </Card>
  );
};

export default SkillsSection;
