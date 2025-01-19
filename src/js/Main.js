import React, { useEffect, useState } from 'react';
import { WOW } from 'wowjs';

const Main = () => {
  const [sticky, setSticky] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // Spinner removal after page load
    const spinnerTimeout = setTimeout(() => {
      const spinner = document.getElementById('spinner');
      if (spinner) {
        spinner.classList.remove('show');
      }
    }, 1);
    return () => clearTimeout(spinnerTimeout);
  }, []);

  useEffect(() => {
    // Initialize WOW.js
    new WOW().init();

    // Sticky Navbar
    const handleScroll = () => {
      if (window.scrollY > 45) {
        setSticky(true);
      } else {
        setSticky(false);
      }

      // Show/Hide Back to top button
      if (window.scrollY > 100) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Dropdown on hover (For larger screens)
  useEffect(() => {
    const handleDropdownHover = () => {
      const dropdowns = document.querySelectorAll('.dropdown');
      dropdowns.forEach((dropdown) => {
        dropdown.addEventListener('mouseenter', () => {
          dropdown.classList.add('show');
          const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
          const dropdownMenu = dropdown.querySelector('.dropdown-menu');
          if (dropdownToggle) {
            dropdownToggle.setAttribute('aria-expanded', 'true');
          }
          if (dropdownMenu) {
            dropdownMenu.classList.add('show');
          }
        });
        dropdown.addEventListener('mouseleave', () => {
          dropdown.classList.remove('show');
          const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
          const dropdownMenu = dropdown.querySelector('.dropdown-menu');
          if (dropdownToggle) {
            dropdownToggle.setAttribute('aria-expanded', 'false');
          }
          if (dropdownMenu) {
            dropdownMenu.classList.remove('show');
          }
        });
      });
    };

    if (window.innerWidth >= 992) {
      handleDropdownHover();
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 992) {
        handleDropdownHover();
      }
    });

    return () => window.removeEventListener('resize', handleDropdownHover);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Spinner */}
      <div id="spinner" className="show">
        {/* Spinner content */}
      </div>

      {/* Sticky Navbar */}
      <nav className={`navbar ${sticky ? 'sticky-top shadow-sm' : ''}`}>
        {/* Navbar content */}
      </nav>

      {/* Dropdown */}
      <div className="dropdown">
        <button className="dropdown-toggle" aria-expanded="false">
          Dropdown
        </button>
        <div className="dropdown-menu">
          {/* Dropdown items */}
        </div>
      </div>

      {/* Facts Counter (you may need to install a counter package for this or use state to simulate it) */}
      <div data-toggle="counter-up">1000</div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button className="back-to-top" onClick={scrollToTop}>
          Back to Top
        </button>
      )}
    </div>
  );
};

export default Main;
