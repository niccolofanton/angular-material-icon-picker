// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	let searchIcon = vscode.commands.registerCommand('angular-material-icon-picker.searchIcon', async () => {
		// prompt user input
		const result = await vscode.window.showInputBox({
			placeHolder: 'What icon do you need?',
		});

		if(result) {
			// serach with query params
			vscode.env.openExternal(vscode.Uri.parse(`https://material.io/resources/icons/?search=${result}&style=baseline`));
		} else {
			// open site without params
			vscode.env.openExternal(vscode.Uri.parse(`https://material.io/resources/icons/?style=baseline`));
		}
	});

	let openIconPicker = vscode.commands.registerCommand('angular-material-icon-picker.openIconPicker', async () => {
		vscode.env.openExternal(vscode.Uri.parse(`https://material.io/resources/icons/?style=baseline`));
	});

	context.subscriptions.push(searchIcon, openIconPicker);
}

// this method is called when your extension is deactivated
export function deactivate() { }
