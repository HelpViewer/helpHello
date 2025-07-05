# CORS politiky

Vidíte jen stránku s "⚠ Do you see this message only?"? Pak prohlížeč nenačítá data ze ZIP souboru.  
Prohlížeč blokuje přístup k místním souborům (file://) kvůli CORS politikám. 

Máte 2 možnosti dalšího postupu:
1. V polích **data.zip** a **Help-(language).zip** vyberete potřebné soubory a kliknete na **Odeslat**.
2. Prohlížeč musíte spustit s těmito parametry, aby se CORS omezení vypnula:
- Chrome:
  > příkazový řádek:  
  > chrome.exe --disable-site-isolation-trials --disable-web-security --user-data-dir="C:\temp"

- Edge:
  > příkazový řádek:  
  > msedge --disable-web-security --user-data-dir="C:\temp"
