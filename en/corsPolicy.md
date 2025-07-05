# CORS policy

Do you see the page with “⚠ Do you see this message only?”? Then the browser is not loading the data from the ZIP help file.  
This may be caused by your browser blocking local file access (file://) due to CORS policy restrictions. 

You have 2 options on how to proceed:
1. In the **data.zip** and **Help-(language).zip** fields, select the necessary files and click **Submit**.
2. You need to run your browser in mode with bypass CORS policy:
- Chrome:
  > Run in CLI:  
  > chrome.exe --disable-site-isolation-trials --disable-web-security --user-data-dir="C:\temp"

- Edge:
  > Run in CLI:  
  > msedge --disable-web-security --user-data-dir="C:\temp"
