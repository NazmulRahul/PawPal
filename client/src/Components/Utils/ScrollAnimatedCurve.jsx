import React, { useEffect, useRef, useState } from 'react';

const AnimatedCurve = ({
  strokeColor = '#3498db',
  strokeWidth = 4,
  animationDuration = 2,
  threshold = 0.5,
  path = 'M20% 80 Q 50% 20 80% 80'
}) => {
  const sectionRef = useRef(null);
  const pathRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const pathElement = pathRef.current;

    if (!section || !pathElement) return;

    // Calculate path length and set initial state
    const pathLength = pathElement.getTotalLength();
    pathElement.style.strokeDasharray = pathLength;
    pathElement.style.strokeDashoffset = pathLength;

    // Set up intersection observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(section);
        }
      },
      { threshold }
    );

    observer.observe(section);

    // Handle window resize
    const handleResize = () => {
      const newLength = pathElement.getTotalLength();
      pathElement.style.strokeDasharray = newLength;
      pathElement.style.strokeDashoffset = newLength;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, [threshold]);

  const styles = {
    section: {
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    svg: {
      position: 'absolute',
      width: '100%',
      height: '100%'
    },
    path: {
      transition: `stroke-dashoffset ${animationDuration}s ease-in-out`,
      stroke: strokeColor,
      strokeWidth: strokeWidth,
      fill: 'none'
    },
    content: {
      position: 'relative',
      zIndex: 1,
      padding: '20px',
      background: 'white'
    }
  };

  return (
    <section ref={sectionRef} style={styles.section}>
      <svg style={styles.svg}>
        <path
          ref={pathRef}
          style={{
            ...styles.path,
            strokeDashoffset: isVisible ? 0 : undefined
          }}
          d={path}
        />
      </svg>
      <div style={styles.content}>
        <h2>Scroll Triggered Curve</h2>
        <p>Your content here</p>
      </div>
    </section>
  );
};

export default AnimatedCurve;