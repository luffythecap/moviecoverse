"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
  User,
  MessageSquare,
  BookOpen,
  MapPin,
  Clock,
  Droplets,
} from "lucide-react";

export default function ContactUs() {
  /* ================= STATE ================= */
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  /* ================= HANDLE CHANGE ================= */
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);

    // Simulate API
    setTimeout(() => {
      console.log("Form Data:", form);

      setLoading(false);
      setSuccess(true);

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="relative w-full bg-[#edf1ef] text-gray-800 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-sky-300/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-cyan-400/30 rounded-full blur-[120px]" />

      {/* ================= HERO ================= */}
      <section
        className="relative py-32 text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1533077162801-86490c593afb?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="flex justify-center mb-6">
            <div className="p-5 bg-white/70 backdrop-blur rounded-full shadow-xl">
              <Droplets className="text-sky-500" size={38} />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white">
            Contact Our Experts
          </h1>

          <p className="text-gray-200 text-lg">
            Pure Water • Smart Systems • Trusted Service
          </p>
        </div>
      </section>

      {/* ================= MAIN ================= */}
      <section className="relative max-w-7xl mx-auto px-4 py-24 grid lg:grid-cols-2 gap-16 z-10">
        {/* ================= FORM ================= */}
        <div className="bg-white/60 backdrop-blur-2xl border border-white/40 shadow-2xl rounded-[2.5rem] p-10">
          <p className="uppercase tracking-widest text-sm text-sky-600 mb-3">
            Contact Form
          </p>

          <h3 className="text-3xl font-bold mb-10">
            Free{" "}
            <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">
              Water Assessment
            </span>
          </h3>

          {/* Success Message */}
          {success && (
            <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-xl">
              ✅ Message sent successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-7">
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                icon={<User size={18} />}
                label="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
              />

              <Input
                icon={<Mail size={18} />}
                label="Email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <Input
              icon={<BookOpen size={18} />}
              label="Subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
            />

            <TextArea
              icon={<MessageSquare size={18} />}
              label="Message"
              name="message"
              value={form.message}
              onChange={handleChange}
            />

            <button
              type="submit"
              disabled={loading}
              className="relative w-full flex items-center justify-center gap-3 py-4 rounded-full font-semibold text-white overflow-hidden group disabled:opacity-70"
            >
              {/* Glow */}
              <span className="absolute inset-0 bg-gradient-to-r from-sky-400 to-cyan-400 group-hover:scale-110 transition-transform duration-300" />

              <span className="relative flex items-center gap-3">
                {loading ? "Sending..." : "Send Message"}
                <Send size={18} />
              </span>
            </button>
          </form>
        </div>

        {/* ================= INFO ================= */}
        <div className="relative bg-gradient-to-br from-sky-300/60 to-cyan-300/60 backdrop-blur-xl border border-white/40 rounded-[2.5rem] p-12 shadow-2xl">
          <div className="space-y-10">
            <Info
              icon={<MapPin />}
              title="Location"
              text="MIDC Area, Pune 411019"
            />

            <Info icon={<Phone />} title="Phone" text="+91 98765 43210" />

            <Info
              icon={<Clock />}
              title="Working Hours"
              text="Mon–Fri: 10AM–8PM"
            />

            <Info icon={<Mail />} title="Email" text="info@waterplant.com" />
          </div>

          {/* Social */}
          <div className="mt-14">
            <h4 className="text-xl font-semibold mb-6">Follow Us</h4>

            <div className="flex gap-5">
              <Social icon={<Facebook />} />
              <Social icon={<Twitter />} />
              <Social icon={<Instagram />} />
              <Social icon={<Linkedin />} />
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAP ================= */}
      <section className="relative w-full h-[450px]">
        <div className="absolute inset-0 bg-sky-200/20 z-10 pointer-events-none" />

        <iframe
          className="w-full h-full border-0 grayscale hover:grayscale-0 transition duration-500"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Pune,India&output=embed"
        />
      </section>
    </div>
  );
}

/* ================= INPUT ================= */
function Input({ icon, label, name, value, onChange }) {
  return (
    <div className="relative">
      <label className="text-sm text-gray-600 mb-1 block">{label}</label>

      <span className="absolute left-4 top-[42px] text-sky-400">{icon}</span>

      <input
        name={name}
        value={value}
        onChange={onChange}
        required
        type="text"
        placeholder={label}
        className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/80 border border-gray-200 focus:ring-2 focus:ring-sky-300 outline-none shadow-sm transition"
      />
    </div>
  );
}

/* ================= TEXTAREA ================= */
function TextArea({ icon, label, name, value, onChange }) {
  return (
    <div className="relative">
      <label className="text-sm text-gray-600 mb-1 block">{label}</label>

      <span className="absolute left-4 top-[42px] text-sky-400">{icon}</span>

      <textarea
        rows={5}
        name={name}
        value={value}
        onChange={onChange}
        required
        placeholder={label}
        className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/80 border border-gray-200 focus:ring-2 focus:ring-sky-300 outline-none shadow-sm resize-none transition"
      />
    </div>
  );
}

/* ================= INFO ================= */
function Info({ icon, title, text }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="p-3 bg-white/80 rounded-xl text-sky-500 shadow-lg">
        {icon}
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-1">{title}</h4>

        <p className="text-gray-700 text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

/* ================= SOCIAL ================= */
function Social({ icon }) {
  return (
    <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur shadow-lg text-sky-500 flex items-center justify-center cursor-pointer transition-all hover:bg-gradient-to-r hover:from-sky-400 hover:to-cyan-400 hover:text-white hover:scale-110">
      {icon}
    </div>
  );
}
