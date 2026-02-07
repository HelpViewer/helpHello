# &#127760;HelpViewer

is a modern, portable and fast tool for viewing Markdown and HTML documentation directly from ZIP archives or from a local directory where they have been unpacked. No server or backend required - just open the **index.html** in your browser. MIT licensed.

## How it works

1. Try **HelpViewer** on [your repository][yourRepo].
2. Download the deployment package from <span id="linkhereI"></span> and unzip it.
3. For correct display, launch the browser without [CORS restrictions][bypassCORS]. Otherwise, you will see a page with message and have to manually select help and data files.  
Alternatively, if you don't want to interfere with CORS, is to download a local HTTP server for [Linux][SLinux] (Go/musl libc) or [Windows][SWindows], create a **www** folder in the server location, extract the **HelpViewer** installation into this folder, and start the server on localhost:8080 in your browser.
1. Open the **index.html** file in your browser.
2. Set the URL parameter **?d=X**, where **X** is the path to your ZIP file or you can define path ending with **/** if you want to read a directory.  
   If you skip this step, **./hlp/Help-{current language}.zip** will be used by default.
3. You will see e.g. the [user documentation][userdoc] directly in HelpViewer, just like you are seeing this web page. 

<script>
  insertDownloadLink('linkhereI');
</script>

## Used 3rd party products

- [JSZip library][JSZIP] (under MIT)
- [Marked][Marked] (under MIT)
- [Mermaid][Mermaid] (under MIT)
- [Prism][Prism] (under MIT)

[JSZIP]: http://jszip.org/ "JSZip JavaScript library - ZIP files manipulation"
[Marked]: https://marked.js.org/ "Marked JavaScript library - md files to HTML renderer"
[Mermaid]: https://mermaid.js.org/ "Mermaid library - renderer for diagrams defined by specific textual definitions"
[bypassCORS]: corsPolicy.md "Browser possibly blocking local file access (file://) due to CORS policy restrictions"
[userdoc]: ?d=hlp-user/Help-__.zip "User quick guide"
[Prism]: https://prismjs.com/ "Prism - syntax highlighting"
[SLinux]: https://github.com/HelpViewer/MiniHTTPServer/releases/download/20260206/main "Local server (Linux)"
[SWindows]: https://github.com/HelpViewer/MiniHTTPServer/releases/download/20260206/main.exe  "Local server (Windows)"
[yourRepo]: :viewRepo.htm "👀 View your repository"
