/* ============================================================================
   PORTFOLIO - JAVASCRIPT
   Interatividades, Animações e Dinâmica
   ============================================================================ */

// ============================================================================
// CONFIGURAÇÃO DO DOCUMENTO
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initTypingEffect();
    initParticles();
    initScrollAnimations();
    initScrollNavbar();
    initProficiencyBars();
});

// ============================================================================
// NAVEGAÇÃO MOBILE
// ============================================================================

function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!hamburger) return;

    // Toggle menu ao clicar no hamburger
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', function(event) {
        const isClickInsideNavbar = event.target.closest('.navbar');
        if (!isClickInsideNavbar && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// ============================================================================
// EFEITO DE DIGITAÇÃO (TYPING EFFECT)
// ============================================================================

function initTypingEffect() {
    const typingLine = document.getElementById('typingLine');
    if (!typingLine) return;

    const text = 'inicializando_portfolio.sh';
    typingLine.textContent = '';

    let index = 0;

    function type() {
        if (index < text.length) {
            typingLine.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50);
        }
    }

    // Iniciar digitação após um pequeno delay
    setTimeout(type, 500);
}

// ============================================================================
// GERAÇÃO DE PARTÍCULAS FLUTUANTES
// ============================================================================

function initParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    const particleCount = window.innerWidth > 768 ? 50 : 20;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Posição aleatória
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        particle.style.left = randomX + '%';
        particle.style.top = randomY + '%';

        // Delay aleatório
        const randomDelay = Math.random() * 10;
        particle.style.animationDelay = randomDelay + 's';

        // Duração variável
        const randomDuration = 15 + Math.random() * 10;
        particle.style.animationDuration = randomDuration + 's';

        particlesContainer.appendChild(particle);
    }
}

// ============================================================================
// SCROLL REVEAL ANIMATION
// ============================================================================

// ============================================================================
// SCROLL REVEAL ANIMATION
// ============================================================================

function initScrollAnimations() {
    const reveals = document.querySelectorAll('.reveal');

    function checkReveal() {
        reveals.forEach((element) => {
            // Verificar se o elemento já foi revelado
            if (element.classList.contains('revealed')) {
                return; // Já foi animado, pular
            }

            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                // Marcar como revelado para evitar re-animação
                element.classList.add('revealed');

                // Aplicar animação apenas uma vez
                element.style.animation = 'revealUp 0.8s ease forwards';

                // Adicionar delay escalonado para múltiplos elementos
                const siblings = element.parentElement.querySelectorAll('.reveal');
                let delayIndex = Array.from(siblings).indexOf(element);
                element.style.animationDelay = (delayIndex * 0.1) + 's';
            }
        });
    }

    window.addEventListener('scroll', checkReveal);
    // Executar uma vez ao carregar
    checkReveal();
}

// ============================================================================
// NAVBAR TRANSPARENTE AO ROLAR
// ============================================================================

function initScrollNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    let lastScrollY = 0;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        if (scrollY > 50) {
            navbar.style.background = 'rgba(13, 13, 13, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(13, 13, 13, 0.85)';
            navbar.style.boxShadow = 'none';
        }

        lastScrollY = scrollY;
    });
}

// ============================================================================
// BARRAS DE PROFICIÊNCIA ANIMADAS
// ============================================================================

function initProficiencyBars() {
    const bars = document.querySelectorAll('.proficiency-bar');
    let hasAnimated = false;

    function animateBars() {
        if (hasAnimated) return;

        bars.forEach((bar, index) => {
            const fill = bar.querySelector('.proficiency-fill');
            if (fill) {
                // Extrair a largura do texto (ex: "95%")
                const widthText = bar.querySelector('.proficiency-label span:last-child').textContent;
                const width = parseInt(widthText);

                // Calcular delay baseado no índice
                const delay = index * 0.15;

                fill.style.setProperty('--width', width + '%');
                fill.style.setProperty('--delay', delay + 's');
            }
        });

        hasAnimated = true;
    }

    // Animar quando scrollar para a seção de skills
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateBars();
                    observer.unobserve(skillsSection);
                }
            });
        }, { threshold: 0.1 });

        observer.observe(skillsSection);
    }
}

// ============================================================================
// SUPORTE DE CLIQUE EM LINKS INTERNOS
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll é gerenciado pelo CSS, mas podemos adicionar lógica adicional se necessário
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();

                const target = document.querySelector(href);
                const offsetTop = target.offsetTop;
                const navHeight = document.querySelector('.navbar')?.offsetHeight || 0;

                window.scrollTo({
                    top: offsetTop - navHeight,
                    behavior: 'smooth'
                });

                // Fechar menu mobile se aberto
                const hamburger = document.getElementById('hamburger');
                const navMenu = document.getElementById('navMenu');
                if (hamburger && navMenu) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            }
        });
    });
});

