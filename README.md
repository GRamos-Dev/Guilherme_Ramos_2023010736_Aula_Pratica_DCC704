# Trabalho 3: Semântica e Acessibilidade Web

Repositório do Trabalho 3 da disciplina de Desenvolvimento Web (DCC 704) — Ciência da Computação, UFRR.

O projeto compara duas versões de um portfólio pessoal: uma com falhas estruturais intencionais e outra refatorada com HTML5 semântico, acessibilidade (WCAG) e boas práticas de performance, para auditoria no Google Lighthouse.

## Estrutura

* **Versão-1/** (`index.html`, `style.css`, `script.js`) — código com falhas intencionais: `<div>` no lugar de tags semânticas, sem `meta charset`/`viewport`/`description`, sem `lang`, layout de largura fixa (quebra no mobile), baixo contraste de texto, imagem sem `alt`/dimensões, botão feito com `<div onclick>` (inacessível via teclado).
* **Versão-2/** (`versao2.html`, `style2.css`, `script2.js`) — refatorada com landmarks HTML5 (`<header>`, `<main>`, `<article>`, `<section>`, `<nav>`, `<footer>`), meta tags completas, hierarquia única de `<h1>`, imagens com `alt`/`width`/`height`, layout responsivo em CSS Grid, contraste ajustado ao WCAG AA, e `<button>` com `aria-expanded`/`aria-controls` para o elemento interativo.
* **img/** — contém `perfil-placeholder.svg`, um placeholder temporário. **Troque pela sua foto real antes de publicar** (veja abaixo).

## Antes de publicar: troque a foto

1. Coloque sua foto em `img/perfil.webp` (ou `.jpg`/`.png`).
2. Em `Versão-1/index.html` e `Versão-2/versao2.html`, troque `src="../img/perfil-placeholder.svg"` por `src="../img/perfil.webp"`.
3. Se possível, converta para WebP e redimensione para perto do tamanho de exibição (ex.: 600×800px) — isso ajuda bastante a métrica de Performance.

## Como publicar no GitHub Pages

1. Crie o repositório **Guilherme_Ramos_2023010736_Aula_Pratica_DCC704** no GitHub e suba as pastas `Versão-1/`, `Versão-2/`, `img/` e este `README.md`.
2. Em **Settings → Pages**, selecione a branch `main`, pasta `/ (root)`, e salve.
3. Os links de acesso ficarão em:
   * Versão 1 (com falhas): `https://SEU-USUARIO.github.io/Guilherme_Ramos_2023010736_Aula_Pratica_DCC704/Versão-1/index.html`
   * Versão 2 (refatorada): `https://SEU-USUARIO.github.io/Guilherme_Ramos_2023010736_Aula_Pratica_DCC704/Versão-2/versao2.html`

   Troque `SEU-USUARIO` pelo seu nome de usuário no GitHub.

## Como rodar o Lighthouse e preencher o relatório

Não é possível eu gerar os números reais do Lighthouse aqui — eles precisam vir de uma auditoria de verdade nas suas páginas já publicadas. Passo a passo:

1. Publique as duas versões no GitHub Pages (acima).
2. Acesse [PageSpeed Insights](https://pagespeed.web.dev/) e cole a URL de cada versão (ou abra o site no Chrome, `F12` → aba **Lighthouse** → modo *Mobile* → **Analyze page load**).
3. Anote as 4 notas de cada versão: Performance, Acessibilidade, Boas Práticas, SEO.
4. No relatório, para cada categoria (Acessibilidade, Performance, SEO), explique **o que mudou entre as versões** e **por que isso afetou a nota** — os comentários no código (`<!-- ... -->`) e o próprio README já indicam as mudanças feitas; você só precisa registrar os números reais que a auditoria retornar.

Se quiser, depois de rodar o Lighthouse me manda os números que eu te ajudo a redigir o relatório técnico final (docx ou PDF) já com essas evidências.

## Autor

**Guilherme Antônio José Caetano Ramos Matos**
Discente de Ciência da Computação — UFRR
