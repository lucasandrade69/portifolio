# ✅ Checklist de Customização Rápida

Use este documento como guia passo-a-passo para personalizar o portfolio.

---

## 🎯 FASE 1: INFORMAÇÕES BÁSICAS (5 min)

### [ ] 1.1 - Editar Nome e Cargo

Abra `index.html` e procure por (linha ~65):

```html
<h1 class="hero-title">
    <span class="highlight">CPF - MILITAR</span>
    <br>
    Profissional de TI
</h1>
```

**Mude para:**

```html
<h1 class="hero-title">
    <span class="highlight">SEU NOME / ABREVIAÇÃO</span>
    <br>
    Seu Cargo Específico
</h1>
```

### [ ] 1.2 - Atualizar Tagline/Subtitle

Procure por (linha ~69):

```html
<p class="hero-subtitle fade-in">
    <span class="text-secondary">Infraestrutura • Segurança • Confiabilidade • Excelência</span>
</p>
```

**Customize com suas áreas:**

```html
<p class="hero-subtitle fade-in">
    <span class="text-secondary">SSH • Linux • GLPI • Redes • Segurança</span>
</p>
```

---

## 📧 FASE 2: CONTATO (3 min)

### [ ] 2.1 - Email

Procure por (linha ~380):

```html
<a href="mailto:seu.email@exemplo.com">
    seu.email@exemplo.com
</a>
```

**Substitua** `seu.email@exemplo.com` pelo seu email real.

### [ ] 2.2 - LinkedIn

Procure por (linha ~385):

```html
<a href="https://linkedin.com/in/seu-perfil" target="_blank">
    linkedin.com/in/seu-perfil
</a>
```

**Substitua** `/seu-perfil` pelo seu profile do LinkedIn.

### [ ] 2.3 - GitHub

Procure por (linha ~390):

```html
<a href="https://github.com/seu-usuario" target="_blank">
    github.com/seu-usuario
</a>
```

**Substitua** `/seu-usuario` pelo seu username.

### [ ] 2.4 - WhatsApp

Procure por (linha ~395):

```html
<a href="https://wa.me/5585999999999" target="_blank">
    +55 (85) 99999-9999
</a>
```

**Substitua** pelo seu número (formato: 55 + DD + número).

---

## 💼 FASE 3: SOBRE MIM (5 min)

### [ ] 3.1 - Alterar Cards de Sobre

Procure pela seção `<!-- SOBRE MIM -->` (linha ~130).

Encontrará 4 cards. Edite assim:

```html
<div class="about-card reveal">
    <div class="card-icon">🎖️</div>
    <h3>Seu Título</h3>
    <p>Sua descrição aqui...</p>
</div>
```

**Altere**:
- `card-icon`: Mude o emoji
- `h3`: Título do card
- `p`: Descrição

---

## 🔧 FASE 4: SKILLS (10 min)

### [ ] 4.1 - Atualizar Skills Técnicas

Procure por `<!-- SKILLS -->` (linha ~160).

Para cada card de skill:

```html
<div class="skill-card reveal">
    <div class="skill-header">
        <h3>Sua Área</h3>
        <span class="skill-badge">Avançado</span>
    </div>
    <ul class="skill-list">
        <li><span class="skill-icon">▸</span> Habilidade 1</li>
        <li><span class="skill-icon">▸</span> Habilidade 2</li>
        <li><span class="skill-icon">▸</span> Habilidade 3</li>
    </ul>
</div>
```

**Customize:**
- `h3`: Categoria de skills (ex: "Redes & Infraestrutura")
- `skill-badge`: Nível (Avançado, Intermediário, Iniciante)
- `li`: Liste suas habilidades

### [ ] 4.2 - Porcentagens de Proficiência

Procure por `<!-- Proficiência... -->` (linha ~230).

```html
<div class="proficiency-bar reveal">
    <div class="proficiency-label">
        <span>Sua Habilidade</span>
        <span>85%</span>
    </div>
    <div class="proficiency-track">
        <div class="proficiency-fill" style="width: 85%"></div>
    </div>
</div>
```

**Customize:**
- Descrição da habilidade
- Percentual (1-100%)
- Repita `style="width: XX%"` com o percentual

---

## 💼 FASE 5: EXPERIÊNCIA (10 min)

### [ ] 5.1 - Adicionar Experiências

Procure por `<!-- EXPERIÊNCIA -->` (linha ~280).

Para cada experiência:

```html
<div class="timeline-item reveal">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
        <h3>Seu Cargo</h3>
        <p class="timeline-date">2020 - 2023</p>
        <p class="timeline-desc">
            Descrição detalhada do que você fez...
        </p>
        <div class="timeline-tags">
            <span class="tag">Tag1</span>
            <span class="tag">Tag2</span>
            <span class="tag">Tag3</span>
        </div>
    </div>
</div>
```

**Customize:**
- `h3`: Seu cargo/posição
- `timeline-date`: Período (ex: 2019 - 2021)
- `timeline-desc`: O que fez (2-3 linhas)
- `tag`: Tecnologias/habilidades usadas (SSH, Linux, etc)

---

## 🏆 FASE 6: PROJETOS (15 min)

### [ ] 6.1 - Editar Projetos

Procure por `<!-- PROJETOS -->` (linha ~350).

Para cada projeto:

```html
<div class="projeto-card reveal">
    <div class="projeto-header">
        <h3>Nome do Projeto</h3>
        <span class="projeto-status">Completo</span>
    </div>
    <p class="projeto-desc">
        Descrição breve do projeto (2-3 linhas)...
    </p>
    <div class="projeto-techs">
        <span class="tech-badge">Tech1</span>
        <span class="tech-badge">Tech2</span>
        <span class="tech-badge">Tech3</span>
    </div>
    <div class="projeto-links">
        <a href="#" class="link-btn">
            <span class="link-icon">📄</span> Documentação
        </a>
    </div>
</div>
```

