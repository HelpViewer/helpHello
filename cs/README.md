# &#127760;HelpViewer

je moderní a rychlý nástroj pro prohlížení dokumentace Markdown a HTML přímo z archivů ZIP. Není potřeba žádná instalace, žádný server ani backend - stačí otevřít soubor **index.html** v prohlížeči. Licence: MIT.

## Jak to funguje

1. Stáhněte si balíček <span id="linkhereI"></span> a rozbalte jej.
2. Spusťte prohlížeč bez [CORS omezení][bypassCORS] nebo budete vidět pouze prázdnou stránku.
3. Otevřete **index.html** v prohlížeči.
4. Nastavte URL parametr **?d=X**, kde **X** bude cesta k ZIP souboru s nápovědou.  
   Pokud toto neuděláte, **./hlp/Help-{vybraný jazyk prohlížeče}.zip** bude určeno jako výchozí.
5. Uvidíte [uživatelskou dokumentaci][userdoc] přímo v HelpViewer, podobně jako teď vidíte tento web. 

<script>
  async function insertDownloadLink() {
    const fname = 'package.zip';
    const path = await getLatestReleaseBundleUri(null, fname);
    const parentO = document.getElementById('linkhereI');
    parentO.innerHTML = `<a href="${path}" alt="${fname}" title= "${path}">${fname}</a>`;
  }

  insertDownloadLink();
</script>

## Použité produkty třetích stran

- [JSZip library][JSZIP]
- [Marked][Marked]
- [Mermaid][Mermaid]

[JSZIP]: http://jszip.org/ "JSZip - práce se ZIP soubory"
[Marked]: https://marked.js.org/ "Marked - vypisování a formátování md souborů do HTML formátu"
[Mermaid]: https://mermaid.js.org/ "Mermaid - vykresluje grafy a schémata podle speciálních textových definic"
[bypassCORS]: corsPolicy.md "Prohlížeč může blokovat přístup k místním souborům (file://) kvůli CORS politikám"
[userdoc]: ?d=hlp-user/Help-__.zip "User quick guide"
