# &#x1F433;Container images

## Download
You need to download image from [GHCR][target] by one of these commands:

```bash
docker pull ghcr.io/helpviewer/helpviewer:latest
podman pull ghcr.io/helpviewer/helpviewer:latest
```

Next chapters will continue with Podman.

## Description

- Base : scratch (musl, busybox taken from alpine)
- Web service: (busybox) httpd

## Quick run
```bash
podman run --name helpviewer1 -p 8000:80 helpviewer
```

- You will see new container data from browser on localhost:8000.

## Run with injected help files
```bash
podman run --name helpviewer1 -v "./my/help/files:/www/hlp:ro" -p 8000:80 helpviewer
```

- You will see new container data from browser on localhost:8000.
- hlp/Help-{current viewer language}.zip will be 1st file used by viewer automatically
- This file will be read from ./my/help/files/Help-{current viewer language}.zip on your physical server disc

## Run with resource quota
```bash
podman run --name helpviewer1 -v "./my/help/files:/www/hlp:ro" -p 8000:80 --read-only --memory=192m --cpus=0.5 --restart=always helpviewer
```

[target]: https://github.com/HelpViewer/HelpViewer/pkgs/container/helpviewer "Container images"