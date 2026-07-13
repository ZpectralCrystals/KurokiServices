# Contenido editable

## Telefonos

Editar `companyData.phones` en `src/data/landing.ts`.

## Correo

Editar `companyData.email` en `src/data/landing.ts`. Cambiar `emailConfirmed` a `true` cuando el correo sea definitivo.

## Redes sociales

Agregar URLs reales en `companyData.socialLinks` dentro de `src/data/landing.ts`. No se muestran enlaces sociales mientras no existan URLs confirmadas.

## Logo

El logo usado por la pagina esta en `public/brand/kuroki-logo.png`. Para reemplazarlo, conserva el mismo nombre de archivo o cambia `companyData.logo` en `src/data/landing.ts`.

## Servicios

Editar el arreglo `services` en `src/data/landing.ts`.

## Soluciones

Editar el arreglo `specializedSolutions` en `src/data/landing.ts`.

## Textos principales

Editar `companyData`, `aboutPoints`, `missionVision`, `differentiators`, `aiUseCases` y `workProcess` en `src/data/landing.ts`.

## Colores

Editar variables CSS al inicio de `src/styles/landing.css`.

Variables principales:

- `--dark`
- `--white`
- `--orange`
- `--orange-dark`
- `--bg`
- `--bg-muted`
- `--ink`
- `--muted`

## WhatsApp

Editar `companyData.phones.commercial` y `whatsappMessage` en `src/data/landing.ts`. El enlace `whatsappUrl` se genera automaticamente.

## Formulario

El formulario esta en `src/pages/index.astro`. Actualmente valida campos y prepara un correo con los datos ingresados. Para conectarlo a un backend:

- Cambiar `action` al endpoint real.
- Cambiar `method` a `post`.
- Reemplazar o quitar el script `data-contact-form` que genera el `mailto:`.
- Mantener validaciones y labels accesibles.
