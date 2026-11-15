# Última Fronteira — Batalha de Cartas

Jogo de batalha de cartas em HTML, com cenários, heróis e unidades ilustradas.

## Executar localmente

1. Abra `index.html` num navegador moderno.
2. Para testar na rede local, instale Node.js e execute `iniciar-no-telemovel.bat`.
3. O servidor local usa a porta `8000` por padrão.

## Publicação

O `index.html` está na raiz para servir como página inicial em alojamentos estáticos, incluindo GitHub Pages.

## Estrutura

- `index.html` — página inicial para publicação.
- `campo-de-batalha.html` — ficheiro HTML original.
- `*.png` — imagens utilizadas pelo jogo.
- `servidor-local.js` — servidor HTTP local opcional.
- `iniciar-no-telemovel.bat` — atalho de arranque no Windows.

## Notas

O jogo carrega a fonte Barlow a partir do Google Fonts quando existe ligação à Internet. Sem essa ligação, o navegador utiliza fontes alternativas.
