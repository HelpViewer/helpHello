# &#x1F433;Obrazy pro kontejnery

## Stažení
Stáhněte obraz z [GHCR][target] jedním z příkazů:

```bash
docker pull ghcr.io/helpviewer/helpviewer:latest
podman pull ghcr.io/helpviewer/helpviewer:latest
```

Další oddíly pokračují s Podman.

## Popis v bodech

- Základní obraz : scratch (musl, busybox převzat z alpine)
- Web server: (busybox) httpd

## Rychlé spuštění
```bash
podman run --name helpviewer1 -p 8000:80 helpviewer
```

- Ke kontejneru přistoupíte z prohlížeče přes localhost:8000.

## Spuštění s vlastními soubory nápovědy
```bash
podman run --name helpviewer1 -v "./my/help/files:/www/hlp:ro" -p 8000:80 helpviewer
```

- Ke kontejneru přistoupíte z prohlížeče přes localhost:8000.
- hlp/Help-{jazyk prostředí}.zip bude použit jako první soubor automaticky
- Soubor bude načten z ./my/help/files/Help-{jazyk prostředí}.zip na disku fyzického serveru kde Podman běží

## Spuštění s určením přídělu prostředků
```bash
podman run --name helpviewer1 -v "./my/help/files:/www/hlp:ro" -p 8000:80 --read-only --memory=192m --cpus=0.5 --restart=always helpviewer
```

[target]: https://github.com/HelpViewer/HelpViewer/pkgs/container/helpviewer "Container images"