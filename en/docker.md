# &#x1F433;Container images

## Download
You need to download image from [GHCR][target] by one of these commands:

```
docker pull ghcr.io/helpviewer/helpviewer:latest
podman pull ghcr.io/helpviewer/helpviewer:latest
```

Next chapters will continue with Podman.

## Description

- Base : Alpine Linux
- Web service: (busybox) httpd

## Quick run
```
podman run -p 8000:80 helpviewer
```

- You will see new container data from browser on localhost:8000.

## Run with injected help files
```
podman run -v ./my/help/files:/www/hlp -p 8000:80 helpviewer
```

- You will see new container data from browser on localhost:8000.
- hlp/Help-{current viewer language}.zip will be 1st file used by viewer automatically
- This file will be read from ./my/help/files/Help-{current viewer language}.zip on your physical server disc

[target]: https://github.com/HelpViewer/HelpViewer/pkgs/container/helpviewer "Container images"