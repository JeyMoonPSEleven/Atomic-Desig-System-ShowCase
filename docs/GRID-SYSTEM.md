# Sistema de Grid Mejorado - Muller-Brockmann

## 📐 Visión General

Este documento describe el sistema de grid mejorado del Atomic Design System, basado en los principios de consistencia y proporcionalidad de **Josef Muller-Brockmann**.

## 🎯 Estructura del Grid

El sistema utiliza una estructura responsiva de columnas:

- **Mobile (4 columnas)**: Para pantallas pequeñas (< 768px)
- **Tablet (8 columnas)**: Para pantallas medianas (≥ 768px)
- **Desktop (12 columnas)**: Para pantallas grandes (≥ 992px)
- **Wide (16 columnas)**: Para pantallas extra grandes (≥ 1200px)

## 📦 Tokens de Grid

### Archivo de Tokens
Los tokens están definidos en:
- **JSON**: `design-system/tokens/grid-tokens.json`
- **CSS Variables**: `design-system/styles/variables.css`

### Variables CSS Principales

```css
/* Columnas del grid */
--grid-columns-mobile: 4;
--grid-columns-tablet: 8;
--grid-columns-desktop: 12;
--grid-columns-wide: 16;

/* Gap del grid (basado en tokens de spacing) */
--grid-gap-base: var(--spacing-md);
--grid-gap-sm: var(--spacing-sm);
--grid-gap-md: var(--spacing-md);
--grid-gap-lg: var(--spacing-lg);
--grid-gap-xl: var(--spacing-xl);

/* Container: max-width y padding por breakpoint */
--container-max-width-mobile: 100%;
--container-max-width-tablet: 45rem; /* 720px */
--container-max-width-desktop: 75rem; /* 1200px */
--container-max-width-wide: 87.5rem; /* 1400px */

--container-padding-x-mobile: var(--spacing-md);
--container-padding-x-tablet: var(--spacing-lg);
--container-padding-x-desktop: var(--spacing-xl);
--container-padding-x-wide: var(--spacing-xl);
```

## 🎨 Uso en Tailwind CSS

### Clases de Grid Template Columns

```tsx
// Grid responsivo básico
<div className="grid grid-cols-mobile md:grid-cols-tablet lg:grid-cols-desktop">
  {/* Contenido */}
</div>
```

### Clases de Gap

```tsx
// Gap del grid usando tokens semánticos
<div className="grid gap-grid-base">     {/* var(--spacing-md) */}
<div className="grid gap-grid-sm">       {/* var(--spacing-sm) */}
<div className="grid gap-grid-md">       {/* var(--spacing-md) */}
<div className="grid gap-grid-lg">       {/* var(--spacing-lg) */}
<div className="grid gap-grid-xl">       {/* var(--spacing-xl) */}
```

### Container

La clase `.container` ahora usa los tokens del grid system:

```tsx
<div className="container">
  {/* Contenido con padding y max-width responsivos */}
</div>
```

## 📐 Ejemplos de Uso

### Ejemplo 1: Grid Básico

```tsx
<div className="grid grid-cols-mobile md:grid-cols-tablet lg:grid-cols-desktop gap-grid-lg">
  <div className="col-span-4 md:col-span-4 lg:col-span-4">
    {/* Ocupa 1 columna en todos los breakpoints */}
  </div>
  <div className="col-span-4 md:col-span-4 lg:col-span-4">
    {/* Ocupa 1 columna en todos los breakpoints */}
  </div>
  <div className="col-span-4 md:col-span-4 lg:col-span-4">
    {/* Ocupa 1 columna en todos los breakpoints */}
  </div>
</div>
```

### Ejemplo 2: Grid con Elementos Destacados

```tsx
<div className="grid grid-cols-mobile md:grid-cols-tablet lg:grid-cols-desktop gap-grid-lg">
  {/* Elemento destacado: ocupa 2/3 del ancho en desktop */}
  <div className="col-span-4 md:col-span-8 lg:col-span-8">
    {/* Contenido destacado */}
  </div>
  
  {/* Elemento secundario: ocupa 1/3 del ancho en desktop */}
  <div className="col-span-4 md:col-span-4 lg:col-span-4">
    {/* Contenido secundario */}
  </div>
</div>
```

### Ejemplo 3: Grid con Elemento Full Width

