# Duelis Ordo Astra — Android

Esta configuração empacota a versão web do jogo num aplicativo Android usando Capacitor 8.

## O que é incluído

- A versão de jogo selecionada em `preview.html`
- Os sete recursos gráficos usados pelo jogo
- Identificador Android: `com.duelisordoastra.cardwars`
- Nome apresentado no Android: `Duelis Ordo Astra`

## Gerar APK

O workflow **Build Android APK** pode ser executado em GitHub → Actions → Build Android APK → Run workflow.

Quando terminar, descarrega o artefacto **Duelis-Ordo-Astra-Android-APK**. Dentro dele está `app-debug.apk`, que pode ser instalado num dispositivo Android para testes.

## Desenvolvimento local (Windows)

Requisitos: Node.js 22 ou superior, Android Studio e Android SDK.

```powershell
npm install
npm run build:web
npx cap add android
npx cap sync android
npx cap open android
```

No Android Studio, seleciona um dispositivo/emulador e executa a aplicação.

## Atualizar o conteúdo do jogo

Depois de alterar `preview.html` ou os recursos gráficos:

```powershell
npm run android:sync
```

A pasta `www` é gerada pelo script; não editar manualmente.
