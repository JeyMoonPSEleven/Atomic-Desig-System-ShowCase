# Atomic Design System

Biblioteca de componentes React completa basada en la metodología **Atomic Design**, construida con TypeScript, Tailwind CSS y Framer Motion.

## 🚀 Características

- ✅ **Atomic Design**: Estructura completa siguiendo Átomos → Moléculas → Organismos → Templates → Páginas
- ✅ **TypeScript**: Tipado estricto para mejor DX
- ✅ **Tailwind CSS v4**: Sistema de tokens CSS-first
- ✅ **Framer Motion**: Animaciones fluidas y accesibles
- ✅ **CVA (Class Variance Authority)**: Gestión de variantes type-safe
- ✅ **Dark Mode**: Soporte completo para temas claro/oscuro
- ✅ **Mobile-First**: Diseño responsive desde el inicio
- ✅ **Accesibilidad**: Componentes con soporte a11y

## 📦 Instalación

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev

# Build de producción
pnpm build

# Preview del build
pnpm preview
```

## 🏗️ Estructura del Proyecto

```
design-system/
├── atomic/
│   ├── atoms/          # Componentes básicos (Button, Input, Text, etc.)
│   ├── molecules/      # Componentes compuestos (Card, Form, Alert, etc.)
│   ├── organisms/      # Componentes complejos (Header, Hero, Footer, etc.)
│   └── templates/      # Plantillas de página (Landing, Dashboard, etc.)
├── contexts/           # Contextos React (Theme)
├── hooks/              # Custom hooks
├── styles/             # Tokens CSS y estilos globales
├── utils/              # Utilidades (cn, helpers)
└── types/              # Tipos TypeScript compartidos
```

## 🎨 Uso Básico

```tsx
import { Button, Card, Alert } from '@/design-system';

function App() {
  return (
    <Card padding="lg">
      <Button variant="primary">Click me</Button>
      <Alert variant="success" message="Todo bien!" />
    </Card>
  );
}
```

## 📚 Showcase

Ejecuta `pnpm dev` y visita `http://localhost:3000` para ver el showcase completo con todos los componentes.

## 🛠️ Stack Tecnológico

- **React 18+**
- **TypeScript 5+**
- **Vite 5+**
- **Tailwind CSS v4**
- **Framer Motion**
- **Class Variance Authority**
- **Radix UI** (para algunos componentes)

## 📝 Guía de Desarrollo

Consulta `Guia Atomic Design.txt` para la guía completa de desarrollo y mejores prácticas.

## 🤝 Contribuir

Este es un proyecto interno. Para contribuir, sigue las guías de Atomic Design y asegúrate de:

1. Usar solo átomos para crear moléculas
2. Usar moléculas/átomos para crear organismos
3. Mantener consistencia con los tokens CSS
4. Añadir tipos TypeScript completos
5. Incluir pruebas unitarias cuando sea posible

## 📄 Licencia

Uso interno del proyecto.

## 🔗 Repositorio

- **GitHub**: [https://github.com/JeyMoonPSEleven/Atomic-Desig-System-ShowCase](https://github.com/JeyMoonPSEleven/Atomic-Desig-System-ShowCase)

## 📚 Documentación Adicional

- [Guía de Git](./GIT_SETUP.md) - Configuración y comandos Git
- [Guía de Contribución](./CONTRIBUTING.md) - Cómo contribuir al proyecto
- [Guía Atomic Design](./Guia%20Atomic%20Design.txt) - Metodología y mejores prácticas

