# ◉ Režimy práce

- Místně jako prohlížeč nápovědy:
```
.../index.html?d=adresář/
.../index.html?d=../soubor-nápovedy.zip
.../index.html?d=https://github.com/HelpViewer/helpUser/releases/download/20250615/Help-cs.zip
```
- Místně jako prohlížeč jednotlivého markdown souboru:
```
.../index.html?d=cesta/k/adresáři/&p=soubor.md
.../index.html?d=./&p=cesta/k/adresáři/soubor.md
.../index.html?d=/&p=cesta/k/adresáři/soubor.md
```
- Na serveru podporujícím statické stránky (například tento web)
- V Docker/Podman [kontejneru][containers] v rámci vlastní infrastruktury (systém kontinuální integrace připravuje při každém vydání OCI-kompatibilní kontejnerový obraz)

[containers]: docker.md "Informace o obrazech pro kontejnery"
