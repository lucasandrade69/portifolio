# 🔧 Troubleshooting & Suporte

Guia completo para resolver problemas comuns no portfolio.

---

## ❌ Problema: Site não aparece no GitHub Pages

### ✅ Solução

1. **Verifique o repositório**:
   - Deve ser `seu-usuario.github.io` (exatamente assim)
   - Deve ser **público** (não privado)

2. **Ative GitHub Pages**:
   - Vá para **Settings → Pages**
   - Selecione **Deploy from a branch**
   - Escolha: **Branch: main** | **Folder: /root**
   - Clique **Save**

3. **Aguarde 2-5 minutos** para o site ficar online

4. **Verifique a URL**:
   ```
   https://seu-usuario.github.io
   ```

### 🔍 Debug

```bash
# Verifique o status via CLI
curl -I https://seu-usuario.github.io

# Deve retornar 200 OK
```

---

## ❌ Problema: CSS/JS não carrega

### ✅ Solução

Verifique os caminhos em `index.html`:

```html
<!-- CORRETO -->
<link rel="stylesheet" href="style.css">
<script src="script.js"></script>

<!-- ERRADO -->
<link rel="stylesheet" href="/style.css">
<link rel="stylesheet" href="projeto/style.css">
<script src="/script.js"></script>
```

### 🔍 Debug

```bash
# Abra o DevTools (F12)
# Console → verifique erros 404
# Network → veja se os arquivos foram carregados
```

---

## ❌ Problema: Site aparece, mas links não funcionam

### ✅ Solução

Certifique-se que todos os links são **relativos**, não absolutos:

```html
<!-- CORRETO (links relativos) -->
<a href="#skills">Skills</a>
<a href="index.html">Home</a>

<!-- ERRADO (links absolutos) -->
<a href="https://seu-usuario.github.io/skills">Skills</a>
<a href="/index.html">Home</a>
```

### 🔍 Debug

```javascript
// No console do navegador
console.log(window.location.href);
// Deve mostrar: https://seu-usuario.github.io
// Não: https://seu-usuario.github.io/projeto/
```

---

## ❌ Problema: Mudanças não aparecem

### ✅ Solução

**Limpe o cache do navegador:**

```
Windows/Linux: Ctrl + Shift + Delete
Mac: Cmd + Shift + Delete
ou Cmd + Option + E
```

**Ou force um reload:**

```
Windows/Linux: Ctrl + F5
Mac: Cmd + Shift + R
```

**Ou aguarde:**
- GitHub Pages pode levar até 5 minutos para atualizar

### 🔍 Debug

```bash
# Verifique o último commit
git log -1

# Verifique o status do push
git status

# Se não subiu, rode novamente
git add .
git commit -m "Fix: update"
git push origin main
```

---

## ❌ Problema: Styling estranho no mobile

### ✅ Solução

Verifique a meta tag de viewport em `index.html`:

```html
<!-- DEVE ESTAR PRESENTE -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Se não estiver, adicione no `<head>`.

### 🔍 Debug

```javascript
// No console do navegador
console.log('Viewport width:', window.innerWidth);
console.log('Device pixel ratio:', window.devicePixelRatio);
```

---

## ❌ Problema: Menu hambúrguer não fecha

### ✅ Solução

Certifique-se que o `script.js` foi carregado corretamente:

```html
<!-- No final do </body> -->
<script src="script.js"></script>
```

Verifique erros no console (F12).

### 🔍 Debug

```javascript
// No console
document.getElementById('hamburger')
// Deve retornar: <div id="hamburger" ...>

document.getElementById('navMenu')
// Deve retornar: <div id="navMenu" ...>
```

---

## ❌ Problema: Texto muito pequeno/grande no mobile

### ✅ Solução

Adicione em `style.css` na seção `@media`:

```css
@media (max-width: 768px) {
    body {
        font-size: 16px; /* Mínimo para evitar zoom automático */
    }

    .hero-title {
        font-size: 1.5rem;
    }
}
```

---

## ❌ Problema: Performance lenta

### ✅ Solução

1. **Minifique CSS e JS**:
```bash
npm run build
```

2. **Comprima imagens**:
   - Use [TinyPNG](https://tinypng.com/)
   - Máximo 100KB por imagem

3. **Verifique tamanho**:
```bash
# Procure arquivos grandes
find . -type f -size +1M

