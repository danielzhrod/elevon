# Elevon Studio — Next.js + Sanity

Portfolio web profesional construido con **Next.js 14** (App Router) y **Sanity CMS**.

## 🚀 Tecnologías
- **Next.js 14** (App Router, SSR)
- **Sanity CMS** (gestión de proyectos sin tocar código)
- **Vercel** (despliegue automático)

## 📦 Instalación local

```bash
npm install
npm run dev
```

## 🔗 Conectar Sanity CMS (para añadir proyectos desde un panel visual)

1. Crea una cuenta gratuita en [sanity.io](https://sanity.io)
2. Crea un nuevo proyecto (elige dataset: `production`)
3. Copia tu **Project ID** del dashboard de Sanity
4. En Vercel, ve a **Settings → Environment Variables** y añade:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=tu_project_id_aqui
NEXT_PUBLIC_SANITY_DATASET=production
```

5. Redespliega en Vercel

Sin estas variables, la web usa automáticamente los datos de `data/projects.json`.

## ➕ Añadir proyectos

**Sin Sanity (editar JSON):**
Edita `data/projects.json` y añade un objeto con la misma estructura.

**Con Sanity (panel visual):**
Accede a tu Sanity Studio, crea un documento de tipo `project` y rellena los campos.

## 📁 Estructura

```
app/           → Páginas Next.js (layout, page, privacidad, aviso-legal)
components/    → Componentes React (Nav, Hero, Servicios, Precios, Trabajos, Contacto...)
data/          → projects.json (datos de proyectos por defecto)
lib/           → sanity.js (cliente + fallback)
sanity/schemas → Esquemas de Sanity
```

## 📧 Formulario
Conectado a Formspree (ID: `xjgzeroy`). Activa reCAPTCHA en tu dashboard de Formspree.
