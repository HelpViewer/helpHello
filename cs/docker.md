# &#128230;Docker obraz

## Stažení
Stáhněte obraz z [GHCR][target] jedním z příkazů:

```
docker pull ghcr.io/helpviewer/helpviewer:latest
podman pull ghcr.io/helpviewer/helpviewer:latest
```

Další oddíly pokračují s Podman.

## Popis v bodech

- Základní obraz : Alpine Linux
- Web server: (busybox) httpd

## Rychlé spuštění
```
podman run -p 8000:80 helpviewer
```

- Ke kontejneru přistoupíte z prohlížeče přes localhost:8000.

## Spuštění s vlastními soubory nápovědy
```
podman run -v ./my/help/files:/www/hlp -p 8000:80 helpviewer
```

- Ke kontejneru přistoupíte z prohlížeče přes localhost:8000.
- hlp/Help-{jazyk prostředí}.zip bude použit jako první soubor automaticky
- Soubor bude načten z ./my/help/files/Help-{jazyk prostředí}.zip na disku fyzického serveru kde Podman běží

[target]: https://github.com/HelpViewer/HelpViewer/pkgs/container/helpviewer "Container images"