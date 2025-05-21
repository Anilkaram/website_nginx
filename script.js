document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Accordion functionality
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', function() {
            // Close all other accordion items
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const destination = document.getElementById('destination').value;
            const message = document.getElementById('message').value;
            const consent = document.getElementById('consent').checked;
            
            // Simple form validation
            if (!firstName || !lastName || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // In a real application, you would send this data to your server
            // For demo purposes, we'll just show a success message
            alert(`Thank you, ${firstName}! Your message has been sent. We'll get back to you shortly.`);
            
            // Reset the form
            contactForm.reset();
        });
    }
    
    // Search form handling (simplified for demo)
    const searchForm = document.querySelector('.search-box form');
    
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get search parameters
            const destination = searchForm.querySelector('input[type="text"]').value;
            const checkIn = searchForm.querySelector('input[type="date"]:nth-of-type(1)').value;
            const checkOut = searchForm.querySelector('input[type="date"]:nth-of-type(2)').value;
            
            // Validate form
            if (!destination) {
                alert('Please enter a destination.');
                return;
            }
            
            if (!checkIn || !checkOut) {
                alert('Please select check-in and check-out dates.');
                return;
            }
            
            // Parse dates
            const checkInDate = new Date(checkIn);
            const checkOutDate = new Date(checkOut);
            
            // Validate dates
            if (checkInDate >= checkOutDate) {
                alert('Check-out date must be after check-in date.');
                return;
            }
            
            // In a real application, you would redirect to search results
            // For demo purposes, we'll just show a success message
            alert(`Searching for accommodations in ${destination} from ${checkIn} to ${checkOut}`);
            
            // Scroll to the hotels section as a simple demo
            document.getElementById('hotels').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just '#'
            if (href === '#') return;
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });
});