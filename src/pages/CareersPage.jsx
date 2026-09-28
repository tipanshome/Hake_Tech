import React from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  Users,
  Compass,
  GraduationCap,
  HeartHandshake,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Clock
} from 'lucide-react';

export default function CareersPage() {
  const openings = [
    {
      title: "Senior Geospatial / GIS Analyst",
      department: "Spatial Analytics",
      location: "India / Hybrid",
      type: "Full-Time",
      description: "Lead complex satellite photogrammetry, remote sensing workflows, and LiDAR data pipelines for enterprise clients."
    },
    {
      title: "Full-Stack WebGIS Developer",
      department: "Software Engineering",
      location: "Remote / Office",
      type: "Full-Time",
      description: "Build interactive real-time mapping dashboards using React, Mapbox, Cesium, and Python geo-backend APIs."
    },
    {
      title: "Geospatial Training Instructor",
      department: "Capacity Building Division",
      location: "On-site / Institutional",
      type: "Full-Time / Contract",
      description: "Deliver professional hands-on workshops on QGIS, ArcGIS Pro, Google Earth Engine, and Python for GIS."
    },
    {
      title: "Drone Survey & Photogrammetry Specialist",
      department: "Field Operations",
      location: "Field / Multiple Locations",
      type: "Full-Time",
      description: "Manage UAV flight operations, GCP calibration, point cloud generation, and digital elevation model processing."
    }
  ];

  const perks = [
    {
      icon: <GraduationCap className="w-5 h-5 text-[#005b94]" />,
      title: "Continuous Learning",
      desc: "Sponsored geospatial certifications, research conference sponsorships, and hands-on access to satellite datasets."
    },
    {
      icon: <Users className="w-5 h-5 text-[#005b94]" />,
      title: "Collaborative Culture",
      desc: "Work side-by-side with leading PhD researchers, spatial scientists, and innovative software developers."
    },
    {
      icon: <Compass className="w-5 h-5 text-[#005b94]" />,
      title: "High-Impact Missions",
      desc: "Create tools that solve national-scale problems—from disaster flood modeling to municipal smart city planning."
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#005b94]" />,
      title: "Work-Life Harmony",
      desc: "Flexible work arrangements, comprehensive health coverage, and generous annual leave policies."
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 sm:py-12">
        <div className="space-y-12 animate-fade-in">
          {/* Featured Header Card */}
          <div className="p-8 sm:p-10 rounded-2xl bg-[#cce5f5] text-slate-900 shadow-sm border border-[#83c9d7]">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800 bg-white/40 px-3 py-1 rounded-md inline-block mb-3">
              Careers at Hake
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 font-heading">
              Build the Future of Spatial Intelligence with Us
            </h2>
            <p className="mt-3 text-slate-900 font-medium text-base sm:text-lg leading-relaxed max-w-3xl">
              Join a multidisciplinary team of GIS researchers, satellite data engineers, and full-stack creators solving real-world challenges with Earth observation technology.
            </p>
          </div>

          {/* Why Join HAKE Section */}
          <section className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 font-heading">
                Why Work with Hake Technologies?
              </h3>
              <p className="text-slate-600 mt-2 text-base leading-relaxed">
                We value intellectual curiosity, technological precision, and a collaborative mindset. Here, your work directly informs critical climate, infrastructure, and geospatial decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {perks.map((perk, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center mb-3">
                    {perk.icon}
                  </div>
                  <h4 className="text-base font-bold text-slate-900">{perk.title}</h4>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed">{perk.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Open Positions Section */}
          <section className="pt-6 border-t border-slate-200 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 font-heading">
                  Current Openings
                </h3>
                <p className="text-slate-600 text-sm mt-1">
                  Explore available opportunities to join our core team.
                </p>
              </div>
              <a
                href="mailto:careers@haketech.com"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm self-start sm:self-auto"
              >
                <span>Send Open Application</span>
              </a>
            </div>

            <div className="space-y-4">
              {openings.map((job, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-[#005b94] hover:shadow-md transition-all group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span className="text-xs font-bold text-[#005b94] uppercase tracking-wider">
                        {job.department}
                      </span>
                      <h4 className="text-lg font-bold text-slate-900 mt-0.5 group-hover:text-[#005b94] transition-colors">
                        {job.title}
                      </h4>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-semibold text-slate-500">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {job.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">Ready to apply?</span>
                    <a
                      href={`mailto:careers@haketech.com?subject=Application for ${job.title}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#005b94] group-hover:underline"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Internship / Academic Callout */}
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-bold text-slate-900">Student & Academic Research Internships</h4>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-xl">
                Are you a graduate or postgraduate student in Geoinformatics, Remote Sensing, or Geography? We offer seasonal research fellowships and industrial project mentorships.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all shadow-sm"
            >
              Inquire for Internships
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
