// Services Data
const services = [
    {
        title: "أعمال السباكة",
        icon: "fa-tools",
        description: "تركيب وتصليح جميع أنظمة السباكة الحديثة مع ضمان الجودة"
    },
    {
        title: "أعمال النقاشة",
        icon: "fa-paint-roller",
        description: "تنفيذ أعمال الدهانات الداخلية والخارجية بأحدث الألوان"
    },
    {
        title: "التركيبات الكهربائية",
        icon: "fa-bolt",
        description: "تركيب جميع الأنظمة الكهربائية مع مراعاة معايير الأمان"
    },
    {
        title: "أعمال المحارة",
        icon: "fa-trowel",
        description: "تنفيذ أعمال المحارة بجودة عالية ومتانة فائقة"
    },
    {
        title: "جبس بلدي",
        icon: "fa-house",
        description: "تشطيب ديكورات الجبس البلدي بأنماط فنية مميزة"
    },
    {
        title: "جبس بورد",
        icon: "fa-border-all",
        description: "تصميم وتنفيذ أحدث ديكورات الجبس بورد"
    }
];

// Populate Services
function populateServices() {
    const servicesGrid = document.querySelector('.services-grid');
    
    services.forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-card animate-from-bottom';
        card.innerHTML = `
            <i class="fas ${service.icon} fa-3x"></i>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        `;
        servicesGrid.appendChild(card);
    });
}

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    populateServices();
    
    // Observe all animate elements
    document.querySelectorAll('.animate-from-bottom, .animate-from-left, .animate-from-right').forEach(el => {
        observer.observe(el);
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});