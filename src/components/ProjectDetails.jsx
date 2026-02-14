"use client";

import React from "react";
import {
  Droplets,
  Factory,
  MapPin,
  Calendar,
  CheckCircle,
} from "lucide-react";

export default function ProjectDetails() {
  const projects = [
    {
    title: "Municipal Water Treatment Plant",
    location: "Delhi, India",
    year: "2024",
    capacity: "50 MLD",
    description:
      "Complete design and installation of advanced filtration and purification system for municipal supply.",
  },
  {
    title: "Industrial RO Water Plant",
    location: "Ahmedabad, Gujarat",
    year: "2023",
    capacity: "35 MLD",
    description:
      "High-efficiency reverse osmosis system for industrial wastewater treatment and reuse.",
  },
  {
    title: "Rural Drinking Water Project",
    location: "Ajmer, Rajasthan",
    year: "2022",
    capacity: "18 MLD",
    description:
      "Solar-powered purification unit providing safe drinking water to rural communities.",
  },
  {
    title: "Sewage Treatment Plant (STP)",
    location: "Mumbai, Maharashtra",
    year: "2024",
    capacity: "45 MLD",
    description:
      "Eco-friendly sewage treatment system with biological and tertiary filtration.",
  },
  {
    title: "Textile Industry Effluent Plant",
    location: "Surat, Gujarat",
    year: "2021",
    capacity: "28 MLD",
    description:
      "Effluent treatment plant designed for textile wastewater recycling and discharge control.",
  },
  {
    title: "Pharmaceutical Water System",
    location: "Hyderabad, Telangana",
    year: "2023",
    capacity: "22 MLD",
    description:
      "Ultra-pure water treatment system meeting pharmaceutical manufacturing standards.",
  },
  {
    title: "Desalination Water Plant",
    location: "Chennai, Tamil Nadu",
    year: "2022",
    capacity: "60 MLD",
    description:
      "Seawater desalination project providing potable water to coastal regions.",
  },
  {
    title: "Food Processing Water Facility",
    location: "Pune, Maharashtra",
    year: "2021",
    capacity: "20 MLD",
    description:
      "Water purification system for food-grade processing and hygiene compliance.",
  },
  {
    title: "Rainwater Harvesting System",
    location: "Bengaluru, Karnataka",
    year: "2020",
    capacity: "12 MLD",
    description:
      "Large-scale rainwater collection and filtration system for urban buildings.",
  },
  {
    title: "Smart Water Recycling Plant",
    location: "Noida, Uttar Pradesh",
    year: "2024",
    capacity: "30 MLD",
    description:
      "IoT-enabled water recycling plant with real-time monitoring and automation.",
  },
  {
  title: "Smart City Water Supply Project",
  location: "Indore, Madhya Pradesh",
  year: "2023",
  capacity: "55 MLD",
  description:
    "Integrated smart water distribution and treatment system for urban smart city development.",
},
{
  title: "Hospital Water Purification System",
  location: "Kochi, Kerala",
  year: "2022",
  capacity: "14 MLD",
  description:
    "Medical-grade water purification system ensuring hygiene and safety standards.",
},
{
  title: "Mining Wastewater Treatment Plant",
  location: "Dhanbad, Jharkhand",
  year: "2021",
  capacity: "32 MLD",
  description:
    "Heavy-metal removal and treatment plant for mining wastewater management.",
},
{
  title: "Airport Water Management System",
  location: "Lucknow, Uttar Pradesh",
  year: "2024",
  capacity: "38 MLD",
  description:
    "Integrated water treatment and recycling system for airport infrastructure.",
},
{
  title: "Thermal Power Plant Water System",
  location: "Korba, Chhattisgarh",
  year: "2020",
  capacity: "65 MLD",
  description:
    "High-capacity cooling and process water treatment for thermal power generation.",
},
{
  title: "IT Park Water Recycling Plant",
  location: "Gurugram, Haryana",
  year: "2023",
  capacity: "26 MLD",
  description:
    "Zero-liquid-discharge water recycling system for corporate IT campuses.",
},
{
  title: "Dairy Industry Water Facility",
  location: "Anand, Gujarat",
  year: "2021",
  capacity: "19 MLD",
  description:
    "Customized water treatment system for dairy processing operations.",
},
{
  title: "Coastal Groundwater Recharge Project",
  location: "Alappuzha, Kerala",
  year: "2022",
  capacity: "21 MLD",
  description:
    "Groundwater recharge and purification project to prevent saline intrusion.",
},
{
  title: "High-Rise Residential Water Plant",
  location: "Thane, Maharashtra",
  year: "2024",
  capacity: "24 MLD",
  description:
    "Centralized water treatment system for premium residential complexes.",
},
{
  title: "Sugar Mill Effluent Treatment Plant",
  location: "Kolhapur, Maharashtra",
  year: "2020",
  capacity: "34 MLD",
  description:
    "Effluent treatment and reuse system for sugar manufacturing units.",
},
{
  title: "University Campus Water Project",
  location: "Varanasi, Uttar Pradesh",
  year: "2023",
  capacity: "17 MLD",
  description:
    "Complete water treatment and recycling solution for large academic campuses.",
},
{
  title: "Cold Storage Water Facility",
  location: "Hapur, Uttar Pradesh",
  year: "2021",
  capacity: "13 MLD",
  description:
    "Water purification system for temperature-controlled storage facilities.",
},
{
  title: "Green Township Water System",
  location: "Navi Mumbai, Maharashtra",
  year: "2024",
  capacity: "42 MLD",
  description:
    "Sustainable water management system for eco-friendly residential townships.",
},
{
  title: "Paper Mill Water Recycling Plant",
  location: "Yamunanagar, Haryana",
  year: "2022",
  capacity: "29 MLD",
  description:
    "Advanced recycling plant for paper manufacturing wastewater treatment.",
},
{
  title: "Metro Rail Water Treatment System",
  location: "Nagpur, Maharashtra",
  year: "2023",
  capacity: "23 MLD",
  description:
    "Water treatment and reuse facility for metro rail maintenance depots.",
},
{
  title: "Paper Mill Water Recycling Plant",
  location: "Yamunanagar, Haryana",
  year: "2022",
  capacity: "29 MLD",
  description:
    "Advanced recycling plant for paper manufacturing wastewater treatment.",
},
{
  title: "Metro Rail Water Treatment System",
  location: "Nagpur, Maharashtra",
  year: "2023",
  capacity: "23 MLD",
  description:
    "Water treatment and reuse facility for metro rail maintenance depots.",
},


  ];

  return (
    <section className="w-full bg-gradient-to-b from-sky-200 to-[#edf1ef] py-24 px-4">

      {/* ================= HEADER ================= */}
      <div className="max-w-7xl mx-auto text-center mb-16">

        <div className="flex justify-center mb-4">
          <div className="p-4 bg-white rounded-full shadow-lg">
            <Droplets className="text-sky-500" size={32} />
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Our Completed Projects
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Delivering reliable, sustainable, and high-quality water treatment
          solutions across India.
        </p>

      </div>

      {/* ================= PROJECT CARDS ================= */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-xl p-7 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >

            {/* Card Header */}
            <div className="flex items-center gap-4 mb-5">
              <div className="p-3 bg-sky-100 rounded-full">
                <Factory className="text-sky-600" size={26} />
              </div>

              <h3 className="text-xl font-semibold text-gray-800">
                {project.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Details */}
            <div className="space-y-3 text-sm text-gray-700">

              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-sky-500" />
                <span>{project.location}</span>
              </div>

              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-sky-500" />
                <span>Completed: {project.year}</span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-sky-500" />
                <span>Capacity: {project.capacity}</span>
              </div>

            </div>

            {/* Button */}
            <div className="mt-6">
              <button className="w-full py-3 rounded-3xl bg-sky-500 text-white font-medium hover:bg-sky-600 transition">
                View Details
              </button>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
