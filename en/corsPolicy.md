# CORS policy

Do you see blank page only? Then viewer is not reading ZIP content.  
This may be caused by your browser blocking local file access (file://) due to CORS policy restrictions. 

You need to run your browser in mode with bypass CORS policy:
- Firefox:
  > Address bar: 
  about:config
  > 
  > search:
  privacy.file_unique_origin
  > 
  > set to:
  false
  
- Chrome:
  > Run in CLI:
  > chrome.exe --disable-site-isolation-trials --disable-web-security --user-data-dir="C:\temp"
