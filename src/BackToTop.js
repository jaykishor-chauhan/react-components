import React, { useEffect, useState } from 'react'

function BackToTop() {
    const [isVisible, setVisible] = useState(false);

    // Show or hide the button based on scroll position
    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.scrollY > 100){
                setVisible(true);
            }else{
                setVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll back to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

  return (
    <button
            onClick={scrollToTop}
            style={{
                display: isVisible ? 'block' : 'none',
                position: 'fixed',
                bottom: '50px',
                right: '30px',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                padding: '10px 15px',
                cursor: 'pointer',
                boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
            }}
        >
            Back to Top
        </button>
  );
}

export default BackToTop
