import {
  Wallpaper, DraftingCompass, Building, Sofa, Lightbulb, PenTool
} from "lucide-react";

export const services = [
  {
    icon: Wallpaper,
    title: "Wallpaper Installation",
    desc: "Premium wallpaper installation for homes, apartments, offices, hotels, restaurants, and commercial spaces.",
  },
  {
    icon: PenTool,
    title: "Wall Cladding",
    desc: "Modern wooden, PVC, WPC, stone, charcoal, and decorative wall cladding solutions.",
  },
  {
    icon: Lightbulb,
    title: "False Ceiling",
    desc: "Gypsum, POP, and customized false ceiling installation with modern lighting concepts.",
  },
  {
    icon: DraftingCompass,
    title: "Interior Designing",
    desc: "Creative interior planning and execution for residential and commercial spaces.",
  },
  {
    icon: Building,
    title: "Commercial Interiors",
    desc: "Professional office, showroom, restaurant, retail, and hospitality interior solutions.",
  },
  {
    icon: Sofa,
    title: "Custom Interior Works",
    desc: "TV units, decorative partitions, feature walls, storage solutions, and customized interior finishes.",
  },
] as const;