# Remova arquivos desnecessários
rm arquivo-grande.psd
```

4. **Use lazy loading** para imagens:
```html
<img src="assets/image.jpg" alt="..." loading="lazy">
```

### 🔍 Debug

```bash
# Verifique no DevTools → Lighthouse
# Score mínimo esperado: 90+
```

---

## ❌ Problema: Animações não funcionam

### ✅ Solução

Verifique se CSS tem `@keyframes`:

```bash
# Procure por animações no CSS
grep -n "@keyframes" style.css
```

Se vazio, as animações podem não estar definidas.

### 🔍 Debug

```javascript
// No console
const computed = getComputedStyle(document.querySelector('.reveal'));
console.log(computed.animation);
// Deve show a animação aplicada
```

---

## ❌ Problema: Typing effect não funciona

### ✅ Solução

Verifique elemento em `index.html`:

```html
<!-- DEVE ESTAR PRESENTE -->
<span class="typing-line" id="typingLine">...</span>
```

Verifique se `script.js` tem `initTypingEffect()`:

```javascript
// No console
initTypingEffect()
// Deve iniciar a digitação
```

---

## ❌ Problema: Links de contato não funcionam

### ✅ Solução

Verifique mailto e URLs:

```html
<!-- Email -->
<a href="mailto:seu.email@gmail.com">Email</a>

<!-- WhatsApp -->
<a href="https://wa.me/5585999999999">WhatsApp</a>

<!-- LinkedIn -->
<a href="https://linkedin.com/in/seu-usuario" target="_blank">LinkedIn</a>

<!-- GitHub -->
<a href="https://github.com/seu-usuario" target="_blank">GitHub</a>
```

---

## ❌ Problema: Repositório não aparece no GitHub

### ✅ Solução

```bash
# Verifique se está conectado
git remote -v

# Deve mostrar:
# origin  https://github.com/seu-usuario/seu-usuario.github.io.git (fetch)
# origin  https://github.com/seu-usuario/seu-usuario.github.io.git (push)

# Se estiver vazio, adicione:
git remote add origin https://github.com/seu-usuario/seu-usuario.github.io.git

# Teste a conexão
git fetch origin

# Se pedir senha, use token do GitHub
```

---

## ❌ Problema: Error 404 ao acessar

### ✅ Solução

**Verifique a estrutura:**

```bash
# Dentro do repositório, deve ter:
ls -la

# Deve mostrar:
# index.html
# style.css
# script.js
# README.md
# .gitignore
# DEPLOY.md
```

Se arquivos não aparecem:

```bash
# Verifique status do git
git status

# Adicione todos os arquivos
git add .

# Verifique o que será enviado
git status

# Se tudo está preparado, faça commit
git commit -m "Add all files"
git push origin main
```

---

## ❌ Problema: Erro de autenticação ao fazer push

### ✅ Solução

Se receber erro de autenticação:

```bash
# Use token em vez de senha
# 1. Gere um Personal Access Token no GitHub
# 2. Settings → Developer settings → Personal access tokens
# 3. Selecione escopo "repo"
# 4. Copie o token

# Então ao fazer push:
git push origin main

# Quando pedir password, cole o token
```

**Ou configure SSH:**

```bash
# Gere chave SSH
ssh-keygen -t ed25519 -C "seu.email@gmail.com"

# Adicione chave pública no GitHub
cat ~/.ssh/id_ed25519.pub
# Settings → SSH and GPG keys → New SSH key → Colar

# Teste conexão
ssh -T git@github.com
```

---

## ❌ Problema: Arquivo muito grande para enviar

### ✅ Solução

Se arquivo > 100MB, GitHub recusa:

```bash
# Remova arquivo
git rm --cached arquivo-grande.zip

# Adicione ao .gitignore
echo "arquivo-grande.zip" >> .gitignore

# Faça commit
git commit -m "Remove large file"
git push origin main
```

---

## ✅ Verificação Final

Execute este checklist:

```bash
# 1. Verifique se repository existe
git remote -v

# 2. Verifique branch
git branch -a

# 3. Verifique commits
git log -3

# 4. Verifique arquivos
ls -la

# 5. Teste push
git push origin main

# 6. Abra browser
firefox https://seu-usuario.github.io
# ou
chrome https://seu-usuario.github.io
```

---

## 🆘 Ainda Não Funciona?

### Debug Completo

```bash
# 1. Limpe o cache git
git clean -fd

# 2. Reset para estado limpo
git reset --hard HEAD

# 3. Puxe versão remota
git pull origin main

# 4. Force push se necessário (CUIDADO!)
git push --force origin main
```

### Contatos de Suporte

- **GitHub Docs**: https://docs.github.com/
- **GitHub Support**: https://support.github.com/
- **Stack Overflow**: https://stackoverflow.com/questions/tagged/github-pages
- **GitHub Community**: https://github.community/

### Procure por

- Mensagens de erro no console (F12)
- Verificação de permissões no repositório
- Status do GitHub: https://www.githubstatus.com/

---

## 📝 Relatório de Erro

Se problema persistir, crie um relatório:

```markdown
## Bug Report

**Descrição:**
Descreva o problema...

**Steps to Reproduce:**
1. Faça isto...
2. Depois isto...
3. Erro: ...

**Comportamento Esperado:**
Deveria aparecer...

**Navegador:**
Chrome/Firefox/Safari versão X.X

**Sistema Operacional:**
Windows/Mac/Linux

**Screenshots:**
[Cole screenshots aqui]
```

---

**Última atualização**: 2024  
**Status**: ✅ Pronto para Produção  
**Suporte**: GitHub Issues & Community
