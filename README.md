# AECOMPU SuperLeague — estructura eSports

```text
eSports/
├── index.html
├── css/
│   ├── style.css
│   ├── nav.css
│   └── responsive.css
├── js/
│   ├── main.js
│   └── grupos.js
├── templates/
│   ├── grupos.html
│   ├── partidos.html
│   ├── bracket.html
│   └── reglas.html
├── assets/
│   └── img/logos/
└── manager/
    ├── index.html
    ├── css/
    │   ├── login.css
    │   ├── manager.css
    │   └── responsive.css
    ├── js/
    │   ├── auth.js
    │   ├── store.js
    │   └── manager.js
    └── html/
        ├── login.html
        └── dashboard.html
```

## Manager
Abre `/manager/`. La contraseña configurada es la solicitada en el proyecto. El JS guarda solo su hash SHA-256.

## Datos
Manager y vista pública comparten la clave `aecompuSuperLeagueStateV1` de `localStorage`. Los resultados actualizan automáticamente PTS, GF, GC, orden y clasificados en el mismo navegador/origen.

## Importante para producción
El acceso del manager es una barrera del lado del cliente, no autenticación segura de servidor. Un usuario con conocimientos técnicos puede inspeccionar o modificar el JavaScript. Para un torneo publicado en Internet y administración desde varios dispositivos, conecta el manager a un backend o servicio como Supabase/Firebase y protege rutas/datos con autenticación real.
