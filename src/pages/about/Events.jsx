import React from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
  Video,
  Users,
  ExternalLink
} from 'lucide-react';

export default function Events() {
  const upcomingEvents = [
    {
      title: "National Workshop on AI & Satellite Remote Sensing in Agriculture",
      date: "October 18-20, 2026",
      time: "10:00 AM - 4:00 PM IST",
      mode: "Hybrid / On-Campus",
      location: "Guwahati / Virtual",
      category: "Capacity Building Workshop",
      desc: "3-day intensive hands-on masterclass covering crop yield prediction, SAR flood damage mapping, and Google Earth Engine scripting."
    },
    {
      title: "WebGIS Architecture & 3D City Modeling Summit",
      date: "November 12, 2026",
      time: "2:00 PM - 6:00 PM IST",
      mode: "Virtual Webinar",
      location: "Live Stream Online",
      category: "Developer Webinar",
      desc: "Learn how to build sub-second interactive 3D geospatial applications using Cesium, Mapbox GL, and open-standard raster tiles."
    },
    {
      title: "Disaster Management & Spatial Resilience Symposium",
      date: "December 05, 2026",
      time: "9:30 AM - 5:30 PM IST",
      mode: "In-Person Conference",
      location: "New Delhi, India",
      category: "Industry Conference",
      desc: "Bringing together state disaster management cells, academic researchers, and geospatial engineers to showcase real-time response tech."
    }
  ];

  const pastHighlights = [
    {
      title: "International GIS Day Expo 2025",
      attendees: "1,200+ Participants",
      highlight: "Delivered keynote addresses on autonomous LiDAR feature extraction and trained 350+ students in open-source GIS tools."
    },
    {
      title: "Geospatial Smart City Hackathon",
      attendees: "60 Teams",
      highlight: "Sponsored prize pool and mentored student innovators developing civic incident reporting platforms on HakeGIS."
    }
  ];

  return (
    <div className="space-y-12 animate-fade-in">
      {/* Featured Header Card */}
      <div className="p-8 sm:p-10 rounded-2xl bg-[#cce5f5] text-slate-900 shadow-sm border border-[#83c9d7]">
        <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800 bg-white/40 px-3 py-1 rounded-md inline-block mb-3">
          Community & Industry Events
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 font-heading">
          Conferences, Masterclasses & Geospatial Summits
        </h2>
        <p className="mt-3 text-slate-900 font-medium text-base sm:text-lg leading-relaxed max-w-3xl">
          Connect with our research team, attend certified masterclasses, and explore groundbreaking developments in Earth observation and spatial technology.
        </p>
      </div>

      {/* Upcoming Events Section */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 font-heading">
              Upcoming Events & Workshops
            </h3>
            <p className="text-slate-600 mt-1 text-sm">
              Register early for certified seats and virtual attendee passes.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm self-start sm:self-auto"
          >
            Request Institutional Workshop
          </Link>
        </div>

        <div className="space-y-4">
          {upcomingEvents.map((evt, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-[#005b94] hover:shadow-md transition-all group"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold text-[#005b94] bg-cyan-50 border border-cyan-100 px-3 py-1 rounded-full uppercase tracking-wider">
                  {evt.category}
                </span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md">
                  {evt.mode}
                </span>
              </div>

              <h4 className="text-lg sm:text-xl font-bold text-slate-900 mt-2 group-hover:text-[#005b94] transition-colors">
                {evt.title}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4 py-3 border-y border-slate-100 text-xs font-semibold text-slate-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#005b94]" />
                  <span>{evt.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#005b94]" />
                  <span>{evt.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#005b94]" />
                  <span>{evt.location}</span>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                {evt.desc}
              </p>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">Limited Seats Available</span>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#005b94] group-hover:underline"
                >
                  <span>Register for Event</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Past Event Highlights */}
      <section className="pt-6 border-t border-slate-200 space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 font-heading">
            Past Event Highlights
          </h3>
          <p className="text-slate-600 mt-1 text-sm">
            Recap of previous summits, symposiums, and spatial community meetups.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {pastHighlights.map((past, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center justify-between gap-2 mb-2">
                <h4 className="text-base font-bold text-slate-900">{past.title}</h4>
                <span className="text-xs font-bold text-slate-500 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                  {past.attendees}
                </span>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                {past.highlight}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
