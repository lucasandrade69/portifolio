# 🎖️ Portfólio Profissional - Militar de TI

Um site de portfólio premium, moderno e totalmente responsivo, projetado para profissionais militares da área de TI. Desenvolvido com HTML5, CSS3 e JavaScript puro - **sem dependências de backend**.

![Status](https://img.shields.io/badge/Status-Completo-success)
![Versão](https://img.shields.io/badge/Versão-1.0.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## 🌟 Características

- ✅ **Design Terminal/Cybersecurity** - Estética hacker minimalista e futurista
- ✅ **100% Responsivo** - Mobile-first, funciona perfeitamente em todos os dispositivos
- ✅ **Sem Dependencies** - HTML5 + CSS3 + JavaScript Puro
- ✅ **GitHub Pages Ready** - Pronto para deploy sem servidor
- ✅ **Animações Suaves** - Typing effect, scroll reveal, hover effects
- ✅ **Dark Mode Elegante** - Paleta de cores profissional e agradável
- ✅ **Performance Otimizada** - Carregamento rápido e eficiente
- ✅ **SEO Friendly** - Meta tags e estrutura semântica

## 📋 Estrutura do Site

```
portfolio/
├── index.html        # Estrutura HTML
├── style.css         # Estilos CSS
├── script.js         # Interatividades JavaScript
├── assets/           # Imagens e ícones (opcional)
└── README.md         # Este arquivo
```

## 🎨 Seções Incluídas

1. **Hero** - Tela inicial com terminal interativo e typing effect
2. **Sobre Mim** - Apresentação profissional com cards animados
3. **Skills** - Competências técnicas com barras de proficiência
4. **Experiência** - Timeline vertical com histórico profissional
5. **Projetos** - Portfolio de projetos realizados
6. **Contato** - Seção com links de contato e redes sociais
7. **Navbar** - Navegação fixa com menu responsivo

## 🚀 Como Usar

### 1. Download/Clone
```bash
git clone https://github.com/seu-usuario/seu-portfolio.git
cd seu-portfolio
```

### 2. Personalização Local

#### Editar Informações Pessoais

Abra `index.html` e procure por:

```html
<!-- HERO SECTION -->
<h1 class="hero-title">
    <span class="highlight">CPF - MILITAR</span>
    <br>
    Profissional de TI
</h1>
```

Substitua:
- `CPF - MILITAR` pelo seu nome ou abreviação
- `Profissional de TI` pelo seu cargo específico

#### Editar Contatos

Procure pela seção `<!-- CONTATO -->`:

```html
<a href="mailto:seu.email@exemplo.com">
    seu.email@exemplo.com
</a>

<a href="https://linkedin.com/in/seu-perfil" target="_blank">
    linkedin.com/in/seu-perfil
</a>

<a href="https://github.com/seu-usuario" target="_blank">
    github.com/seu-usuario
</a>
```

#### Personalizar Skills

Na seção `<!-- SKILLS -->`, edite as listas de habilidades:

```html
<div class="skill-card reveal">
    <div class="skill-header">
        <h3>Sua Área</h3>
        <span class="skill-badge">Avançado</span>
    </div>
    <ul class="skill-list">
        <li><span class="skill-icon">▸</span> Sua Habilidade 1</li>
        <li><span class="skill-icon">▸</span> Sua Habilidade 2</li>
    </ul>
</div>
```

#### Adicionar Experiências

Na seção `<!-- EXPERIÊNCIA -->`, adicione itens à timeline:

```html
<div class="timeline-item reveal">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
        <h3>Seu Cargo</h3>
        <p class="timeline-date">YYYY - YYYY</p>
        <p class="timeline-desc">Descrição da experiência...</p>
        <div class="timeline-tags">
            <span class="tag">Tag1</span>
            <span class="tag">Tag2</span>
        </div>
    </div>
</div>
```

#### Adicionar Projetos

Na seção `<!-- PROJETOS -->`, adicione cards:

```html
<div class="projeto-card reveal">
    <div class="projeto-header">
        <h3>Seu Projeto</h3>
        <span class="projeto-status">Completo</span>
    </div>
    <p class="projeto-desc">
        Descrição do projeto...
    </p>
    <div class="projeto-techs">
        <span class="tech-badge">Tech1</span>
        <span class="tech-badge">Tech2</span>
    </div>
    <div class="projeto-links">
        <a href="#" class="link-btn">
            <span class="link-icon">📄</span> Documentação
        </a>
    </div>
</div>
```

### 3. Testes Local

Abra o arquivo `index.html` diretamente no navegador, ou use um servidor local:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (com http-server)
npx http-server
```

Acesse `http://localhost:8000` no navegador.

## 📱 GitHub Pages - Deploy

### Opção 1: Repository Pessoal (Recomendado)

1. **Crie um novo repositório** no GitHub chamado: `seu-usuario.github.io`

2. **Clone o repositório**:
```bash
git clone https://github.com/seu-usuario/seu-usuario.github.io.git
cd seu-usuario.github.io
```

3. **Copie os arquivos** do portfolio:
```bash
# Copie index.html, style.css, script.js para a raiz do repositório
```

4. **Faça commit e push**:
```bash
git add .
git commit -m "Adicionar portfólio pessoal"
git push origin main
```

5. **Acesse seu portfolio**:
```
https://seu-usuario.github.io
```

### Opção 2: Repository Comum com GitHub Pages

1. **Crie um novo repositório** (ex: `portfolio`)

2. **Vá para Settings > Pages**

3. **Selecione "Deploy from branch"**

4. **Escolha branch `main` e pasta `/root`**

5. **Salve as alterações**

6. **Acesse seu portfolio**:
```
https://seu-usuario.github.io/portfolio
```

### Opção 3: Usar Actions do GitHub (Automático)

Um arquivo `.github/workflows/deploy.yml` pode ser criado para deploy automático:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to GitHub Pages
        run: |
          git config user.name "GitHub Actions"
          git config user.email "actions@github.com"
```

## 🎨 Personalização de Cores

As cores estão definidas em `:root` no `style.css`:

```css
:root {
    --color-bg-primary: #0d0d0d;      /* Fundo principal */
    --color-bg-secondary: #111111;    /* Fundo secundário */
    --color-bg-tertiary: #1a1a1a;     /* Fundo terciário */
    --color-bg-light: #2b2b2b;        /* Fundo claro */
    --color-text-primary: #e6e6e6;    /* Texto principal */
    --color-text-secondary: #9ca3af;  /* Texto secundário */
    --color-highlight: #9ca3af;       /* Destaque */
    --color-hover-glow: #d1d5db;      /* Glow no hover */
    --color-success: #10b981;         /* Sucesso/Status */
    --color-accent: #8b5cf6;          /* Acento/Primária */
}
```

Para mudar o tema, simplesmente altere esses valores.

## 🔧 Dicas de Otimização

### Performance

1. **Minificar CSS e JS** antes de fazer deploy
2. **Compactar imagens** em `/assets/`
3. **Usar WebP** para imagens quando possível
4. **Ativar caching** no GitHub Pages

### SEO

Edite as meta tags em `index.html`:

```html
<meta name="description" content="Seu portfólio profissional de TI">
<meta name="keywords" content="TI, Infraestrutura, Militar, ...">
<meta name="author" content="Seu Nome">
```

### Segurança

- Use `target="_blank" rel="noopener noreferrer"` em links externos
- Valide emails antes de incluir no HTML
- Considere usar um formulário de contato backend (opcional)

## 📚 Estrutura de Pastas Sugerida

```
seu-usuario.github.io/
├── index.html
├── style.css
├── script.js
├── README.md
├── .gitignore
└── assets/
    ├── images/
    │   ├── profile.jpg
    │   └── project-1.jpg
    ├── icons/
    │   ├── github.svg
    │   └── linkedin.svg
    └── fonts/
        └── fira-code.woff2
```

## ⌨️ Atalhos Úteis

- **Ctrl/Cmd + Shift + D** - Ativa modo developer no console

## 🐛 Troubleshooting

### Links não funcionam no GitHub Pages

Certifique-se que todos os links são **relativos**:

```html
<!-- ✓ Correto -->
<a href="index.html">Home</a>
<a href="#skills">Skills</a>

<!-- ✗ Errado -->
<a href="https://seu-usuario.github.io/index.html">Home</a>
<a href="/index.html">Home</a>
```

### CSS/JS não carrega

Verifique se os caminhos estão corretos em `index.html`:

```html
<link rel="stylesheet" href="style.css">
<script src="script.js"></script>
```

### Navbar não aparece no mobile

Limpe o cache do navegador: `Ctrl + Shift + R`

## 📞 Contato e Suporte

Se tiver dúvidas sobre customização ou deploying, consulte:

- [Documentação GitHub Pages](https://pages.github.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Stack Overflow](https://stackoverflow.com/)

## 📄 Licença

Este projeto está sob a licença MIT. Você é livre para usar, modificar e distribuir.

## ✨ Créditos

Desenvolvido com disciplina e precisão técnica.

**Versão:** 1.0.0  
**Última Atualização:** 2024  
**Status:** Pronto para Produção  

---

> 🎖️ "Infraestrutura confiável começa com diversidade e disciplina." - Conceito do Portfólio
