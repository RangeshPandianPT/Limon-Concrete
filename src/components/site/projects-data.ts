import livingroom from "@/assets/project-livingroom.jpg";
import bedroom from "@/assets/project-bedroom.jpg";
import office from "@/assets/project-office.jpg";
import restaurant from "@/assets/project-restaurant.jpg";

export const projects = [
  { name: "Luxury Living Room Wallpaper", location: "Residential", category: "Wallpaper", year: 2024, image: livingroom },
  { name: "Modern Wooden Wall Cladding", location: "Commercial", category: "Cladding", year: 2024, image: office },
  { name: "Premium Office Interior", location: "Corporate", category: "Interiors", year: 2023, image: office },
  { name: "Restaurant Interior Design", location: "Hospitality", category: "Commercial", year: 2024, image: restaurant },
  { name: "Luxury Bedroom Makeover", location: "Residential", category: "Interiors", year: 2023, image: bedroom },
  { name: "False Ceiling Installation", location: "Residential", category: "Ceiling", year: 2022, image: livingroom },
] as const;

export const categories = ["All", "Wallpaper", "Cladding", "Ceiling", "Interiors", "Commercial"] as const;
