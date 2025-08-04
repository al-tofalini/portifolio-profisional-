document.addEventListener('DOMContentLoaded', function() {
    // Suavizar rolagem para links de navegação
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: 'smooth'
            });
        });
    });

    // Formulário de contato
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulação de envio
        const formData = new FormData(this);
        const formValues = Object.fromEntries(formData.entries());
        
        console.log('Dados do formulário:', formValues);
        
        // Feedback ao usuário
        alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
        this.reset();
    });

    // Animação ao rolar
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Efeito de máquina de escrever no título
    const title = document.querySelector('h1');
    const originalText = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const typeWriter = setInterval(() => {
        if (i < originalText.length) {
            title.textContent += originalText.charAt(i);
            i++;
        } else {
            clearInterval(typeWriter);
        }
    }, 100);

    // Dicionário de termos técnicos
    const technicalTerms = {
        "Cromatografia": "Técnica analítica para separar os componentes de uma mistura, baseada na diferença de afinidade desses componentes entre duas fases (uma estacionária e outra móvel).",
        "Espectrometria": "Método de análise que mede a interação entre a matéria e a radiação eletromagnética, permitindo identificar e quantificar substâncias.",
        "Drogas sintéticas": "Substâncias psicoativas produzidas em laboratório, que imitam os efeitos de drogas naturais, mas com estrutura química diferente.",
        "GC-MS": "Cromatografia Gasosa acoplada à Espectrometria de Massas, técnica poderosa para identificar compostos voláteis em misturas complexas.",
        "Explosivos": "Substâncias ou misturas que, quando submetidas a um estímulo adequado, liberam grande quantidade de gases e calor em curto período.",
        "Química analítica": "Ramo da química que estuda métodos e técnicas para determinar a composição química de materiais.",
        "Luminol": "Composto químico que emite luz (quimiluminescência) quando oxidado, usado para detectar vestígios de sangue.",
        "DNA": "Ácido desoxirribonucleico, molécula que contém a informação genética, usada em identificação forense.",
        "Bioquímica": "Ciência que estuda os processos químicos que ocorrem nos organismos vivos."
    };

    // Adiciona classe clickable-term a todas as tags
    document.querySelectorAll('.tag').forEach(tag => {
        tag.classList.add('clickable-term');
        tag.addEventListener('click', function() {
            const term = this.textContent;
            showTermDefinition(term);
        });
    });

    // Modal functions
    const modal = document.getElementById('termModal');
    const span = document.querySelector('.close-modal');

    function showTermDefinition(term) {
        document.getElementById('modalTerm').textContent = term;
        document.getElementById('modalDefinition').textContent = technicalTerms[term] || "Definição não disponível.";
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});