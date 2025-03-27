
import React, { useState } from "react";
import { backgroundOptions, headerOptions, BackgroundOption, HeaderOption } from "@/utils/backgrounds";
import { useProfile } from "@/utils/profileContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

const BackgroundSelector: React.FC = () => {
  const { profile, updateProfile } = useProfile();
  const [activeTab, setActiveTab] = useState("background");

  const handleBackgroundSelect = (background: BackgroundOption) => {
    updateProfile({ background: background.value });
  };

  const handleHeaderSelect = (header: HeaderOption) => {
    updateProfile({ headerImage: header.value });
  };

  return (
    <div className="rounded-lg border border-border shadow-sm p-4 bg-card">
      <h3 className="text-lg font-medium mb-4">Customize Appearance</h3>
      
      <Tabs defaultValue="background" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-2 mb-4">
          <TabsTrigger value="background">Background</TabsTrigger>
          <TabsTrigger value="header">Header</TabsTrigger>
        </TabsList>
        
        <TabsContent value="background" className="animate-fade-in">
          <ScrollArea className="h-[280px] pr-4">
            <div className="grid grid-cols-3 gap-3">
              {backgroundOptions.map((bg) => (
                <button
                  key={bg.id}
                  onClick={() => handleBackgroundSelect(bg)}
                  className={`aspect-square rounded-md overflow-hidden transition-all hover:scale-105 ${
                    profile.background === bg.value ? "ring-2 ring-primary ring-offset-2" : "ring-0"
                  }`}
                  title={bg.name}
                >
                  <div
                    className="w-full h-full"
                    style={{ background: bg.value }}
                  ></div>
                </button>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>
        
        <TabsContent value="header" className="animate-fade-in">
          <ScrollArea className="h-[280px] pr-4">
            <div className="grid grid-cols-3 gap-3">
              {headerOptions.map((header) => (
                <button
                  key={header.id}
                  onClick={() => handleHeaderSelect(header)}
                  className={`aspect-video rounded-md overflow-hidden transition-all hover:scale-105 ${
                    profile.headerImage === header.value ? "ring-2 ring-primary ring-offset-2" : "ring-0"
                  }`}
                  title={header.name}
                >
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ background: header.value }}
                  ></div>
                </button>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BackgroundSelector;
