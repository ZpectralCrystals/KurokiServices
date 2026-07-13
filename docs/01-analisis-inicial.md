# Analisis inicial del proyecto

## Framework identificado

El proyecto usa Astro 6.1.8 con archivos `.astro`, datos en TypeScript y estilos CSS globales. La app es una landing page estatica con renderizado desde componentes y estructuras de datos.

## Estructura del proyecto

- `src/pages/index.astro`: pagina principal.
- `src/components/SiteHeader.astro`: cabecera y navegacion.
- `src/components/SiteFooter.astro`: pie de pagina y contacto.
- `src/components/Icon.astro`: iconos SVG internos.
- `src/data/landing.ts`: contenido editable y datos de secciones.
- `src/layouts/Layout.astro`: metadatos base y layout HTML.
- `src/styles/landing.css`: sistema visual de la landing.
- `public/brand/`: logos y recursos de marca.

## Sistema de estilos

La pagina usa variables CSS globales, tipografias desde Google Fonts, layouts con grid/flex y media queries para responsive. El diseno anterior utilizaba una paleta azul oscuro, crema, dorado y rojo; el nuevo requerimiento prioriza negro/azul negro, blanco, naranja y grises claros.

## Componentes existentes

- `Layout.astro` ya centraliza titulo y descripcion.
- `SiteHeader.astro` renderiza enlaces desde datos.
- `SiteFooter.astro` renderiza enlaces y contacto basico.
- `Icon.astro` permite reutilizar SVG inline sin dependencias externas.

## Secciones actuales

La version encontrada incluia hero, enfoque, proceso, sprints, IA aplicada, colaboradores, panel visual, cierre y footer. Varias secciones tenian contenido provisional y no representaban de forma completa la oferta corporativa de Kuroki.

## Problemas detectados

- Contenido centrado en metodologia e IA, no en servicios reales de Kuroki.
- Marca escrita como "Kuroki Services" en varios lugares.
- CTA de correo con `tu-correo@empresa.com`.
- Footer con datos editables ficticios.
- Sin formulario de contacto completo.
- Navegacion movil sin boton dedicado.
- Logo anterior presente en `public/brand/`.
- SEO limitado a title/description basicos.
- Correo provisional no centralizado.

## Contenido provisional encontrado

- Correo: `tu-correo@empresa.com`.
- Colaboradores y stakeholders genericos.
- Textos de cierre sobre "software e IA" sin detalle comercial.
- Ciudad "Lima, Peru" sin requerimiento de direccion fisica.

## Riesgos antes de modificar

- El nuevo logo entregado tiene mucho lienzo horizontal y elementos blancos; debe usarse sin alteracion para cumplir la indicacion de marca.
- No existe backend confirmado para formulario, por lo que no debe simularse envio exitoso.
- No hay script de linter ni pruebas automatizadas en `package.json`.
- Hay archivos ya modificados y no rastreados en el repo antes de esta intervencion; se trabaja sobre el estado actual sin revertir cambios previos.

## Plan de archivos a editar

- `src/data/landing.ts`: centralizar contenido corporativo, contacto, servicios, tecnologias y navegacion.
- `src/pages/index.astro`: reemplazar secciones por contenido oficial solicitado.
- `src/components/SiteHeader.astro`: usar logo nuevo, navegacion completa y menu movil.
- `src/components/SiteFooter.astro`: usar contacto real, servicios y copyright dinamico.
- `src/components/Icon.astro`: ampliar iconos necesarios.
- `src/layouts/Layout.astro`: agregar metadatos Open Graph basicos y soporte opcional de imagen.
- `src/styles/landing.css`: reconstruir estilos manteniendo arquitectura CSS global.
- `public/brand/kuroki-logo.png`: copiar logo nuevo sin alterarlo.
- `docs/02-informe-implementacion.md`: informe posterior.
- `docs/03-contenido-editable.md`: guia de edicion futura.
