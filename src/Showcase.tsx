import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { ThemeToggle } from '@/contexts/ThemeContext';

// Atoms
import {
  Button, Input, Text, Heading, Icon, Badge, Checkbox, Radio,
  Switch, Slider, Progress, Spinner, Avatar, Image, Divider
} from '@/atomic/atoms';

// Molecules
import {
  Card, Alert, Modal, Tabs, Toast, Accordion, Breadcrumb,
  Rating, Pagination, SearchBar, Stepper, Timeline, Tooltip
} from '@/atomic/molecules';

// Organisms
import { Header, Hero, Footer } from '@/atomic/organisms';

const Showcase: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('atoms');
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const sections = [
    { id: 'atoms', label: 'Átomos', icon: 'Circle' },
    { id: 'molecules', label: 'Moléculas', icon: 'Layers' },
    { id: 'organisms', label: 'Organismos', icon: 'Box' },
    { id: 'templates', label: 'Templates', icon: 'Layout' },
  ];

  const renderAtoms = () => (
    <div className="space-y-xl">
      <Heading level={2} variant="display">Átomos</Heading>
      <Text variant="large" color="secondary">
        Los componentes más básicos del sistema de diseño
      </Text>

      {/* Buttons */}
      <Card padding="lg">
        <Heading level={3} className="mb-md">Botones</Heading>
        <div className="flex flex-wrap gap-md">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="info">Info</Button>
          <Button variant="light">Light</Button>
          <Button variant="dark">Dark</Button>
          <Button variant="link">Link</Button>
        </div>
        <div className="flex flex-wrap gap-md mt-md">
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
          <Button isLoading>Loading</Button>
          <Button disabled>Disabled</Button>
          <Button isFullWidth>Full Width</Button>
        </div>
      </Card>

      {/* Inputs */}
      <Card padding="lg">
        <Heading level={3} className="mb-md">Inputs</Heading>
        <div className="space-y-md max-w-md">
          <Input placeholder="Input básico" />
          <Input placeholder="Con label" label="Nombre" />
          <Input placeholder="Con error" error helperText="Este campo es requerido" />
          <Input placeholder="Deshabilitado" disabled />
          <Input type="password" placeholder="Password" />
          <Input type="email" placeholder="Email" />
        </div>
      </Card>

      {/* Typography */}
      <Card padding="lg">
        <Heading level={3} className="mb-md">Tipografía</Heading>
        <div className="space-y-md">
          <Heading level={1}>Heading 1</Heading>
          <Heading level={2}>Heading 2</Heading>
          <Heading level={3}>Heading 3</Heading>
          <Heading level={4}>Heading 4</Heading>
          <Text variant="large">Texto grande</Text>
          <Text variant="body">Texto medio</Text>
          <Text variant="small">Texto pequeño</Text>
          <Text color="primary">Texto primario</Text>
          <Text color="secondary">Texto secundario</Text>
          <Text color="muted">Texto muted</Text>
        </div>
      </Card>

      {/* Badges */}
      <Card padding="lg">
        <Heading level={3} className="mb-md">Badges</Heading>
        <div className="flex flex-wrap gap-md">
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="danger">Danger</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="info">Info</Badge>
          <Badge pill>Pill</Badge>
        </div>
      </Card>

      {/* Form Controls */}
      <Card padding="lg">
        <Heading level={3} className="mb-md">Controles de Formulario</Heading>
        <div className="space-y-md">
          <div className="flex items-center gap-md">
            <Checkbox id="check1" />
            <label htmlFor="check1">Checkbox</label>
          </div>
          <div className="flex items-center gap-md">
            <Radio id="radio1" name="radio" value="option1" label="Radio Button" />
          </div>
          <div className="flex items-center gap-md">
            <Switch id="switch1" label="Switch" />
          </div>
          <Slider defaultValue={50} max={100} />
        </div>
      </Card>

      {/* Progress & Spinner */}
      <Card padding="lg">
        <Heading level={3} className="mb-md">Progress & Spinner</Heading>
        <div className="space-y-md">
          <Progress value={30} />
          <Progress value={60} />
          <Progress value={90} />
          <div className="flex gap-md">
            <Spinner size="small" />
            <Spinner size="medium" />
            <Spinner size="large" />
          </div>
        </div>
      </Card>

      {/* Avatar & Image */}
      <Card padding="lg">
        <Heading level={3} className="mb-md">Avatar & Image</Heading>
        <div className="flex gap-md items-center">
          <Avatar size="small" />
          <Avatar size="medium" />
          <Avatar size="large" />
          <Image
            src="https://via.placeholder.com/200"
            alt="Placeholder"
            className="w-20 h-20 rounded-lg"
          />
        </div>
      </Card>

      {/* Icons */}
      <Card padding="lg">
        <Heading level={3} className="mb-md">Iconos</Heading>
        <div className="flex flex-wrap gap-md">
          <Icon name="Home" size="medium" />
          <Icon name="User" size="medium" />
          <Icon name="Settings" size="medium" />
          <Icon name="Search" size="medium" />
          <Icon name="Heart" size="medium" />
          <Icon name="Star" size="medium" />
        </div>
      </Card>

      {/* Divider */}
      <Card padding="lg">
        <Heading level={3} className="mb-md">Divider</Heading>
        <Divider />
        <Text className="my-md">Texto con divider arriba</Text>
        <Divider />
      </Card>
    </div>
  );

  const renderMolecules = () => (
    <div className="space-y-xl">
      <Heading level={2} variant="display">Moléculas</Heading>
      <Text variant="large" color="secondary">
        Componentes compuestos por átomos
      </Text>

      {/* Cards */}
      <Card padding="lg">
        <Heading level={3} className="mb-md">Cards</Heading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          <Card variant="default" padding="md">
            <Text>Card Default</Text>
          </Card>
          <Card variant="elevated" padding="md">
            <Text>Card Elevated</Text>
          </Card>
          <Card variant="outlined" padding="md">
            <Text>Card Outlined</Text>
          </Card>
        </div>
      </Card>

      {/* Alerts */}
      <Card padding="lg">
        <Heading level={3} className="mb-md">Alerts</Heading>
        <div className="space-y-md">
          <Alert variant="success" title="Éxito" message="Operación completada correctamente" />
          <Alert variant="danger" title="Error" message="Algo salió mal" />
          <Alert variant="warning" title="Advertencia" message="Ten cuidado con esto" />
          <Alert variant="info" title="Información" message="Aquí tienes información útil" />
        </div>
      </Card>

      {/* Tabs */}
      <Card padding="lg">
        <Heading level={3} className="mb-md">Tabs</Heading>
        <Tabs
          items={[
            { id: '1', label: 'Tab 1', content: <Text>Contenido Tab 1</Text> },
            { id: '2', label: 'Tab 2', content: <Text>Contenido Tab 2</Text> },
            { id: '3', label: 'Tab 3', content: <Text>Contenido Tab 3</Text> },
          ]}
        />
      </Card>

      {/* Accordion */}
      <Card padding="lg">
        <Heading level={3} className="mb-md">Accordion</Heading>
        <Accordion
          items={[
            { id: '1', title: 'Item 1', content: <Text>Contenido del item 1</Text> },
            { id: '2', title: 'Item 2', content: <Text>Contenido del item 2</Text> },
            { id: '3', title: 'Item 3', content: <Text>Contenido del item 3</Text> },
          ]}
        />
      </Card>

      {/* Breadcrumb */}
      <Card padding="lg">
        <Heading level={3} className="mb-md">Breadcrumb</Heading>
        <Breadcrumb
          items={[
            { id: '1', label: 'Home', href: '/' },
            { id: '2', label: 'Products', href: '/products' },
            { id: '3', label: 'Current', href: '/current' },
          ]}
        />
      </Card>

      {/* Rating */}
      <Card padding="lg">
        <Heading level={3} className="mb-md">Rating</Heading>
        <Rating value={4} max={5} />
      </Card>

      {/* Pagination */}
      <Card padding="lg">
        <Heading level={3} className="mb-md">Pagination</Heading>
        <Pagination
          currentPage={1}
          totalPages={10}
          onPageChange={(page) => console.log('Page:', page)}
        />
      </Card>

      {/* SearchBar */}
      <Card padding="lg">
        <Heading level={3} className="mb-md">SearchBar</Heading>
        <SearchBar
          placeholder="Buscar..."
          onSearch={(query) => console.log('Search:', query)}
        />
      </Card>

      {/* Stepper */}
      <Card padding="lg">
        <Heading level={3} className="mb-md">Stepper</Heading>
        <Stepper
          steps={[
            { id: '1', label: 'Step 1', description: 'Descripción 1', completed: true },
            { id: '2', label: 'Step 2', description: 'Descripción 2' },
            { id: '3', label: 'Step 3', description: 'Descripción 3' },
          ]}
          currentStep={1}
        />
      </Card>

      {/* Timeline */}
      <Card padding="lg">
        <Heading level={3} className="mb-md">Timeline</Heading>
        <Timeline
          items={[
            { id: '1', title: 'Evento 1', description: 'Descripción', timestamp: '2024-01-01', variant: 'success' },
            { id: '2', title: 'Evento 2', description: 'Descripción', timestamp: '2024-01-02', variant: 'info' },
            { id: '3', title: 'Evento 3', description: 'Descripción', timestamp: '2024-01-03', variant: 'warning' },
          ]}
        />
      </Card>

      {/* Tooltip */}
      <Card padding="lg">
        <Heading level={3} className="mb-md">Tooltip</Heading>
        <div className="flex gap-md">
          <Tooltip content="Este es un tooltip">
            <Button>Hover me</Button>
          </Tooltip>
          <Tooltip content="Tooltip arriba" position="top">
            <Button>Top</Button>
          </Tooltip>
          <Tooltip content="Tooltip izquierda" position="left">
            <Button>Left</Button>
          </Tooltip>
        </div>
      </Card>

      {/* Modal */}
      <Card padding="lg">
        <Heading level={3} className="mb-md">Modal</Heading>
        <Button onClick={() => setShowModal(true)}>Abrir Modal</Button>
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          title="Modal de Ejemplo"
        >
          <Text>Este es el contenido del modal</Text>
        </Modal>
      </Card>

      {/* Toast */}
      <Card padding="lg">
        <Heading level={3} className="mb-md">Toast</Heading>
        <Button onClick={() => setShowToast(true)}>Mostrar Toast</Button>
        {showToast && (
          <Toast
            message="Este es un mensaje toast"
            variant="success"
            show={showToast}
            onClose={() => setShowToast(false)}
          />
        )}
      </Card>
    </div>
  );

  const renderOrganisms = () => (
    <div className="space-y-xl">
      <Heading level={2} variant="display">Organismos</Heading>
      <Text variant="large" color="secondary">
        Componentes complejos compuestos por moléculas y átomos
      </Text>

      {/* Header */}
      <Card padding="lg">
        <Heading level={3} className="mb-md">Header</Heading>
        <Header
          logoText="Atomic DS"
          navigation={[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Contact', href: '/contact' },
          ]}
          ctaText="Get Started"
          ctaHref="/signup"
        />
      </Card>

      {/* Hero */}
      <Card padding="lg">
        <Heading level={3} className="mb-md">Hero</Heading>
        <Hero
          title="Bienvenido al Atomic Design System"
          subtitle="Showcase"
          description="Un sistema de diseño completo basado en la metodología Atomic Design"
          primaryButton={{ text: 'Comenzar', href: '/start' }}
          secondaryButton={{ text: 'Saber más', href: '/about' }}
        />
      </Card>

      {/* Footer */}
      <Card padding="lg">
        <Heading level={3} className="mb-md">Footer</Heading>
        <Footer
          logoText="Atomic DS"
          links={[
            { title: 'Enlaces', links: [{ label: 'Home', href: '/' }] },
            { title: 'Legal', links: [{ label: 'Privacy', href: '/privacy' }] },
          ]}
        />
      </Card>
    </div>
  );

  const renderTemplates = () => (
    <div className="space-y-xl">
      <Heading level={2} variant="display">Templates</Heading>
      <Text variant="large" color="secondary">
        Plantillas completas para páginas específicas
      </Text>

      <Card padding="lg">
        <Text>
          Los templates están disponibles pero no se muestran aquí para mantener el showcase simple.
          Puedes importarlos desde <code className="bg-background-secondary px-sm py-xs rounded">@/templates</code>
        </Text>
        <div className="mt-md space-y-sm">
          <Text>• Landing</Text>
          <Text>• Dashboard</Text>
          <Text>• Authentication</Text>
          <Text>• Blog</Text>
          <Text>• Documentation</Text>
          <Text>• Profile</Text>
          <Text>• Settings</Text>
          <Text>• Admin</Text>
        </div>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-background-body">
      {/* Sidebar Navigation */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-background border-r border-border p-lg overflow-y-auto z-10">
        <div className="mb-xl">
          <Heading level={1} className="text-primary mb-xs">Atomic DS</Heading>
          <Text variant="small" color="muted">Design System Showcase</Text>
        </div>

        <nav className="space-y-xs">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={cn(
                'w-full text-left px-md py-sm rounded-md transition-colors flex items-center gap-sm',
                activeSection === section.id
                  ? 'bg-primary text-text-on-primary'
                  : 'hover:bg-background-secondary text-text-primary'
              )}
            >
              <Icon name={section.icon as any} size="small" />
              <span>{section.label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-xl pt-xl border-t border-border">
          <ThemeToggle variant="switch" showLabel />
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-xl">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeSection === 'atoms' && renderAtoms()}
          {activeSection === 'molecules' && renderMolecules()}
          {activeSection === 'organisms' && renderOrganisms()}
          {activeSection === 'templates' && renderTemplates()}
        </motion.div>
      </main>
    </div>
  );
};

export default Showcase;

