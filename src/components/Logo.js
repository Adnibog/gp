import React from 'react';

const Logo = ({ mobile = false }) => {
    return (
        <div className={`logo ${mobile ? 'logo-mobile' : ''}`}>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25" cy="25" r="23" stroke="url(#gradient)" strokeWidth="3" fill="none"/>
                <text x="25" y="32" textAnchor="middle" fill="url(#gradient)" fontSize="24" fontWeight="bold" fontFamily="Arial, sans-serif">
                    GP
                </text>
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#2da44e" />
                        <stop offset="100%" stopColor="#0969da" />
                    </linearGradient>
                </defs>
            </svg>
            <style>{`
                .logo {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    transition: transform 0.3s ease;
                }
                
                .logo:hover {
                    transform: scale(1.05);
                }
                
                .logo svg:hover circle {
                    stroke-width: 4;
                }
                
                @media (max-width: 768px) {
                    .logo svg {
                        width: 40px;
                        height: 40px;
                    }
                }
            `}</style>
        </div>
    );
};

export default Logo;
