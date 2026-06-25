<div align="center">

<img src="https://raw.githubusercontent.com/niccolofanton/angular-material-icon-picker/main/images/icon-big.png" alt="Angular material icon picker" width="120" />

# Angular material icon picker

Search Material Design / Angular Material icons on **material.io** without leaving VS Code — run a command instead of typing the URL by hand.

[![VS Code Marketplace](https://img.shields.io/visual-studio-marketplace/v/niccolofanton.angular-material-icon-picker?label=marketplace)](https://marketplace.visualstudio.com/items?itemName=niccolofanton.angular-material-icon-picker)
[![Installs](https://img.shields.io/visual-studio-marketplace/i/niccolofanton.angular-material-icon-picker)](https://marketplace.visualstudio.com/items?itemName=niccolofanton.angular-material-icon-picker)
[![GitHub stars](https://img.shields.io/github/stars/niccolofanton/angular-material-icon-picker?style=social)](https://github.com/niccolofanton/angular-material-icon-picker/stargazers)

**[Install from the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=niccolofanton.angular-material-icon-picker)**

</div>

## What it does

When you are building an Angular Material (or any Material Design) UI, you often need to look up the exact name of an icon. This Visual Studio Code extension lets you do that from the Command Palette: type the icon you are looking for and it opens the official [material.io icon library](https://material.io/resources/icons/) in your default browser, pre-filtered to your search query.

You still land in a browser tab — but instead of opening one yourself and typing the URL, you just run a command and start picking.

## Install

**From the editor**

1. Open the Extensions view (`Ctrl+Shift+X` / `Cmd+Shift+X`).
2. Search for **Angular material icon picker**.
3. Click **Install**.

Or from Quick Open (`Ctrl+P` / `Cmd+P`):

```
ext install niccolofanton.angular-material-icon-picker
```

## Usage

Open the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`) and run one of the contributed commands:

| Command | Description |
| --- | --- |
| **Search icon on material.io** | Prompts for an icon name, then opens material.io filtered to your query. Leave it empty to open the full library. |
| **Open material.io** | Opens the material.io icon library in your browser. |

## Features

- Search the Material icon library by name without leaving VS Code.
- One command to jump straight to the full material.io icon picker.
- Opens results in your default browser using the `baseline` icon style.
- Zero configuration — install and go.

## Tech stack

- **TypeScript** + the **VS Code Extension API**
- Bundled with **webpack**
- Linted with **ESLint**, tested with **Mocha** via `vscode-test`

## Build from source

This project uses **npm** (a `package-lock.json` is committed).

```bash
# install dependencies
npm install

# compile in watch mode while developing
npm run watch

# produce a production bundle
npm run package
```

Press `F5` in VS Code to launch an Extension Development Host and try your changes live. A pre-built `angular-material-icon-picker-0.0.2.vsix` is also included in the repository and can be installed via **Extensions: Install from VSIX…**.

## Author

Created by [niccolofanton](https://github.com/niccolofanton).
