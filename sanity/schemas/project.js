export const projectSchema = {
  name: 'project',
  title: 'Proyecto',
  type: 'document',
  fields: [
    { name: 'num',         title: 'Número (ej: 01)',  type: 'string' },
    { name: 'title',       title: 'Título',            type: 'string' },
    { name: 'tag',         title: 'Categoría',         type: 'string' },
    { name: 'description', title: 'Descripción corta', type: 'text' },
    { name: 'url',         title: 'URL del proyecto',  type: 'url' },
    { name: 'image',       title: 'Imagen preview',    type: 'image', options: { hotspot: true } },
    { name: 'imageAlt',    title: 'Alt de la imagen',  type: 'string' },
    { name: 'tags',        title: 'Tags',              type: 'array', of: [{ type: 'string' }] },
    { name: 'order',       title: 'Orden',             type: 'number' },
  ],
  preview: {
    select: { title: 'title', subtitle: 'tag', media: 'image' },
  },
};
