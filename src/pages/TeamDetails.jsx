import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function TeamDetails() {
    const advisoryBoard = [
        {
            name: "Prof. Devesh Walia",
            credentials: "(PhD)",
            domain: "(Environment)",
            image: "/assets/team/S_Walia.jpg",
            paragraphs: [
                "Dr Devesh Walia is a Professor in the Department of Environmental Studies; Head, Department of Geology; CEO, Incubation Centre, North-Eastern Hill University (NEHU); and is also a Chief Coordinator, Deen Dayal Upadhyay Community College for Skill Development, NEHU, Shillong. He had obtained M. Tech. in Applied Geology from Dr H.S.G Vishwavidyalaya, and Ph. D. from Gauhati University.",


                "Dr Walia has completed several research projects funded by various agencies such as NEC, DST, MoES, BARC-BRNS, DAE, Mumbai Domiasiat DAE-BRNS: Hydrogeological studies of the proposed uranium mining tailings dam site at Domiasiat, DST-RFBR, HICAB, STRIDE and NITI Aayog and many more. He is also a recipient of the NCC Scholarship; UGC Fellowship, ISCA- ESS- Sectional Recorder, ISCA- ESS Platinum Jubilee Lecture Award- 2017 during the 104th ISC, Earth System Sciences Section, Sri Venkateswara University, Tirupati; Sectional President, Earth System Sciences, 105th Indian Science Congress; Advisory Group member of IUCN – Water Resources: Benefits sharing and transboundary collaboration between Bangladesh and India in the Meghna basin; Expert Committee member of coordinated programme on “Landslide Hazard Mitigation”, NRDMS Division DST; Academic Advisor, North-East Green Summit."
            ]
        },
        {
            name: "Prof. M. Amarjeet Singh",
            credentials: "(PhD)",
            domain: "(Policy)",
            image: "/assets/team/Amarjeet_Singh.jpg",
            paragraphs: [
                "Dr. M. Amarjeet Singh is Professor and Honorary Director at the Centre for North-East Studies and Policy Research, Jamia Millia Islamia, New Delhi where he teaches post-graduate courses on the society and politics of India’s North-East, armed conflict and migration.",

                "Dr. Singh had previously worked with Institute for Defence Studies and Analyses, New Delhi, and National Institute of Advanced Studies, Indian Institute of Science Campus, Bengaluru",

                "He has written and edited several books including Identity, Contestation and Development in Northeast India, Oxon and New Delhi: Routledge(2016); Northeast India and India's Act East Policy: Identifying the Priorities, Oxon: Routledge (2019), Understanding Urbanisation in Northeast India: Issues and Challenges, Oxon: Routledge (2020), and Political Autonomy and Democratic Governance, Oxon: Routledge (under production). He has also written on conflict studies, identity politics and migration studies in widely circulated journals such as Journal of Asian Public Policy, Small Wars & Insurgencies, Commonwealth & Comparative Politics, Strategic Analysis, and Economic & Political Weekly."
            ]
        },
        {
            name: "Dr. Yodida Bhutia",
            credentials: "(PhD)",
            domain: "(Digital Education)",
            image: "/assets/team/Yodida_Bhutia.jpg",
            paragraphs: [
                "Dr. Yodida Bhutia is Associate Professor in Department of Education, Sikkim University. Dr. Bhutia has obtained B.Sc. MA (Eng), M.Ed. MA (Edu), PGDHE, PhD (NEHU)and a Post Doctorate from the University of the Aegean, Greece. She has authored multiple books on Higher Education: Status and Problems in Sikkim; Development of Education System in India; Institutional Assessment of Colleges of Sikkim; Mental Health Education; Secondary Education in Sikkim; Elementary Education in Sikkim.",
                "She has also conducted research on Waste Management and Environmental Education. One of her publications with Prof. Georgia Liarakou is on “Gender and nature in the matrilineal society of Meghalaya, India: Searching for ecofeminist perspectives” published in Journal of Environmental Education of Routledge Taylor and Francis group. She was invited as one of the panel speakers on Gender and Environment in the Biennial Australian Association for Environmental Education (AAEE) Conference at Adelaide, Australia."
            ]
        },
        {
            name: "Dr. Ritu Mishra",
            credentials: "(PhD)",
            domain: "(Digital Health)",
            image: "/assets/team/Ritu_Mishra.jpg",
            paragraphs: [
                "Ritu Kumar Mishra is a dedicated and committed Monitoring and Evaluation (M&E) Specialist with 15 years of working experience in sustainable development. He brings vast experience from the Government, NGO, United Nations, and private sector across developing countries in Asia and Africa. He has a proven track record of improving programme and project output rates while developing the analytical and critical thinking skills necessary for Project Managers to deliver required results.",
                "Ritu has excellent communication skills for relaying information on programme implementation improvement and change. Specifically, Ritu has M&E technical expertise in following thematic areas: HIV/AIDS, Tuberculosis, Public Health, Nutrition, Water & Sanitation, Maternal & Child Health, migrant population, Gender Issues including Women’s Health & Education, Domestic Violence, Adolescent and Young people’s Reproductive and Sexual Health, National ID, Civil Registration and Vital Statistics."
            ]
        },
        {
            name: "Prof. Kiranmoy Sarma",
            credentials: "(PhD)",
            domain: "(Environment)",
            image: "/assets/team/Kiranmoy_Sharma.jpg",
            paragraphs: [
                "Dr Kiranmay Sarma is a Professor in the School of Environment Management, GGS Indraprastha University, New Delhi. Dr Sharma has expertise in Remote Sensing and GIS Applications in the areas of Environment, Natural resources, and Disaster Management.",
                "Dr Sharma has published more than 115 research papers in various reputed national and international journals, and edited books and conference proceedings. He has authored 7 books on the sector of the environment. Five PhD degrees have been awarded under his guidance and six other scholars are currently pursuing their PhD research works in the field of environment. He completed a sizable number of research projects for various scientific organisations.",
                "Dr Sharma obtained his PhD from North-Eastern Hill University, Shillong, Meghalaya and his M.Sc. in Geoinformation Science and Earth Observation, from the International Institute of Geoinformation Science and Earth Observation (ITC), The Netherlands."
            ]
        },
        {
            name: "Prof. Debendra Kumar Nayak",
            credentials: "(PhD)",
            domain: "(Digital Health)",
            image: "/assets/team/DK_Nayak.jpg",
            paragraphs: [
                "Dr Debendra Kumar Nayak is currently a Professor of Geography at the North-Eastern Hill University (NEHU), Shillong, Meghalaya. He has over 35 years of teaching and research experience with a specialisation in social and population geography. He has contributed to interdisciplinary research in as diverse areas as environment, gender, tribe, and caste issues as well as spatial aspects of health, migration, and ageing.",
                "Dr Nayak obtained his Master’s, MPhil, and PhD in Geography from The Jawaharlal Nehru University (JNU), New Delhi and earned his bachelor’s degree from Ravenshaw College (now University), Odisha.",
                "Dr Nayak published over 88 research papers in the form of books, articles, and project reports in India and abroad; he presented over 157 research papers at various international and national conferences.",
                "He has served as a member, and national representative in various organisations i.e., IUGG, IGU, INSA, and IAHS. He was the editor of the UGC-CARE listed journal Hill Geographer, GSNEHR for about 12 years. He also served as the joint editor of the Scopus-indexed journal in Geography the Transactions, IIG, Pune, and was elevated to the position of Chief Editor. He is nominated as a member of the editorial boards of several reputed national and International Journals."
            ]
        },
        {
            name: "Prof. Chitta Ranjan Das",
            credentials: "(PhD)",
            domain: "(AI & ML)",
            image: "/assets/team/CR_Das.jpg",
            paragraphs: [
                "Chitta Ranjan Das is currently a Professor (Senior Scientific Researcher) in Bogoliubov Laboratory of Theoretical Physics, International Intergovernmental Organisation - Joint Institute for Nuclear Research, Dubna, Moscow Region, Russian Federation. He is also Chairman of JINR Journal-Club. CR Das obtained his PhD in Physics (2003) Elementary Particle (High-Energy) Physics Phenomenology from North-Eastern Hill University, Shillong, Meghalaya, India.",

                "He used Artificial Intelligence & Machine learning and Parallel Supercomputers as a tool for his numerical calculations. He served as visiting Professor for Artificial Intelligence & Machine learning and Parallel Super-Computation at Eurasian National University, Asthana, Kazakhstan. He has experience in \"International Academic and Industry Partnership Programs\". He was also associated with the Government of India-sponsored \"KABRU\" supercomputer project.",

                "He has 77 publications with international collaborators and published in reputed international journals, supervised 3 PhD students, refereed for five scientific articles, was involved in 30 international projects and participated in around 100 international conferences/ workshops.",

                "He served as visiting scientist in various Institutions - Centre for Theoretical Studies, Indian Institute of Science (IIS), Bangalore; Institute of Mathematical Sciences, Chennai; Centre for High-Energy Physics, School of Physics, Peking University, Beijing, China; Centro de Física Teórica de Partículas, Departamento de Física, Instituto Superior Técnico, Lisboa, Portugal; Department of Physics, University of Jyväskylä, Jyväskylä, Finland; Helsinki Institute of Physics, Helsinki, Finland; Institute of Physics, Bhubaneshwar, India and J.C. Bose Fellow, Theoretical Physics Division, Physical Research Laboratory, Ahmedabad, India."
            ]

        },
        {
            name: "Dr. Manik Mandal",
            credentials: "(PhD)",
            domain: "(Digital Health)",
            image: "/assets/team/MANIK_MANDAL.jpg",
            paragraphs: [
                "Dr Manik Mandal is currently working as a General Physician and Factory Medical Officer, at Damodar Valley Corporation (DVC) West Bengal. He has over 22 years of work experience as a Medical Practitioner.",
                "Dr Mandal obtained his MBBS degree from R. G. Kar Medical College and Hospital (a government-owned), in Kolkata, West Bengal, India from 1992-to 997. He also obtained MD (Pathology) from ESI-PGIMSR, ESI Hospital, Kolkata, West Bengal, in the year 2018 and Associate Fellow in Industrial Health 2012-13 –CLI Central Labour Institute Sion, Mumbai and obtained Post Graduate Diploma in Family Medicine 2019-2021 from Christian Medical College, Vellore."
            ]
        }
    ];

    const executiveLeadership = [
        {
            name: "Dr. Aparesh Patra",
            credentials: "(PhD)",
            domain: "(Founder & CEO)",
            image: "/assets/team/Aparesh_Patra_team.jpg",
            paragraphs: [
                "Aparesh Patra, the Founder of HAKE Technologies, is instrumental in shaping the company's vision and mission. With over 19 years of industry experience, he plays a pivotal role in driving growth, developing financial models, forging partnerships, and fostering innovation through the adoption of contemporary techniques and technologies.",
                "Having worked with leading geospatial technology organizations such as North-Eastern Hill University (NEHU), Australian AID, International Institute for Population Sciences (IIPS), Rolta Thales Limited, Hexagon (Intergraph), Tata Power Strategic Engineering Division (TPSED), Association of Geospatial Industries (AGI), Knowledge Spatial Pvt. Ltd., and Altz Technology Pvt. Ltd., Aparesh brings a wealth of expertise to the table. He possesses deep knowledge of geospatial technologies including remote sensing, GIS, and GPS, as well as open-source data intelligence (OSINT), AI/ML, and analytics. His proficiency extends across various sectors including industry, defense, homeland security, and law enforcement.",
                "Aparesh holds master's, MPhil, and PhD degrees in Geography with specialization in GIS and remote sensing from North-Eastern Hill University (NEHU), Shillong. He has also completed numerous courses in geospatial technology at RRSSC, SOI, and NATMO. Aparesh has contributed extensively to the field of geospatial technology, with numerous publications in prestigious national and international journals."
            ]
        },
        {
            name: "Dr. Mahasweta Satpati",
            credentials: "(PhD)",
            domain: "(Founder & COO)",
            image: "/assets/team/Mahasweta_Satpati.jpg",
            paragraphs: [
                "Mahasweta Satpati, the Founder of HAKE Technologies, spearheads organizational growth and engages in liaising with various stakeholders, including government entities, alongside business development planning at HAKE Technologies Pvt Ltd. With over 17 years of professional experience, Mahasweta has excelled in social research, monitoring and evaluation, and policy and health sector development. She has contributed her expertise to renowned organizations in the development sector such as NEHU, PEHEL-CHEAT, ICRW, FPAI, MAMTA-HIMC, SACS, RSACS, PSI, and The International Union Against Tuberculosis and Lung Disease (The Union). Proficient in geospatial technologies like remote sensing, GIS, GPS, and statistical analysis, both qualitative and quantitative, Mahasweta has applied her skills to projects for the Ministry of Health and Family Welfare (MoHFW), Ministry of Environment, Forest, and Climate Change (MoEF), and various government verticals. She has undergone extensive training in monitoring and evaluation, research methods in community health, violence against women, statistical methods in social science research, adolescent youth sexual reproductive health, health policy and systems research (HPSR), and geospatial technology at RRSSC and NATMO. Additionally, Mahasweta has authored numerous research papers on social and health-related issues such as adolescent sexual reproductive health and tuberculosis notification and treatment.",
                "She holds a master's degree in Geography, a PhD in Population and Social Geography, and an MPhil. She also possesses a master's degree with a specialization in Regional Planning and Sustainable Development from Sikkim Manipal University of Health, Medical and Technological Sciences."
            ]
        },
        {
            name: "Barnali Das",
            credentials: "",
            domain: "(Director, Admin and HR)",
            image: "/assets/team/Barnali_Das.jpg",
            paragraphs: [
                "Barnali Das is the Director of Human Resources and Admin for HAKE Technologies. She is also responsible for organisational growth in capacity by driving the Human Resource and Administration function ensuring an aggressive expansion plan. Barnali has over 10 years of extensive experience in human resource management and worked in the public and private sectors. Barnali has obtained an LLB degree and Post Graduate Diploma in Human Resource Management from Guwahati University.",
                "She has led various projects on improving organisation capabilities and processes with special emphasis on scalability. She brings on board a strong focus on innovation around business strategies and processes, operational efficiency, and talent."
            ]
        },
        {
            name: "Col. Richard Sundharam",
            credentials: "",
            domain: "(Vice President)",
            image: "/assets/team/Richard Sundharam1.jpg",
            paragraphs: [
                "Richard Sundharam is the Vice President of HAKE Technologies and is responsible for organisational growth, strategy planning, business development and liaison with various stakeholders including MoD and other government agencies.",
                "He has over three decades of work experience both in the government as an Army Officer and in the Corporate Sector. During his Defence career, he was involved in a joint Army-DRDO project to develop an indigenous electronic warfare system that has also been inducted into Service. He has designed and developed in-house GIS software for Electronic Warfare Intelligence Collation and Analysis for the Indian Army.",
                "Moreover, he has around eight years of industry experience, and he was associated with Tech Mahindra, and Esri-India Technologies and led their Defence verticals. During his tenure, his focus was on the innovative use and exploitation of communication and Geospatial technologies for MoD, MHA, DRDO, and Police and Intelligence Agencies.",
                "Richard had obtained his Master of Technology(M.Tech) from the reputed Indian Institute of Technology, Kharagpur(IIT - KGP), WB."
            ]
        },
        {
            name: "Pankaj Kumar Maity",
            credentials: "",
            domain: "(Chief Finance)",
            image: "/assets/team/Pankaj_Kumar_Maity.jpg",
            paragraphs: [
                "Pankaj Maity is the Director of Finance for HAKE Technologies. He is responsible for Organisational growth in capacity with Driving Finance. Pankaj has over two decades of industry work experience in the areas of Finance, Accounting, Risk Management and Organisational expansion. Pankaj had obtained his Bachelor of Commerce, specialisation in Accountancy, from Kolkata University (CU) Kolkata, and he had also undergone various courses in Finance and Accounting."
            ]
        }
    ];

    return (
        <div className="w-full min-h-screen bg-white">
            {/* Top Banner & Navigation */}
            <div className="w-full bg-slate-50 border-b border-slate-200/80 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                    <Link
                        to="/about/company"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#005b94] hover:text-[#004e7c] transition-colors mb-4 group"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        <span>Back to Company</span>
                    </Link>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-heading">
                        Our Leadership & Advisory Board
                    </h1>
                    <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
                        Meet the distinguished scientists, domain specialists, researchers, and executive leaders guiding Hake Technologies towards excellence in spatial intelligence.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 space-y-20">

                {/* ============================================================ */}
                {/* ADVISORY BOARD MEMBERS SECTION */}
                {/* ============================================================ */}
                <section className="space-y-12">
                    <div className="text-center max-w-2xl mx-auto">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#005b94] bg-cyan-50 border border-cyan-200/60 px-3.5 py-1 rounded-full inline-block mb-3">
                            Distinguished Mentors
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 font-heading">
                            Advisory Board Members
                        </h2>
                        <div className="w-16 h-1 bg-[#005b94] rounded-full mx-auto mt-4" />
                    </div>

                    <div className="space-y-16">
                        {advisoryBoard.map((member, idx) => {
                            const isEven = idx % 2 === 0;
                            return (
                                <div
                                    key={idx}
                                    className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                        } gap-8 lg:gap-14 items-center p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all`}
                                >
                                    {/* Photo Card */}
                                    <div className="w-full lg:w-72 xl:w-80 flex-shrink-0 flex flex-col items-center text-center">
                                        <div className="w-48 sm:w-56 lg:w-64 aspect-[4/4.8] rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-50 mb-4 group">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                                loading="lazy"
                                            />
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading">
                                            {member.name} {member.credentials}
                                        </h3>
                                        <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-0.5">
                                            {member.domain}
                                        </p>
                                    </div>

                                    {/* Bio Paragraphs */}
                                    <div className="flex-1 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed text-justify sm:text-left">
                                        {member.paragraphs.map((p, pIdx) => (
                                            <p key={pIdx}>{p}</p>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* ============================================================ */}
                {/* EXECUTIVE LEADERSHIP SECTION */}
                {/* ============================================================ */}
                <section className="space-y-12 pt-8 border-t border-slate-200/80">
                    <div className="text-center max-w-2xl mx-auto">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#005b94] bg-cyan-50 border border-cyan-200/60 px-3.5 py-1 rounded-full inline-block mb-3">
                            Executive Leadership
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 font-heading">
                            Leadership Team
                        </h2>
                        <div className="w-16 h-1 bg-[#005b94] rounded-full mx-auto mt-4" />
                    </div>

                    <div className="space-y-16">
                        {executiveLeadership.map((member, idx) => {
                            const isEven = idx % 2 === 0;
                            return (
                                <div
                                    key={idx}
                                    className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                        } gap-8 lg:gap-14 items-center p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all`}
                                >
                                    {/* Photo Card */}
                                    <div className="w-full lg:w-72 xl:w-80 flex-shrink-0 flex flex-col items-center text-center">
                                        <div className="w-48 sm:w-56 lg:w-64 aspect-[4/4.8] rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-50 mb-4 group">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                                loading="lazy"
                                            />
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading">
                                            {member.name} {member.credentials}
                                        </h3>
                                        <p className="text-xs sm:text-sm font-semibold text-[#005b94] mt-0.5">
                                            {member.domain}
                                        </p>
                                    </div>

                                    {/* Bio Paragraphs */}
                                    <div className="flex-1 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed text-justify sm:text-left">
                                        {member.paragraphs.map((p, pIdx) => (
                                            <p key={pIdx}>{p}</p>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Back to Company CTA */}
                <div className="text-center pt-8 border-t border-slate-200">
                    <Link
                        to="/about/company"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#005b94] hover:bg-[#004e7c] text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Return to Company Overview</span>
                    </Link>
                </div>

            </div>
        </div>
    );
}