**Customize:**
- `h3`: Nome do projeto
- `projeto-status`: Status (Completo, Em Progresso, Planejado)
- `projeto-desc`: Descrição do projeto
- `tech-badge`: Tecnologias usadas
- `link-btn`: Links para detalhes/GitHub/documentação

---

## 🎨 FASE 7: CORES E VISUAL (5 min)

### [ ] 7.1 - Mudar Tema (Opcional)

Abra `style.css` e procure por `:root` (linha ~7).

**Altere os valores:**

```css
:root {
    --color-accent: #8b5cf6;      /* Cor principal */
    --color-success: #10b981;     /* Cor de sucesso */
    --color-highlight: #9ca3af;   /* Cor de destaque */
}
```

Veja `THEMES.md` para paletas pré-definidas.

---

## ✅ FASE 8: TESTES LOCAIS (5 min)

### [ ] 8.1 - Testar Localmente

```bash
# Abra arquivo diretamente no navegador
# Ou use servidor local:

# Python 3
python -m http.server 8000

# Depois abra:
# http://localhost:8000
```

### [ ] 8.2 - Verificar em Mobile

- Abra DevTools (F12)
- Clique ícone de celular (toggle device)
- Procure por:
  - Responsividade
  - Menu hambúrguer funcionando
  - Texto legível
  - Imagens carregando

### [ ] 8.3 - Testar Links

- [ ] Clique em #Home
- [ ] Clique em #Sobre
- [ ] Clique em #Skills
- [ ] Clique em #Experiência
- [ ] Clique em #Projetos
- [ ] Clique em #Contato
- [ ] Links de rede social (Email, LinkedIn, etc)
- [ ] Menu hambúrguer no mobile

---

## 🚀 FASE 9: SETUP GITHUB (5 min)

### [ ] 9.1 - Criar Repositório

1. Vá para [github.com/new](https://github.com/new)
2. **Repository name**: `seu-username.github.io`
3. Descrição: `Portfolio Profissional - TI`
4. Selecione **Public**
5. Clique **Create Repository**

### [ ] 9.2 - Clone Localmente

```bash
git clone https://github.com/seu-username/seu-username.github.io.git
cd seu-username.github.io
```

### [ ] 9.3 - Adicione Arquivos

Copie para a pasta:
- index.html
- style.css
- script.js
- README.md
- .gitignore
- DEPLOY.md
- THEMES.md
- TROUBLESHOOTING.md

### [ ] 9.4 - Primeiro Commit

```bash
git add .
git commit -m "🎖️ Deploy portfolio profissional v1.0"
git push origin main
```

---

## 🌐 FASE 10: PUBLICAR (5 min)

### [ ] 10.1 - Ativar GitHub Pages

1. Vá para repositório no GitHub
2. **Settings** → **Pages**
3. **Source**: Deploy from a branch
4. **Branch**: main
5. **Folder**: /root
6. Clique **Save**

### [ ] 10.2 - Aguardar Deployment

Aguarde 2-5 minutos e acesse:
```
https://seu-username.github.io
```

### [ ] 10.3 - Compartilhar!

- LinkedIn
- WhatsApp
- Email
- Redes sociais
- Currículum

---

## 📋 CHECKLIST FINAL

- [ ] Todas as fases completadas
- [ ] Site funciona localmente
- [ ] Responsivo em mobile
- [ ] Todos os links funcionam
- [ ] Cores e visual personalizados
- [ ] Repository criado no GitHub
- [ ] Arquivos commitados e pushed
- [ ] GitHub Pages ativado
- [ ] Site está online
- [ ] Compartilhado com a rede!

---

## ⏱️ TEMPO TOTAL: ~50 minutos

| Fase | Tempo | Tarefas |
|------|-------|---------|
| 1. Info Básicas | 5 min | Nome, cargo, tagline |
| 2. Contato | 3 min | Email, LinkedIn, GitHub, WhatsApp |
| 3. Sobre Mim | 5 min | 4 cards personalizados |
| 4. Skills | 10 min | Tecnologias e proficiência |
| 5. Experiência | 10 min | Timeline profissional |
| 6. Projetos | 15 min | Portfolio de trabalhos |
| 7. Cores | 5 min | Customizar tema visual |
| 8. Testes | 5 min | Verificar funcionalidades |
| 9. GitHub Setup | 5 min | Criar repo e commits |
| 10. Publicar | 5 min | Ativar Pages e compartilhar |
| **TOTAL** | **~50 min** | **Portfolio Online!** |

---

## 🎯 Próximos Passos (Opcional)

- [ ] Adicionar fotos em `/assets/images/`
- [ ] Criar seção de certificados
- [ ] Adicionar blog/artigos
- [ ] Integrar formulário de contato
- [ ] Adicionar tema claro/escuro toggle
- [ ] Google Analytics para métricas
- [ ] Domínio customizado (seu-dominio.com)
- [ ] SSL/HTTPS (automático no GitHub Pages)

---

## 💾 Backup

Sempre mantenha cópia local:

```bash
# Criar backup
cp -r seu-username.github.io ~/Backup/Portfolio-2024/

# Ou no GitHub como repositório privado
git clone --mirror https://github.com/seu-username/seu-username.github.io.git
```

---

**Status**: ✅ Pronto para Customização  
**Versão**: 1.0.0  
**Data**: 2024

💪 **Agora é só customizar e colocar online!**
