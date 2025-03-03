// Smooth scrolling for navigation links


document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form submission handling
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    alert('Message sent successfully!');
});

var typed = new Typed('.typing', {
    strings: [' MERN Stack Developer', 'Python Full-Stack Developer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        name: e.target.elements[0].value,
        email: e.target.elements[1].value,
        message: e.target.elements[2].value
    };

    try {
        const response = await fetch('https://portfolio-backend-k4z1.onrender.com/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();
        alert(data.message);
        e.target.reset();
    } catch (error) {
        alert('Failed to send message');
    }
});



window.sendToWhatsApp = function(element) {
    const productContainer = element.closest('.whatsapp-link');

    
    const message = `hi `;
    const phoneNumber = '919633550309';     
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

document.querySelector('.nav-toggle').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('active');
});
