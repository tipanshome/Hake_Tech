export const stats = [
  {
    number: "231+",
    label: "Happy Users",
    subtext: "Across enterprise & government"
  },
  {
    number: "121+",
    label: "Issues Solved",
    subtext: "Complex spatial challenges resolved"
  },
  {
    number: "159+",
    label: "Good Reviews",
    subtext: "Verified client feedback"
  }
];

export const baseCategories = [
  { id: "all", label: "All Sectors" },
  { id: "environment", label: "Environment & Agriculture" },
  { id: "security", label: "Security & Emergency" },
  { id: "infrastructure", label: "Infrastructure & Logistics" },
  { id: "public", label: "Public & Social Services" }
];

export const industries = [
  {
    id: "agriculture",
    number: "01",
    category: "environment",
    title: "Agriculture",
    image: "/assets/Industries/ind-agriculture.jpg",
    description:
      "Crop health monitoring, yield estimation, and precision farming from multispectral imagery and field-level analytics.",
    tags: ["NDVI Telemetry", "Yield Forecasts"],
    overview:
      "Hake Technologies delivers an intelligent precision agriculture platform that integrates high-frequency optical and SAR satellite imagery with drone-based surveys and field telemetry. By combining advanced remote sensing, geospatial analytics, and predictive modelling, the platform enables continuous crop health monitoring, irrigation management, drought risk assessment, and yield forecasting to support data-driven agricultural decisions.",
    capabilities: [
      "Crop Health Monitoring: Field-level NDVI, NDRE, and chlorophyll index mapping",
      "Acreage Estimation & Crop Classification: Agricultural land assessment and crop area verification",
      "Water Stress & Drought Analytics: Soil moisture anomaly detection and drought vulnerability assessment",
      "Predictive Yield Intelligence: AI-driven yield forecasting, crop growth monitoring, and harvest cycle alerts"
    ],
    sensors: ["Multispectral Optical (Sentinel-2, Planet)", "Thermal Infrared", "High-Resolution Drone RGB"]
  },
  {
    id: "climate",
    number: "02",
    category: "environment",
    title: "Climate",
    image: "/assets/Industries/ind-climate.jpg",
    description:
      "Glacier, coastline, and land-surface monitoring that tracks climate change indicators over time.",
    tags: ["Cryosphere Telemetry", "Carbon Sink"],
    overview:
      "Hake Technologies delivers advanced geospatial climate intelligence solutions to monitor environmental change, assess climate-related risks, and quantify ecosystem transitions. By integrating long-term satellite imagery, automated change detection, remote sensing, and carbon analytics, we help organizations understand climate trends, evaluate vulnerabilities, and support evidence-based climate adaptation and mitigation strategies.",
    capabilities: [
      "Glacial Retreat & Cryosphere Change Monitoring",
      "Coastal Erosion, Sea-Level Rise & Climate Vulnerability Modelling",
      "Land Surface Temperature (LST) Mapping & Thermal Anomaly Detection",
      "Carbon Sink Assessment, Sequestration Estimation & Emission Plume Monitoring"
    ],
    sensors: ["Synthetic Aperture Radar (SAR)", "MODIS / Landsat Decadal Baselines", "Altimetry & Gravity GRACE"]
  },
  {
    id: "defense-intelligence",
    number: "03",
    category: "security",
    title: "Defence & Intelligence",
    image: "/assets/Industries/ind-defense.jpg",
    description:
      "Mission-grade geospatial data, terrain analysis, and situational awareness for national security operations.",
    tags: ["Tactical Topography", "Line-of-Sight"],
    overview:
      "Hake Technologies delivers advanced geospatial intelligence solutions to support terrain assessment, operational planning, reconnaissance analysis, and secure spatial data management. By combining high-resolution Earth observation data, 3D terrain modelling, and specialized GIS analytics, our platform enables defence and intelligence organizations to derive critical spatial insights in secure, mission-specific operational environments.",
    capabilities: [
      "Line-of-Sight (LOS), Viewshed & Terrain Suitability Analysis",
      "High-Resolution Digital Elevation Models for Terrain Assessment & Mobility Planning",
      "Perimeter Monitoring, Change Detection & Geospatial Risk Assessment",
      "Secure, Air-Gapped On-Premises GIS Infrastructure & Spatial Data Management"
    ],
    sensors: ["Sub-30cm Commercial Satellite Electro-Optical", "LiDAR Point Clouds", "High-Bandwidth SAR"]
  },
  {
    id: "disaster-management",
    number: "04",
    category: "security",
    title: "Disaster Management",
    image: "/assets/Industries/ind-disaster.jpg",
    description:
      "Rapid damage assessment, flood mapping, and response planning when every hour counts.",
    tags: ["Flood Inundation", "Damage Vectors"],
    overview:
      "Hake Technologies delivers geospatial intelligence solutions for disaster preparedness, real-time situational awareness, and emergency response. By integrating satellite imagery, remote sensing, terrain analytics, and spatial modelling, our platform transforms disaster-related data into actionable insights, including flood inundation maps, infrastructure damage assessments, wildfire risk zones, and optimized evacuation routes—enabling faster, coordinated, and evidence-based emergency management.",
    capabilities: [
      "Flood Hazard Mapping, Inundation Modelling & Risk Zonation",
      "Post-Disaster Infrastructure Damage Assessment & Spatial Impact Mapping",
      "Wildfire Detection, Perimeter Monitoring & Fire Spread Modelling",
      "Evacuation Route Planning, Emergency Resource Allocation & Response Mapping"
    ],
    sensors: ["All-Weather SAR Flood Mapping", "Rapid-Tasking UAV Fleets", "Thermal Satellite Hotspot Sensors"]
  },
  {
    id: "education",
    number: "05",
    category: "public",
    title: "Education",
    image: "/assets/Industries/ind-education.jpg",
    description:
      "Campus planning, catchment analysis, and location intelligence for schools and universities.",
    tags: ["Catchment Mapping", "3D Campus Twins"],
    overview:
      "Hake Technologies provides geospatial solutions that support educational planning, institutional management, and equitable access to learning opportunities. By combining GIS, demographic analytics, accessibility modelling, and 3D visualization, our platform helps education authorities, academic institutions, and urban planners optimize school locations, assess service coverage, manage campus infrastructure, and make informed, data-driven decisions.",
    capabilities: [
      "School Catchment Mapping, Enrolment Trends & Demographic Analysis",
      "3D Campus Digital Twins, Infrastructure Mapping & Utility Asset Management",
      "Student Accessibility Analysis, Transit Connectivity & Walkability Assessment",
      "Geospatial Datasets, Spatial Research Tools & Academic Analytics"
    ],
    sensors: ["Urban Orthomosaics", "Demographic Micro-Census Layers", "Multimodal Transport Network GIS"]
  },
  {
    id: "environment-ecology",
    number: "06",
    category: "environment",
    title: "Environment & Ecology",
    image: "/assets/Industries/ind-ecology.jpg",
    description:
      "Forest inventory, habitat mapping, and ecosystem monitoring for conservation and compliance.",
    tags: ["Biomass Density", "Habitat Corridors"],
    overview:
      "Hake Technologies delivers advanced geospatial solutions for ecosystem monitoring, biodiversity conservation, and sustainable natural resource management. By integrating satellite remote sensing, GIS analytics, and automated change detection, our platform enables organizations to monitor forest cover, assess wetland dynamics, identify environmental encroachment, and evaluate habitat connectivity—supporting evidence-based conservation and environmental compliance.",
    capabilities: [
      "Forest Canopy Cover Assessment, Biomass Estimation & Carbon Stock Modelling",
      "Watershed Mapping, Wetland Monitoring & Waterbody Change Detection",
      "Biodiversity Corridor Mapping, Wildlife Habitat Analysis & Ecological Connectivity Assessment",
      "Deforestation, Illegal Mining & Environmental Compliance Monitoring"
    ],
    sensors: ["Hyper-spectral Imagery", "Airborne LiDAR Biomass Scanners", "Sentinel SAR Vegetation Penetration"]
  },
  {
    id: "health",
    number: "07",
    category: "public",
    title: "Health",
    image: "/assets/Industries/ind-health.jpg",
    description:
      "Facility siting, service-area analysis, and disease-pattern mapping for public health systems.",
    tags: ["Isochrone Drive-Times", "Epidemic Vectors"],
    overview:
      "Hake Technologies delivers geospatial health intelligence solutions to strengthen public health surveillance, improve healthcare access, and optimize healthcare resource allocation. By integrating epidemiological data, population demographics, environmental indicators, and network-based spatial analysis, our platform helps health authorities identify disease hotspots, assess healthcare service coverage, locate underserved communities, and improve emergency medical response.",
    capabilities: [
      "Vector-Borne Disease Surveillance, Outbreak Hotspot Mapping & Environmental Risk Assessment",
      "Healthcare Accessibility Analysis, Emergency Drive-Time Modelling & Optimal Facility Planning",
      "Vulnerable Population Mapping & Geographic Healthcare Disparity Assessment",
      "Emergency Medical Logistics, Supply Chain Optimisation & Delivery Route Planning"
    ],
    sensors: ["Demographic Spatial Datasets", "Real-Time Traffic Networks", "Environmental Health Remote Sensing"]
  },
  {
    id: "policy-development",
    number: "08",
    category: "public",
    title: "Policy Development",
    image: "/assets/Industries/ind-policy.jpg",
    description:
      "Evidence-based spatial data and scenario modeling that ground policy in measurable reality.",
    tags: ["SDSS Modeling", "Zoning Analytics"],
    overview:
      "Hake Technologies empowers policymakers, government agencies, and research institutions with evidence-based geospatial intelligence to evaluate policy effectiveness, assess land-use regulations, guide infrastructure investments, and promote equitable socioeconomic development. By integrating spatial analytics, demographic data, and scenario modelling, our solutions support transparent governance, strategic planning, and informed public policy decisions.",
    capabilities: [
      "Multi-Criteria Spatial Decision Support Systems (SDSS) & Scenario Modelling",
      "Socioeconomic Vulnerability Assessment & Equitable Resource Allocation",
      "Land-Use Regulatory Compliance, Zoning Analysis & Statutory Planning Support"
    ],
    sensors: ["National Spatial Data Infrastructure (NSDI)", "Census Aggregations", "Multi-Temporal Satellite Baselines"]
  },
  {
    id: "public-safety",
    number: "09",
    category: "security",
    title: "Public Safety",
    image: "/assets/Industries/ind-safety.jpg",
    description:
      "City-wide monitoring, incident mapping, and risk analysis for safer communities.",
    tags: ["Incident Density", "Dispatch Routing"],
    overview:
      "Hake Technologies delivers geospatial intelligence solutions that strengthen public safety, improve emergency response, and support proactive risk management. By integrating incident data, real-time telemetry, and 2D/3D urban mapping, our platform enables authorities to identify high-risk areas, optimize emergency service deployment, assess surveillance coverage, and enhance public safety planning.",
    capabilities: [
      "Incident Density Mapping, Hotspot Analysis & Spatial Anomaly Detection",
      "CCTV Coverage Assessment & Surveillance Blind-Spot Identification",
      "Emergency Response Routing, Travel-Time Analysis & Patrol Optimisation",
      "Public Event Crowd Monitoring, Evacuation Route Planning & Egress Safety Modelling"
    ],
    sensors: ["High-Resolution City Basemaps", "IoT Sensor Feeds", "Real-Time GPS Tracking Layers"]
  },
  {
    id: "research-development",
    number: "10",
    category: "public",
    title: "Research & Development",
    image: "/assets/Industries/ind-research.jpg",
    description:
      "Spatial algorithms, predictive modeling, and experimental prototyping for advanced GIS research.",
    tags: ["AI Feature Extraction", "Cloud GeoTIFF"],
    overview:
      "Hake Technologies partners with scientific institutions, research organizations, and geospatial laboratories to advance geospatial science and engineering. We develop custom spatial algorithms, deep learning models, and innovative Earth observation workflows that transform complex scientific data into reliable analytical insights. Our research-driven approach enables experimentation, advanced modelling, scalable geospatial computing, and the development of next-generation geospatial technologies.",
    capabilities: [
      "Custom Computer Vision & Deep Learning Models for automated satellite image interpretation, feature extraction, and geospatial object detection",
      "High-Performance Geospatial Computing with cloud-native processing, large-scale raster analytics, and optimised GeoTIFF indexing",
      "Predictive Geophysical & Atmospheric Modelling for spatial simulations, environmental analysis, and Earth system research",
      "Open Geospatial Standards & API Prototyping aligned with Open Geospatial Consortium (OGC) specifications to support interoperability and system integration"
    ],
    sensors: ["Custom Synthetic Aperture Radar", "Hyperspectral Earth Observation", "Sub-Meter Satellite Swarms"]
  },
  {
    id: "social-wellbeing",
    number: "11",
    category: "public",
    title: "Social Wellbeing",
    image: "/assets/Industries/ind-social.jpg",
    description:
      "Demographic mapping, accessibility indexing, and community infrastructure equity tracking.",
    tags: ["Civic Equity", "Livability Metrics"],
    overview:
      "Hake Technologies applies geospatial intelligence and spatial analytics to assess quality of life, equitable access to essential services, and the distribution of community infrastructure across urban and rural settlements. By integrating demographic, socioeconomic, environmental, and mobility data, we help planners and policymakers identify service gaps, evaluate neighbourhood risk, and support inclusive, accessible, and sustainable community development.",
    capabilities: [
      "Urban Green Space Accessibility & Recreational Amenity Analysis to evaluate access to parks, open spaces, and community recreation facilities",
      "Community Infrastructure Gap Assessment & Social Vulnerability Mapping to identify underserved areas and support equitable resource allocation",
      "Age-Sensitive Amenity Accessibility Analysis to assess the proximity of essential services and facilities for senior citizens and children",
      "Public Transit Accessibility & Civic Connectivity Assessment to measure equitable access to transport networks, public services, and community infrastructure"
    ],
    sensors: ["OpenStreetMap Geo-Data", "High-Resolution Orthophotos", "Municipal Cadastral Boundaries"]
  },
  {
    id: "supply-chain",
    number: "12",
    category: "infrastructure",
    title: "Supply Chain Management",
    image: "/assets/Industries/ind-supplychain.jpg",
    description:
      "Multi-modal logistics route optimization, freight corridor monitoring, and supply network mapping.",
    tags: ["Freight Corridors", "Port Telemetry"],
    overview:
      "Hake Technologies leverages geospatial intelligence, network analytics, and real-time tracking to optimize supply chain operations across global and regional logistics networks. By integrating transport infrastructure, warehouse locations, port activity, and vessel-tracking data, we help organizations improve freight movement, streamline distribution, identify operational bottlenecks, and strengthen supply chain resilience. Our spatial analytics support data-driven logistics planning, efficient resource allocation, and proactive risk management across multimodal transportation systems.",
    capabilities: [
      "Global Freight Corridor & Multimodal Transport Optimisation to evaluate intermodal networks, transit routes, and freight movement efficiency",
      "Distribution Centre Catchment & Last-Mile Delivery Analysis to optimise warehouse coverage, delivery zones, and service accessibility",
      "Port Congestion & Container Terminal Monitoring to assess vessel movements, terminal activity, logistics bottlenecks, and cargo flow",
      "Supply Chain Vulnerability & Geopolitical Risk Analysis to identify critical dependencies, transport disruptions, and strategic logistics bottlenecks"
    ],
    sensors: ["AIS Maritime Feeds", "Satellite Vessel Tracking", "High-Precision Road Network Datasets"]
  },
  {
    id: "transportation",
    number: "13",
    category: "infrastructure",
    title: "Transportation",
    image: "/assets/Industries/ind-transport.jpg",
    description:
      "Road asset inventory, transit network analysis, and traffic corridor geospatial optimization.",
    tags: ["Mobile LiDAR", "Pavement Distress"],
    overview:
      "Hake Technologies delivers geospatial intelligence and advanced spatial analytics to support the planning, modernization, and monitoring of transportation infrastructure. By integrating mobile LiDAR, high-resolution imagery, GNSS surveys, traffic data, and real-time sensor telemetry, we help transportation authorities and infrastructure operators assess asset conditions, improve network efficiency, monitor structural risks, and support safer, more sustainable mobility. Our solutions enable data-driven infrastructure management across roadways, railways, bridges, tunnels, and public transportation networks.",
    capabilities: [
      "Mobile LiDAR Road Asset Inventory & Pavement Condition Mapping for automated extraction of road features, identification of pavement distress, and infrastructure assessment",
      "Railway Corridor Mapping & Encroachment Monitoring using LiDAR surveys, track alignment analysis, and spatial assessments of the railway right-of-way",
      "Public Transport Origin–Destination & Capacity Analytics to evaluate passenger movement patterns, transport demand, network accessibility, and service utilization",
      "Bridge, Tunnel & Highway Slope Monitoring through geospatial telemetry, deformation analysis, and spatial risk assessment to support infrastructure safety and maintenance planning"
    ],
    sensors: ["Mobile Mapping System (MMS) 360° LiDAR", "High-Res Aerial Orthophotos", "InSAR Ground Deformation"]
  },
  {
    id: "urban-rural-development",
    number: "14",
    category: "infrastructure",
    title: "Urban & Rural Development",
    image: "/assets/Industries/ind-urban.jpg",
    description:
      "Cadastral parcel mapping, smart city digital twins, and rural land-use infrastructure planning.",
    tags: ["Cadastral GIS", "3D Digital Twins"],
    overview:
      "Hake Technologies delivers advanced geospatial solutions to support sustainable urban planning, rural development, and infrastructure modernisation. By integrating high-precision cadastral mapping, 3D city modelling, satellite imagery, field surveys, and spatial analytics, we help municipalities and development authorities improve land management, plan infrastructure expansion, monitor settlement growth, and strengthen evidence-based decision-making. Our solutions support transparent land administration, efficient resource allocation, and inclusive, resilient development across urban and rural landscapes.",
    capabilities: [
      "High-Precision Cadastral Mapping & Land Records GIS for parcel demarcation, boundary verification, and spatial integration of land records",
      "3D Smart City Digital Twins & Building Analytics for building footprint extraction, height and volume modelling, and urban infrastructure visualisation",
      "Rural Infrastructure Planning & Service Coverage Analysis for electrification, water supply, road connectivity, and essential public service development",
      "Urban Growth Modelling, Zoning & Land-Use Compliance Analytics to monitor settlement expansion, assess development patterns, and support regulatory planning"
    ],
    sensors: ["Sub-5cm Drone Photogrammetry", "Airborne LiDAR Point Clouds", "Stereo-Pair Satellite Topography"]
  }
];
