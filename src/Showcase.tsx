import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

// Atoms
import {
  Button, Input, Text, Heading, Icon, Badge, Checkbox, Radio,
  Switch, Slider, Progress, Spinner, Avatar, Image, Divider, Link, Logo, Select,
  ColorPalette, ColorSwatch, SpacingDemo, TypographyDemo, SectionDivider,
  MediaGallery, Video, Dropdown, FileUpload, ThemeToggle
} from '@/atomic/atoms';

// Molecules
import {
  Card, Alert, Modal, Tabs, Toast, Accordion, Breadcrumb,
  Rating, Pagination, SearchBar, Stepper, Timeline, Tooltip, Form
} from '@/atomic/molecules';

// Organisms
import {
  Header, Hero, Footer, ContactForm, Newsletter, Pricing,
  Testimonials, FAQ, Statistics, Navigation, Sidebar, Dashboard
} from '@/atomic/organisms';

// Templates
import {
  Landing, Dashboard as DashboardTemplate, Authentication, Error as ErrorTemplate,
  Blog, Documentation, Maintenance, Profile, Settings, Admin, LayoutBase
} from '@/atomic/templates';

const Showcase: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [activeVersion, setActiveVersion] = useState('V2');

  // Scroll spy para resaltar sección activa
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['atomos', 'moleculas', 'organismos', 'plantillas'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sidebarItems = [
    {
      category: 'Átomos',
      items: [
        { id: 'interactivos', label: 'Interactivos', icon: 'MousePointer2', href: '#interactivos' },
        { id: 'visuales', label: 'Visuales', icon: 'Eye', href: '#visuales' },
      ],
    },
    {
      category: 'Moléculas',
      items: [
        { id: 'componentes', label: 'Componentes', icon: 'Layers', href: '#componentes' },
      ],
    },
    {
      category: 'Organismos',
      items: [
        { id: 'secciones-complejas', label: 'Secciones', icon: 'LayoutGrid', href: '#secciones-complejas' },
      ],
    },
    {
      category: 'Plantillas',
      items: [
        { id: 'templates', label: 'Layouts', icon: 'FileCode', href: '#templates' },
      ],
    },
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-gradient-to-br from-background via-background-secondary/20 to-background text-foreground dark:from-background dark:via-background-secondary/40 dark:to-background-secondary/20">
      {/* Header Sticky */}
      <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-border/20 bg-background/80 backdrop-blur-xl shadow-sm px-4 sm:px-6 lg:px-8 h-16 dark:bg-background-secondary/80 dark:border-border/30">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3 text-foreground">
            <div className="text-primary">
              <Icon name="Box" size="large" />
            </div>
            <Heading level={2} className="text-xl font-bold">Atomic Design System</Heading>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link href="#atomos" className="text-sm font-medium text-foreground-secondary hover:text-primary transition-colors">
            Átomos
          </Link>
          <Link href="#moleculas" className="text-sm font-medium text-foreground-secondary hover:text-primary transition-colors">
            Moléculas
          </Link>
          <Link href="#organismos" className="text-sm font-medium text-foreground-secondary hover:text-primary transition-colors">
            Organismos
          </Link>
          <Link href="#plantillas" className="text-sm font-medium text-foreground-secondary hover:text-primary transition-colors">
            Plantillas
          </Link>
        </div>
        <div className="flex flex-1 justify-end items-center gap-4">
          <div className="flex items-center gap-1 rounded-lg bg-background-secondary/80 backdrop-blur-sm p-1 text-sm border border-border/30 shadow-sm">
            <button
              onClick={() => setActiveVersion('V1')}
              className={cn(
                'px-3 py-1 rounded-md transition-all',
                activeVersion === 'V1'
                  ? 'bg-background text-primary font-semibold shadow-md'
                  : 'text-foreground-secondary hover:text-foreground'
              )}
            >
              V1
            </button>
            <button
              onClick={() => setActiveVersion('V2')}
              className={cn(
                'px-3 py-1 rounded-md transition-all',
                activeVersion === 'V2'
                  ? 'bg-background text-primary font-semibold shadow-md'
                  : 'text-foreground-secondary hover:text-foreground'
              )}
            >
              V2
            </button>
            <button
              onClick={() => setActiveVersion('V3')}
              className={cn(
                'px-3 py-1 rounded-md transition-all',
                activeVersion === 'V3'
                  ? 'bg-background text-primary font-semibold shadow-md'
                  : 'text-foreground-secondary hover:text-foreground'
              )}
            >
              V3
            </button>
          </div>
          <Avatar size="medium" />
          <ThemeToggle />
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar Sticky */}
        <aside className="sticky top-16 h-[calc(100vh-4rem)] w-64 flex-shrink-0 border-r border-border/20 bg-background/70 backdrop-blur-sm p-6 hidden lg:block overflow-y-auto dark:bg-background-secondary/50 dark:border-border/30">
          <div className="flex flex-col gap-6">
            {sidebarItems.map((category) => (
              <nav key={category.category} className="flex flex-col gap-2">
                <Heading
                  level={3}
                  className="px-3 text-xs font-semibold uppercase text-foreground-muted tracking-wider"
                >
                  {category.category}
                </Heading>
                {category.items.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={cn(
                      'flex items-center gap-3 px-3 py-2 rounded-md hover:bg-background-secondary text-sm font-medium transition-colors',
                      activeSection === item.id
                        ? 'bg-background-secondary text-primary'
                        : 'text-foreground-secondary'
                    )}
                  >
                    <Icon name={item.icon as any} size="medium" />
                    {item.label}
                  </Link>
                ))}
              </nav>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 sm:p-8 lg:p-12">
          <div className="max-w-7xl mx-auto space-y-16">
            {/* Hero Section */}
            <section className="text-center py-20 md:py-32 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-secondary/20 rounded-3xl -z-10 dark:from-primary/10 dark:via-transparent dark:to-secondary/10" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(19,127,236,0.1),transparent_50%)] -z-10" />
              <div className="flex flex-col items-center gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Heading level={1} className="text-5xl md:text-7xl font-black text-foreground tracking-tighter bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                    Atomic Design System
                  </Heading>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <Text className="max-w-2xl text-lg md:text-xl text-foreground-secondary">
                    A scalable and consistent design language for building exceptional products.
                  </Text>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <Button variant="primary" size="large" className="flex items-center justify-center gap-2 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all">
                    <span>Get Started</span>
                    <Icon name="ArrowRight" size="small" />
                  </Button>
                </motion.div>
              </div>
            </section>

            {/* Átomos Section */}
            <section className="scroll-mt-24" id="atomos">
              <div className="mb-10">
                <Heading level={2} className="text-4xl font-bold text-foreground tracking-tight mb-3">
                  ÁTOMOS
              </Heading>
                <Text className="text-lg text-foreground-secondary">Componentes fundamentales del sistema</Text>
              </div>
              <div className="flex flex-col gap-10">
                {/* Interactivos */}
                <div className="scroll-mt-24" id="interactivos">
                  <Heading level={3} className="text-2xl font-semibold text-foreground mb-6">
                    Interactivos
                  </Heading>
                  <div className="grid grid-cols-1 gap-8">
                    {/* Buttons */}
                    <Card padding="lg" variant="elevated" className="bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                      <Heading level={4} className="text-lg font-semibold text-foreground mb-6">
                        Buttons
                      </Heading>
                      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
                        <Button variant="primary">Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="outline">Tertiary</Button>
                        <Button variant="link">Text-only</Button>
                        <Button variant="outline" size="medium" className="w-10 h-10 p-0">
                          <Icon name="Heart" size="small" />
                        </Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="primary" disabled>Disabled</Button>
                        <Button variant="primary" isLoading>
                          Loading
                        </Button>
                      </div>
                    </Card>

                    {/* Inputs & Selection */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                      <Card padding="lg" variant="elevated" className="bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                        <Heading level={4} className="text-lg font-semibold text-foreground mb-6">
                          Inputs
                        </Heading>
                        <div className="space-y-4">
                          <Input placeholder="Text" />
                          <Input type="password" placeholder="Password" />
                          <Input type="search" placeholder="Search" />
                        </div>
                      </Card>

                      <Card padding="lg" variant="elevated" className="bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                        <Heading level={4} className="text-lg font-semibold text-foreground mb-4">
                          Selection
                        </Heading>
                        <div className="space-y-4">
                          <div className="flex items-center gap-4">
                            <Checkbox id="check1" />
                            <label htmlFor="check1" className="text-sm">Checkbox</label>
                            <Radio id="radio1" name="radio-group" value="option1" label="Radio" />
                          </div>
                          <Select
                            options={[
                              { value: '1', label: 'Single Select' },
                              { value: '2', label: 'Option 2' },
                            ]}
                            placeholder="Single Select"
                          />
                        </div>
                      </Card>

                      <Card padding="lg" variant="elevated" className="bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                        <Heading level={4} className="text-lg font-semibold text-foreground mb-4">
                          Slider & Switch
                        </Heading>
                        <div className="space-y-6 pt-2">
                          <Slider defaultValue={50} max={100} />
                          <div className="flex items-center justify-between">
                            <Text className="text-sm">Switch</Text>
                            <Switch id="switch1" />
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>

                {/* Visuales */}
                <div className="scroll-mt-24" id="visuales">
                  <Heading level={3} className="text-2xl font-semibold text-foreground mb-6">
                    Visuales
                  </Heading>
                  <div className="grid grid-cols-1 gap-6">
                    {/* Color Swatches */}
                    <Card padding="lg" variant="elevated" className="lg:col-span-3 bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                      <Heading level={4} className="text-lg font-semibold text-foreground mb-6">
                        Color Swatches
                      </Heading>
                      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-6">
                        <motion.div 
                          className="flex flex-col items-center gap-3 group cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="size-20 rounded-full bg-primary shadow-lg shadow-primary/30 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all" />
                          <Text className="font-semibold text-sm">Primary</Text>
                          <Text className="text-xs text-foreground-muted font-mono">#137FEC</Text>
                        </motion.div>
                        <motion.div 
                          className="flex flex-col items-center gap-3 group cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="size-20 rounded-full bg-secondary shadow-lg shadow-secondary/30 ring-2 ring-secondary/20 group-hover:ring-secondary/40 transition-all" />
                          <Text className="font-semibold text-sm">Secondary</Text>
                          <Text className="text-xs text-foreground-muted font-mono">#D63384</Text>
                        </motion.div>
                        <motion.div 
                          className="flex flex-col items-center gap-3 group cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="size-20 rounded-full bg-success shadow-lg shadow-success/30 ring-2 ring-success/20 group-hover:ring-success/40 transition-all" />
                          <Text className="font-semibold text-sm">Success</Text>
                          <Text className="text-xs text-foreground-muted font-mono">#4CAF50</Text>
                        </motion.div>
                        <motion.div 
                          className="flex flex-col items-center gap-3 group cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="size-20 rounded-full bg-gray-500 shadow-lg shadow-gray-500/30 ring-2 ring-gray-500/20 group-hover:ring-gray-500/40 transition-all" />
                          <Text className="font-semibold text-sm">Neutral</Text>
                          <Text className="text-xs text-foreground-muted font-mono">#6B7280</Text>
                        </motion.div>
                        <motion.div 
                          className="flex flex-col items-center gap-3 group cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="size-20 rounded-full bg-success shadow-lg shadow-success/30 ring-2 ring-success/20 group-hover:ring-success/40 transition-all" />
                          <Text className="font-semibold text-sm">Success</Text>
                          <Text className="text-xs text-foreground-muted font-mono">#34D399</Text>
                        </motion.div>
                        <motion.div 
                          className="flex flex-col items-center gap-3 group cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="size-20 rounded-full bg-danger shadow-lg shadow-danger/30 ring-2 ring-danger/20 group-hover:ring-danger/40 transition-all" />
                          <Text className="font-semibold text-sm">Error</Text>
                          <Text className="text-xs text-foreground-muted font-mono">#F87171</Text>
                        </motion.div>
                        <motion.div 
                          className="flex flex-col items-center gap-3 group cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="size-20 rounded-full bg-warning shadow-lg shadow-warning/30 ring-2 ring-warning/20 group-hover:ring-warning/40 transition-all" />
                          <Text className="font-semibold text-sm">Warning</Text>
                          <Text className="text-xs text-foreground-muted font-mono">#FBBF24</Text>
                        </motion.div>
                        <motion.div 
                          className="flex flex-col items-center gap-3 group cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="size-20 rounded-full bg-info shadow-lg shadow-info/30 ring-2 ring-info/20 group-hover:ring-info/40 transition-all" />
                          <Text className="font-semibold text-sm">Info</Text>
                          <Text className="text-xs text-foreground-muted font-mono">#00BCD4</Text>
                        </motion.div>
                      </div>
                    </Card>

                    {/* Typography & Icons */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <Card padding="lg" variant="elevated" className="md:col-span-2 bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                        <Heading level={4} className="text-lg font-semibold text-foreground mb-4">
                          Typography
                        </Heading>
                        <div className="space-y-4">
                          <Heading level={1}>Heading 1</Heading>
                          <Heading level={2}>Heading 2</Heading>
                          <Heading level={3}>Heading 3</Heading>
                          <Heading level={4}>Heading 4</Heading>
                          <Text>Paragraph text for the body. The quick brown fox jumps over the lazy dog.</Text>
                          <Link href="#" className="text-primary hover:underline">
                            This is a link
                          </Link>
                        </div>
                      </Card>

                      <Card padding="lg" variant="elevated" className="bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                        <Heading level={4} className="text-lg font-semibold text-foreground mb-4">
                          Icons
                        </Heading>
                        <div className="grid grid-cols-4 gap-4 text-center text-foreground-secondary">
                          {['Home', 'Search', 'Settings', 'Heart', 'User', 'Trash2', 'PlusCircle', 'Share2'].map((iconName) => (
                            <div key={iconName} className="flex flex-col items-center gap-1">
                              <Icon name={iconName as any} size="large" />
                              <Text className="text-xs">{iconName}</Text>
                            </div>
                          ))}
                        </div>
                      </Card>
                    </div>

                    {/* Additional Atoms Components */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card padding="lg" variant="elevated" className="bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                        <Heading level={4} className="text-lg font-semibold text-foreground mb-4">
                          Dropdown
                        </Heading>
                        <Dropdown
                          options={[
                            { value: 'option1', label: 'Option 1' },
                            { value: 'option2', label: 'Option 2' },
                            { value: 'option3', label: 'Option 3' },
                          ]}
                          placeholder="Select an option"
                        />
                      </Card>

                      <Card padding="lg" variant="elevated" className="bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                        <Heading level={4} className="text-lg font-semibold text-foreground mb-4">
                          File Upload
                        </Heading>
                        <FileUpload
                          accept="image/*"
                          onChange={(files) => console.log('File selected:', files)}
                        />
                      </Card>

                      <Card padding="lg" variant="elevated" className="bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                        <Heading level={4} className="text-lg font-semibold text-foreground mb-4">
                          Color Palette
                        </Heading>
                        <ColorPalette
                          colors={[
                            { name: 'Primary', value: '#137FEC', category: 'Brand' },
                            { name: 'Secondary', value: '#D63384', category: 'Brand' },
                            { name: 'Success', value: '#198754', category: 'Feedback' },
                            { name: 'Error', value: '#DC3545', category: 'Feedback' },
                            { name: 'Warning', value: '#FFC107', category: 'Feedback' },
                          ]}
                        />
                      </Card>

                      {/* TypographyDemo tiene errores internos - comentado temporalmente */}
                      {/* <Card padding="lg" variant="elevated" className="bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                        <Heading level={4} className="text-lg font-semibold text-foreground mb-4">
                          Typography Demo
                        </Heading>
                        <TypographyDemo />
                      </Card> */}

                      <Card padding="lg" variant="elevated" className="bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                        <Heading level={4} className="text-lg font-semibold text-foreground mb-4">
                          Spacing Demo
                        </Heading>
                        <SpacingDemo />
                      </Card>

                      <Card padding="lg" variant="elevated" className="bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                        <Heading level={4} className="text-lg font-semibold text-foreground mb-4">
                          Section Divider
                        </Heading>
                        <SectionDivider />
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Moléculas Section */}
            <section className="scroll-mt-24" id="moleculas">
              <div className="mb-10">
                <Heading level={2} className="text-4xl font-bold text-foreground tracking-tight mb-3">
                  MOLÉCULAS
              </Heading>
                <Text className="text-lg text-foreground-secondary">Componentes compuestos del sistema</Text>
              </div>
              <div className="scroll-mt-24" id="componentes">
                <div className="grid grid-cols-mobile md:grid-cols-tablet lg:grid-cols-desktop gap-grid-lg">
                  <Card padding="lg" variant="elevated" className="col-span-4 md:col-span-8 lg:col-span-8 bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                    <Heading level={4} className="text-lg font-semibold text-foreground mb-4">
                      Search Bar
                    </Heading>
                    <SearchBar placeholder="Search components..." onSearch={(query) => console.log('Search:', query)} />
                  </Card>

                  <Card padding="lg" variant="elevated" className="col-span-4 md:col-span-4 lg:col-span-4 flex flex-col items-center text-center bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                    <Avatar size="large" className="mb-4" />
                    <Heading level={4} className="font-bold text-lg text-foreground">Jane Doe</Heading>
                    <Text className="text-sm text-primary font-medium">Product Designer</Text>
                    <Text className="text-sm text-foreground-secondary mt-2">Crafting user-centric experiences.</Text>
                  </Card>

                  <Card padding="lg" variant="elevated" className="col-span-4 md:col-span-8 lg:col-span-12 bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                    <Heading level={4} className="text-lg font-semibold text-foreground mb-4">
                      Alerts & Toasts
                    </Heading>
                    <div className="grid grid-cols-mobile md:grid-cols-tablet gap-grid-md">
                      <Alert variant="success" title="Success!" message="Your changes have been saved." />
                      <Alert variant="danger" title="Error!" message="Could not complete the request." />
                      <Alert variant="info" title="Info" message="A new software update is available." />
                      <Alert variant="warning" title="Warning" message="Your session will expire soon." />
                    </div>
                  </Card>

                  {/* Form Component */}
                  <Card padding="lg" variant="elevated" className="col-span-4 md:col-span-8 lg:col-span-12 bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                    <Heading level={4} className="text-lg font-semibold text-foreground mb-4">
                      Form
                    </Heading>
                    <Form onSubmit={(data) => console.log('Form submitted:', data)} spacing="medium">
                      <Input name="name" placeholder="Name" required />
                      <Input name="email" type="email" placeholder="Email" required />
                      <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                  </Card>

                  {/* Tabs Component */}
                  <Card padding="lg" variant="elevated" className="col-span-4 md:col-span-8 lg:col-span-12 bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                    <Heading level={4} className="text-lg font-semibold text-foreground mb-4">
                      Tabs
                    </Heading>
                    <Tabs
                      items={[
                        { id: 'tab1', label: 'Tab 1', content: <Text>Content for Tab 1</Text> },
                        { id: 'tab2', label: 'Tab 2', content: <Text>Content for Tab 2</Text> },
                        { id: 'tab3', label: 'Tab 3', content: <Text>Content for Tab 3</Text> },
                      ]}
                      variant="default"
                    />
                  </Card>

                  {/* Accordion Component */}
                  <Card padding="lg" variant="elevated" className="col-span-4 md:col-span-8 lg:col-span-12 bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                    <Heading level={4} className="text-lg font-semibold text-foreground mb-4">
                      Accordion
                    </Heading>
                    <Accordion
                      items={[
                        { id: '1', title: 'What is Atomic Design?', content: 'Atomic Design is a methodology for creating design systems.' },
                        { id: '2', title: 'How do I use components?', content: 'Import components from the design system and use them in your app.' },
                        { id: '3', title: 'Can I customize components?', content: 'Yes, components are built with Tailwind CSS and can be customized.' },
                      ]}
                      allowMultiple={true}
                    />
                  </Card>

                  {/* Breadcrumb Component */}
                  <Card padding="lg" variant="elevated" className="col-span-4 md:col-span-8 lg:col-span-12 bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                    <Heading level={4} className="text-lg font-semibold text-foreground mb-4">
                      Breadcrumb
                    </Heading>
                    <Breadcrumb
                      items={[
                        { label: 'Home', href: '#' },
                        { label: 'Components', href: '#' },
                        { label: 'Molecules', href: '#' },
                      ]}
                    />
                  </Card>

                  {/* Rating Component */}
                  <Card padding="lg" variant="elevated" className="col-span-4 md:col-span-4 lg:col-span-4 bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                    <Heading level={4} className="text-lg font-semibold text-foreground mb-4">
                      Rating
                    </Heading>
                    <div className="space-y-4">
                      <Rating value={4} max={5} readOnly />
                      <Rating value={3.5} max={5} allowHalf readOnly />
                      <Rating value={0} max={5} onChange={(value) => console.log('Rating:', value)} />
                    </div>
                  </Card>

                  {/* Pagination Component */}
                  <Card padding="lg" variant="elevated" className="col-span-4 md:col-span-4 lg:col-span-4 bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                    <Heading level={4} className="text-lg font-semibold text-foreground mb-4">
                      Pagination
                    </Heading>
                    <Pagination
                      currentPage={1}
                      totalPages={10}
                      onPageChange={(page) => console.log('Page:', page)}
                    />
                  </Card>

                  {/* Stepper Component */}
                  <Card padding="lg" variant="elevated" className="col-span-4 md:col-span-4 lg:col-span-4 bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                    <Heading level={4} className="text-lg font-semibold text-foreground mb-4">
                      Stepper
                    </Heading>
                    <Stepper
                      steps={[
                        { label: 'Step 1', completed: true },
                        { label: 'Step 2', completed: true },
                        { label: 'Step 3', completed: false },
                        { label: 'Step 4', completed: false },
                      ]}
                      currentStep={2}
                    />
                  </Card>

                  {/* Timeline Component */}
                  <Card padding="lg" variant="elevated" className="col-span-4 md:col-span-8 lg:col-span-12 bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                    <Heading level={4} className="text-lg font-semibold text-foreground mb-4">
                      Timeline
                    </Heading>
                    <Timeline
                      items={[
                        { title: 'Project Started', description: 'Initial setup completed', date: '2024-01-01' },
                        { title: 'First Milestone', description: 'Core components ready', date: '2024-01-15' },
                        { title: 'Beta Release', description: 'Beta version launched', date: '2024-02-01' },
                      ]}
                    />
                  </Card>

                  {/* Tooltip Component */}
                  <Card padding="lg" variant="elevated" className="col-span-4 md:col-span-4 lg:col-span-4 bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                    <Heading level={4} className="text-lg font-semibold text-foreground mb-4">
                      Tooltip
                    </Heading>
                    <div className="flex gap-4">
                      <Tooltip content="This is a tooltip">
                        <Button variant="primary">Hover me</Button>
                      </Tooltip>
                      <Tooltip content="Another tooltip" position="bottom">
                        <Button variant="secondary">Hover me too</Button>
                      </Tooltip>
                    </div>
                  </Card>
                </div>
              </div>
            </section>

            {/* Organismos Section */}
            <section className="scroll-mt-24" id="organismos">
              <div className="mb-10">
                <Heading level={2} className="text-4xl font-bold text-foreground tracking-tight mb-3">
                  ORGANISMOS
              </Heading>
                <Text className="text-lg text-foreground-secondary">Secciones complejas del sistema</Text>
              </div>
              <div className="scroll-mt-24" id="secciones-complejas">
                <div className="grid grid-cols-1 gap-8">
                  {/* Header */}
                  <Card padding="lg" variant="elevated" className="bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                    <Heading level={4} className="text-lg font-semibold text-foreground mb-4">
                      Header
                    </Heading>
                    <Header
                      logoText="Logo"
                      navigation={[
                        { label: 'Atoms', href: '#atomos' },
                        { label: 'Molecules', href: '#moleculas' },
                      ]}
                      variant="compact"
                    />
                  </Card>

                  {/* Hero */}
                  <Card padding="lg" variant="elevated" className="bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                    <Heading level={4} className="text-lg font-semibold text-foreground mb-4">
                      Hero
                    </Heading>
                    <Hero
                      title="Welcome to Our Design System"
                      subtitle="Build amazing interfaces with our atomic components"
                      ctaText="Get Started"
                      onCtaClick={() => console.log('CTA clicked')}
                    />
                  </Card>

                  {/* Navigation */}
                  <Card padding="lg" variant="elevated" className="bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                    <Heading level={4} className="text-lg font-semibold text-foreground mb-4">
                      Navigation
                    </Heading>
                    <Navigation
                      items={[
                        { label: 'Home', href: '#', active: true },
                        { label: 'About', href: '#' },
                        { label: 'Services', href: '#' },
                        { label: 'Contact', href: '#' },
                      ]}
                    />
                  </Card>

                  {/* Sidebar */}
                  <Card padding="lg" variant="elevated" className="bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                    <Heading level={4} className="text-lg font-semibold text-foreground mb-4">
                      Sidebar
                    </Heading>
                    <div className="h-64">
                      <Sidebar
                        items={[
                          { id: '1', label: 'Dashboard', icon: 'Home', href: '#' },
                          { id: '2', label: 'Components', icon: 'Layers', href: '#' },
                          { id: '3', label: 'Settings', icon: 'Settings', href: '#' },
                        ]}
                      />
                    </div>
                  </Card>

                  {/* Statistics */}
                  <Card padding="lg" variant="elevated" className="bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                    <Heading level={4} className="text-lg font-semibold text-foreground mb-4">
                      Statistics
                    </Heading>
                    <Statistics
                      stats={[
                        { label: 'Total Users', value: '1,234', change: '+5%', trend: 'up' },
                        { label: 'Revenue', value: '$12,345', change: '+12%', trend: 'up' },
                        { label: 'Orders', value: '567', change: '-2%', trend: 'down' },
                      ]}
                    />
                  </Card>

                  {/* Contact Form */}
                  <Card padding="lg" variant="elevated" className="bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                    <Heading level={4} className="text-lg font-semibold text-foreground mb-4">
                      Contact Form
                    </Heading>
                    <ContactForm
                      title="Get in Touch"
                      subtitle="We'd love to hear from you"
                      onSubmit={(data) => console.log('Contact form:', data)}
                    />
                  </Card>

                  {/* Newsletter */}
                  <Card padding="lg" variant="elevated" className="bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                    <Heading level={4} className="text-lg font-semibold text-foreground mb-4">
                      Newsletter
                    </Heading>
                    <Newsletter
                      title="Subscribe to our newsletter"
                      description="Get the latest updates and news"
                      onSubmit={(email) => console.log('Newsletter:', email)}
                    />
                  </Card>

                  {/* Pricing */}
                  <Card padding="lg" variant="elevated" className="bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                    <Heading level={4} className="text-lg font-semibold text-foreground mb-4">
                      Pricing
                    </Heading>
                    <Pricing
                      plans={[
                        {
                          id: '1',
                          name: 'Basic',
                          price: '$9',
                          period: 'month',
                          features: ['Feature 1', 'Feature 2', 'Feature 3'],
                          ctaText: 'Get Started',
                        },
                        {
                          id: '2',
                          name: 'Pro',
                          price: '$29',
                          period: 'month',
                          features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
                          ctaText: 'Get Started',
                          isPopular: true,
                        },
                        {
                          id: '3',
                          name: 'Enterprise',
                          price: '$99',
                          period: 'month',
                          features: ['All Features', 'Priority Support', 'Custom Integration'],
                          ctaText: 'Contact Sales',
                        },
                      ]}
                    />
                  </Card>

                  {/* Testimonials */}
                  <Card padding="lg" variant="elevated" className="bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                    <Heading level={4} className="text-lg font-semibold text-foreground mb-4">
                      Testimonials
                    </Heading>
                    <Testimonials
                      testimonials={[
                        {
                          id: '1',
                          name: 'John Doe',
                          role: 'CEO',
                          company: 'Company Inc',
                          content: 'This design system is amazing!',
                          rating: 5,
                        },
                        {
                          id: '2',
                          name: 'Jane Smith',
                          role: 'Designer',
                          company: 'Design Co',
                          content: 'Love the atomic approach!',
                          rating: 5,
                        },
                      ]}
                    />
                  </Card>

                  {/* FAQ */}
                  <Card padding="lg" variant="elevated" className="bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                    <Heading level={4} className="text-lg font-semibold text-foreground mb-4">
                      FAQ
                    </Heading>
                    <FAQ
                      items={[
                        {
                          id: '1',
                          question: 'What is Atomic Design?',
                          answer: 'Atomic Design is a methodology for creating design systems.',
                        },
                        {
                          id: '2',
                          question: 'How do I use components?',
                          answer: 'Import components from the design system and use them in your app.',
                        },
                      ]}
                    />
                  </Card>

                  {/* Dashboard */}
                  <Card padding="lg" variant="elevated" className="bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                    <Heading level={4} className="text-lg font-semibold text-foreground mb-4">
                      Dashboard
                    </Heading>
                    <Dashboard
                      widgets={[
                        { id: '1', title: 'Widget 1', content: 'Content 1' },
                        { id: '2', title: 'Widget 2', content: 'Content 2' },
                      ]}
                    />
                  </Card>

                  {/* Footer */}
                  <Card padding="lg" variant="elevated" className="bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                    <Heading level={4} className="text-lg font-semibold text-foreground mb-4">
                      Footer
                    </Heading>
                    <Footer
                      links={[
                        {
                          title: 'Quick Links',
                          links: [
                            { label: 'About', href: '#' },
                            { label: 'Contact', href: '#' },
                            { label: 'Privacy', href: '#' },
                          ],
                        },
                      ]}
                    />
                  </Card>

                  {/* Data Table */}
                  <Card padding="lg" variant="elevated" className="bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                    <Heading level={4} className="text-lg font-semibold text-foreground mb-4">
                      Data Table
                    </Heading>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm text-left text-foreground-secondary">
                        <thead className="text-xs text-foreground uppercase bg-background-secondary">
                          <tr>
                            <th className="px-6 py-3" scope="col">User</th>
                            <th className="px-6 py-3" scope="col">Role</th>
                            <th className="px-6 py-3" scope="col">Status</th>
                            <th className="px-6 py-3" scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-background border-b border-border">
                            <th className="px-6 py-4 font-medium text-foreground whitespace-nowrap" scope="row">
                              John Doe
                            </th>
                            <td className="px-6 py-4">Admin</td>
                            <td className="px-6 py-4">Active</td>
                            <td className="px-6 py-4">
                              <Link href="#" className="font-medium text-primary hover:underline">
                                Edit
                              </Link>
                            </td>
                          </tr>
                          <tr className="bg-background border-b border-border">
                            <th className="px-6 py-4 font-medium text-foreground whitespace-nowrap" scope="row">
                              Jane Smith
                            </th>
                            <td className="px-6 py-4">Developer</td>
                            <td className="px-6 py-4">Inactive</td>
                            <td className="px-6 py-4">
                              <Link href="#" className="font-medium text-primary hover:underline">
                                Edit
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Card>
                </div>
              </div>
            </section>

            {/* Plantillas Section */}
            <section className="scroll-mt-24" id="plantillas">
              <div className="mb-10">
                <Heading level={2} className="text-4xl font-bold text-foreground tracking-tight mb-3">
                  PLANTILLAS
              </Heading>
                <Text className="text-lg text-foreground-secondary">Templates completos del sistema</Text>
              </div>
              <div className="scroll-mt-24" id="templates">
                <div className="grid grid-cols-1 gap-8">
                  {/* Landing Template */}
                  <Card padding="lg" variant="elevated" className="bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                    <Heading level={4} className="text-lg font-semibold text-foreground mb-4">
                      Landing Template
                    </Heading>
                    <div className="border border-border/30 rounded-lg p-4 bg-background-secondary/30">
                      <Landing
                        heroTitle="Welcome to Our Platform"
                        heroSubtitle="Build amazing products"
                        heroCtaText="Get Started"
                      />
                        </div>
                  </Card>

                  {/* Authentication Template */}
                  <Card padding="lg" variant="elevated" className="bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                    <Heading level={4} className="text-lg font-semibold text-foreground mb-4">
                      Authentication Template
                    </Heading>
                    <div className="border border-border/30 rounded-lg p-4 bg-background-secondary/30">
                      <Authentication
                        variant="login"
                      >
                        <Form onSubmit={(data) => console.log('Auth:', data)}>
                          <Input name="email" type="email" placeholder="Email" required />
                          <Input name="password" type="password" placeholder="Password" required />
                          <Button variant="primary" type="submit">Sign In</Button>
                        </Form>
                      </Authentication>
                        </div>
                  </Card>

                  {/* Dashboard Template */}
                  <Card padding="lg" variant="elevated" className="bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                    <Heading level={4} className="text-lg font-semibold text-foreground mb-4">
                      Dashboard Template
                    </Heading>
                    <div className="border border-border/30 rounded-lg p-4 bg-background-secondary/30">
                      <DashboardTemplate>
                        <Text>Dashboard content goes here</Text>
                      </DashboardTemplate>
                        </div>
                  </Card>

                  {/* Blog Template */}
                  <Card padding="lg" variant="elevated" className="bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                    <Heading level={4} className="text-lg font-semibold text-foreground mb-4">
                      Blog Template
                    </Heading>
                    <div className="border border-border/30 rounded-lg p-4 bg-background-secondary/30">
                      <Blog headerTitle="Blog" headerSubtitle="Latest posts">
                        <Text>Blog content goes here</Text>
                      </Blog>
                    </div>
                  </Card>

                  {/* Documentation Template */}
                  <Card padding="lg" variant="elevated" className="bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                    <Heading level={4} className="text-lg font-semibold text-foreground mb-4">
                      Documentation Template
                    </Heading>
                    <div className="border border-border/30 rounded-lg p-4 bg-background-secondary/30">
                      <Documentation headerTitle="Documentation" headerSubtitle="Guides and references">
                        <Text>Documentation content goes here</Text>
                      </Documentation>
                      </div>
                  </Card>

                  {/* Error Template */}
                  <Card padding="lg" variant="elevated" className="bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                    <Heading level={4} className="text-lg font-semibold text-foreground mb-4">
                      Error Template
                    </Heading>
                    <div className="border border-border/30 rounded-lg p-4 bg-background-secondary/30">
                      <ErrorTemplate
                        errorCode="404"
                        title="Page Not Found"
                        description="The page you're looking for doesn't exist"
                      />
                      </div>
                  </Card>

                  {/* Maintenance Template */}
                  <Card padding="lg" variant="elevated" className="bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                    <Heading level={4} className="text-lg font-semibold text-foreground mb-4">
                      Maintenance Template
                    </Heading>
                    <div className="border border-border/30 rounded-lg p-4 bg-background-secondary/30">
                      <Maintenance
                        title="We'll be back soon"
                        message="We're performing scheduled maintenance"
                        estimatedTime="2-4 hours"
                      />
                      </div>
                  </Card>

                  {/* Profile Template */}
                  <Card padding="lg" variant="elevated" className="bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                    <Heading level={4} className="text-lg font-semibold text-foreground mb-4">
                      Profile Template
                    </Heading>
                    <div className="border border-border/30 rounded-lg p-4 bg-background-secondary/30">
                      <Profile headerTitle="Profile" headerSubtitle="Manage your information">
                        <Text>Profile content goes here</Text>
                      </Profile>
                      </div>
                  </Card>

                  {/* Settings Template */}
                  <Card padding="lg" variant="elevated" className="bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                    <Heading level={4} className="text-lg font-semibold text-foreground mb-4">
                      Settings Template
                    </Heading>
                    <div className="border border-border/30 rounded-lg p-4 bg-background-secondary/30">
                      <Settings headerTitle="Settings" headerSubtitle="Customize your experience">
                        <Text>Settings content goes here</Text>
                      </Settings>
                    </div>
                  </Card>

                  {/* Admin Template */}
                  <Card padding="lg" variant="elevated" className="bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                    <Heading level={4} className="text-lg font-semibold text-foreground mb-4">
                      Admin Template
                    </Heading>
                    <div className="border border-border/30 rounded-lg p-4 bg-background-secondary/30">
                      <Admin headerTitle="Admin Panel" headerSubtitle="Manage your system">
                        <Text>Admin content goes here</Text>
                      </Admin>
                    </div>
                  </Card>

                  {/* Layout Base Template */}
                  <Card padding="lg" variant="elevated" className="bg-background/95 backdrop-blur-sm border-border/30 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 dark:bg-background-secondary/80 dark:border-border/40">
                    <Heading level={4} className="text-lg font-semibold text-foreground mb-4">
                      Layout Base Template
                    </Heading>
                    <div className="border border-border/30 rounded-lg p-4 bg-background-secondary/30">
                      <LayoutBase
                        header={<Header logoText="Logo" navigation={[]} />}
                        footer={<Footer links={[]} />}
                      >
                        <Text>Content goes here</Text>
                      </LayoutBase>
                    </div>
                  </Card>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>

      {/* Modal Example */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Modal de Ejemplo"
      >
        <Text>Este es el contenido del modal</Text>
      </Modal>

      {/* Toast Example */}
      {showToast && (
        <Toast
          message="Este es un mensaje toast"
          variant="success"
          show={showToast}
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
};

export default Showcase;
