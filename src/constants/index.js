import {
  Home,
  Droplets,
  Map,
  CreditCard,
  User,
  Droplet,
  RefreshCcw,
  MonitorSmartphone,
  ClipboardCheck,
} from 'lucide-react';

import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
  flightImg,
  hotelImg,
  carImg,
  activitiesImg,
} from '../utils';

// Navigation Items
export const navLists = [
  { id: '/', label: 'Home', icon: Home },
  { id: '/feacture', label: 'Docs', icon: Droplets },
  { id: '/work', label: 'Scan', icon: Map },
  { id: '/Technology', label: 'Cards', icon: CreditCard },
  { id: '/contactus', label: 'User', icon: User, hasDropdown: true },
];

// Highlight Slides for Showcase Section
export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Enter A17 Pro.",
      "Game‑changing chip.",
      "Groundbreaking performance.",
    ],
    video: highlightFirstVideo,
    videoDuration: 14,
  },
  {
    id: 2,
    textLists: ["Titanium.", "So strong. So light. So Pro."],
    video: highlightSecondVideo,
    videoDuration: 36,
  },
  {
    id: 3,
    textLists: [
      "iPhone 15 Pro Max has the",
      "longest optical zoom in",
      "iPhone ever. Far out.",
    ],
    video: highlightThirdVideo,
    videoDuration: 64,
  },
  {
    id: 4,
    textLists: ["All-new Action button.", "What will yours do?."],
    video: highlightFourthVideo,
    videoDuration: 13,
  },
];

// iPhone Models with Color Variants
export const models = [
  {
    id: 1,
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "iPhone 15 Pro in Blue Titanium",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "iPhone 15 Pro in White Titanium",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "iPhone 15 Pro in Black Titanium",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

// Device Sizes
export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

// Footer Links
export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];

// Solutions Section Cards
export const cards = [
  {
    title: 'Water Treatment',
    short: 'Clean water through advanced filtration and purification.',
    full: 'Movi Ecoserve’s water treatment systems ensure safe and potable water for residential, commercial, and industrial use. We utilize multi-stage filtration, UV disinfection, and cutting-edge purification to remove contaminants and ensure water safety.',
    color: 'bg-cyan-400',
    textColor: 'text-[#1e1e4e]',
    image: flightImg,
    icon: Droplet,
  },
  {
    title: 'Wastewater Management',
    short: 'Eco-friendly treatment and reuse of wastewater.',
    full: 'Our wastewater solutions transform sewage into reusable water through biological and chemical processes. We focus on eco-compliance, reducing discharge, and recovering resources from waste streams.',
    color: 'bg-teal-400',
    textColor: 'text-[#1e1e4e]',
    image: hotelImg,
    icon: RefreshCcw,
  },
  {
    title: 'Smart Monitoring',
    short: 'Real-time tracking of water quality and flow.',
    full: 'Using IoT and cloud analytics, Movi Ecoserve enables intelligent water monitoring. Our systems detect leaks, monitor quality metrics, and send alerts for immediate action—giving you complete control and peace of mind.',
    color: 'bg-indigo-400',
    textColor: 'text-[#1e1e4e]',
    image: carImg,
    icon: MonitorSmartphone,
  },
  {
    title: 'Consulting & Design',
    short: 'Custom solutions tailored by experts.',
    full: 'We provide strategic planning, feasibility studies, and system designs for water infrastructure. From small communities to large cities, our experts deliver efficient, cost-effective, and future-ready systems.',
    color: 'bg-lime-400',
    textColor: 'text-[#1e1e4e]',
    image: activitiesImg,
    icon: ClipboardCheck,
  },
];
