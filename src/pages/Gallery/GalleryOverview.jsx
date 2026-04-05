import React from 'react'
import { useNavigate } from 'react-router-dom'
import './GalleryOverview.css'

const GalleryOverview = () => {
    const navigate = useNavigate()
    
    const events = [
        {
            id: 'gryphons-den',
            title: "Gryphon's Den",
            description: 'A high-energy pitch competition where members showcase their entrepreneurial ideas to a panel of judges.',
            imageCount: 9,
            coverImage: '/gryphons-den/2.png',
            color: '#C8102E',
            gradient: 'linear-gradient(135deg, #C8102E 0%, #FFC72C 100%)',
            icon: '🦁'
        },
        {
            id: 'leadership-focus',
            title: 'Leadership Focus',
            description: 'Empowering the next generation of leaders through focused workshops and mentorship programs.',
            imageCount: 9,
            coverImage: '/ledearship-focus/1.png',
            color: '#4F46E5',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            icon: '🎯'
        },
        {
            id: 'picnic',
            title: 'Community Picnic',
            description: 'Building connections and fostering community spirit through outdoor activities and shared experiences.',
            imageCount: 4,
            coverImage: '/picnic/1.png',
            color: '#059669',
            gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            icon: '🌳'
        },
        {
            id: 'trivia-night',
            title: 'Trivia Night',
            description: 'Engaging minds and creating memorable moments through friendly competition and knowledge sharing.',
            imageCount: 8,
            coverImage: '/trivia-night/1.png',
            color: '#DC2626',
            gradient: 'linear-gradient(135deg, #f59e0b 0%, #dc2626 100%)',
            icon: '🧠'
        }
    ]
    
    const handleEventClick = (eventId) => {
        navigate(`/gallery/${eventId}`)
    }
    
    return (
        <div className="gallery-overview">
            <div className="overview-header">
                <h1>Event Gallery</h1>
                <p>Explore some memorable moments from our previous events</p>
            </div>
            
            <div className="events-grid">
                {events.map((event) => (
                    <div 
                        key={event.id}
                        className="event-card"
                        onClick={() => handleEventClick(event.id)}
                        style={{
                            '--event-color': event.color,
                            '--event-gradient': event.gradient
                        }}
                    >
                        <div className="event-image-container">
                            <img 
                                src={event.coverImage} 
                                alt={event.title}
                                className="event-cover-image"
                            />
                            <div className="event-overlay">
                                <div className="event-icon">{event.icon}</div>
                                <div className="event-info">
                                    <h3>{event.title}</h3>
                                    <p>{event.description}</p>
                                    <div className="event-stats">
                                        <span className="photo-count">
                                            📸 {event.imageCount} photos
                                        </span>
                                    </div>
                                </div>
                                <div className="view-gallery-btn">
                                    <span>View Gallery</span>
                                    <span className="arrow">→</span>
                                </div>
                            </div>
                        </div>
                        <div className="event-card-caption">
                            {event.title} Collection
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GalleryOverview

