document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scrolling for all Jump Anchors (Header Button & CTAs)
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 2. Open-ended Project Inquiry Form Handler
    const form = document.getElementById('quote-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Extract input values
        const submissionData = {
            vision: document.getElementById('vision').value.trim(),
            features: document.getElementById('features').value.trim(),
            budget: document.getElementById('budget').value,
            timeline: document.getElementById('timeline').value,
            examples: document.getElementById('examples').value.trim(),
            email: document.getElementById('email').value.trim()
        };

        // Validate required fields
        if (!submissionData.vision || !submissionData.features || !submissionData.budget || !submissionData.timeline || !submissionData.email) {
            alert('Please complete all required fields before submitting.');
            return;
        }

        // Show confirmation message
        alert('Thank you for your project request! We have received your details and will get back to you within 24 hours with a custom proposal.');

        // Reset form
        form.reset();
    });
});
