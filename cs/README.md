# &#127760;HelpViewer

je moderní a rychlý nástroj pro prohlížení dokumentace Markdown a HTML přímo z archivů ZIP nebo ze složky kde bude rozbalen. Není potřeba žádná instalace, žádný server ani backend - stačí otevřít soubor **index.html** v prohlížeči. Licence: MIT.

## Jak to funguje

1. Zkuste si **HelpViewer** na [svém repozitáři][yourRepo].
2. Stáhněte si balíček <span id="linkhereI"></span> a rozbalte jej.
3. Pro správné zobrazení spusťte prohlížeč bez [CORS omezení][bypassCORS]. Jinak se zobrazí stránka se zprávou a budete muset ručně vybrat soubory s nápovědou a daty.  
Další možností, pokud nechcete zasahovat do CORS, je stažení lokálního HTTP serveru pro [Linux][SLinux] (statické sestavení pod Go/musl libc) nebo [Windows][SWindows], založení složky **www** v umístění serveru, rozbalení instalace **HelpViewer** do této složky a spuštění serveru localhost:8080 v prohlížeči.
4. Otevřete **index.html** v prohlížeči.
5. Nastavte URL parametr **?d=X**, kde **X** bude cesta k ZIP souboru s nápovědou nebo bude končit **/**, pokud má být čten obsah adresáře.  
   Pokud toto neuděláte, **./hlp/Help-{vybraný jazyk prohlížeče}.zip** bude určeno jako výchozí.
6. Uvidíte [uživatelskou dokumentaci][userdoc] přímo v HelpViewer, podobně jako teď vidíte tento web. 

<script>
  insertDownloadLink('linkhereI');
</script>

## Použité produkty třetích stran

- [JSZip library][JSZIP] (používáno podle MIT)
- [Marked][Marked] (používáno podle MIT)
- [Mermaid][Mermaid] (používáno podle MIT)
- [Prism][Prism] (používáno podle MIT)

[JSZIP]: http://jszip.org/ "JSZip - práce se ZIP soubory"
[Marked]: https://marked.js.org/ "Marked - vypisování a formátování md souborů do HTML formátu"
[Mermaid]: https://mermaid.js.org/ "Mermaid - vykresluje grafy a schémata podle speciálních textových definic"
[bypassCORS]: corsPolicy.md "Prohlížeč může blokovat přístup k místním souborům (file://) kvůli CORS politikám"
[userdoc]: ?d=hlp-user/Help-__.zip "Rychlá příručka pro uživatele"
[Prism]: https://prismjs.com/ "Prism - zvýraznění syntaxe výpisů kódu"
[SLinux]: https://github.com/HelpViewer/MiniHTTPServer/releases/download/20260206/main "Místní server (Linux)"
[SWindows]: https://github.com/HelpViewer/MiniHTTPServer/releases/download/20260206/main.exe  "Místní server (Windows)"
[yourRepo]: :viewRepo.htm "👀 Zobraz repozitář"
