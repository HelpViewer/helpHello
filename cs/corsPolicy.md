# CORS politiky

Vidíte jen prázdnou stránku jako u about:blank? Pak prohlížeč nenačítá data ze ZIP souboru.  
Prohlížeč blokuje přístup k místním souborům (file://) kvůli CORS politikám. 

Prohlížeč musíte spustit s těmito parametry, aby se CORS omezení vypnula:
- Firefox:
  > Adresní řádek: 
  about:config
  > 
  > hledat:
  privacy.file_unique_origin
  > 
  > nastavit na:
  false
  
- Chrome:
  > příkazový řádek:
  > chrome.exe --disable-site-isolation-trials --disable-web-security --user-data-dir="C:\temp"
