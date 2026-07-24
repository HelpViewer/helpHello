# ◉ Working modes

- Locally as a help viewer:
```text
.../index.html?d=directory/
.../index.html?d=../help-file.zip
.../index.html?d=https://github.com/HelpViewer/helpUser/releases/download/20250615/Help-en.zip
```
- Locally as a single markdown file viewer:
```text
.../index.html?d=path/to/directory/&p=file.md
.../index.html?d=./&p=path/to/directory/file.md
.../index.html?d=/&p=path/to/directory/file.md
```
- Static web hosting (e.g. this web)
- In Docker/Podman [container][containers] in your own infrastructure (CI/CD pipeline prepares OCI-compatible container image in every release)

[containers]: docker.md "Container images information"
