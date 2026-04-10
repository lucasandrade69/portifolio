# Assets - Imagens e Ícones

Esta pasta contém recursos visuais para seu portfólio.

## 📁 Estrutura

```
assets/
├── images/          # Imagens do portfólio
│   ├── profile.jpg  # Foto de perfil
│   ├── project-1.jpg
│   ├── project-2.jpg
│   └── header-bg.png
└── icons/           # Ícones SVG
    ├── github.svg
    ├── linkedin.svg
    ├── email.svg
    └── skills.svg
```

## 🖼️ Como Adicionar Imagens

### Foto de Perfil

```html
<div class="card-icon">
    <img src="assets/images/profile.jpg" alt="Seu Nome" class="profile-image">
</div>
```

### Imagens em Projetos

```html
<div class="projeto-card reveal">
    <img src="assets/images/project-1.jpg" alt="Descrição" class="projeto-image">
    <!-- resto do card -->
</div>
```

### Estilo CSS para Imagens

```css
.profile-image {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 2px solid var(--color-highlight);
    object-fit: cover;
}

.projeto-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 4px;
    margin-bottom: 1rem;
}
```

## 🎨 Otimização de Imagens

### Compressão Recomendada

1. **Foto de Perfil**: 200x200px, ~50KB
2. **Imagens de Projeto**: 400x300px, ~100KB
3. **Backgrounds**: 1920x1080px, ~200KB

### Ferramentas Gratuitas

- [TinyPNG](https://tinypng.com/) - Compressão PNG/JPG
- [ImageOptim](https://imageoptim.com/) - Otimização macOS
- [FileZilla](https://filezilla-project.org/) - Upload FTP

### Formatos Recomendados

- **Fotos**: JPG (melhor compressão)
- **Ícones/Logos**: SVG (vetorial)
- **Screenshots**: PNG (sem perda)

## 🎯 Ícones SVG Úteis

### GitHub Icon
```html
<svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
</svg>
```

### LinkedIn Icon
```html
<svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.671-2.236-1.267 0-2.007.856-2.34 1.688-.12.292-.15.7-.15 1.108v5.009h-3.554v-10.066h3.415v1.381h.049c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v5.081zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.953.77-1.715 1.946-1.715 1.177 0 1.915.762 1.915 1.715 0 .953-.738 1.715-1.946 1.715zm1.946 11.597H3.392V9.1h3.891v11.352zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
</svg>
```

### Email Icon
```html
<svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
</svg>
```

## 📝 Adicionar Ícones ao HTML

```html
<a href="https://github.com" target="_blank" class="social-link">
    <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
        <!-- SVG path aqui -->
    </svg>
</a>
```

## 🎨 Estilo CSS para Ícones

```css
.social-icon {
    width: 24px;
    height: 24px;
    fill: var(--color-highlight);
    transition: all var(--transition-normal);
}

.social-link:hover .social-icon {
    fill: var(--color-accent);
    transform: scale(1.2);
}
```

## 📱 Imagens Responsivas

```html
<picture>
    <source media="(max-width: 600px)" srcset="assets/images/project-mobile.jpg">
    <img src="assets/images/project.jpg" alt="Projeto">
</picture>
```

## 🚀 Lazy Loading

```html
<img src="assets/images/project.jpg" alt="Projeto" loading="lazy">
```

## 💾 Tamanho Recomendado

- **Total de Assets**: < 2MB
- **Imagens**: < 500KB
- **Ícones SVG**: < 50KB por arquivo

---

**Dica**: Sempre otimize imagens antes de fazer upload para melhor performance!
