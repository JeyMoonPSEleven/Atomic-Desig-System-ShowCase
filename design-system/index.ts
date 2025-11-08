// Design System Main Export
export * from './atomic/atoms';
export * from './atomic/molecules';
export * from './atomic/organisms';
export {
    Landing,
    Dashboard as DashboardTemplate,
    Authentication,
    Error as ErrorTemplate,
    Blog,
    Documentation,
    Maintenance,
    Profile,
    Settings,
    Admin
} from './atomic/templates';

// Enhanced Components with Radix UI and Framer Motion
// Nota: La carpeta enhanced no existe actualmente, se puede implementar en el futuro
// export * from './atomic/enhanced';

// Utilities
export * from './utils';

// Hooks
export * from './hooks';

// Styles
import './styles/globals.css';
