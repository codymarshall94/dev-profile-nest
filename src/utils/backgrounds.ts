
// Background options for the profile card
export type BackgroundOption = {
  id: string;
  name: string;
  value: string;
  thumbnailColor?: string; // For preview in selector
};

export const backgroundOptions: BackgroundOption[] = [
  {
    id: "bg-1",
    name: "Sand Dunes",
    value: "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)",
    thumbnailColor: "#e2d1c3"
  },
  {
    id: "bg-2",
    name: "Warm Flame",
    value: "linear-gradient(180deg, rgb(254,100,121) 0%, rgb(251,221,186) 100%)",
    thumbnailColor: "#feb2be"
  },
  {
    id: "bg-3",
    name: "Serene Blue",
    value: "linear-gradient(90deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%)",
    thumbnailColor: "#c7e5e4"
  },
  {
    id: "bg-4",
    name: "Deep Ocean",
    value: "linear-gradient(90deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%)",
    thumbnailColor: "#89a4d6"
  },
  {
    id: "bg-5",
    name: "Lemon Chiffon",
    value: "linear-gradient(184.1deg, rgba(249,255,182,1) 44.7%, rgba(226,255,172,1) 67.2%)",
    thumbnailColor: "#f9ffb6"
  },
  {
    id: "bg-6",
    name: "Soft Cloud",
    value: "linear-gradient(109.6deg, rgba(223,234,247,1) 11.2%, rgba(244,248,252,1) 91.1%)",
    thumbnailColor: "#dfeaf7"
  },
  {
    id: "bg-7",
    name: "Sunset Glow",
    value: "linear-gradient(111.4deg, rgba(238,113,113,1) 1%, rgba(246,215,148,1) 58%)",
    thumbnailColor: "#ee7171"
  },
  {
    id: "bg-8",
    name: "Minimal White",
    value: "#ffffff",
    thumbnailColor: "#ffffff"
  },
  {
    id: "bg-9",
    name: "Deep Charcoal",
    value: "#121212",
    thumbnailColor: "#121212"
  },
  {
    id: "bg-10",
    name: "Subtle Ash",
    value: "#f5f5f5",
    thumbnailColor: "#f5f5f5"
  },
  {
    id: "bg-11",
    name: "Mint Fresh",
    value: "linear-gradient(90deg, hsla(139, 70%, 75%, 1) 0%, hsla(63, 90%, 76%, 1) 100%)",
    thumbnailColor: "#84e0a8"
  },
  {
    id: "bg-12",
    name: "Soft Peach",
    value: "linear-gradient(90deg, hsla(29, 92%, 70%, 1) 0%, hsla(0, 87%, 73%, 1) 100%)",
    thumbnailColor: "#f9b46e"
  }
];

// Header background options
export type HeaderOption = {
  id: string;
  name: string;
  value: string;
  thumbnailColor?: string;
};

export const headerOptions: HeaderOption[] = [
  {
    id: "header-1",
    name: "Tech Circuits",
    value: "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1000&q=80')",
    thumbnailColor: "#2d3748"
  },
  {
    id: "header-2",
    name: "Code Window",
    value: "url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1000&q=80')",
    thumbnailColor: "#4a5568"
  },
  {
    id: "header-3",
    name: "MacBook Workspace",
    value: "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1000&q=80')",
    thumbnailColor: "#2c5282"
  },
  {
    id: "header-4",
    name: "Dark Code",
    value: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80')",
    thumbnailColor: "#2d3748"
  },
  {
    id: "header-5",
    name: "Purple Gradient",
    value: "linear-gradient(90deg, hsla(277, 75%, 84%, 1) 0%, hsla(297, 50%, 51%, 1) 100%)",
    thumbnailColor: "#d6bcfa"
  },
  {
    id: "header-6",
    name: "Sunset Orange",
    value: "linear-gradient(90deg, hsla(39, 100%, 77%, 1) 0%, hsla(22, 90%, 57%, 1) 100%)",
    thumbnailColor: "#fbd38d"
  },
  {
    id: "header-7",
    name: "Ocean Breeze",
    value: "linear-gradient(90deg, hsla(46, 73%, 75%, 1) 0%, hsla(176, 73%, 88%, 1) 100%)",
    thumbnailColor: "#e6e199"
  },
  {
    id: "header-8",
    name: "Minimal Black",
    value: "#000000",
    thumbnailColor: "#000000"
  },
  {
    id: "header-9",
    name: "Minimal White",
    value: "#ffffff",
    thumbnailColor: "#ffffff"
  },
  {
    id: "header-10",
    name: "Navy Blue",
    value: "#1a365d",
    thumbnailColor: "#1a365d"
  },
  {
    id: "header-11",
    name: "Emerald Green",
    value: "#047857",
    thumbnailColor: "#047857"
  },
  {
    id: "header-12",
    name: "Ruby Red",
    value: "#991b1b",
    thumbnailColor: "#991b1b"
  }
];
