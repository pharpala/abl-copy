import React, { useState } from 'react'
import './Team.css'
import michaela from '../../assets/michaela.jpg'
import me from '../../assets/me.jpeg'
import alex from '../../assets/alex.jpg'
import ellena from '../../assets/ellena.jpeg'
import marcus from '../../assets/marcus.jpg'
import noel from '../../assets/noel.jpg'

const Team = () => {
    const [selectedMember, setSelectedMember] = useState(null)
    const [activeTab, setActiveTab] = useState('leadership')
    
    const departments = {
        leadership: {
            title: "Leadership",
            icon: "👑",
            members: [
                {
                    id: 1,
                    name: "Michaela Hishon",
                    position: "President & Founder",
                    image: michaela,
                    description: "Visionary leader who founded Asian Business Leaders with the mission of creating unprecedented opportunities for Asian professionals.",
                    expertise: ["Strategic Leadership", "Corporate Partnerships", "Executive Coaching", "Business Development"],
                    achievements: ["Founded ABL in 2019", "Built network of 5,000+ professionals", "Speaker at 50+ conferences"],
                    linkedin: "#",
                    email: "michaela@abl.org"
                }
            ]
        },
        marketing: {
            title: "Marketing",
            icon: "📢",
            members: [
                {
                    id: 2,
                    name: "Ellena Song",
                    position: "VP of Strategic Communications",
                    image: ellena,
                    description: "Communications strategist with expertise in building influential brand narratives and digital engagement strategies.",
                    expertise: ["Brand Strategy", "Digital Marketing", "Content Strategy", "Public Relations"],
                    achievements: ["Grew ABL social presence by 400%", "Led 3 award-winning campaigns", "Featured in Forbes"],
                    linkedin: "#",
                    email: "ellena@abl.org"
                }
            ]
        },
        corporate: {
            title: "Corporate",
            icon: "🤝",
            members: [
                {
                    id: 4,
                    name: "Noel Johnston",
                    position: "VP of Corporate Relations",
                    image: noel,
                    description: "Master relationship builder who has forged strategic alliances with industry giants including McKinsey, Goldman Sachs, and Google.",
                    expertise: ["Corporate Partnerships", "Strategic Alliances", "Business Development", "Relationship Management"],
                    achievements: ["Secured partnerships with 25+ Fortune 500s", "$2M+ in member opportunities", "Corporate Advisory Board"],
                    linkedin: "#",
                    email: "noel@abl.org"
                }
            ]
        },
        finance: {
            title: "Finance",
            icon: "💰",
            members: [
                {
                    id: 6,
                    name: "Alex MacKay",
                    position: "VP of Finance & Operations",
                    image: alex,
                    description: "Brings financial acumen and operational excellence to ABL, ensuring sustainable growth while maximizing impact.",
                    expertise: ["Financial Strategy", "Operations Management", "Risk Management", "Growth Planning"],
                    achievements: ["Led 3x revenue growth", "Streamlined operations", "Built financial frameworks"],
                    linkedin: "#",
                    email: "alex@abl.org"
                }
            ]
        },
        hr: {
            title: "HR & Development",
            icon: "🎯",
            members: [
                {
                    id: 3,
                    name: "Pranay Harpalani",
                    position: "VP of Professional Development",
                    image: me,
                    description: "Orchestrates world-class professional development experiences that have transformed careers and created lasting business relationships.",
                    expertise: ["Executive Education", "Event Strategy", "Network Facilitation", "Leadership Development"],
                    achievements: ["Designed 100+ professional programs", "98% member satisfaction rate", "Trained 2,000+ leaders"],
                    linkedin: "#",
                    email: "pranay@abl.org"
                },
                {
                    id: 5,
                    name: "Marcus Aldred-Ganhao",
                    position: "VP of Member Experience",
                    image: marcus,
                    description: "Passionate about creating exceptional member journeys that drive meaningful connections and career advancement.",
                    expertise: ["Community Building", "Member Engagement", "Data Analytics", "Experience Design"],
                    achievements: ["95% member retention rate", "Built mentorship program", "Created ABL Ambassador network"],
                    linkedin: "#",
                    email: "marcus@abl.org"
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
                                onClick={() => setSelectedMember(member)}
                                style={{ 
                                    '--polaroid-delay': `${index * 0.2}s`,
                                    '--polaroid-rotation': `${(Math.sin(index * 0.7) * 12)}deg`
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

            {/* Member Details Modal */}
            {selectedMember && (
                <div className="member-modal" onClick={() => setSelectedMember(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button 
                            className="modal-close" 
                            onClick={() => setSelectedMember(null)}
                        >
                            ✕
                        </button>
                        
                        <div className="modal-content-simple">
                            <img 
                                src={selectedMember.image} 
                                alt={selectedMember.name} 
                                className="modal-photo" 
                            />
                            <div className="modal-info">
                                <h2 className="modal-name">{selectedMember.name}</h2>
                                <p className="modal-position">{selectedMember.position}</p>
                                <p className="modal-email">{selectedMember.email}</p>
                                <div className="modal-social">
                                    <a href={selectedMember.linkedin} className="social-link linkedin" target="_blank" rel="noopener noreferrer">
                                        LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Team