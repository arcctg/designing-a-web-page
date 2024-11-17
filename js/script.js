// Smooth Scroll and Section Highlight for Navigation
document.querySelectorAll('.nav-item').forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');
        const section = document.getElementById(target);

        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });

            // Highlight the section after scrolling
            section.style.transition = 'box-shadow 0.3s ease';
            section.style.boxShadow = '0 0 15px rgba(237, 187, 70, 0.8)';
            setTimeout(() => {
                section.style.boxShadow = 'none';
            }, 1500); // Remove highlight after 1.5 seconds

            // Update active navigation item
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
            });
            button.classList.add('active');
        }
    });
});

// "Get Started" Button Functionality
document.getElementById('get-started').addEventListener('click', () => {
    const formSection = document.getElementById('form-section');
    formSection.scrollIntoView({ behavior: 'smooth' });

    // Briefly highlight the form section
    formSection.style.transition = 'box-shadow 0.3s ease';
    formSection.style.boxShadow = '0 0 15px rgba(237, 187, 70, 0.8)';
    setTimeout(() => {
        formSection.style.boxShadow = 'none';
    }, 1500);
});

// Alert for Navigation Buttons
document.querySelectorAll('.nav-item').forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');
        alert(`You clicked on the ${target} section.`);
    });
});

// Play Button: Simulate Playing a Video
document.getElementById('play-video').addEventListener('click', () => {
    alert('Playing the introductory video!');
});

// Form Validation
document.getElementById('membership-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent actual form submission

    const name = document.getElementById('name').value.trim();
    const tel = document.getElementById('tel').value.trim();
    const email = document.getElementById('email').value.trim();
    const reason = document.getElementById('reason').value.trim();

    if (!name || !tel || !email || !reason) {
        alert('Please fill out all fields!');
        return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert('Please enter a valid email address!');
        return;
    }

    alert('Thank you for registering! We will contact you soon.');
});