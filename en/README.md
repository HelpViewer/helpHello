# &#127760;HelpViewer

is a modern, portable and fast tool for viewing Markdown and HTML documentation directly from ZIP archives. No server or backend required - just open the **index.html** in your browser.

## How it works

1. Download the deployment package from <span id="linkhereI"></span> and unzip it.
2. Start your browser with [CORS restrictions][bypassCORS] disabled, or you will only see a blank page.
3. Open the **index.html** file in your browser.
4. Set the URL parameter **?d=X**, where **X** is the path to your ZIP file.  
   If you skip this step, **./hlp/Help-{current language}.zip** will be used by default.
5. You will see the documentation directly in HelpViewer, just like you are seeing this web page. 

<script>
  async function insertDownloadLink() {
    const fname = 'package.zip';
    const path = await getLatestReleaseBundleUri(null, fname);
    const parentO = document.getElementById('linkhereI');
    parentO.innerHTML = `<a href="${path}" alt="${fname}" title= "${path}">${fname}</a>`;
  }

  insertDownloadLink();
</script>

[bypassCORS]: corsPolicy.md "Browser possibly blocking local file access (file://) due to CORS policy restrictions"