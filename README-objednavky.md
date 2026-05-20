# Úprava objednávkového formuláře – Vinařství Devátý

V balíčku jsou soubory:
- `index.html` – upravené texty z WhatsApp flow na formulářovou objednávku
- `app.js` – odesílání objednávky na Google Apps Script + překlady vín CZ/EN/DE
- `google-apps-script-objednavky.js` – skript pro Google Sheets, e-maily a evidenci objednávek

## Co je ještě potřeba udělat

1. Vytvoř Google Sheet.
2. Otevři Rozšíření → Apps Script.
3. Vlož obsah souboru `google-apps-script-objednavky.js`.
4. Deploy → New deployment → Web app.
5. Nastav:
   - Execute as: Me
   - Who has access: Anyone
6. Zkopíruj Web App URL.
7. V `app.js` doplň URL do:

```js
orderApiUrl: 'SEM_VLOŽ_WEB_APP_URL'
```

8. Nahraj `index.html` a `app.js` zpět na GitHub Pages.
