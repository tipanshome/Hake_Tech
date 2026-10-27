export const blogCategories = [
  "All",
  "Remote Sensing & SAR",
  "WebGIS & Cloud",
  "AI in Agriculture",
  "LiDAR & 3D Twins",
  "Climate & Sustainability",
  "Standards & Governance"
];

export const featuredBlog = {
  id: "sar-flood-inundation-mapping",
  slug: "sar-flood-inundation-mapping",
  title: "Harnessing Synthetic Aperture Radar (SAR) for Real-Time Flood Inundation & Disaster Response",
  excerpt: "How dual-polarized radar sensors cut through monsoon cloud cover to deliver sub-hectare water level change detection and emergency rescue routing for state disaster management cells.",
  category: "Remote Sensing & SAR",
  date: "October 14, 2026",
  readTime: "6 min read",
  author: {
    name: "Dr. Arpan Mukherjee",
    role: "Principal Geospatial Scientist",
    initials: "AM"
  },
  tags: ["SAR", "Disaster Resilience", "NISAR", "Earth Observation"],
  summary: "When torrential monsoon rains cause river basins to swell, optical satellite imagery is rendered ineffective due to thick cloud blankets. Dual-pol Synthetic Aperture Radar (SAR) operates in the microwave spectrum, penetrating clouds, rain, and nighttime darkness to reflect water-backscatter contrast with razor precision.",
  highlights: [
    "Near real-time change detection algorithms mapping inundated acreage within 90 minutes of satellite pass.",
    "Fusion of SAR flood footprints with high-resolution digital elevation models (DEMs) to project water depth.",
    "Direct integration into emergency operations centers (EOC) via secure WebGIS map services."
  ]
};

export const blogPosts = [
  {
    id: "next-gen-webgis-3d-city-modelling",
    slug: "next-gen-webgis-3d-city-modelling",
    title: "Next-Gen WebGIS Architectures: Streaming 3D Mesh & Vector Tiles at 60 FPS",
    excerpt: "Building high-throughput urban digital twin platforms using Cesium, Mapbox GL, and serverless Cloud-Optimized GeoTIFFs (COGs) for municipal infrastructure managers.",
    category: "WebGIS & Cloud",
    date: "September 28, 2026",
    readTime: "8 min read",
    author: {
      name: "Vikram Sengupta",
      role: "Chief Spatial Architect",
      initials: "VS"
    },
    tags: ["WebGIS", "Cesium", "3D City Models", "Cloud-Native"],
    summary: "As municipal datasets swell to terabytes of 3D point clouds and building BIM meshes, traditional map servers buckle. Learn modern cloud-native architectures that render complex metropolitan digital twins smoothly in any standard web browser.",
    highlights: [
      "Adoption of 3D Tiles 1.1 and glTF compression standards for lightweight transmission.",
      "Vector tile caching strategies using edge CDN networks for lightning-fast sub-second loading.",
      "Real-time IoT sensor telemetry overlay for smart traffic and municipal utility monitoring."
    ]
  },
  {
    id: "ai-satellite-crop-phenology",
    slug: "ai-satellite-crop-phenology",
    title: "Deep Learning & High-Resolution Satellite Imagery for Crop Phenology and Yield Forecasting",
    excerpt: "Deploying attention-based convolutional networks across multi-temporal Sentinel-2 data to detect crop stress and irrigation deficits weeks before visible signs emerge.",
    category: "AI in Agriculture",
    date: "September 15, 2026",
    readTime: "7 min read",
    author: {
      name: "Pooja Roy",
      role: "Senior ML Research Engineer",
      initials: "PR"
    },
    tags: ["AgriTech", "Deep Learning", "Sentinel-2", "Crop Health"],
    summary: "Precision agriculture requires timely, field-level diagnostics. By pairing multi-spectral time-series data with deep neural architectures, agricultural institutions and insurers can track vegetative vigor, leaf area index (LAI), and moisture content at scale.",
    highlights: [
      "Automated cloud and shadow masking using deep learning neural networks.",
      "Accurate harvest date prediction and pre-harvest yield estimations at 10m spatial resolution.",
      "Parametric crop insurance verification reducing claim processing cycles from weeks to hours."
    ]
  },
  {
    id: "lidar-automated-digital-twins",
    slug: "lidar-automated-digital-twins",
    title: "LiDAR Point Cloud Classification and Automated 3D Digital Twin Generation",
    excerpt: "Extracting building footprints, power line clearances, and tree canopies autonomously from dense aerial LiDAR surveys for urban infrastructure engineering.",
    category: "LiDAR & 3D Twins",
    date: "August 22, 2026",
    readTime: "5 min read",
    author: {
      name: "Aniket Sharma",
      role: "Lead Remote Sensing Specialist",
      initials: "AS"
    },
    tags: ["LiDAR", "Digital Twins", "Smart Cities", "Photogrammetry"],
    summary: "Airborne and mobile LiDAR generate billions of XYZ points. Automated AI point classification differentiates ground, vegetative canopy, transmission lines, and structural surfaces with over 98% accuracy.",
    highlights: [
      "Automated extraction of Level of Detail 2 (LoD2) 3D building models.",
      "Vegetation encroachment risk analytics along high-voltage power transmission corridors.",
      "Integration with GIS asset registries for municipal asset management."
    ]
  },
  {
    id: "spatial-data-infrastructure-open-standards",
    slug: "spatial-data-infrastructure-open-standards",
    title: "Navigating Modern Spatial Data Infrastructure (SDI) and OGC Open Standards",
    excerpt: "Why modern OGC API standards, STAC (SpatioTemporal Asset Catalogs), and distributed spatial databases are transforming governmental and scientific data repositories.",
    category: "Standards & Governance",
    date: "August 04, 2026",
    readTime: "6 min read",
    author: {
      name: "S. Banerjee",
      role: "Enterprise GIS Director",
      initials: "SB"
    },
    tags: ["OGC Standards", "STAC", "SDI", "Open Data"],
    summary: "Siloed spatial data creates friction and delays decision-making. By adopting open OGC API standards and cloud-native STAC catalogs, organizations unlock seamless interoperability across departments and platforms.",
    highlights: [
      "Transition from legacy WMS/WFS protocols to modern RESTful OGC APIs.",
      "Federated discovery across distributed satellite and geospatial imagery archives.",
      "Adherence to national geospatial policies and data sovereignty guidelines."
    ]
  },
  {
    id: "urban-heat-island-microclimate-modelling",
    slug: "urban-heat-island-microclimate-modelling",
    title: "Urban Heat Islands & Microclimate Modelling using Thermal Infrared Satellite Data",
    excerpt: "Quantifying land surface temperature variations across metropolitan centers using Landsat 9 TIRS and drone-mounted radiometric thermography.",
    category: "Climate & Sustainability",
    date: "July 19, 2026",
    readTime: "5 min read",
    author: {
      name: "Neha Ghosh",
      role: "Environmental GIS Researcher",
      initials: "NG"
    },
    tags: ["Climate Resilience", "Urban Planning", "Landsat", "Thermal Mapping"],
    summary: "Rapid urban expansion replaces green spaces with asphalt and concrete, creating localized thermal anomalies. Using thermal infrared remote sensing, urban planners identify microclimate hotspots and prioritize reflective materials and urban forestry.",
    highlights: [
      "Correlating surface temperature anomalies with demographic vulnerability indices.",
      "Evaluating the cooling benefits of green roofs, tree canopies, and water bodies.",
      "Empowering city planners with interactive microclimate vulnerability heatmaps."
    ]
  }
];
