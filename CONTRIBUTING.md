# Guía de Contribución - Atomic Design System

## 🚀 Flujo de Trabajo

### 1. Crear una nueva rama
```bash
git checkout -b feat/nombre-del-componente
# o
git checkout -b fix/nombre-del-bug
```

### 2. Hacer cambios y commits
```bash
# Agregar cambios
git add .

# Commit con mensaje descriptivo
git commit -m "feat: Add new Stepper component"
```

### 3. Push de la rama
```bash
git push origin feat/nombre-del-componente
```

### 4. Crear Pull Request en GitHub
- Ve a tu repositorio en GitHub
- Click en "Pull requests" → "New pull request"
- Selecciona tu rama y crea el PR

## 📋 Convenciones de Commits

Usamos [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nueva funcionalidad
- `fix:` Corrección de bugs
- `docs:` Cambios en documentación
- `style:` Cambios de formato (no afectan código)
- `refactor:` Refactorización de código
- `test:` Añadir o modificar tests
- `chore:` Cambios en build, dependencias, etc.
- `perf:` Mejoras de rendimiento

Ejemplos:
```bash
git commit -m "feat: Add Timeline component"
git commit -m "fix: Resolve Radio component RadioGroup error"
git commit -m "docs: Update README with installation steps"
git commit -m "refactor: Simplify Card component logic"
```

## 🏗️ Estructura de Componentes

Al crear un nuevo componente, sigue esta estructura:

```
ComponentName/
├── ComponentName.tsx       # Implementación
├── ComponentName.types.ts  # Tipos TypeScript
├── ComponentName.test.tsx  # Tests (opcional)
└── index.ts                # Exports
```

## ✅ Checklist antes de hacer PR

- [ ] El componente sigue la estructura Atomic Design
- [ ] Usa solo componentes de nivel inferior (átomos para moléculas, etc.)
- [ ] Tiene tipos TypeScript completos
- [ ] Usa tokens CSS del design system
- [ ] Es responsive (mobile-first)
- [ ] Tiene soporte para dark mode
- [ ] Es accesible (a11y)
- [ ] Los tests pasan (si existen)
- [ ] El código sigue las convenciones del proyecto

## 🔍 Revisión de Código

- Los PRs serán revisados antes de mergear
- Asegúrate de responder a los comentarios
- Mantén los commits pequeños y enfocados

