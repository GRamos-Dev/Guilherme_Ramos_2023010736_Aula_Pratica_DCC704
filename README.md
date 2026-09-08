# Trabalho 3: Semântica e Acessibilidade Web

Repositório do Trabalho 3 da disciplina de Desenvolvimento Web (DCC 704) — Ciência da Computação, UFRR.

O projeto compara duas versões de um portfólio pessoal: uma com falhas estruturais intencionais e outra refatorada com HTML5 semântico, acessibilidade (WCAG) e boas práticas de performance, auditadas com o Google Lighthouse (via PageSpeed Insights).

## Estrutura

* **Versão-1/** (`index.html`, `style.css`, `script.js`) — código com falhas intencionais: `<div>` no lugar de tags semânticas, sem `meta charset`/`viewport`/`description`, sem `lang`, layout de largura fixa (quebra no mobile), baixo contraste de texto, imagem sem `alt`/dimensões, botão feito com `<div onclick>` (inacessível via teclado).
* **Versão-2/** (`versao2.html`, `style2.css`, `script2.js`) — refatorada com landmarks HTML5 (`<header>`, `<main>`, `<article>`, `<section>`, `<nav>`, `<footer>`), meta tags completas, hierarquia única de `<h1>`, imagens com `alt`/`width`/`height`, layout responsivo em CSS Grid, contraste ajustado ao WCAG AA, e `<button>` com `aria-expanded`/`aria-controls` para o elemento interativo.
* **img/** — contém `perfil-placeholder.webp`, a foto de perfil usada nas duas versões.
* **Relatorio_Trabalho3_Guilherme_Matos.docx** — relatório técnico com a comparação de notas do Lighthouse e a justificativa de cada categoria (Acessibilidade, Performance, SEO).

## Acessibilidade (Versão 2)

* Botão interativo implementado com `<button>` nativo, com `aria-expanded` e `aria-controls`, navegável por teclado.
* Todas as imagens possuem `alt` descritivo.
* `<html lang="pt-BR">` declarado.
* Cores de texto ajustadas para razão de contraste mínima de 4,5:1 (WCAG 2.1 AA). Os números dos cards de projeto (`.project-list .index`) usam a variável `--accent-text` (`#ff8567`), com contraste de ~5,2:1 sobre o fundo `--bg-panel-alt`.
* Landmarks semânticos (`header`, `nav`, `main`, `article`, `section`, `footer`) em substituição às `<div>` genéricas da Versão 1.

## Performance (Versão 2)

* Imagem de perfil com `width`, `height`, `loading="eager"` e `fetchpriority="high"`, evitando Cumulative Layout Shift.
* Layout responsivo em CSS Grid, sem a largura fixa da Versão 1.
* Fontes do Google carregadas via `<link rel="preconnect">` + `<link rel="stylesheet">` no `<head>`, evitando o bloqueio de renderização causado por `@import` no CSS.

## Foto de perfil

O arquivo `img/perfil-placeholder.webp` contém a foto real do autor. O conteúdo do arquivo é JPEG, salvo com extensão `.webp`.

## Como publicar no GitHub Pages

1. Crie o repositório **Guilherme_Ramos_2023010736_Aula_Pratica_DCC704** no GitHub e suba as pastas `Versão-1/`, `Versão-2/`, `img/` e este `README.md`.
2. Em **Settings → Pages**, selecione a branch `main`, pasta `/ (root)`, e salve.
3. Os links de acesso ficarão em:
   * Versão 1 (com falhas): `https://GRamos-Dev.github.io/Guilherme_Ramos_2023010736_Aula_Pratica_DCC704/Versão-1/index.html`
   * Versão 2 (refatorada): `https://GRamos-Dev.github.io/Guilherme_Ramos_2023010736_Aula_Pratica_DCC704/Versão-2/versao2.html`

## Resultado da auditoria (Google Lighthouse / PageSpeed Insights)

| Categoria | Versão 1 (mobile) | Versão 2 (mobile) | Versão 1 (desktop) | Versão 2 (desktop) |
|---|---|---|---|---|
| Performance | 85 | 92 | 86 | 99 |
| Acessibilidade | 53 | 95 | 53 | 95 |
| Boas Práticas | 96 | 100 | 100 | 100 |
| SEO | 82 | 100 | 82 | 100 |

O auditor também registra um item de cache (`cache-insight`, ~76 KiB de economia estimada), relacionado a cabeçalhos de cache de longa duração — depende da configuração do servidor (GitHub Pages), não do HTML/CSS/JS da página.

## Relatório técnico

O relatório técnico completo (`Relatorio_Trabalho3_Guilherme_Matos.docx`) contém introdução, detalhamento da refatoração, tabela de auditoria e justificativa de cada categoria.

## Autor

**Guilherme Antônio José Caetano Ramos Matos**
Discente de Ciência da Computação — UFRR