// ============================================================================
// ACTIVE LINK NA NAVBAR
// ============================================================================

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = '#d1d5db';
        } else {
            link.style.color = '#9ca3af';
        }
    });
});

// ============================================================================
// EFEITOS INTERATIVOS EM HOVER
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
    // Adicionar efeito de glow em botões no hover
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 10px currentColor';
        });

        button.addEventListener('mouseleave', function() {
            this.style.textShadow = 'none';
        });
    });

    // Adicionar efeito em cards
    const cards = document.querySelectorAll(
        '.about-card, .skill-card, .projeto-card, .timeline-content'
    );

    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// ============================================================================
// OBSERVADOR DE INTERSECÇÃO PARA REVEAL
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
    // Removido para evitar conflito com initScrollAnimations()
    // A função initScrollAnimations() já cuida das animações de reveal
});

// ============================================================================
// DETECÇÃO DE DARK MODE (OPCIONAL)
// ============================================================================

function initDarkMode() {
    // Detectar preferência do usuário
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (prefersDark) {
        document.body.classList.add('dark-mode');
    }
}

initDarkMode();

// ============================================================================
// FUNÇÃO PARA COMPARTILHAMENTO (OPCIONAL)
// ============================================================================

function shareProfile() {
    const shareData = {
        title: 'Meu Portfólio de TI',
        text: 'Confira meu portfólio profissional como Militar e Especialista em TI',
        url: window.location.href
    };

    if (navigator.share) {
        navigator.share(shareData).catch(err => console.log('Erro ao compartilhar:', err));
    } else {
        // Fallback: copiar URL para clipboard
        navigator.clipboard.writeText(window.location.href)
            .then(() => alert('URL copiada para a área de transferência!'))
            .catch(err => console.error('Erro ao copiar:', err));
    }
}

// ============================================================================
// PERFORMANCE: LAZY LOADING (OPCIONAL)
// ============================================================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(
        img => imageObserver.observe(img)
    );
}

// ============================================================================
// EASTER EGG: TERMINAL INTERATIVO
// ============================================================================

let easterEggEnabled = false;

document.addEventListener('keydown', (e) => {
    // Ativar ao pressionar Ctrl/Cmd + Shift + D
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'D') {
        easterEggEnabled = !easterEggEnabled;

        if (easterEggEnabled) {
            console.log('🔓 Modo Developer Ativado');
            console.log('📊 Portfolio Version: 1.0.0');
            console.log('👤 Profissional: Militar de TI');
            console.log('🔧 Stack: HTML5 + CSS3 + JavaScript Puro');
            console.log('💾 GitHub Pages: Pronto para Deploy');
        }
    }
});

// ============================================================================
// UTILIDADES GERAIS
// ============================================================================

// Função para scrollToTop suave
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Detectar navegador
function getBrowserInfo() {
    const userAgent = navigator.userAgent;
    let browser = 'Desconhecido';

    if (userAgent.indexOf('Firefox') > -1) {
        browser = 'Firefox';
    } else if (userAgent.indexOf('Chrome') > -1) {
        browser = 'Chrome';
    } else if (userAgent.indexOf('Safari') > -1) {
        browser = 'Safari';
    } else if (userAgent.indexOf('Edge') > -1) {
        browser = 'Edge';
    }

    return browser;
}

// ============================================================================
// SUPORTE A TEMA (LIGHT/DARK)
// ============================================================================

function toggleTheme() {
    const root = document.documentElement;
    const currentTheme = localStorage.getItem('theme') || 'dark';

    if (currentTheme === 'dark') {
        localStorage.setItem('theme', 'light');
        root.style.setProperty('--color-bg-primary', '#f5f5f5');
    } else {
        localStorage.setItem('theme', 'dark');
        root.style.setProperty('--color-bg-primary', '#0d0d0d');
    }
}

// ============================================================================
// VERIFICAÇÃO DE CONECTIVIDADE
// ============================================================================

window.addEventListener('online', () => {
    console.log('✓ Conexão restaurada');
});

window.addEventListener('offline', () => {
    console.log('✗ Sem conexão');
});

// ============================================================================
// INICIALIZAÇÃO FINAL
// ============================================================================

window.addEventListener('load', () => {
    // Remover classe de carregamento, se existir
    document.body.classList.add('loaded');

    // Listar informações no console para debug
    console.log('%c> Portfolio Carregado com Sucesso!', 'color: #9ca3af; font-size: 14px; font-family: monospace;');
    console.log('%c> Browser: ' + getBrowserInfo(), 'color: #d1d5db; font-family: monospace;');
    console.log('%c> Status: Online ✓', 'color: #10b981; font-family: monospace;');
});
