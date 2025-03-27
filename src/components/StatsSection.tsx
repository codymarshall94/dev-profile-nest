
import React, { useState } from "react";
import { useProfile, Stat } from "@/utils/profileContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { PlusCircle, Trash2 } from "lucide-react";

const StatsSection: React.FC = () => {
  const { profile, updateStat, addStat, removeStat } = useProfile();
  const [newStat, setNewStat] = useState<Omit<Stat, "id">>({
    label: "",
    value: ""
  });

  const handleAddStat = () => {
    if (newStat.label.trim() && newStat.value) {
      addStat(newStat);
      setNewStat({
        label: "",
        value: ""
      });
    }
  };

  return (
    <Card className="shadow-sm border border-border">
      <CardHeader>
        <CardTitle>Statistics</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {profile.stats.map((stat) => (
          <div key={stat.id} className="grid grid-cols-[1fr,1fr,auto] gap-2">
            <div className="space-y-1">
              <Label htmlFor={`stat-value-${stat.id}`}>Value</Label>
              <Input
                id={`stat-value-${stat.id}`}
                value={stat.value.toString()}
                onChange={(e) => updateStat(stat.id, { value: e.target.value })}
                placeholder="5"
                type="text"
              />
            </div>
            
            <div className="space-y-1">
              <Label htmlFor={`stat-label-${stat.id}`}>Label</Label>
              <Input
                id={`stat-label-${stat.id}`}
                value={stat.label}
                onChange={(e) => updateStat(stat.id, { label: e.target.value })}
                placeholder="Years of experience"
              />
            </div>
            
            <div className="flex items-end">
              <Button
                size="icon"
                variant="outline"
                onClick={() => removeStat(stat.id)}
                className="flex-shrink-0 mb-0.5"
              >
                <Trash2 className="w-4 h-4 text-red-500" />
              </Button>
            </div>
          </div>
        ))}
        
        <div className="grid grid-cols-[1fr,1fr,auto] gap-2 mt-4">
          <div className="space-y-1">
            <Label htmlFor="new-stat-value">Value</Label>
            <Input
              id="new-stat-value"
              value={newStat.value.toString()}
              onChange={(e) => setNewStat({ ...newStat, value: e.target.value })}
              placeholder="5"
              type="text"
            />
          </div>
          
          <div className="space-y-1">
            <Label htmlFor="new-stat-label">Label</Label>
            <Input
              id="new-stat-label"
              value={newStat.label}
              onChange={(e) => setNewStat({ ...newStat, label: e.target.value })}
              placeholder="Years of experience"
            />
          </div>
          
          <div className="flex items-end">
            <Button
              size="icon"
              variant="outline"
              onClick={handleAddStat}
              disabled={!newStat.label.trim() || !newStat.value}
              className="flex-shrink-0 mb-0.5"
            >
              <PlusCircle className="w-4 h-4 text-green-500" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsSection;
