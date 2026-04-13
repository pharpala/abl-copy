import React, { useState } from 'react'
import './Team.css'
import issac from '../../assets/team/pres/issac.png'
import aahna from '../../assets/team/pres/aahna.png'
import uzma from '../../assets/team/pres/uzma.png'
import kavya from '../../assets/team/pres/kavya.png'
import huzaifa from '../../assets/team/corporate/huzaifa-nulwala.png'
import zohniyya from '../../assets/team/corporate/zohniyya-qutub.png'
import samLewis from '../../assets/team/corporate/sam-lewis.png'
import nicoleLiao from '../../assets/team/corporate/nicole-liao.png'
import ahmedYusuf from '../../assets/team/corporate/ahmed-yusuf.png'
import angelicaMaynes from '../../assets/team/events/angelica-maynes.png'
import asemanAfzali from '../../assets/team/events/aseman-afzali.png'
import angelineMiyata from '../../assets/team/events/angeline-miyata.png'
import sameenShaikh from '../../assets/team/events/sameen-shaikh.png'
import alyssaLyn from '../../assets/team/events/alyssa-lyn.png'
import blankPfp from '../../assets/blank-pfp.webp'
import jacquelineDao from '../../assets/team/events/jacqueline-dao.png'
import monaKhatib from '../../assets/team/marketing/mona-khatib.png'
import keshanWeragama from '../../assets/team/marketing/keshan-weragama.png'
import jennifer from '../../assets/team/marketing/jennifer.png'
import pranayHarpalani from '../../assets/team/marketing/pranay-harpalani.jpeg'
import fareshtaKhan from '../../assets/team/marketing/fareshta-khan.png'
import mayaDuncan from '../../assets/team/leadership/maya-duncan.png'
import manavvTaneja from '../../assets/team/leadership/manavv-taneja.png'
import arielleChang from '../../assets/team/leadership/arielle-chan.png'
import meganDSouza from "../../assets/team/leadership/megan-d'souza.png"
import silviaSoung from '../../assets/team/finance/silvia-doung.png'
import aidanLang from '../../assets/team/finance/aidan-lang.png'
import samiraSabnam from '../../assets/team/finance/samira-sabnam.png'
import vinceMagno from '../../assets/team/hr/vince-magno.png'
import tonyTran from '../../assets/team/hr/tony-tran.png'
import alexanderLee from '../../assets/team/hr/alexander-lee.png'
import hennyPatel from '../../assets/team/brand-ambassador/henny-patel.png'
import deniseBritto from '../../assets/team/brand-ambassador/denise-britto.png'
import danicaChu from '../../assets/team/brand-ambassador/danica-chu.png'
import suhaRehan from '../../assets/team/brand-ambassador/suha-rehan.png'
import isaacOldenhof from '../../assets/team/brand-ambassador/isaac-oldenhof.png'

