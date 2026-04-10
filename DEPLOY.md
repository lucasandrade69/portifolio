# Guia Rápido de Deployment no GitHub Pages

## 1️⃣ SETUP INICIAL - 5 minutos

### Passo 1: Crie um repositório no GitHub

```
Nome do repositório: seu-usuario.github.io
(Substitua 'seu-usuario' pelo seu username)
```

### Passo 2: Clone localmente

```bash
git clone https://github.com/seu-usuario/seu-usuario.github.io.git
cd seu-usuario.github.io
```

### Passo 3: Adicione os arquivos

```bash
# Copie para a pasta:
# - index.html
# - style.css
# - script.js
# - README.md
# - .gitignore
```

### Passo 4: Primeiro commit

```bash
git add .
git commit -m "🎖️ Portfólio profissional online"
git push origin main
```

### Passo 5: Ative GitHub Pages

1. Vá para **Settings** do repositório
2. Procure por **Pages** (sidebar esquerda)
3. Em "Build and deployment", selecione:
   - **Source:** Deploy from a branch
   - **Branch:** main / root
4. Clique em **Save**

### 🎉 Pronto! Seu site está online em:
```
https://seu-usuario.github.io
```

---

## 2️⃣ PERSONALIZAÇÕES RÁPIDAS

### Mudar Nome e Cargo

Abra `index.html` e procure por:

```html
<h1 class="hero-title">
    <span class="highlight">SEU NOME</span>
    <br>
    Seu Cargo
</h1>
```

### Adicionar Foto de Perfil

```html
<div class="card-icon">🎖️</div>
<!-- Ou substitua pelo emoji/ícone que preferir -->
```

### Mudar Cores

Abra `style.css` e altere em `:root`:

```css
--color-accent: #8b5cf6;  /* Cor de destaque */
--color-success: #10b981; /* Verde de sucesso */
```

### Atualizar Links de Contato

Procure por `<!-- CONTATO -->` e atualize:
- Email
- LinkedIn
- GitHub
- WhatsApp

---

## 3️⃣ FLUXO DE ATUALIZAÇÃO

Sempre que fizer mudanças:

```bash
git add .
git commit -m "Descrição da mudança"
git push origin main
```

**Aguarde 1-2 minutos** para o GitHub Pages atualizar.

---

## 4️⃣ TROUBLESHOOTING

### Site não atualiza?

```bash
# Limpe o cache do navegador
Ctrl + Shift + Delete (ou Cmd + Shift + Delete no Mac)
```

### Arquivo não aparece?

Verifique os caminhos relativos em `index.html`:

```html
<!-- ✓ Correto -->
<link rel="stylesheet" href="style.css">
<script src="script.js"></script>

<!-- ✗ Errado -->
<link rel="stylesheet" href="/style.css">
```

### GitHub Pages não ativa?

1. Vá para **Settings → Pages**
2. Selecione **Deploy from a branch**
3. Escolha **main** branch
4. Selecione **/root** folder
5. Clique **Save**

### 404 Error?

Certifique-se que:
- ✓ O arquivo `index.html` está na **raiz** do repositório
- ✓ O repositório é **público**
- ✓ Esperou **2-5 minutos** após o push

---

## 5️⃣ DICAS PRO

### Adicionar domínio customizado

**Settings → Pages → Custom domain**

Exemplo: `seu-portfolio.com` (requer DNS configurado)

### Usar Actions para deploy automático

Crie `.github/workflows/deploy.yml`:

```yaml
name: Build and Deploy

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to GitHub Pages
        run: echo "Deployed!"
```

### Monitorar visitas

Use Google Analytics:

```html
<!-- Adicione no <head> do index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 6️⃣ ESTRUTURA FINAL

```
seu-usuario.github.io/
├── index.html          # Página principal
├── style.css           # Estilos
├── script.js           # Interatividades
├── README.md           # Documentação
├── .gitignore          # Arquivos ignorados
├── DEPLOY.md           # Este arquivo
└── assets/
    ├── images/         # Imagens (opcional)
    └── icons/          # Ícones SVG (opcional)
```

---

## 7️⃣ CHECKLIST FINAL

- [ ] Personalizou nome e cargo
- [ ] Adicionou email e links de contato
- [ ] Preencheu skills e experiências
- [ ] Adicionou projetos
- [ ] Testou no navegador
- [ ] Fez push para GitHub
- [ ] Ativou GitHub Pages
- [ ] Acessou o link `seu-usuario.github.io`
- [ ] Compartilhou com sua rede! 🎉

---

## 📞 Precisa de Ajuda?

- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [GitHub Pages Suporte](https://support.github.com/contact)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/github-pages)

---

**Status:** ✅ Pronto para Produção  
**Última atualização:** 2024  
**Versão:** 1.0.0
