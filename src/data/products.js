export const baseCategories = [
  { id: "all", label: "All Products" },
  { id: "geospatial", label: "Hake Geospatial", match: "Hake Geospatial" },
  { id: "health", label: "Digital Health", match: "Health" },
  { id: "agriculture", label: "Digital Agriculture", match: "Agriculture" },
  { id: "tourism", label: "Eco-Tourism", match: "Tourism" },
  { id: "diffence", label: "Defence & Homeland Security", match: "Defence" },
];

export const geospatialProducts = [
  {
    id: "Hake_GeoDesk",
    title: "Hake GeoDesk",
    category: "Hake Geospatial",
    type: "Desktop Application",
    iconName: "Monitor",
    image: "/assets/Products/product_desktop.jpg",
    imgStyle: "object-cover object-center",
    tagline: "High-Performance Workstation Spatial Analysis & Modeling",
    description:
      "Hake GeoDesk (Desktop GIS) is a powerful, integrated geospatial platform for precision mapping, spatial data management, advanced analysis, and high-quality visualization. It supports multiple GIS data formats, satellite imagery, GPS/GNSS data, surveying workflows, and geospatial editing, enabling users to transform complex spatial datasets into actionable insights. With advanced analytical capabilities and intuitive mapping tools, GeoDesk helps organizations streamline geospatial workflows, enhance operational efficiency, and make informed, data-driven decisions across diverse sectors and applications.",
    features: [
      "Advanced 2D Mapping & Spatial Analysis",
      "Multi-Format Support for Vector, Raster & Satellite Imagery",
      "Precision Digitization, Geospatial Editing & Surveying Tools",
      "3D Visualization, Terrain Modelling & Advanced Spatial Analytics",
    ],
    deployment: "Windows / Linux Desktop Workstations",
  },
  {
    id: "Hake_GeoWeb",
    title: "Hake GeoWeb",
    category: "Hake Geospatial",
    type: "WebGIS Platform",
    iconName: "Globe2",
    image: "/assets/Products/product_webgis.png",
    imgStyle: "object-cover object-left-top",
    tagline: "Scalable Cloud-Native WebGIS Portals & Spatial Dashboards",
    description:
      "Hake GeoWeb GIS is an advanced, enterprise-grade geospatial platform that unifies spatial data management, intelligent analytics, and interactive visualization in a centralized web environment. By integrating GIS, AI/ML, location intelligence, remote sensing, field data acquisition, and enterprise workflows, it empowers organizations to optimize planning, monitor operations, manage assets, and make data-driven decisions. Designed for scalability and seamless digital integration, GeoWeb supports digital transformation across government, infrastructure, and industrial sectors.",
    features: [
      "High-Performance Vector & Raster Data Streaming",
      "Real-Time IoT Monitoring & GPS-Based Asset Tracking",
      "Secure, Role-Based Access Control & User Management",
      "OGC-Compliant APIs for Seamless Geospatial Interoperability",
    ],
    deployment: "Cloud SaaS, On-Premise, or Private Air-Gapped Clusters",
  },
  {
    id: "Hake_GeoMobile",
    title: "Hake Survey360",
    category: "Hake Geospatial",
    type: "Mobile Survey Solution",
    iconName: "Smartphone",
    image: "/assets/Products/product_mobile360.jpg",
    imgStyle: "object-cover object-top",
    tagline: "Field Spatial Data Collection & 360° Ground Telemetry",
    description:
      "Hake Survey360 is an advanced mobile GIS and field intelligence solution for precision surveying, geospatial data acquisition, and real-time field operations. It enables users to capture high-accuracy GPS/GNSS coordinates, geotagged photographs, 360° ground imagery, and spatial features—including points, lines, and polygons—directly in the field. With offline mapping and seamless integration with enterprise WebGIS platforms, Survey360 streamlines asset mapping, field inspections, infrastructure surveys, and monitoring workflows.",
    features: [
      "High-Precision GPS/GNSS Positioning & Coordinate Capture",
      "360° Ground Photography, Geotagging & Asset Inspection",
      "Offline GIS Mapping with Local Spatial Data Storage",
      "Seamless Field-to-Office Synchronization with Enterprise WebGIS",
    ],
    deployment: "Android & iOS Native Mobile Apps",
  },
  {
    id: "Hake_geoAI",
    title: "Hake GeoAI",
    category: "Hake Geospatial",
    type: "AI and Analytics",
    iconName: "Brain",
    image: "/assets/Products/product_geoai.jpg",
    imgStyle: "object-cover object-center",
    tagline: "Deep Learning Geospatial Vision & Predictive Spatial Analytics",
    description:
      "Hake GeoAI is an enterprise-grade geospatial AI and computer vision platform that transforms large-scale Earth observation data into actionable intelligence. Powered by advanced machine learning, deep learning, and satellite image analytics, it enables automated feature extraction, multi-class object detection, land-use and land-cover segmentation, and predictive spatial modelling. Designed for scalable geospatial intelligence, Hake GeoAI empowers organizations to monitor landscapes, detect changes, assess environmental impacts, and support data-driven decision-making.",
    features: [
      "Automated Building Footprint Extraction and Road Network Vectorization",
      "Deep Learning–Based Object Detection for Vehicles, Aircraft, and Vessels",
      "Multispectral NDVI Analysis, Crop Health Assessment, and Yield Prediction",
      "Long-Term Satellite Change Detection and Deforestation Anomaly Monitoring",
    ],
    deployment:
      "Cloud AI Cluster, High-Performance GPU Workstations, or Secure On-Premise Air-Gapped Systems",
  },
  {
    id: "Hake_IGS",
    title: "Hake IGS",
    category: "Hake Geospatial",
    type: "Integrated Geospatial Solution",
    iconName: "Layers",
    image: "/assets/Products/product_igs.jpg",
    imgStyle: "object-cover object-center",
    tagline: "Unified Multi-Source Spatial Command & Digital Twin Platform",
    description:
      "Integrated Geospatial System is an advanced geospatial command and intelligence platform that integrates multi-source spatial data, real-time IoT sensor networks, live drone video streams, satellite feeds, and 3D digital twins into a unified operational environment. Designed for critical infrastructure management, emergency response, and smart city governance, Hake IGS provides real-time situational awareness, intelligent monitoring, and coordinated decision support to help organizations respond faster, manage risks, and optimize operations.",
    features: [
      "Unified Integration of GIS, CAD, BIM & Live Drone Telemetry",
      "3D Smart City Digital Twins & Real-Time IoT Sensor Monitoring",
      "Multi-Agency Incident Coordination, Dispatch & Situational Awareness",
      "Automated Geospatial Risk Alerts & Intelligent Workflow Triggers",
    ],
    deployment:
      "Central Command Control Rooms, Multi-Agency Cloud Clusters, or Hybrid On-Premises",
  },
  {
    id: "Doha",
    title: "DOHA",
    category: "Health",
    type: "Digital One Health Application",
    iconName: "Activity",
    image: "/assets/Products/DOHA.jpg",
    imgStyle: "object-cover object-center",
    tagline: "Spatial Epidemiology & Environmental Disease Surveillance",
    description:
      "The Digital One Health Application platform is an integrated geospatial health intelligence solution that links human health and environmental surveillance to monitor disease patterns, identify emerging health risks, and detect potential outbreak hotspots. By integrating spatial epidemiology, climate intelligence, satellite-derived indicators, and predictive analytics, the platform enables data-driven public health surveillance, risk assessment, and timely early-warning interventions.",
    features: [
      "Integrated Human Health & Climate Data",
      "Spatial Epidemiology & Disease Outbreak Hotspot Mapping",
      "Satellite-Driven Disease Risk Assessment & Predictive Modelling",
      "Automated Early-Warning Alerts & Public Health Response Coordination",
    ],
    deployment:
      "Public Health Command Centers, Cloud SaaS, or On-Premise Health Clusters",
  },
  {
    id: "MoD and MHA",
    title: "Defence & Homeland Security",
    category: "Defence",
    type: "Security and Intelligence",
    iconName: "Activity",
    image: "/assets/Products/Network-Centric Operation.png",
    imgStyle: "object-cover object-center",
    tagline: "Spatial Epidemiology & Environmental Disease Surveillance",
    description:
      "The Digital One Health Application platform is an integrated geospatial health intelligence solution that links human health and environmental surveillance to monitor disease patterns, identify emerging health risks, and detect potential outbreak hotspots. By integrating spatial epidemiology, climate intelligence, satellite-derived indicators, and predictive analytics, the platform enables data-driven public health surveillance, risk assessment, and timely early-warning interventions.",
    features: [
      "Integrated Human Health & Climate Data",
      "Spatial Epidemiology & Disease Outbreak Hotspot Mapping",
      "Satellite-Driven Disease Risk Assessment & Predictive Modelling",
      "Automated Early-Warning Alerts & Public Health Response Coordination",
    ],
    deployment:
      "Public Health Command Centers, Cloud SaaS, or On-Premise Health Clusters",
  },
  {
    id: "Agriculture",
    title: "Digital Agriculture",
    category: "Agriculture",
    type: "Precision Agriculture Intelligence",
    iconName: "Cpu",
    image: "/assets/Products/Agriculture.jpg",
    imgStyle: "object-cover object-center",
    tagline: "Precision Agriculture & AI-Powered Crop Intelligence",
    description:
      "An intelligent agricultural analytics platform that integrates multispectral satellite imagery, drone-based surveys, vegetation indices, and weather data to monitor crop health, optimize irrigation, identify emerging field risks, and forecast agricultural productivity. Hake Technologies empowers farmers, agribusinesses, and agricultural agencies with data-driven insights for sustainable farming and precision crop management.",
    features: [
      "Field-Level NDVI, NDRE & Crop Canopy Health Monitoring Through Time-Series Analysis",
      "Precision Irrigation Planning & Soil Moisture Stress Detection",
      "Acreage Verification, Crop Zoning & Pest and Disease Risk Alerts",
      "AI-Driven Yield Forecasting & Post-Disaster Crop Loss Assessment for Insurance",
      "Mobile Field Survey Integration with Offline GPS Tagging & Georeferenced Data Capture",
    ],
    deployment: "Cloud SaaS, Web Dashboard & Mobile App",
  },
  {
    id: "Tourism",
    title: "Eco-Tourism",
    category: "Tourism",
    type: "Sustainable Tourism & Intelligence",
    iconName: "ShieldCheck",
    image: "/assets/Products/Eco_tourism.jpg",
    imgStyle: "object-cover object-center",
    tagline: "Smart Eco-Tourism, Biodiversity Monitoring & Protected Area Management",
    description:
      "An integrated geospatial platform for ecological reserves, wildlife sanctuaries, forest departments, and tourism authorities. By combining interactive mapping, visitor analytics, biodiversity monitoring, and environmental risk assessment, the platform supports sustainable tourism, protects sensitive ecosystems, and enhances visitor experiences.",
    features: [
      "Interactive 3D Trail Mapping, Points of Interest (POIs) & Digital Audio Guides",
      "Visitor Footfall Analytics & Ecological Carrying Capacity Monitoring",
      "Geospatial Flora and Fauna Inventories & Citizen-Science Wildlife Sightings",
      "Forest Fire Risk Mapping, Intrusion Detection & Environmental Alerts",
      "Multilingual Tourism Web Portal & Mobile Visitor Companion"
    ],
    deployment:
      "Cloud Web Portal, Mobile Apps & Visitor Center Touchscreens",
  },
];