const Team = () => {
    const [activeTab, setActiveTab] = useState('presidential')

    const departments = {
        presidential: {
            title: "Presidential",
            icon: "👑",
            members: [
                {
                    id: 1,
                    name: "Issac Duong",
                    position: "President & Co-founder",
                    image: issac,
                    linkedin: "https://www.linkedin.com/in/issac-duong-082017265/",
                    email: "issac@abl.org"
                },
                {
                    id: 2,
                    name: "Aahna Patel",
                    position: "President & Co-founder",
                    image: aahna,
                    linkedin: "https://www.linkedin.com/in/aahna-patel/",
                    email: "aahna@abl.org"
                },
                {
                    id: 3,
                    name: "Uzma Dadan",
                    position: "Vice-President External",
                    image: uzma,
                    linkedin: "https://www.linkedin.com/in/uzma-dadan-a5a930282/",
                    email: "uzma@abl.org"
                },
                {
                    id: 4,
                    name: "Kavya Vurrabindi",
                    position: "Vice-President Internal",
                    image: kavya,
                    linkedin: "https://www.linkedin.com/in/kavyavurrabindi",
                    email: "kavya@abl.org"
                }
            ]
        },
        corporate: {
            title: "Corporate",
            icon: "🤝",
            members: [
                {
                    id: 10,
                    name: "Huzaifa Nulwala",
                    position: "Corporate Director",
                    image: huzaifa,
                    linkedin: "https://www.linkedin.com/in/huzaifanulwala/",
                    email: "huzaifa@abl.org"
                },
                {
                    id: 11,
                    name: "Zohniyya Qutub",
                    position: "Corporate Manager",
                    image: zohniyya,
                    linkedin: "https://www.linkedin.com/in/zohniyya-qutub-415442252/",
                    email: "zohniyya@abl.org"
                },
                {
                    id: 12,
                    name: "Sam Lewis",
                    position: "Corporate Manager",
                    image: samLewis,
                    linkedin: "https://www.linkedin.com/in/sam-lewis-486742320/",
                    email: "sam@abl.org"
                },
                {
                    id: 13,
                    name: "Nicole Liao",
                    position: "Corporate Manager",
                    image: nicoleLiao,
                    linkedin: "https://www.linkedin.com/in/nicole-liao-ba80b8253/",
                    email: "nicole@abl.org"
                },
                {
                    id: 14,
                    name: "Ahmed Yusuf",
                    position: "Corporate Manager",
                    image: ahmedYusuf,
                    linkedin: "https://www.linkedin.com/in/ahmedyusuf1709/",
                    email: "ahmed@abl.org"
                }
            ]
        },
        events: {
            title: "Events",
            icon: "🎪",
            members: [
                {
                    id: 20,
                    name: "Angelica Maynes",
                    position: "Events Co-director",
                    image: angelicaMaynes,
                    linkedin: "https://www.linkedin.com/in/angelica-maynes-0b762832b/",
                    email: "angelica@abl.org"
                },
                {
                    id: 21,
                    name: "Aseman Afzali",
                    position: "Events Co-director",
                    image: asemanAfzali,
                    linkedin: "https://www.linkedin.com/in/aseman-afzali-2949a323a/",
                    email: "aseman@abl.org"
                },
                {
                    id: 22,
                    name: "Angeline Miyata",
                    position: "Events Manager",
                    image: angelineMiyata,
                    linkedin: "https://www.linkedin.com/in/angeline-miyata/",
                    email: "angeline@abl.org"
                },
                {
                    id: 23,
                    name: "Sameen Shaikh",
                    position: "Events Manager",
                    image: sameenShaikh,
                    linkedin: "https://www.linkedin.com/in/sameen-shaikh-/",
                    email: "sameen@abl.org"
                },
                {
                    id: 24,
                    name: "Alyssa Lym",
                    position: "Events Manager",
                    image: alyssaLyn,
                    linkedin: "https://www.linkedin.com/in/alyssa-lym-8ba41932a/",
                    email: "alyssa@abl.org"
                },
                {
                    id: 25,
                    name: "Jacqueline Dao",
                    position: "Events Manager",
                    image: jacquelineDao,
                    linkedin: "https://www.linkedin.com/in/jacqueline-dao-a376b3279/",
                    email: "jacqueline@abl.org"
                }
            ]
        },
        marketing: {
            title: "Marketing",
            icon: "📢",
            members: [
                {
                    id: 30,
                    name: "Mona Khatib",
                    position: "Marketing Director",
                    image: monaKhatib,
                    linkedin: "https://www.linkedin.com/in/mona-khatib-/",
                    email: "mona@abl.org"
                },
                {
                    id: 31,
                    name: "Keshan Weragama",
                    position: "Marketing Manager",
                    image: keshanWeragama,
                    linkedin: "https://www.linkedin.com/in/keshan-weragama/",
                    email: "keshan@abl.org"
                },
                {
                    id: 32,
                    name: "Jennifer Sadakhom",
                    position: "Marketing Manager",
                    image: jennifer,
                    linkedin: "https://www.linkedin.com/in/jennifer-sadakhom/",
                    email: "jennifer@abl.org"
                },
                {
                    id: 33,
                    name: "Pranay Harpalani",
                    position: "Marketing Manager",
                    image: pranayHarpalani,
                    linkedin: "https://www.linkedin.com/in/pranayharpalani",
                    email: "pranay@abl.org"
                },
                {
                    id: 34,
                    name: "Fareshtha Khan",
                    position: "Marketing Manager",
                    image: fareshtaKhan,
                    linkedin: "https://www.linkedin.com/in/fareshtha-khan-995b232a4/",
                    email: "fareshta@abl.org"
                }
            ]
        },
        leadership: {
            title: "Leadership",
            icon: "🌟",
            members: [
                {
                    id: 40,
                    name: "Maya Duncan",
                    position: "Leadership Director",
                    image: mayaDuncan,
                    linkedin: "https://www.linkedin.com/in/maya-duncan/",
                    email: "maya@abl.org"
                },
                {
                    id: 41,
                    name: "Manavv Taneja",
                    position: "Leadership Manager",
                    image: manavvTaneja,
                    linkedin: "https://www.linkedin.com/in/manavvrtaneja/",
                    email: "manavv@abl.org"
                },
                {
                    id: 42,
                    name: "Arielle Chan",
                    position: "Leadership Manager",
                    image: arielleChang,
                    linkedin: "https://www.linkedin.com/in/ariellechan1/",
                    email: "arielle@abl.org"
                },
                {
                    id: 43,
                    name: "Megan D'Souza",
                    position: "Leadership Manager",
                    image: meganDSouza,
                    linkedin: "https://www.linkedin.com/in/meganpdsouza/",
                    email: "megan@abl.org"
                }
            ]
        },
        finance: {
            title: "Finance",
            icon: "💰",
            members: [
                {
                    id: 50,
                    name: "Silvia Duong",
                    position: "Finance Director",
                    image: silviaSoung,
                    linkedin: "https://www.linkedin.com/in/silvia-duong-6a667a2a0/",
                    email: "silvia@abl.org"
                },
                {
                    id: 51,
                    name: "Aiden Lang",
                    position: "Finance Manager",
                    image: aidanLang,
                    linkedin: "https://www.linkedin.com/in/aidenlang/",
                    email: "aidan@abl.org"
                },
                {
                    id: 52,
                    name: "Samira Sabnam",
                    position: "Finance Manager",
                    image: samiraSabnam,
                    linkedin: "https://www.linkedin.com/in/samira-sabnam-0911680r/",
                    email: "samira@abl.org"
                }
            ]
        },
        hr: {
            title: "HR",
            icon: "🎯",
            members: [
                {
                    id: 60,
                    name: "Vince Magno",
                    position: "HR Director",
                    image: vinceMagno,
                    linkedin: "https://www.linkedin.com/in/vince-magno/",
                    email: "vince@abl.org"
                },
                {
                    id: 61,
                    name: "Tony Tran",
                    position: "HR Manager",
                    image: tonyTran,
                    linkedin: "https://www.linkedin.com/in/tony-tran-a08b8a230/",
                    email: "tony@abl.org"
                },
                {
                    id: 62,
                    name: "Alexander Lee",
                    position: "HR Manager",
                    image: alexanderLee,
                    linkedin: "https://www.linkedin.com/in/alexander-lee-068364292/",
                    email: "alexander@abl.org"
                }
            ]
        },
        brandAmbassador: {
            title: "Brand Ambassador",
            icon: "⭐",
            members: [
                {
                    id: 70,
                    name: "Henny Patel",
                    position: "Brand Ambassador Co-Director",
                    image: hennyPatel,
                    linkedin: "https://www.linkedin.com/in/henny-patel/",
                    email: "henny@abl.org"
                },
                {
                    id: 71,
                    name: "Denise Britto",
                    position: "Brand Ambassador Co-Director",
                    image: deniseBritto,
                    linkedin: "https://www.linkedin.com/in/denise-britto-887b7b26b/",
                    email: "denise@abl.org"
                },
                {
                    id: 72,
                    name: "Danica Chu",
                    position: "Brand Ambassador Manager",
                    image: danicaChu,
                    linkedin: "https://www.linkedin.com/in/danica-chu-/",
                    email: "danica@abl.org"
                },
                {
                    id: 73,
                    name: "Suha Rehan",
                    position: "Brand Ambassador Manager",
                    image: suhaRehan,
                    linkedin: "https://www.linkedin.com/in/suha-rehan-756930355/",
                    email: "suha@abl.org"
                },
                {
                    id: 74,
                    name: "Isaac Oldenhof",
                    position: "Brand Ambassador Manager",
                    image: isaacOldenhof,
                    linkedin: "https://www.linkedin.com/in/isaac-oldenhof-561751366/",
                    email: "isaac@abl.org"
                }
            ]
        }
    }

    return (
        <div className="team-page">
            {/* Wall Background */}
            <div className="team-wall-background">
                <div className="wall-texture"></div>
                <div className="wall-shadows">
                    <div className="shadow-1"></div>
                    <div className="shadow-2"></div>
                    <div className="shadow-3"></div>
                </div>
            </div>

            {/* Team Header */}
            <div className="team-header">
                <h1 className="team-title">Meet Our Team</h1>
                <p className="team-subtitle">The passionate individuals driving Asian Business Leaders forward</p>
            </div>

            {/* Department Tabs */}
            <div className="department-tabs">
                {Object.entries(departments).map(([deptKey, department]) => (
                    <button
                        key={deptKey}
                        className={`tab-button ${activeTab === deptKey ? 'active' : ''}`}
                        onClick={() => setActiveTab(deptKey)}
                    >
                        <span className="tab-icon">{department.icon}</span>
                        <span className="tab-text">{department.title}</span>
                    </button>
                ))}
            </div>

            {/* Active Department Section */}
            {departments[activeTab] && (
                <div className="department-section active">
                    
                    <div className="team-polaroids">
                        {departments[activeTab].members.map((member, index) => (
                            <div 
                                key={member.id}
                                className={`team-polaroid polaroid-${index + 1}`}
                                onClick={() => window.open(member.linkedin, '_blank')}
                                style={{ 
                                    '--polaroid-delay': `${index * 0.2}s`,
                                    '--polaroid-rotation': '0deg'
                                }}
                            >
                                <div className="polaroid-pin"></div>
                                <div className="polaroid-frame">
                                    <div className="member-photo-container">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="member-photo"
                                        />
                                    </div>
                                    <div className="polaroid-caption">
                                        <h3 className="member-name">{member.name}</h3>
                                        <p className="member-title">{member.position}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Team

