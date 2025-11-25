export const languages: Record<'es' | 'en', { name: string; flag: string }> = {
  es: { name: 'Español', flag: 'es' },
  en: { name: 'English', flag: 'us' },
} as const;

export const defaultLanguage = 'es';

export type LanguageCode = keyof typeof languages;

export const ui = {
  es: {
    projectsContent: {
      Zorvanz: {
        title: 'Zorvanz',
        description: "Una plataforma e-commerce para una empresa de velas y ambientadores",
        imageAltText: "Imagen placeholder para el proyecto de ejemplo",
        categoryText: 'e-Commerce',
        dateText: 'Octubre 2025',
        detailedDescription:
          "Una descripción más detallada de este proyecto de ejemplo, mostrando cómo estructurar el contenido para la página de detalle del proyecto.",
        keyFeatures: {
          responsiveDesign: {
            title: 'Diseño Responsivo',
            description: "El proyecto se adapta a todos los tamaños de pantalla.",
          },
          contentManagement: {
            title: 'Gestión de Contenido Fácil',
            description:
              'Permite una gestión sencilla del contenido a través de archivos Markdown o un CMS.',
          },
        },
        galleryImages: {
          zorvanzGallery1: {
            alt: 'Captura de pantalla principal de Zorvanz',
            caption: 'Página principal del e-commerce Zorvanz',
          },
          zorvanzGallery2: {
            alt: 'Panel de administración de Zorvanz',
            caption: 'Dashboard administrativo con métricas',
          },
        },
        challenges:
          'Descripción de los desafíos encontrados durante la creación de este proyecto ejemplo.',
        learnings: 'Descripción de los aprendizajes obtenidos de este proyecto ejemplo.',
        projectLinkText: 'Ver Proyecto en Vivo',
        codeLinkText: 'Ver Código en GitHub',
      },
      ecommerceProject: {
        title: 'Plataforma E-commerce',
        description: 'Una plataforma completa de comercio electrónico con gestión de inventario.',
        imageAltText: 'Captura de pantalla de la plataforma e-commerce',
        categoryText: 'E-commerce',
        dateText: 'Diciembre 2024',
        detailedDescription:
          'Plataforma de comercio electrónico desarrollada con tecnologías modernas, incluyendo sistema de pagos, gestión de inventario y panel administrativo.',
        keyFeatures: {
          paymentIntegration: {
            title: 'Integración de Pagos',
            description: 'Sistema de pagos seguro con múltiples métodos de pago.',
          },
          inventoryManagement: {
            title: 'Gestión de Inventario',
            description: 'Control completo del inventario con alertas automáticas.',
          },
        },
        galleryImages: {
          ecommerceGallery1: {
            alt: 'Vista del catálogo de productos',
            caption: 'Catálogo principal con filtros avanzados',
          },
          ecommerceGallery2: {
            alt: 'Proceso de checkout',
            caption: 'Flujo de compra simplificado',
          },
        },
        challenges:
          'Implementación de un sistema de pagos seguro y escalable fue el principal desafío.',
        learnings: 'Aprendimos sobre arquitectura de microservicios y optimización de bases de datos.',
        projectLinkText: 'Ver Tienda Online',
        codeLinkText: 'Ver Código en GitHub',
      },
      taskManager: {
        title: 'Gestor de Tareas',
        description: 'Aplicación de gestión de tareas con sincronización en tiempo real.',
        imageAltText: 'Interfaz del gestor de tareas',
        categoryText: 'Productividad',
        dateText: 'Noviembre 2024',
        detailedDescription: 'Aplicación web progresiva para gestión de tareas con capacidades offline y sincronización en tiempo real.',
        keyFeatures: {
          realTimeSync: {
            title: 'Sincronización en Tiempo Real',
            description: 'Actualización instantánea entre dispositivos.',
          },
          offlineMode: {
            title: 'Modo Offline',
            description: 'Funciona sin conexión a internet.',
          },
        },
        galleryImages: {
          taskGallery1: {
            alt: 'Interfaz principal del gestor de tareas',
            caption: 'Vista de tablero con tareas organizadas',
          },
          taskGallery2: {
            alt: 'Vista móvil de la aplicación',
            caption: 'Diseño responsivo para dispositivos móviles',
          },
        },
        challenges: 'Implementar sincronización offline-online sin conflictos.',
        learnings: 'Aprendimos sobre PWAs y manejo de estados offline.',
        projectLinkText: 'Usar Aplicación',
        codeLinkText: 'Ver Código en GitHub',
      },
      cryptoTracker: {
        title: 'Rastreador de Criptomonedas',
        description: 'Plataforma para seguimiento de portafolio de criptomonedas.',
        imageAltText: 'Dashboard del rastreador de criptomonedas',
        categoryText: 'Finanzas',
        dateText: 'Octubre 2024',
        detailedDescription: 'Aplicación para rastrear inversiones en criptomonedas con análisis en tiempo real.',
        keyFeatures: {
          liveData: {
            title: 'Datos en Vivo',
            description: 'Precios actualizados en tiempo real.',
          },
          portfolioAnalytics: {
            title: 'Análisis de Portafolio',
            description: 'Métricas detalladas de rendimiento.',
          },
        },
        galleryImages: {
          cryptoGallery1: {
            alt: 'Dashboard principal del rastreador',
            caption: 'Vista general del portafolio con gráficos',
          },
          cryptoGallery2: {
            alt: 'Análisis detallado de criptomonedas',
            caption: 'Métricas avanzadas y tendencias de mercado',
          },
        },
        challenges: 'Manejo de grandes volúmenes de datos en tiempo real.',
        learnings: 'Optimización de APIs y visualización de datos.',
        projectLinkText: 'Ver Dashboard',
        codeLinkText: 'Ver Código en GitHub',
      },
      socialMedia: {
        title: 'Dashboard de Redes Sociales',
        description: 'Panel de control para gestión de múltiples redes sociales.',
        imageAltText: 'Dashboard de redes sociales',
        categoryText: 'Redes Sociales',
        dateText: 'Septiembre 2024',
        detailedDescription: 'Plataforma unificada para gestionar contenido en múltiples redes sociales.',
        keyFeatures: {
          multiPlatform: {
            title: 'Multi-Plataforma',
            description: 'Gestiona Facebook, Twitter, Instagram desde un lugar.',
          },
          analytics: {
            title: 'Analíticas',
            description: 'Métricas detalladas de engagement.',
          },
        },
        galleryImages: {
          socialGallery1: {
            alt: 'Dashboard unificado de redes sociales',
            caption: 'Vista consolidada de todas las plataformas',
          },
          socialGallery2: {
            alt: 'Analíticas de engagement',
            caption: 'Métricas detalladas de interacción',
          },
        },
        challenges: 'Integración con múltiples APIs de redes sociales.',
        learnings: 'Manejo de autenticación OAuth y rate limiting.',
        projectLinkText: 'Ver Dashboard',
        codeLinkText: 'Ver Código en GitHub',
      },
      weatherApp: {
        title: 'App del Clima',
        description: 'Aplicación móvil de pronóstico del tiempo.',
        imageAltText: 'Interfaz de la app del clima',
        categoryText: 'Aplicación Móvil',
        dateText: 'Agosto 2024',
        detailedDescription: 'App móvil con pronósticos precisos y alertas meteorológicas.',
        keyFeatures: {
          geoLocation: {
            title: 'Geolocalización',
            description: 'Clima automático basado en ubicación.',
          },
          weatherAlerts: {
            title: 'Alertas Meteorológicas',
            description: 'Notificaciones de condiciones extremas.',
          },
        },
        galleryImages: {
          weatherGallery1: {
            alt: 'Pantalla principal de la app del clima',
            caption: 'Pronóstico actual con diseño intuitivo',
          },
          weatherGallery2: {
            alt: 'Vista de pronóstico extendido',
            caption: 'Pronóstico de 7 días con detalles',
          },
        },
        challenges: 'Optimización de batería y precisión de ubicación.',
        learnings: 'Desarrollo móvil multiplataforma con Flutter.',
        projectLinkText: 'Descargar App',
        codeLinkText: 'Ver Código en GitHub',
      },
      blogPlatform: {
        title: 'Plataforma de Blog Moderna',
        description: 'CMS moderno optimizado para SEO y velocidad.',
        imageAltText: 'Editor de la plataforma de blog',
        categoryText: 'Gestión de Contenido',
        dateText: 'Julio 2024',
        detailedDescription: 'Plataforma de blogging con generación estática y optimización automática.',
        keyFeatures: {
          seoOptimized: {
            title: 'Optimizado para SEO',
            description: 'Meta tags y estructura automática.',
          },
          fastLoading: {
            title: 'Carga Rápida',
            description: 'Sitios estáticos ultra-rápidos.',
          },
        },
        galleryImages: {
          blogGallery1: {
            alt: 'Editor de contenido del blog',
            caption: 'Interfaz de escritura con vista previa',
          },
          blogGallery2: {
            alt: 'Vista del blog publicado',
            caption: 'Diseño final optimizado para lectura',
          },
        },
        challenges: 'Balance entre funcionalidad y velocidad.',
        learnings: 'Generación de sitios estáticos con Astro.',
        projectLinkText: 'Ver Blog',
        codeLinkText: 'Ver Código en GitHub',
      },
      fitnessTracker: {
        title: 'Rastreador de Fitness',
        description: 'App móvil para seguimiento de ejercicios y progreso.',
        imageAltText: 'Interfaz del rastreador de fitness',
        categoryText: 'Salud y Fitness',
        dateText: 'Junio 2024',
        detailedDescription: 'Aplicación completa para planificación y seguimiento de rutinas de ejercicio.',
        keyFeatures: {
          workoutPlans: {
            title: 'Planes de Entrenamiento',
            description: 'Rutinas personalizadas por objetivos.',
          },
          progressTracking: {
            title: 'Seguimiento de Progreso',
            description: 'Gráficos detallados de evolución.',
          },
        },
        galleryImages: {
          fitnessGallery1: {
            alt: 'Pantalla de seguimiento de ejercicios',
            caption: 'Registro de rutinas y progreso diario',
          },
          fitnessGallery2: {
            alt: 'Gráficos de progreso fitness',
            caption: 'Visualización de evolución y logros',
          },
        },
        challenges: 'Algoritmos de recomendación personalizados.',
        learnings: 'Desarrollo de apps nativas con React Native.',
        projectLinkText: 'Descargar App',
        codeLinkText: 'Ver Código en GitHub',
      },
      aiChatbot: {
        title: 'Chatbot de IA',
        description: 'Sistema de soporte al cliente con inteligencia artificial.',
        imageAltText: 'Interfaz del chatbot de IA',
        categoryText: 'IA/ML',
        dateText: 'Mayo 2024',
        detailedDescription: 'Chatbot inteligente para atención al cliente con procesamiento de lenguaje natural.',
        keyFeatures: {
          naturalLanguage: {
            title: 'Lenguaje Natural',
            description: 'Comprende consultas en español.',
          },
          contextAware: {
            title: 'Consciente del Contexto',
            description: 'Mantiene el hilo de conversación.',
          },
        },
        galleryImages: {
          aiGallery1: {
            alt: 'Interfaz de chat del bot de IA',
            caption: 'Conversación natural con el asistente',
          },
          aiGallery2: {
            alt: 'Panel de configuración del chatbot',
            caption: 'Ajustes y personalización del bot',
          },
        },
        challenges: 'Entrenamiento del modelo para español.',
        learnings: 'Integración de APIs de IA y NLP.',
        projectLinkText: 'Probar Chatbot',
        codeLinkText: 'Ver Código en GitHub',
      },
      eventManager: {
        title: 'Sistema de Gestión de Eventos',
        description: 'Plataforma completa para organización de eventos.',
        imageAltText: 'Panel de gestión de eventos',
        categoryText: 'Gestión de Eventos',
        dateText: 'Abril 2024',
        detailedDescription: 'Sistema integral para planificación, venta de tickets y gestión de eventos.',
        keyFeatures: {
          ticketing: {
            title: 'Sistema de Tickets',
            description: 'Venta y validación de entradas.',
          },
          eventScheduling: {
            title: 'Programación de Eventos',
            description: 'Calendario y gestión de horarios.',
          },
        },
        galleryImages: {
          eventGallery1: {
            alt: 'Vista del calendario de eventos',
            caption: 'Gestión visual de eventos programados',
          },
          eventGallery2: {
            alt: 'Sistema de venta de tickets',
            caption: 'Proceso de compra de entradas',
          },
        },
        challenges: 'Manejo de alta concurrencia en venta de tickets.',
        learnings: 'Arquitectura escalable con Laravel.',
        projectLinkText: 'Ver Plataforma',
        codeLinkText: 'Ver Código en GitHub',
      },
      iotDashboard: {
        title: 'Dashboard IoT',
        description: 'Panel de monitoreo para dispositivos IoT.',
        imageAltText: 'Dashboard de monitoreo IoT',
        categoryText: 'IoT',
        dateText: 'Marzo 2024',
        detailedDescription: 'Sistema de monitoreo en tiempo real para dispositivos IoT industriales.',
        keyFeatures: {
          realTimeMonitoring: {
            title: 'Monitoreo en Tiempo Real',
            description: 'Datos de sensores en vivo.',
          },
          deviceControl: {
            title: 'Control de Dispositivos',
            description: 'Comandos remotos a dispositivos.',
          },
        },
        galleryImages: {
          iotGallery1: {
            alt: 'Dashboard de monitoreo IoT',
            caption: 'Vista en tiempo real de dispositivos',
          },
          iotGallery2: {
            alt: 'Gráficos de datos de sensores',
            caption: 'Análisis histórico de métricas IoT',
          },
        },
        challenges: 'Manejo de protocolos IoT y latencia.',
        learnings: 'Comunicación MQTT y bases de datos de series temporales.',
        projectLinkText: 'Ver Dashboard IoT',
        codeLinkText: 'Ver Código en GitHub',
      }
    },
    skillsContent: {
      frontendDevelopment: {
        title: 'Desarrollo Frontend',
        description:
          "Creación de interfaces de usuario interactivas y de alto rendimiento.",
      },
      backendDevelopment: {
        title: 'Desarrollo Backend',
        description: "Construcción de lógica de servidor robusta y APIs.",
      },
      uiUxDesign: {
        title: 'Diseño UI/UX',
        description:
          "Diseño de experiencias de usuario intuitivas y estéticas.",
      },
      devOps: {
        title: 'DevOps',
        description:
          'Automatización de procesos de desarrollo y despliegue.',
      },
      IA: {
        title: 'Inteligencia Artificial',
        description:
          'Desarrollo de soluciones basadas en inteligencia artificial.',
      },
    },
    site: {
      title: 'KronoSoft',
      description:
        'Empresa de desarrollo de software especializada en soluciones tecnológicas innovadoras.',
    },
    nav: {
      home: 'Inicio',
      blog: 'Blog',
      contact: 'Contacto',
      projects: 'Proyectos',
      tips: 'Consejos',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
    },
    homePage: {
      pageTitle: 'Inicio | KronoSoft - Empresa de Software',
      pageDescription:
        "Bienvenido a KronoSoft, empresa de desarrollo de software especializada en crear experiencias web innovadoras y soluciones tecnológicas de vanguardia.",
      heroGreeting: "Hola, Somos KronoSoft",
      heroSubtitlePart1: 'Empresa de Desarrollo de Software',
      heroSubtitlePart2: 'Especialistas en Tecnología',
      heroIntroduction: 'En KronoSoft transformamos ideas en soluciones digitales innovadoras. Somos una empresa especializada en desarrollo de software, creación de aplicaciones web y móviles, y consultoría tecnológica.',
      heroViewWorkButton: 'Ver Nuestro Trabajo',
      heroContactButton: 'Contáctanos',
      heroImageAlt:
        'Ilustración representando KronoSoft o un concepto de desarrollo',
      featuredProjectsTitle: '3 últimos proyectos',
      featuredProjectsDescription:
        "Aquí tienes algunos de los proyectos en los que hemos trabajado recientemente. ¡No dudes en explorarlos!",
      projectCardViewProject: 'Ver Proyecto',
      projectCardViewCode: 'Ver Código',
      imageNotAvailable: 'Imagen próximamente disponible',
      mySkillsTitle: 'Nuestras Competencias',
      mySkillsDescription:
        "Explora la experiencia y habilidades que definen nuestro trabajo y pasión por la tecnología.",
    },
    blogPage: {
      pageTitle: 'Nuestro Blog Técnico',
      pageDescription:
        "Artículos y reflexiones sobre desarrollo web, arquitectura de software y nuevas tecnologías.",
      title: 'Nuestro Blog Técnico',
      description:
        "Artículos y reflexiones sobre desarrollo web, arquitectura de software y nuevas tecnologías.",
      comingSoon:
        '¡Los artículos del blog aparecerán aquí pronto. Vuelve más tarde!',
      heroImageAlt: "Imagen de portada para el artículo: ",
      publishedOn: 'Publicado el: ',
      readMore: 'Leer más',
      readingTimeSuffix: 'min de lectura',
      searchPlaceholder: 'Buscar artículos...',
      filterByTagButtonLabel: 'Filtrar por tag',
      noTagFound: 'No se encontró ninguna etiqueta.',
      selectTagCommandPlaceholder: 'Buscar etiqueta...',
      allTagsLabel: 'Todas las etiquetas',
      noPostsFound: 'No se encontraron artículos.',
    },
    blogPost: {
      publishedOn: 'Publicado el: ',
      updatedOn: 'Actualizado el: ',
      heroImageAlt: "Imagen de portada para el artículo: ",
      backToList: 'Volver a la lista de artículos',
      readingTimeSuffix: 'min de lectura',
      relatedPostsTitle: 'Te recomendamos también:',
      readMore: 'Leer más',
      editOnGithub: 'Proponer una modificación en GitHub',
    },
    toc: {
      title: "Tabla de Contenidos",
    },
    contactPage: {
      pageTitle: 'Contáctanos',
      pageDescription:
        "¡Hablemos de tu proyecto, una colaboración potencial, o simplemente para intercambiar sobre tecnología!",
      title: 'Contáctanos',
      description:
        "¡Hablemos de tu proyecto, una colaboración potencial, o simplemente para intercambiar sobre tecnología!",

      formTitle: 'Enviar un mensaje',
      firstNameLabel: 'Nombre',
      lastNameLabel: 'Apellido',
      emailLabel: 'Email',
      messageLabel: 'Mensaje',
      sendButtonLabel: 'Enviar',
      firstNamePlaceholder: 'Tu nombre',

      lastNamePlaceholder: 'Tu apellido',
      emailPlaceholder: 'Tu dirección de email',
      messagePlaceholder: 'Tu mensaje aquí...',
      calendarTitle: 'Programar una Reunión',
      calendarDescription:
        '¿Prefieres hablar en vivo? Reserva directamente un horario en nuestra agenda.',
      calendarButtonLabel: 'Ver nuestras disponibilidades',
      calendarLinkLabel: 'Ver nuestra agenda',
      calendarPlaceHolder:
        "La integración con Google Calendar estará disponible pronto...",
      orSeparatorText: 'O',
      toastSuccessMessageSent: '¡Mensaje enviado con éxito!',
      toastErrorFailedToSend: "Error al enviar el mensaje.",
      toastErrorUnexpected: "Ocurrió un error inesperado.",
      toastErrorDetails: "Detalles del error:",
      toastErrorValidationFailed: 'Validación del formulario fallida.',
    },
    projectDetailPage: {
      backToProjects: 'Volver a Proyectos',
      categoryLabel: 'Categoría:',
      dateLabel: 'Fecha:',
      aboutTitle: 'Acerca de este proyecto',
      keyFeaturesTitle: 'Características Clave',
      galleryTitle: 'Galería',
      challengesTitle: 'Desafíos Encontrados',
      learningsTitle: 'Lecciones Aprendidas',
      visitProjectButton: 'Visitar Proyecto',
      viewCodeButton: 'Ver Código',
    },
    projectsPage: {
      title: 'Nuestros Proyectos',
      metaTitle: 'Nuestros Proyectos | KronoSoft',
      metaDescription: 'Descubre todos nuestros proyectos.',
      noProjects: 'No hay proyectos para mostrar en este momento.',
      noProjectsDescription:
        "Parece que aún no tenemos proyectos para mostrar.",
    },
    notFoundPage: {
      pageTitle: 'Página No Encontrada',
      title: '¡Ups! Página No Encontrada',
      message:
        "Lo sentimos, la página que buscas no parece existir. Verifica la URL o regresa a la página de inicio.",
      homeLink: "Volver al Inicio",
    },

    tipsPage: {
      metaTitle: 'Consejos de Desarrollo | KronoSoft',
      metaDescription:
        'Descubre consejos y tips rápidos sobre desarrollo web y computación en la nube.',
      description:
        'Descubre consejos y tips rápidos sobre desarrollo web y computación en la nube.',
      title: 'Nuestros Últimos Consejos',
      noTips: 'No hay consejos para mostrar en este momento.',
      readTip: "Leer consejo",
      backToList: 'Volver a la lista de consejos',
      featuredTips: 'Consejos recomendados',
      allTips: 'Todos los consejos',
      tipsAvailable: 'consejos disponibles',
      tipAvailable: 'consejo disponible',
      editOnGithub: 'Editar en GitHub',
    },
    zodErrors: {
      // Common errors
      invalid_type: 'Tipo inválido.',
      invalid_type_received_undefined: 'Este campo es requerido.',
      required_field_custom: 'El campo {fieldName} es requerido.',
      // String errors
      too_small_string_minimum: 'Debe contener al menos {minimum} caracteres.',
      too_big_string_maximum: 'No debe exceder {maximum} caracteres.',
      invalid_string_email: 'Dirección de email inválida.',
      invalid_string_url: 'URL inválida.',
      invalid_string_uuid: 'UUID inválido.',
    },
  },
  en: {
    projectsContent: {
      Zorvanz: {
        title: 'Zorvanz',
        description: 'An e-commerce platform for a candles and air fresheners company',
        imageAltText: 'Placeholder image for the sample project',
        categoryText: 'e-Commerce',
        dateText: 'October 2025',
        detailedDescription:
          'A more detailed description of this sample project, showing how to structure content for the project detail page.',
        keyFeatures: {
          responsiveDesign: {
            title: 'Responsive Design',
            description: 'The project adapts to all screen sizes.',
          },
          contentManagement: {
            title: 'Easy Content Management',
            description:
              'Allows for easy content management via Markdown files or a CMS.',
          },
        },
        galleryImages: {
          zorvanzGallery1: {
            alt: 'Main screenshot of Zorvanz',
            caption: 'Zorvanz e-commerce homepage',
          },
          zorvanzGallery2: {
            alt: 'Zorvanz admin panel',
            caption: 'Administrative dashboard with metrics',
          },
        },
        challenges:
          'Description of challenges encountered while creating this sample project.',
        learnings: 'Description of learnings from this sample project.',
        projectLinkText: 'View Live Project',
        codeLinkText: 'View Code on GitHub',
      },
      ecommerceProject: {
        title: 'E-commerce Platform',
        description: 'A complete e-commerce platform with inventory management.',
        imageAltText: 'Screenshot of the e-commerce platform',
        categoryText: 'E-commerce',
        dateText: 'December 2024',
        detailedDescription: 'E-commerce platform developed with modern technologies, including payment system, inventory management and administrative panel.',
        keyFeatures: {
          paymentIntegration: {
            title: 'Payment Integration',
            description: 'Secure payment system with multiple payment methods.',
          },
          inventoryManagement: {
            title: 'Inventory Management',
            description: 'Complete inventory control with automatic alerts.',
          },
        },
        galleryImages: {
          ecommerceGallery1: {
            alt: 'Product catalog view',
            caption: 'Main catalog with advanced filters',
          },
          ecommerceGallery2: {
            alt: 'Checkout process',
            caption: 'Simplified purchase flow',
          },
        },
        challenges: 'Implementing a secure and scalable payment system was the main challenge.',
        learnings: 'We learned about microservices architecture and database optimization.',
        projectLinkText: 'View Online Store',
        codeLinkText: 'View Code on GitHub',
      },
      taskManager: {
        title: 'Task Manager',
        description: 'Task management application with real-time synchronization.',
        imageAltText: 'Task manager interface',
        categoryText: 'Productivity',
        dateText: 'November 2024',
        detailedDescription: 'Progressive web application for task management with offline capabilities and real-time sync.',
        keyFeatures: {
          realTimeSync: {
            title: 'Real-Time Sync',
            description: 'Instant updates across devices.',
          },
          offlineMode: {
            title: 'Offline Mode',
            description: 'Works without internet connection.',
          },
        },
        galleryImages: {
          taskGallery1: {
            alt: 'Main task manager interface',
            caption: 'Board view with organized tasks',
          },
          taskGallery2: {
            alt: 'Mobile app view',
            caption: 'Responsive design for mobile devices',
          },
        },
        challenges: 'Implementing offline-online sync without conflicts.',
        learnings: 'Learned about PWAs and offline state management.',
        projectLinkText: 'Use Application',
        codeLinkText: 'View Code on GitHub',
      },
      cryptoTracker: {
        title: 'Crypto Tracker',
        description: 'Cryptocurrency portfolio tracking platform.',
        imageAltText: 'Crypto tracker dashboard',
        categoryText: 'Finance',
        dateText: 'October 2024',
        detailedDescription: 'Application to track cryptocurrency investments with real-time analysis.',
        keyFeatures: {
          liveData: {
            title: 'Live Data',
            description: 'Real-time price updates.',
          },
          portfolioAnalytics: {
            title: 'Portfolio Analytics',
            description: 'Detailed performance metrics.',
          },
        },
        galleryImages: {
          cryptoGallery1: {
            alt: 'Main tracker dashboard',
            caption: 'Portfolio overview with charts',
          },
          cryptoGallery2: {
            alt: 'Detailed crypto analysis',
            caption: 'Advanced metrics and market trends',
          },
        },
        challenges: 'Handling large volumes of real-time data.',
        learnings: 'API optimization and data visualization.',
        projectLinkText: 'View Dashboard',
        codeLinkText: 'View Code on GitHub',
      },
      socialMedia: {
        title: 'Social Media Dashboard',
        description: 'Control panel for managing multiple social networks.',
        imageAltText: 'Social media dashboard',
        categoryText: 'Social Media',
        dateText: 'September 2024',
        detailedDescription: 'Unified platform to manage content across multiple social networks.',
        keyFeatures: {
          multiPlatform: {
            title: 'Multi-Platform',
            description: 'Manage Facebook, Twitter, Instagram from one place.',
          },
          analytics: {
            title: 'Analytics',
            description: 'Detailed engagement metrics.',
          },
        },
        galleryImages: {
          socialGallery1: {
            alt: 'Unified social media dashboard',
            caption: 'Consolidated view of all platforms',
          },
          socialGallery2: {
            alt: 'Engagement analytics',
            caption: 'Detailed interaction metrics',
          },
        },
        challenges: 'Integration with multiple social media APIs.',
        learnings: 'OAuth authentication and rate limiting handling.',
        projectLinkText: 'View Dashboard',
        codeLinkText: 'View Code on GitHub',
      },
      weatherApp: {
        title: 'Weather App',
        description: 'Mobile weather forecast application.',
        imageAltText: 'Weather app interface',
        categoryText: 'Mobile App',
        dateText: 'August 2024',
        detailedDescription: 'Mobile app with accurate forecasts and weather alerts.',
        keyFeatures: {
          geoLocation: {
            title: 'Geolocation',
            description: 'Automatic weather based on location.',
          },
          weatherAlerts: {
            title: 'Weather Alerts',
            description: 'Notifications for extreme conditions.',
          },
        },
        galleryImages: {
          weatherGallery1: {
            alt: 'Main weather app screen',
            caption: 'Current forecast with intuitive design',
          },
          weatherGallery2: {
            alt: 'Extended forecast view',
            caption: '7-day forecast with details',
          },
        },
        challenges: 'Battery optimization and location accuracy.',
        learnings: 'Cross-platform mobile development with Flutter.',
        projectLinkText: 'Download App',
        codeLinkText: 'View Code on GitHub',
      },
      blogPlatform: {
        title: 'Modern Blog Platform',
        description: 'Modern CMS optimized for SEO and speed.',
        imageAltText: 'Blog platform editor',
        categoryText: 'Content Management',
        dateText: 'July 2024',
        detailedDescription: 'Blogging platform with static generation and automatic optimization.',
        keyFeatures: {
          seoOptimized: {
            title: 'SEO Optimized',
            description: 'Automatic meta tags and structure.',
          },
          fastLoading: {
            title: 'Fast Loading',
            description: 'Ultra-fast static sites.',
          },
        },
        galleryImages: {
          blogGallery1: {
            alt: 'Blog content editor',
            caption: 'Writing interface with preview',
          },
          blogGallery2: {
            alt: 'Published blog view',
            caption: 'Final design optimized for reading',
          },
        },
        challenges: 'Balance between functionality and speed.',
        learnings: 'Static site generation with Astro.',
        projectLinkText: 'View Blog',
        codeLinkText: 'View Code on GitHub',
      },
      fitnessTracker: {
        title: 'Fitness Tracker',
        description: 'Mobile app for exercise tracking and progress.',
        imageAltText: 'Fitness tracker interface',
        categoryText: 'Health & Fitness',
        dateText: 'June 2024',
        detailedDescription: 'Complete application for planning and tracking exercise routines.',
        keyFeatures: {
          workoutPlans: {
            title: 'Workout Plans',
            description: 'Personalized routines by goals.',
          },
          progressTracking: {
            title: 'Progress Tracking',
            description: 'Detailed evolution charts.',
          },
        },
        galleryImages: {
          fitnessGallery1: {
            alt: 'Exercise tracking screen',
            caption: 'Daily routine and progress logging',
          },
          fitnessGallery2: {
            alt: 'Fitness progress charts',
            caption: 'Evolution visualization and achievements',
          },
        },
        challenges: 'Personalized recommendation algorithms.',
        learnings: 'Native app development with React Native.',
        projectLinkText: 'Download App',
        codeLinkText: 'View Code on GitHub',
      },
      aiChatbot: {
        title: 'AI Chatbot',
        description: 'Customer support system with artificial intelligence.',
        imageAltText: 'AI chatbot interface',
        categoryText: 'AI/ML',
        dateText: 'May 2024',
        detailedDescription: 'Intelligent chatbot for customer service with natural language processing.',
        keyFeatures: {
          naturalLanguage: {
            title: 'Natural Language',
            description: 'Understands queries in English.',
          },
          contextAware: {
            title: 'Context Aware',
            description: 'Maintains conversation thread.',
          },
        },
        galleryImages: {
          aiGallery1: {
            alt: 'AI bot chat interface',
            caption: 'Natural conversation with assistant',
          },
          aiGallery2: {
            alt: 'Chatbot configuration panel',
            caption: 'Bot settings and customization',
          },
        },
        challenges: 'Training the model for English.',
        learnings: 'AI API integration and NLP.',
        projectLinkText: 'Try Chatbot',
        codeLinkText: 'View Code on GitHub',
      },
      eventManager: {
        title: 'Event Management System',
        description: 'Complete platform for event organization.',
        imageAltText: 'Event management panel',
        categoryText: 'Event Management',
        dateText: 'April 2024',
        detailedDescription: 'Comprehensive system for planning, ticket sales and event management.',
        keyFeatures: {
          ticketing: {
            title: 'Ticketing System',
            description: 'Ticket sales and validation.',
          },
          eventScheduling: {
            title: 'Event Scheduling',
            description: 'Calendar and schedule management.',
          },
        },
        galleryImages: {
          eventGallery1: {
            alt: 'Event calendar view',
            caption: 'Visual management of scheduled events',
          },
          eventGallery2: {
            alt: 'Ticket sales system',
            caption: 'Ticket purchase process',
          },
        },
        challenges: 'Handling high concurrency in ticket sales.',
        learnings: 'Scalable architecture with Laravel.',
        projectLinkText: 'View Platform',
        codeLinkText: 'View Code on GitHub',
      },
      iotDashboard: {
        title: 'IoT Dashboard',
        description: 'Monitoring panel for IoT devices.',
        imageAltText: 'IoT monitoring dashboard',
        categoryText: 'IoT',
        dateText: 'March 2024',
        detailedDescription: 'Real-time monitoring system for industrial IoT devices.',
        keyFeatures: {
          realTimeMonitoring: {
            title: 'Real-Time Monitoring',
            description: 'Live sensor data.',
          },
          deviceControl: {
            title: 'Device Control',
            description: 'Remote commands to devices.',
          },
        },
        galleryImages: {
          iotGallery1: {
            alt: 'IoT monitoring dashboard',
            caption: 'Real-time device view',
          },
          iotGallery2: {
            alt: 'Sensor data charts',
            caption: 'Historical analysis of IoT metrics',
          },
        },
        challenges: 'Handling IoT protocols and latency.',
        learnings: 'MQTT communication and time series databases.',
        projectLinkText: 'View IoT Dashboard',
        codeLinkText: 'View Code on GitHub',
      }
    },
    skillsContent: {
      frontendDevelopment: {
        title: 'Frontend Development',
        description:
          'Building interactive and high-performance user interfaces.',
      },
      backendDevelopment: {
        title: 'Backend Development',
        description: 'Constructing robust server logic and APIs.',
      },
      uiUxDesign: {
        title: 'UI/UX Design',
        description: 'Designing intuitive and aesthetic user experiences.',
      },
      devOps: {
        title: 'DevOps',
        description: 'Automating development and deployment processes.',
      },
      IA: {
        title: 'Artificial Intelligence',
        description: 'Creating AI based applications and systems.',
      },
    },
    site: {
      title: 'KronoSoft',
      description:
        'Software development company specialized in innovative technological solutions.',
    },
    nav: {
      home: 'Home',
      blog: 'Blog',
      contact: 'Contact',
      projects: 'Projects',
      tips: 'Tips',
    },
    footer: {
      rights: 'All rights reserved.',
    },
    homePage: {
      pageTitle: 'Home | KronoSoft - Software Company',
      pageDescription:
        'Welcome to KronoSoft, a software development company specialized in creating innovative web experiences and cutting-edge technological solutions.',
      heroGreeting: "Hi, We are KronoSoft",
      heroSubtitlePart1: 'Software Development Company',
      heroSubtitlePart2: 'Technology Specialists',
      heroIntroduction: 'At KronoSoft, we transform ideas into innovative digital solutions. We are a company specialized in software development, web and mobile application creation, and technology consulting.',
      heroViewWorkButton: 'View Our Work',
      heroContactButton: 'Get In Touch',
      heroImageAlt:
        'Illustration representing KronoSoft or a development concept',
      featuredProjectsTitle: '3 latest projects',
      featuredProjectsDescription:
        "Here are some of the projects we've recently worked on. Feel free to explore!",
      projectCardViewProject: 'View Project',
      projectCardViewCode: 'View Code',
      imageNotAvailable: 'Image not available for now',
      mySkillsTitle: 'Our Skills',
      mySkillsDescription:
        'Explore the expertise and abilities that define our work and passion for technology.',
    },
    blogPage: {
      pageTitle: 'Our Technical Blog',
      pageDescription:
        'Articles and thoughts on web development, software architecture, and new technologies.',
      title: 'Our Technical Blog',
      description:
        'Articles and thoughts on web development, software architecture, and new technologies.',
      comingSoon: 'Blog posts will appear here soon. Check back later!',
      heroImageAlt: 'Hero image for article: ',
      publishedOn: 'Published on: ',
      readMore: 'Read more',
      readingTimeSuffix: 'min read',
      searchPlaceholder: 'Search articles...',
      filterByTagButtonLabel: 'Filter by tag',
      noTagFound: 'No tag found.',
      selectTagCommandPlaceholder: 'Search tag...',
      allTagsLabel: 'All tags',
      noPostsFound: 'No posts found.',
    },
    blogPost: {
      publishedOn: 'Published on: ',
      updatedOn: 'Updated on: ',
      heroImageAlt: 'Hero image for article: ',
      backToList: 'Back to blog list',
      readingTimeSuffix: 'min read',
      relatedPostsTitle: 'Continue Reading',
      readMore: 'Read more',
    },
    toc: {
      title: 'Table of Contents',
    },
    contactPage: {
      pageTitle: 'Contact Us',
      pageDescription:
        "Let's discuss your project, a potential collaboration, or just chat about tech!",

      title: 'Contact Us',
      description:
        "Let's discuss your project, a potential collaboration, or just chat about tech!",
      formTitle: 'Send a message',
      firstNameLabel: 'First Name',
      lastNameLabel: 'Last Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      sendButtonLabel: 'Send',
      firstNamePlaceholder: 'Your first name',
      lastNamePlaceholder: 'Your last name',
      emailPlaceholder: 'Your email address',
      messagePlaceholder: 'Your message here...',
      calendarTitle: 'Schedule a Meeting',
      calendarDescription:
        'Prefer to talk live? Book a slot directly in our calendar.',
      calendarButtonLabel: 'See our availability',
      calendarLinkLabel: 'See our calendar',
      calendarPlaceHolder:
        'The integration with Google Calendar will be soon...',
      orSeparatorText: 'OR',
      toastSuccessMessageSent: 'Message sent successfully!',
      toastErrorFailedToSend: 'Failed to send message.',
      toastErrorUnexpected: 'An unexpected error occurred.',
      toastErrorDetails: 'Error details:',
      toastErrorValidationFailed: 'Form validation failed.',
    },
    projectDetailPage: {
      backToProjects: 'Back to Projects',
      categoryLabel: 'Category:',
      dateLabel: 'Date:',
      aboutTitle: 'About this project',
      keyFeaturesTitle: 'Key Features',
      galleryTitle: 'Gallery',
      challengesTitle: 'Challenges',
      learningsTitle: 'Learnings',
      visitProjectButton: 'Visit Project',
      viewCodeButton: 'View Code',
    },
    projectsPage: {
      title: 'Our Projects',
      metaTitle: "Our Projects | KronoSoft",
      metaDescription: "Discover all of KronoSoft's projects.",
      noProjects: 'No projects to display at the moment.',
      noProjectsDescription:
        "It seems that you don't have any projects to display at the moment.",
    },
    notFoundPage: {
      pageTitle: 'Page Not Found',
      title: 'Oops! Page Not Found',
      message:
        'Sorry, the page you are looking for does not seem to exist. Check the URL or return to the homepage.',
      homeLink: 'Return to Homepage',
    },

    tipsPage: {
      metaTitle: 'Development Tips | KronoSoft',
      metaDescription:
        'Browse a collection of quick tips and advice on Web Development and Cloud Computing.',
      title: 'Latest Tips',
      description:
        'Browse a collection of quick tips and advice on Web Development and Cloud Computing.',
      noTips: 'No tips to display at the moment.',
      readTip: 'Read tip',
      backToList: 'Back to list',
      featuredTips: 'Featured Tips',
      allTips: 'All Tips',
      tipsAvailable: 'tips available',
      tipAvailable: 'tip available',
      editOnGithub: 'Edit on GitHub',
    },
    zodErrors: {
      // Common errors
      invalid_type: 'Invalid type.',
      invalid_type_received_undefined: 'This field is required.', // For required fields (fallback)
      required_field_custom: 'The {fieldName} field is required.',
      // String errors
      too_small_string_minimum: 'Must be at least {minimum} characters long.',
      too_big_string_maximum: 'Must be no more than {maximum} characters long.',
      invalid_string_email: 'Invalid email address.',
      invalid_string_url: 'Invalid URL.',
      invalid_string_uuid: 'Invalid UUID.',
      // You can add more specific messages as needed
    },
  },
} as const;

export const getLanguageName = (lang: LanguageCode) => languages[lang];

export type UISchema = typeof ui;
export type FeatureType = keyof UISchema[typeof defaultLanguage];

export function useTranslations<F extends FeatureType>(
  lang: LanguageCode | undefined,
  feature: F
) {
  const currentLanguage = lang || defaultLanguage;

  // Get the available keys for this feature from the default language
  type AvailableKeys = keyof UISchema[typeof defaultLanguage][F];

  return function t(key: AvailableKeys): string {
    // Safely access the translation, falling back to default language if necessary
    const featureTranslations = ui[currentLanguage]?.[feature];
    if (featureTranslations && key in featureTranslations) {
      return featureTranslations[
        key as keyof typeof featureTranslations
      ] as string;
    }

    // Fallback to default language
    return ui[defaultLanguage][feature][
      key as keyof (typeof ui)[typeof defaultLanguage][F]
    ] as string;
  };
}