// Preserved for HomePage.jsx preview sections
export const products = [
  {
    tag: "Hake Geospatial",
    title: "Hake GeoDesk",
    desc: "Hake GeoDesk (Desktop GIS) is a powerful, integrated geospatial platform for precision mapping, spatial data management, advanced analysis, and high-quality visualization. It supports multiple GIS data formats, satellite imagery, GPS/GNSS data, surveying workflows, and geospatial editing, enabling users to transform complex spatial datasets into actionable insights. With advanced analytical capabilities and intuitive mapping tools, GeoDesk helps organizations streamline geospatial workflows, enhance operational efficiency, and make informed, data-driven decisions across diverse sectors and applications.",
    features: [
      "Advanced 2D Mapping & Spatial Analysis",
      "Multi-Format Support for Vector, Raster & Satellite Imagery",
      "Precision Digitization, Geospatial Editing & Surveying Tools",
      "3D Visualization, Terrain Modelling & Advanced Spatial Analytics",
    ],
    badge: "GeoDesk",
  },
  {
    tag: "HAKE GEOSPATIAL",
    title: "Hake GeoWeb",
    desc: "Hake GeoWeb GIS is an advanced, enterprise-grade geospatial platform that unifies spatial data management, intelligent analytics, and interactive visualization in a centralized web environment. By integrating GIS, AI/ML, location intelligence, remote sensing, field data acquisition, and enterprise workflows, it empowers organizations to optimize planning, monitor operations, manage assets, and make data-driven decisions. Designed for scalability and seamless digital integration, GeoWeb supports digital transformation across government, infrastructure, and industrial sectors.",
    features: [
      "High-Performance Vector & Raster Data Streaming",
      "Real-Time IoT Monitoring & GPS-Based Asset Tracking",
      "Secure, Role-Based Access Control & User Management",
      "OGC-Compliant APIs for Seamless Geospatial Interoperability",
    ],
    badge: "GeoWeb",
  },
  {
    tag: "FIELD SURVEY",
    title: "Hake Survey360",
    desc: "Hake Survey360 is an advanced mobile GIS and field intelligence solution for precision surveying, geospatial data acquisition, and real-time field operations. It enables users to capture high-accuracy GPS/GNSS coordinates, geotagged photographs, 360° ground imagery, and spatial features—including points, lines, and polygons—directly in the field. With offline mapping and seamless integration with enterprise WebGIS platforms, Survey360 streamlines asset mapping, field inspections, infrastructure surveys, and monitoring workflows.",
    features: [
      "High-Precision GPS/GNSS Positioning & Coordinate Capture",
      "360° Ground Photography, Geotagging & Asset Inspection",
      "Offline GIS Mapping with Local Spatial Data Storage",
      "Seamless Field-to-Office Synchronization with Enterprise WebGIS",
    ],
    badge: "Survey360",
  },
  {
    tag: "AI & COMPUTER VISION",
    title: "Hake GeoAI",
    desc: "Hake GeoAI is an enterprise-grade geospatial AI and computer vision platform that transforms large-scale Earth observation data into actionable intelligence. Powered by advanced machine learning, deep learning, and satellite image analytics, it enables automated feature extraction, multi-class object detection, land-use and land-cover segmentation, and predictive spatial modelling. Designed for scalable geospatial intelligence, Hake GeoAI empowers organizations to monitor landscapes, detect changes, assess environmental impacts, and support data-driven decision-making.",
    features: [
      "Automated Building Footprint Extraction and Road Network Vectorization",
      "Deep Learning–Based Object Detection for Vehicles, Aircraft, and Vessels",
      "Multispectral NDVI Analysis, Crop Health Assessment, and Yield Prediction",
      "Long-Term Satellite Change Detection and Deforestation Anomaly Monitoring",
    ],
    badge: "GeoAI",
  },
  {
    tag: "COMMAND & DIGITAL TWIN",
    title: "Hake IGS ",
    desc: "IGS (Integrated Geospatial System) is an advanced geospatial command and intelligence platform that integrates multi-source spatial data, real-time IoT sensor networks, live drone video streams, satellite feeds, and 3D digital twins into a unified operational environment. Designed for critical infrastructure management, emergency response, and smart city governance, Hake IGS provides real-time situational awareness, intelligent monitoring, and coordinated decision support to help organizations respond faster, manage risks, and optimize operations.",
    features: [
      "Unified Integration of GIS, CAD, BIM & Live Drone Telemetry",
      "3D Smart City Digital Twins & Real-Time IoT Sensor Monitoring",
      "Multi-Agency Incident Coordination, Dispatch & Situational Awareness",
      "Automated Geospatial Risk Alerts & Intelligent Workflow Triggers",
    ],
    badge: "IGS",
  },
];

export const healthProducts = [
  {
    tag: "DIGITAL HEALTH",
    title: "Digital One Health Application",
    desc: "The Digital One Health Application platform is an integrated geospatial health intelligence solution that links human health and environmental surveillance to monitor disease patterns, identify emerging health risks, and detect potential outbreak hotspots. By integrating spatial epidemiology, climate intelligence, satellite-derived indicators, and predictive analytics, the platform enables data-driven public health surveillance, risk assessment, and timely early-warning interventions.",
    features: [
      "Integrated Human Health & Climate Data",
      "Spatial Epidemiology & Disease Outbreak Hotspot Mapping",
      "Satellite-Driven Disease Risk Assessment & Predictive Modelling",
      "Automated Early-Warning Alerts & Public Health Response Coordination",
    ],
    badge: "DOHA",
  },
];