```tsx
<div className="grid grid-cols-mobile md:grid-cols-tablet lg:grid-cols-desktop gap-grid-lg">
  {/* Elemento que ocupa todo el ancho */}
  <div className="col-span-4 md:col-span-8 lg:col-span-12">
    {/* Contenido full width */}
  </div>
</div>
```

### Ejemplo 4: Dashboard con Widgets

```tsx
<div className="grid grid-cols-mobile md:grid-cols-tablet lg:grid-cols-desktop gap-grid-lg">
  {/* Widget pequeño: 1/3 en desktop */}
  <div className="col-span-4 md:col-span-4 lg:col-span-4">
    {/* Widget pequeño */}
  </div>
  
  {/* Widget mediano: 1/3 en desktop */}
  <div className="col-span-4 md:col-span-4 lg:col-span-4">
    {/* Widget mediano */}
  </div>
  
  {/* Widget grande: 2/3 en desktop */}
  <div className="col-span-4 md:col-span-8 lg:col-span-8">
    {/* Widget grande */}
  </div>
</div>
```

## 🔧 Configuración en Tailwind

El sistema está configurado en `tailwind.config.ts`:

```typescript
gridTemplateColumns: {
  mobile: 'repeat(4, minmax(0, 1fr))',
  tablet: 'repeat(8, minmax(0, 1fr))',
  desktop: 'repeat(12, minmax(0, 1fr))',
  wide: 'repeat(16, minmax(0, 1fr))',
},
gap: {
  'grid-base': 'var(--grid-gap-base)',
  'grid-sm': 'var(--grid-gap-sm)',
  'grid-md': 'var(--grid-gap-md)',
  'grid-lg': 'var(--grid-gap-lg)',
  'grid-xl': 'var(--grid-gap-xl)',
},
container: {
  center: true,
  padding: {
    DEFAULT: 'var(--container-padding-x-mobile)',
    md: 'var(--container-padding-x-tablet)',
    lg: 'var(--container-padding-x-desktop)',
    xl: 'var(--container-padding-x-desktop)',
    '2xl': 'var(--container-padding-x-wide)',
  },
}
```

## 📊 Tabla de Referencia: Col-span por Breakpoint

| Clase | Mobile (4 cols) | Tablet (8 cols) | Desktop (12 cols) |
|-------|----------------|------------------|-------------------|
| `col-span-4` | 100% (full) | 50% (half) | 33.33% (1/3) |
| `col-span-8` | 200% (overflow) | 100% (full) | 66.66% (2/3) |
| `col-span-12` | 300% (overflow) | 150% (overflow) | 100% (full) |

**Nota**: En mobile, usar `col-span-4` para full width. En tablet, usar `col-span-8` para full width. En desktop, usar `col-span-12` para full width.

## 🎯 Mejores Prácticas

1. **Siempre usa el sistema de grid semántico**: Prefiere `grid-cols-mobile md:grid-cols-tablet lg:grid-cols-desktop` sobre valores numéricos directos.

2. **Usa tokens de gap**: Prefiere `gap-grid-lg` sobre valores hardcodeados como `gap-6`.

3. **Container para contenido principal**: Usa la clase `.container` para envolver el contenido principal de la página.

4. **Col-span responsivo**: Define `col-span` para cada breakpoint cuando sea necesario:
   ```tsx
   <div className="col-span-4 md:col-span-4 lg:col-span-8">
   ```

5. **Consistencia**: Mantén la consistencia en el uso del grid system en todo el proyecto.

## 🔄 Migración de Componentes Existentes

Para migrar componentes existentes al nuevo sistema:

1. Reemplaza `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` por `grid-cols-mobile md:grid-cols-tablet lg:grid-cols-desktop`
2. Actualiza `col-span` para usar valores basados en el nuevo sistema (4, 8, 12)
3. Reemplaza `gap-6` por `gap-grid-lg` (o el token apropiado)
4. Usa `.container` en lugar de clases personalizadas para contenedores principales

## 📚 Referencias

- [Josef Muller-Brockmann - Grid Systems](https://en.wikipedia.org/wiki/Josef_M%C3%BCller-Brockmann)
- [Tailwind CSS Grid](https://tailwindcss.com/docs/grid-template-columns)
- [Design Tokens](https://design-tokens.github.io/community-group/format/)

