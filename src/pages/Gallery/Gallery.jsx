import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './Gallery.css'

const Gallery = () => {
    const { eventId } = useParams()
    const navigate = useNavigate()
    const [selectedImageIndex, setSelectedImageIndex] = useState(null)
    const [imagesLoaded, setImagesLoaded] = useState({})
    
    // Scroll to top when component mounts or eventId changes
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [eventId])
    
    // Event data with all images
    const events = {
        'leadership-focus': {
            title: 'Leadership Focus',
            description: 'Empowering the next generation of leaders through focused workshops and mentorship programs.',
            images: Array.from({ length: 9 }, (_, i) => ({
                id: `lf-${i + 1}`,
                src: `/ledearship-focus/${i + 1}.png`,
                alt: `Leadership Focus Event - Image ${i + 1}`
            })),
            color: '#4F46E5',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            icon: '🎯'
        },
        'picnic': {
            title: 'Community Picnic',
            description: 'Building connections and fostering community spirit through outdoor activities and shared experiences.',
            images: Array.from({ length: 4 }, (_, i) => ({
                id: `picnic-${i + 1}`,
                src: `/picnic/${i + 1}.png`,
                alt: `Community Picnic - Image ${i + 1}`
            })),
            color: '#059669',
            gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            icon: '🌳'
        },
        'trivia-night': {
            title: 'Trivia Night',
            description: 'Engaging minds and creating memorable moments through friendly competition and knowledge sharing.',
            images: Array.from({ length: 8 }, (_, i) => ({
                id: `trivia-${i + 1}`,
                src: `/trivia-night/${i + 1}.png`,
                alt: `Trivia Night - Image ${i + 1}`
            })),
            color: '#DC2626',
            gradient: 'linear-gradient(135deg, #f59e0b 0%, #dc2626 100%)',
            icon: '🧠'
        },
        'gryphons-den': {
            title: "Gryphon's Den",
            description: 'A high-energy pitch competition where members showcase their entrepreneurial ideas to a panel of judges.',
            images: Array.from({ length: 9 }, (_, i) => ({
                id: `gd-${i + 1}`,
                src: `/gryphons-den/${i + 1}.png`,
                alt: `Gryphon's Den - Image ${i + 1}`
            })),
            color: '#C8102E',
            gradient: 'linear-gradient(135deg, #C8102E 0%, #FFC72C 100%)',
            icon: '🦁'
        },
        'asian-heritage-month': {
            title: 'Asian Heritage Month',
            description: 'Celebrating Asian heritage, community, and culture through shared activities, conversation, and connection.',
            images: Array.from({ length: 9 }, (_, i) => ({
                id: `ahm-${i + 1}`,
                src: `/asian-heritage-month/${i + 1}.png`,
                alt: `Asian Heritage Month - Image ${i + 1}`
            })),
            color: '#BE123C',
            gradient: 'linear-gradient(135deg, #BE123C 0%, #F59E0B 100%)',
            icon: '🌸'
        }
    }
    
    const currentEvent = events[eventId]
    
    const handleImageClick = (index) => {
        setSelectedImageIndex(index)
    }
    
    const closeModal = () => {
        setSelectedImageIndex(null)
    }
    
    const handleBackToGallery = () => {
        navigate('/gallery')
    }
    
    const handleImageLoad = (imageId) => {
        setImagesLoaded(prev => ({ ...prev, [imageId]: true }))
    }
    
    // Handle keyboard navigation in modal
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedImageIndex === null) return
            
            if (e.key === 'Escape') {
                closeModal()
            } else if (e.key === 'ArrowLeft') {
                setSelectedImageIndex(prev => 
                    prev > 0 ? prev - 1 : currentEvent.images.length - 1
                )
            } else if (e.key === 'ArrowRight') {
                setSelectedImageIndex(prev => 
                    prev < currentEvent.images.length - 1 ? prev + 1 : 0
                )
            }
        }
        
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [selectedImageIndex, currentEvent])
    
    // Redirect if event doesn't exist
    useEffect(() => {
        if (!currentEvent) {
            navigate('/gallery')
        }
    }, [eventId, currentEvent, navigate])
    
    if (!currentEvent) {
        return null
    }
    
    return (
        <div className="gallery-container">
            {/* Wall Texture Background */}
            <div className="wall-background">
                <div className="wall-texture"></div>
                <div className="wall-shadows">
                    <div className="shadow-1"></div>
                    <div className="shadow-2"></div>
                    <div className="shadow-3"></div>
                </div>
            </div>
            
            {/* Back Button */}
            <button 
                className="back-button"
                onClick={handleBackToGallery}
                aria-label="Back to gallery overview"
            >
                <span className="back-arrow">←</span>
                <span>Back to Gallery</span>
            </button>
            
            {/* Gallery Title Section */}
            <div className="gallery-header">
                <h1 className="gallery-title">
                    {currentEvent.title} {currentEvent.icon}
                </h1>
            </div>
            
            {/* Pinned Photos Wall */}
            <div className="photos-wall">
                {currentEvent.images.map((image, index) => {
                    // Compact horizontal layout - more photos per row, less vertical space
                    const positions = [
                        // Top row - 4 photos
                        { x: 8, y: 8, rotation: -12, scale: 0.95, pinRotation: 15 },
                        { x: 32, y: 5, rotation: 18, scale: 1.05, pinRotation: -8 },
                        { x: 56, y: 10, rotation: -8, scale: 0.9, pinRotation: 22 },
                        { x: 78, y: 7, rotation: 15, scale: 1.1, pinRotation: -15 },
                        
                        // Middle row - 3 photos
                        { x: 15, y: 40, rotation: -22, scale: 0.88, pinRotation: 12 },
                        { x: 45, y: 35, rotation: 7, scale: 1.02, pinRotation: -20 },
                        { x: 72, y: 42, rotation: -16, scale: 0.94, pinRotation: 8 },
                        
                        // Bottom row - 2 photos
                        { x: 25, y: 68, rotation: 20, scale: 1.08, pinRotation: -12 },
                        { x: 60, y: 72, rotation: -5, scale: 0.96, pinRotation: 18 }
                    ];
                    
                    const position = positions[index] || positions[index % positions.length];
                    const randomRotation = position.rotation;
                    const randomX = position.x;
                    const randomY = position.y;
                    const randomScale = position.scale;
                    const pinRotation = position.pinRotation;
                    
                    return (
                        <div 
                            key={image.id}
                            className={`pinned-photo photo-${index + 1} ${imagesLoaded[image.id] ? 'loaded' : 'loading'}`}
                            onClick={() => handleImageClick(index)}
                            style={{ 
                                '--photo-delay': `${index * 0.2}s`,
                                '--photo-rotation': `${randomRotation}deg`,
                                '--photo-x': `${randomX}%`,
                                '--photo-y': `${randomY}%`,
                                '--photo-scale': randomScale,
                                '--pin-rotation': `${pinRotation}deg`
                            }}
                        >
                            <div className="photo-pin"></div>
                            <div className="polaroid-frame">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    onLoad={() => handleImageLoad(image.id)}
                                    className="photo-image"
                                />
                                <div className="photo-caption">
                                    {currentEvent.title} #{index + 1}
                                </div>
                            </div>
                            {!imagesLoaded[image.id] && (
                                <div className="photo-loading">
                                    <div className="loading-pulse"></div>
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
            
            {/* Modal for full-size image viewing */}
            {selectedImageIndex !== null && (
                <div className="image-modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>✕</button>
                        <img
                            src={currentEvent.images[selectedImageIndex]?.src}
                            alt={currentEvent.images[selectedImageIndex]?.alt}
                            className="modal-image"
                        />
                        <div className="modal-counter">
                            {selectedImageIndex + 1} of {currentEvent.images.length}
                        </div>
                        <button 
                            className="modal-nav prev" 
                            onClick={(e) => {
                                e.stopPropagation()
                                setSelectedImageIndex(prev => 
                                    prev > 0 ? prev - 1 : currentEvent.images.length - 1
                                )
                            }}
                        >
                            ←
                        </button>
                        <button 
                            className="modal-nav next" 
                            onClick={(e) => {
                                e.stopPropagation()
                                setSelectedImageIndex(prev => 
                                    prev < currentEvent.images.length - 1 ? prev + 1 : 0
                                )
                            }}
                        >
                            →
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Gallery
