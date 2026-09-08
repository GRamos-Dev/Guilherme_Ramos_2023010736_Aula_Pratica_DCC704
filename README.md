# Trabalho 3: Semântica e Acessibilidade Web

Repositório destinado ao Trabalho 3 da disciplina de Desenvolvimento Web do curso de Ciência da Computação da Universidade Federal de Roraima (UFRR).

O projeto consiste na análise comparativa e refatoração de um blog/portfólio pessoal, focado em elevar as métricas de Acessibilidade, Performance, SEO e Boas Práticas no Google Lighthouse.

## Links de Acesso Online (GitHub Pages)

* **Versão 1 (Com falhas intencionais):**
  https://gramos-dev.github.io/Guilherme_Ramos_2023010736_Aula_Pratica_DCC704/Versão-1/index.html
* **Versão 2 (Refatorada e acessível):**
  https://gramos-dev.github.io/Guilherme_Ramos_2023010736_Aula_Pratica_DCC704/Versão-2/versao2.html

## Estrutura do Repositório

O projeto foi dividido em duas versões para evidenciar o contraste entre um código mal estruturado e um código construído sob os padrões da web moderna:

* **Versão 1 (`index.html`, `style.css` e `script.js`):** Código contendo falhas intencionais, como uso excessivo de `<div>` (semântica inadequada), ausência de `meta charset`/`viewport`/`description`, layout de largura fixa (quebrado em dispositivos móveis), baixo contraste de cores (falha WCAG), imagem sem `alt`/dimensões e elemento interativo feito com `<div onclick>` (inacessível via teclado).
* **Versão 2 (`versao2.html`, `style2.css` e `script2.js`):** Código refatorado aplicando landmarks do HTML5 (`<header>`, `<main>`, `<article>`, `<section>`, `<nav>`, `<footer>`), meta tags completas, hierarquia única de `<h1>`, CSS Grid responsivo, variáveis de cor com contraste ajustado ao WCAG AA, otimização de imagem (`width`/`height`, `loading`, `fetchpriority`) e atributos nativos ARIA (`aria-expanded`, `aria-controls`) no elemento interativo.
* **`img/`:** Diretório contendo a foto de perfil (`perfil-placeholder.webp`) usada nas duas versões.
* **`Relatorio_Trabalho3_Guilherme_Matos.docx`:** Relatório técnico detalhando a refatoração e a auditoria comparativa no Google Lighthouse.

## Tecnologias e Ferramentas

* **HTML5:** Estruturação semântica e atributos de acessibilidade.
* **CSS3:** Variáveis customizadas, CSS Grid Layout e tipografia responsiva.
* **JavaScript:** Manipulação do DOM e controle de estados ARIA para leitores de tela.
* **Google Lighthouse:** Auditoria de métricas (Core Web Vitals, Acessibilidade, SEO e Boas Práticas).

## Autor

**Guilherme Antônio José Caetano Ramos Matos**
Discente de Ciência da Computação (DCC).
