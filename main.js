document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('quote-form');
    if (!form) return;

    const BASE_PRICE = 300; // Base setup cost

    // Create container for live price readout
    const priceDisplay = document.createElement('div');
    priceDisplay.className = 'price-display';
    priceDisplay.style.margin = '20px 0';
    priceDisplay.style.fontSize = '1.25rem';
    priceDisplay.style.fontWeight = 'bold';
    
    // Insert price display before the submit button
    const submitBtn = form.querySelector('button[type="submit"]');
    form.insertBefore(priceDisplay, submitBtn);

    function calculateEstimate() {
        let total = BASE_PRICE;

        // Add checked features
        const checkboxes = form.querySelectorAll('input[name="feature"]:checked');
        checkboxes.forEach(cb => {
            total += parseFloat(cb.value);
        });

        // Apply timeline multiplier
        const timelineSelect = document.getElementById('timeline');
        const multiplier = parseFloat(timelineSelect.value) || 1;
        total = total * multiplier;

        // Format and render
        priceDisplay.textContent = `Estimated Investment: ~$${Math.round(total).toLocaleString()}`;
    }

    // Attach event listeners for real-time calculation
    form.addEventListener('change', calculateEstimate);

    // Initial calculation on load
    calculateEstimate();

    // Form submission handler
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your request! We will review your project details and get back to you within 24 hours.');
        form.reset();
        calculateEstimate();
    });
});
