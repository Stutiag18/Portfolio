import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [trail, setTrail] = useState(Array(10).fill({ x: 0, y: 0 }));
    const [isMoving, setIsMoving] = useState(false);

    useEffect(() => {
        let timeoutId;

        const handleMouseMove = (event) => {
            const newPosition = { x: event.clientX, y: event.clientY };
            setPosition(newPosition);
            setTrail((prevTrail) => {
                const newTrail = [...prevTrail];
                newTrail.pop();
                newTrail.unshift(newPosition);
                return newTrail;
            });
            setIsMoving(true);

            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setIsMoving(false);
            }, 100);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            {/* Main Cursor */}
            <div
                className="fixed w-3 h-3 bg-white rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    boxShadow: `
                      0 0 8px rgba(255, 0, 255, 0.7),
                        0 0 16px rgba(255, 0, 255, 0.7),
                        0 0 24px rgba(255, 0, 255, 0.7),
                        0 0 32px rgba(255, 0, 255, 0.7)
                    `
                }}
            />

            {/* Trail */}
            {trail.map((pos, index) => (
                <motion.div
                    key={index}
                    className={`fixed w-3 h-3 bg-white rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 ${isMoving ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                        left: `${pos.x}px`,
                        top: `${pos.y}px`,
                        boxShadow: `
                             0 0 8px rgba(255, 105, 180, 0.7),
                            0 0 16px rgba(255, 105, 180, 0.7),
                            0 0 24px rgba(255, 105, 180, 0.7),
                            0 0 32px rgba(255, 105, 180, 0.7)
                        `
                    }}
                    animate={{
                        scale: [1, 1.5, 1],
                        transition: {
                            duration: 0.1,
                            delay: index * 0.02,
                            ease: "easeOut"
                        }
                    }}
                />
            ))}
        </>
    );
};

export default CustomCursor;