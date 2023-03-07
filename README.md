# GradeUp
Enwickelt von Manuel Gut im Modul WEBLAB (HSLU)

## Installationsanleitung
### Node.js
Node.js herunterladen unter https://nodejs.org/en/download/ und installieren (falls noch nicht vorhanden)

### Code von GitHub klonen
```
git clone https://github.com/GutManuel85/WEBLAB.git
```

### Dependencies von package.json über npm installiern
```
cd WEBLAB/app
npm install
```

### Theme in Angular Material ersetzen
Das File hier app/node_modules/@angular/material/prebuilt-themes/indigo-pink.css mit diesem
File app/src/assets/indigo-pink.css.asset ersetzen und die File-Endung ".asset" entfernen,
damit das File nachher wieder gleich heisst wie das Ersetze (also so "indigo-pink.css").

### Frontend starten
```
ng serve
```

### Zweites Terminal
Zweites Terminal öffnen und zu selbem Pfad navigieren wie oben

### Server starten
```
npm run start:server
```

### Applikation im Browser öffenen
Über die folgende URL kann die Applikation im Browser geöffnet werden http://localhost:4200
