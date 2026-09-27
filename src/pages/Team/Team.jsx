import React, { useState } from 'react'
import './Team.css'
import issac from '../../assets/team/pres/issac.png'
import uzma from '../../assets/team/pres/uzma.png'
import huzaifa from '../../assets/team/corporate/huzaifa-nulwala.png'
import zohniyya from '../../assets/team/corporate/zohniyya-qutub.png'
import samLewis from '../../assets/team/corporate/sam-lewis.png'
import aryaKarthik from '../../assets/team/corporate/arya-karthik.png'
import hanaStoltz from '../../assets/team/corporate/hana-stoltz.png'
import deepaliRajpal from '../../assets/team/corporate/deepali-rajpal.jpeg'
import angelicaMaynes from '../../assets/team/events/angelica-maynes.png'
import asemanAfzali from '../../assets/team/events/aseman-afzali.png'
import alyssaLyn from '../../assets/team/events/alyssa-lyn.png'
import jacquelineDao from '../../assets/team/events/jacqueline-dao.png'
import jessicaHipolito from '../../assets/team/events/jessica-hipolito.jpeg'
import michelleSherpa from '../../assets/team/events/michelle-sherpa.png'
import veronicaTrajano from '../../assets/team/events/veronica-trajano.jpeg'
import keshanWeragama from '../../assets/team/marketing/keshan-weragama.png'
import jennifer from '../../assets/team/marketing/jennifer.png'
import anmolVaghela from '../../assets/team/marketing/anmol-vaghela.jpeg'
import hudaShoaib from '../../assets/team/marketing/huda-shoaib.jpeg'
import ethanRamos from '../../assets/team/marketing/ethan-ramos.png'
import manavvTaneja from '../../assets/team/leadership/manavv-taneja.png'
import arielleChan from '../../assets/team/leadership/arielle-chan.png'
import sarahHassan from '../../assets/team/leadership/sarah-hassan.jpeg'
import rajvinDhaliwal from '../../assets/team/leadership/rajvin-dhaliwal.png'
import elenaLeung from '../../assets/team/leadership/elena-leung.png'
import williamShinozaki from '../../assets/team/leadership/william-shinozaki.png'
import silviaDuong from '../../assets/team/finance/silvia-doung.png'
import aidenLang from '../../assets/team/finance/aidan-lang.png'
import samiraSabnam from '../../assets/team/finance/samira-sabnam.png'
import vinceMagno from '../../assets/team/hr/vince-magno.png'
import alexanderLee from '../../assets/team/hr/alexander-lee.png'
import simonTenedero from '../../assets/team/hr/simon-tenedero.jpeg'
import elizabethLewis from '../../assets/team/hr/elizabeth-lewis.jpeg'
import hennyPatel from '../../assets/team/brand-ambassador/henny-patel.png'
import danicaChu from '../../assets/team/brand-ambassador/danica-chu.png'
import suhaRehan from '../../assets/team/brand-ambassador/suha-rehan.png'

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
                    position: "Co-President",
                    image: issac,
                    linkedin: "https://www.linkedin.com/in/issac-duong-082017265/",
                    email: "issac@abl.org"
                },
                {
                    id: 2,
                    name: "Manavv Taneja",
                    position: "Co-President",
                    image: manavvTaneja,
                    linkedin: "https://www.linkedin.com/in/manavvrtaneja/",
                    email: "manavv@abl.org"
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
                    name: "Huzaifa Nulwala",
                    position: "Vice-President Internal",
                    image: huzaifa,
                    linkedin: "https://www.linkedin.com/in/huzaifanulwala/",
                    email: "huzaifa@abl.org"
                }
            ]
        },
        corporate: {
            title: "Corporate",
            icon: "🤝",
            members: [
                {
                    id: 10,
                    name: "Sam Lewis",
                    position: "Director of Corporate",
                    image: samLewis,
                    linkedin: "https://www.linkedin.com/in/sam-lewis-486742320/",
                    email: "sam@abl.org"
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
                    name: "Samira Sabnam",
                    position: "Corporate Manager",
                    image: samiraSabnam,
                    linkedin: "https://www.linkedin.com/in/samira-sabnam-0911680r/",
                    email: "samira@abl.org"
                },
                {
                    id: 13,
                    name: "Arya Karthik",
                    position: "Corporate Manager",
                    image: aryaKarthik,
                    linkedin: "",
                    email: ""
                },
                {
                    id: 14,
                    name: "Hana Stoltz",
                    position: "Corporate Manager",
                    image: hanaStoltz,
                    linkedin: "",
                    email: ""
                },
                {
                    id: 15,
                    name: "Deepali Rajpal",
                    position: "Corporate Manager",
                    image: deepaliRajpal,
                    linkedin: "",
                    email: ""
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
                    position: "Director of Events",
                    image: angelicaMaynes,
                    linkedin: "https://www.linkedin.com/in/angelica-maynes-0b762832b/",
                    email: "angelica@abl.org"
                },
                {
                    id: 21,
                    name: "Alyssa Lym",
                    position: "Events Manager",
                    image: alyssaLyn,
                    linkedin: "https://www.linkedin.com/in/alyssa-lym-8ba41932a/",
                    email: "alyssa@abl.org"
                },
                {
                    id: 22,
                    name: "Keshan Weragama",
                    position: "Events Manager",
                    image: keshanWeragama,
                    linkedin: "https://www.linkedin.com/in/keshan-weragama/",
                    email: "keshan@abl.org"
                },
                {
                    id: 23,
                    name: "Danica Chu",
                    position: "Events Manager",
                    image: danicaChu,
                    linkedin: "https://www.linkedin.com/in/danica-chu-/",
                    email: "danica@abl.org"
                },
                {
                    id: 24,
                    name: "Jessica Hipolito",
                    position: "Events Manager",
                    image: jessicaHipolito,
                    linkedin: "",
                    email: ""
                },
                {
                    id: 25,
                    name: "Michelle Sherpa",
                    position: "Events Manager",
                    image: michelleSherpa,
                    linkedin: "",
                    email: ""
                },
                {
                    id: 26,
                    name: "Veronica Trajano",
                    position: "Events Manager",
                    image: veronicaTrajano,
                    linkedin: "",
                    email: ""
                }
            ]
        },
        marketing: {
            title: "Marketing",
            icon: "📢",
            members: [
                {
                    id: 30,
                    name: "Jennifer Sadakhom",
                    position: "Director of Marketing",
                    image: jennifer,
                    linkedin: "https://www.linkedin.com/in/jennifer-sadakhom/",
                    email: "jennifer@abl.org"
                },
                {
                    id: 31,
                    name: "Anmol Vaghela",
                    position: "Graphic Design Manager",
                    image: anmolVaghela,
                    linkedin: "",
                    email: ""
                },
                {
                    id: 32,
                    name: "Huda Shoaib",
                    position: "Graphic Design Manager",
                    image: hudaShoaib,
                    linkedin: "",
                    email: ""
                },
                {
                    id: 33,
                    name: "Jacqueline Dao",
                    position: "Social Media Manager",
                    image: jacquelineDao,
                    linkedin: "https://www.linkedin.com/in/jacqueline-dao-a376b3279/",
                    email: "jacqueline@abl.org"
                },
                {
                    id: 34,
                    name: "Suha Rehan",
                    position: "Video Production Manager",
                    image: suhaRehan,
                    linkedin: "https://www.linkedin.com/in/suha-rehan-756930355/",
                    email: "suha@abl.org"
                },
                {
                    id: 35,
                    name: "Ethan Ramos",
                    position: "Website Development Manager",
                    image: ethanRamos,
                    linkedin: "",
                    email: ""
                }
            ]
        },
        leadership: {
            title: "Leadership",
            icon: "🌟",
            members: [
                {
                    id: 40,
                    name: "Arielle Chan",
                    position: "Director of Leadership Development",
                    image: arielleChan,
                    linkedin: "https://www.linkedin.com/in/ariellechan1/",
                    email: "arielle@abl.org"
                },
                {
                    id: 41,
                    name: "Sarah Hassan",
                    position: "Leadership Development Manager",
                    image: sarahHassan,
                    linkedin: "",
                    email: ""
                },
                {
                    id: 42,
                    name: "Rajvin Dhaliwal",
                    position: "Leadership Development Manager",
                    image: rajvinDhaliwal,
                    linkedin: "",
                    email: ""
                },
                {
                    id: 43,
                    name: "Elena Leung",
                    position: "Leadership Development Manager",
                    image: elenaLeung,
                    linkedin: "",
                    email: ""
                },
                {
                    id: 44,
                    name: "William Shinozaki",
                    position: "Leadership Development Manager",
                    image: williamShinozaki,
                    linkedin: "",
                    email: ""
                }
            ]
        },
        finance: {
            title: "Finance",
            icon: "💰",
            members: [
                {
                    id: 50,
                    name: "Aiden Lang",
                    position: "Director of Finance",
                    image: aidenLang,
                    linkedin: "https://www.linkedin.com/in/aidenlang/",
                    email: "aidan@abl.org"
                },
                {
                    id: 51,
                    name: "Silvia Duong",
                    position: "Finance Manager",
                    image: silviaDuong,
                    linkedin: "https://www.linkedin.com/in/silvia-duong-6a667a2a0/",
                    email: "silvia@abl.org"
                },
                {
                    id: 52,
                    name: "Alexander Lee",
                    position: "Finance Manager",
                    image: alexanderLee,
                    linkedin: "https://www.linkedin.com/in/alexander-lee-068364292/",
                    email: "alexander@abl.org"
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
                    position: "Director of Human Resources",
                    image: vinceMagno,
                    linkedin: "https://www.linkedin.com/in/vince-magno/",
                    email: "vince@abl.org"
                },
                {
                    id: 61,
                    name: "Simon Tenedero",
                    position: "Human Resources Manager",
                    image: simonTenedero,
                    linkedin: "",
                    email: ""
                },
                {
                    id: 62,
                    name: "Elizabeth Lewis",
                    position: "Human Resources Manager",
                    image: elizabethLewis,
                    linkedin: "",
                    email: ""
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
                    position: "Co-Director of Brand Ambassadors",
                    image: hennyPatel,
                    linkedin: "https://www.linkedin.com/in/henny-patel/",
                    email: "henny@abl.org"
                },
                {
                    id: 71,
                    name: "Aseman Afzali",
                    position: "Co-Director of Brand Ambassadors",
                    image: asemanAfzali,
                    linkedin: "https://www.linkedin.com/in/aseman-afzali-2949a323a/",
                    email: "aseman@abl.org"
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
                                onClick={() => member.linkedin && window.open(member.linkedin, '_blank')}
                                style={{ 
                                    '--polaroid-delay': `${index * 0.2}s`,
                                    '--polaroid-rotation': '0deg',
                                    cursor: member.linkedin ? 'pointer' : 'default'
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
