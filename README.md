# MorarFora — test two live immigration-planning tools

![MorarFora live product case study](./site/social-card.svg)

**A guided public case study for two live, zero-login planning tools built inside a private content product.**

[Try the live tools](https://caio-felice-cunha.github.io/morarfora-case-study/) · [Read the case study](#case-study) · [Run this guide locally](#run-locally)

## What you can test

1. Use the live [CRS calculator](https://blogmorarfora.com/calcular-crs/) and change one factor to see how the score reacts.
2. Use [Compare cities](https://blogmorarfora.com/comparar-cidades/) to make a trade-off explicit rather than browse generic rankings.

Neither path requires an account. The public case-study repository contains no
copy of the private Astro application, unpublished content, operations data,
analytics exports, tokens, or the TCF study corpus.

## Case study

MorarFora turns high-anxiety research into smaller decisions. The product
combines editorial guidance with tools that expose inputs, preserve context,
and make trade-offs visible. This repository is the public inspection layer:
it gives visitors a test script and links them to the real product.

## Run locally

```bash
npm install
npm run serve
```

Open `http://localhost:4175`. `npm run test:all` exercises the guide and checks
the two external routes without treating a transient server failure as a code
regression.

## Limitations

- This repository is a case study, not the product source.
- Calculator output is educational and is not immigration advice.
- TCF simulations are intentionally outside this first public release.

## License

The case-study code is MIT licensed. MorarFora brand and authored content remain
© 2026 Caio Di Felice Cunha.
