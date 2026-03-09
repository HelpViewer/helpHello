# &#9881;&#65039;Features

## 📚 HelpViewer

- 🔒 Your data stays with you - the application runs entirely in JavaScript in your browser, and no files are sent to any server.
- 📦 No installation required - just unzip and run locally
- 💾 Lightweight - under 1.38 MiB, 12 files + 2 subfolders (most part of solution compressed)
- 🧩 Robust, easy-to-use plugin system and extensible architecture
- 📥 Easily configurable main functions in a clear tree view
- 🛡️ Protection against XSS attacks (integration of DOMPurify in its default settings; component can be optionally removed from installation)
- ⚖ MIT licensed

## 🟢 Works out of the box with a single Markdown file ...

- &#128187; Multiplatform - works on all major operating systems via web browsers
- 📴 Ready to work in offline mode without any backend or local server
  - 🟡 A browser with CORS policies disabled is recommended. Otherwise, functionality is partially limited and you must manually select the data file and help file at startup.
- 🧭 Simple user interface
- &#128241; Responsive (desktop and other devices supported)
- 🔲 Seamless full-screen expansion of topic content
- &#128278; Bookmarks for chapters supported
- 🔎 Full-text search dictionary for chapter contents
- &#127912; Five native color schemes: color (default), greyscale, white on black, and black on white, sepia
- 🌈 Choose the main style from 8 possible styles
- &#9855; Accessibility rules WCAG 2.1 implemented (accessibilitychecker.org: 89 %, Lighthouse: 96%, [Web Aim][waverep])
- 🖨️ Print friendly version (prefers greyscale)
- 📚 Show all chapters as book
- 📥 Export the current chapter or all chapters to HTML, Markdown, LaTeX, ePub format, 
  - RTF (1.5 - Word 97+, basic format with limitations: no support for images, complex formatting and colors, tables converted to indented text, limited support for Unicode and diacritics (ANSI))
- 📥 Export text to a static website without JavaScript or links to HelpViewer (the internal structure of CSS styles will remain the same)
- &#128172; Tooltips in English, Czech (other languages planned)
- 🌐 Easily switch between different language versions of the viewer interface
- 📽 Presentation mode with chapter and slide navigation using arrow keys
- ✏️ Personal notes on chapter paragraphs

## 🚀 When help project is defined ...

- 📂 Hierarchical view of topics (collapsible topic tree)
- 📇 Linking glossary terms to relevant topics and files
- ⏭ Integrated topic navigation buttons
- 🕘 Easily switch help file version (Internet connection required)
- 🌐 Easily switch between different language versions of the help file

## 🗄️ Additional features when deployed on a server ...

- 🌐 Progressive Web Application (PWA), installable directly to your device for quick access
- ✅ For help files hosted on the same server as HelpViewer, CORS is no problem
- 🟡 For external resources, it depends on the correct CORS header settings on the server side

## 🖥️ Support on the user side ...

- ❔ Plugin for browsers with Chromium core, complementing the What's here? action (using configuration, you can easily [link][RPluginChromeHelpViewer] PWA/web with help)

[RPluginChromeHelpViewer]: https://github.com/HelpViewer/PluginChromeHelpViewer "PluginChromeHelpViewer"
[waverep]: https://wave.webaim.org/report#/https://helpviewer.github.io "WAVE WebAim report"
