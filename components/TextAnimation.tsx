'use client';
import React from "react";
import { useEffect, useRef } from 'react'
import styles from '@/styles/Hero.module.css'

const TextAnimation: React.FC = () => {
      const typingRef = useRef<HTMLSpanElement>(null);
    
      useEffect(() => {
        if (!typingRef.current) return;
    
        const roles = ['Frontend Developer', 'Web Designer', 'UI/UX Designer'];
        let currentRoleIndex = 0;
        let currentCharIndex = 0;
        let isDeleting = false;
        let typingDelay = 200;
    
        const type = () => {
          const currentRole = roles[currentRoleIndex];
          
          if (isDeleting) {
            if (typingRef.current) {
              typingRef.current.textContent = currentRole.substring(0, currentCharIndex - 1);
              currentCharIndex--;
            }
            typingDelay = 100;
          } else {
            if (typingRef.current) {
              typingRef.current.textContent = currentRole.substring(0, currentCharIndex + 1);
              currentCharIndex++;
            }
            typingDelay = 200;
          }
    
          if (!isDeleting && currentCharIndex === currentRole.length) {
            isDeleting = true;
            typingDelay = 1000;
          } else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentRoleIndex = (currentRoleIndex + 1) % roles.length;
            typingDelay = 500;
          }
    
          setTimeout(type, typingDelay);
        };
    
        setTimeout(type, typingDelay);
      }, []);

  return (
    
    <p className={styles.subtitle}>
            A <span className={styles.typing} ref={typingRef}></span>
      </p>

  );
};

export default TextAnimation;
