# Configuración de Git - Atomic Design System

## ✅ Estado Actual

- ✅ Repositorio Git inicializado
- ✅ Rama principal: `main`
- ✅ Commit inicial realizado
- ✅ `.gitignore` configurado
- ✅ `.gitattributes` configurado

## 🔗 Conectar con un Repositorio Remoto

### Opción 1: GitHub (Recomendado)

1. **Crear un nuevo repositorio en GitHub:**
   - Ve a https://github.com/new
   - Nombre: `atomic-design-system` (o el que prefieras)
   - Descripción: "Biblioteca de componentes React basada en Atomic Design"
   - Visibilidad: Private o Public (según prefieras)
   - **NO** inicialices con README, .gitignore o licencia (ya los tenemos)

2. **Conectar el repositorio local con GitHub:**
   ```bash
   git remote add origin https://github.com/TU_USUARIO/atomic-design-system.git
   git push -u origin main
   ```

### Opción 2: GitLab

1. **Crear un nuevo proyecto en GitLab**
2. **Conectar:**
   ```bash
   git remote add origin https://gitlab.com/TU_USUARIO/atomic-design-system.git
   git push -u origin main
   ```

### Opción 3: Bitbucket

1. **Crear un nuevo repositorio en Bitbucket**
2. **Conectar:**
   ```bash
   git remote add origin https://bitbucket.org/TU_USUARIO/atomic-design-system.git
   git push -u origin main
   ```

## 📋 Comandos Git Útiles

### Ver estado del repositorio
```bash
git status
```

### Agregar cambios
```bash
# Agregar todos los cambios
git add .

# Agregar archivos específicos
git add archivo.tsx
```

### Hacer commit
```bash
git commit -m "Descripción del cambio"
```

### Ver historial
```bash
git log --oneline
```

### Crear una nueva rama
```bash
git checkout -b nombre-de-rama
```

### Cambiar de rama
```bash
git checkout nombre-de-rama
```

### Ver ramas
```bash
git branch
```

### Push al remoto
```bash
git push origin main
```

### Pull del remoto
```bash
git pull origin main
```

## 🔐 Configuración de Usuario Git (si no está configurado)

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu.email@ejemplo.com"
```

## 📝 Convenciones de Commits

Seguimos el formato Conventional Commits:

- `feat:` Nueva funcionalidad
- `fix:` Corrección de bugs
- `docs:` Cambios en documentación
- `style:` Cambios de formato (no afectan código)
- `refactor:` Refactorización de código
- `test:` Añadir o modificar tests
- `chore:` Cambios en build, dependencias, etc.

Ejemplo:
```bash
git commit -m "feat: Add Stepper component"
git commit -m "fix: Resolve Radio component RadioGroup error"
git commit -m "docs: Update README with new components"
```

## 🚀 Próximos Pasos

1. Conecta con tu repositorio remoto (GitHub/GitLab/Bitbucket)
2. Haz push del código inicial
3. Configura GitHub Actions o CI/CD si lo necesitas
4. Invita colaboradores si es necesario

