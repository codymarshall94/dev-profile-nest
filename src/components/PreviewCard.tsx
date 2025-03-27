
import React from "react";
import ProfileCard from "./ProfileCard";

const PreviewCard: React.FC = () => {
  return (
    <div className="sticky top-28 rounded-lg border border-border shadow-sm overflow-hidden">
      <div className="p-4 border-b border-border bg-muted/30">
        <h3 className="text-sm font-medium">Preview</h3>
      </div>
      <div className="p-6 flex items-center justify-center bg-gray-50 min-h-[500px]">
        <div className="transform scale-[0.8] origin-top">
          <ProfileCard />
        </div>
      </div>
    </div>
  );
};

export default PreviewCard;
