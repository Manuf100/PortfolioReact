export const proyectos=[
    {
        id:1,
        titulo:"Cancionero Schoenstatt",
        categoria:["Aplicación web PWA", "Aplicación mobile"],
        fechaInicio:"Marzo 2024",
        fechaFin:"En producción",
        tecnologias:["Flutter", "Dart", "Firebase", "Supabase", "JSON"],
        descripcion:"App para gestionar canciones y acordes, con buscador avanzado.",
        detalleLargo:"Esta aplicación contiene un cancionero con acordes para guitarra, junto con diversas herramientas utilizadas en el Movimiento de Schoenstatt. Está diseñada para facilitar el acceso a cantos y oraciones en encuentros, misas y momentos de oración.\nFunciones principales:\n🎸 Cancionero con acordes: Letras y acordes de canciones.\n📞 Teléfono del Padre: Acceso al Teléfono del Padre Kentenich.\n📖 Evangelio del día\n📅 Acción del día: Acciones diarias para acercarnos a Dios, fortalecer la fe y ayudar a los demas\n🙏 Oraciones: Incluye la Oración de Confianza, la Oración de Consagración, Oración al Espíritu Santo, Oración de la mañana y los Misterios del Rosario.\n📝 Capitalario: Registro de aportes al Capital de Gracias.\n🔎 Búsqueda rápida: Encuentra canciones y contenido fácilmente.\n📖 Interfaz sencilla: Diseño intuitivo para un acceso rápido a todas las funciones",
        imagenes:[
            "logo_final.png",
            "cancionero01.jpg",
            "cancionero02.jpg",
            "cancionero03.jpg",
            "cancionero04.jpg",
            "cancionero05.jpg",
            "cancionero06.jpg"
        ],
        github:"https://gist.github.com/Manuf100/067094233c82109227f849bb786bd88c",
        web:"https://cancionero-schoenstatt.web.app/",
        playStore:"https://play.google.com/store/apps/details?id=com.MANUF.JMSALTA"
    },
    {
        id:2,
        titulo:"Economia",
        categoria:["Aplicación web"],
        fechaInicio:"Septiembre 2025",
        fechaFin:"Diciembre 2025",
        tecnologias:["HTML", "CSS", "JavaScript", "Bootstrap 4", "Node.js", "SQLite", "SQL Server"],
        descripcion:"App web para gestionar gastos e ingresos.",
        detalleLargo: "Esta aplicación de Finanzas Personales nació como una solución integral para el control de la economía doméstica, permitiendo un seguimiento riguroso de movimientos en múltiples divisas (ARS/USD). El enfoque principal fue crear una herramienta intuitiva pero técnicamente robusta, capaz de procesar historiales financieros y generar reportes precisos en tiempo real.\n\n" +"🚀 Desafíos Técnicos y Soluciones:\n" +"• Migración de Arquitectura de Datos: El proyecto evolucionó de una infraestructura basada en SQL Server hacia SQLite, optimizando la portabilidad y el rendimiento en entornos locales sin sacrificar la integridad de los datos.\n" +"• Lógica de Cálculos Compleja: Implementé algoritmos específicos para el cálculo de 'Saldos Anteriores', asegurando que el balance de cada mes refleje con exactitud las sobras del periodo previo, manejando de forma independiente cuentas en pesos y dólares.\n" +"• Gestión de Fechas: Utilicé librerías avanzadas para el manejo de rangos temporales, garantizando que el filtrado de movimientos por mes y año sea inmune a errores de zona horaria o desbordamientos de calendario.\n\n" +"🛠️ Funciones Principales:\n" +"• Registro Multidivisa: Gestión organizada de ingresos y gastos permitiendo transacciones en diferentes monedas con cálculos de balance automáticos.\n" +"• Dashboard Estadístico: Visualización clara de la salud financiera mediante el desglose de totales, facilitando la toma de decisiones informadas.\n" +"• Persistencia Eficiente: Diseño de una base de datos relacional optimizada para consultas rápidas de resumen mensual y acumulados anuales.",
        imagenes:[
            "economia_01.png",
            "economia_02.png",
            "economia_03.png"
        ],
        github:"https://gist.github.com/Manuf100/152c3f69a7e16102298447f421a37cf5"
    },
    {
        id:3,
        titulo:"Portfolio",
        categoria:["Sitio Web"],
        fechaInicio:"Enero 2026",
        fechaFin:"En producción",
        tecnologias:["React", "CSS", "JavaScript", "Bootstrap 4", "Node.Js", "Supabase"],
        descripcion:"Mi portfolio personal",
        detalleLargo: "Este portfolio es una plataforma fullstack diseñada para centralizar y exponer mi trayectoria académica y profesional en Ingeniería Informática. El objetivo principal fue construir un ecosistema digital que demuestre mis capacidades en desarrollo frontend, arquitectura de servidores y gestión de persistencia de datos.\n\n" +"🚀 Arquitectura Técnica:\n" +"• Frontend Dinámico: Desarrollado con React para una navegación fluida y una gestión de estados eficiente, utilizando Bootstrap para garantizar una experiencia de usuario responsiva y adaptada a cualquier dispositivo.\n" +"• Backend y Lógica de Servidor: Implementé un servidor con Node.js y Express para procesar solicitudes críticas, como la gestión del formulario de contacto.\n" +"• Persistencia de Datos con Supabase: Integración con Supabase (PostgreSQL) para el almacenamiento de mensajes y la gestión escalable de la información del sitio.\n\n" +"🛠️ Desafíos Resueltos:\n" +"• Seguridad: Configuración de variables de entorno (.env) para la protección de credenciales y seguridad de la base de datos.\n" +"• Organización de Código: Estructura de proyecto modular separando claramente el 'client' del 'server', siguiendo las mejores prácticas de la industria.\n" +"• Animaciones e Interacción: Implementación de Intersection Observer API para una experiencia visual dinámica y moderna.",
        imagenes:[
            "portfolio_02.png",
            "portfolio_03.png",
            "portfolio_01.png"
        ],
        github:"https://github.com/Manuf100/PortfolioReact.git",
        web:"",
        playStore:""
    },
    {
        id:4,
        titulo:"Ecommerce Vivero",
        categoria:["Sitio web"],
        fechaInicio:"Marzo 2023",
        fechaFin:"Noviembre 2023",
        tecnologias:["HTML", "CSS", "JavaScript", "XAMPP", "PHP", "MySQL"],
        descripcion:"Ecommerce para la materia Lenguajes 3 y Lenguajes 4",
        detalleLargo: "Este proyecto representó uno de mis primeros grandes desafíos en el desarrollo de software, donde partiendo de conocimientos iniciales, logré construir un ecommerce de un vivero para la materia Lenguajes 3 y Lenguajes 4. Fue la base donde consolidé conceptos fundamentales de programación.\n\n" +"🚀 Aprendizajes y Logros Técnicos:\n" +"• Implementación de CRUD Completo: Desarrollé la capacidad de Crear, Leer, Actualizar y Eliminar registros, gestionando de manera efectiva el inventario de plantas y clientes.\n" +"• Diseño de Dashboard Administrativo: Creé una interfaz centralizada para la visualización de datos clave, permitiendo una toma de decisiones informada sobre el stock y las finanzas del negocio.\n" +"🛠️ Evolución del Proyecto:\n" +"• Interfaz de Usuario: Pasé de diseños simples a una navegación fluida y organizada, priorizando la facilidad de uso para el administrador.\n" +"• Lógica de Negocio: Programé validaciones y cálculos automáticos para procesos de venta y alertas de bajo stock.\n",
        imagenes:[
            "vivero_04.png",
            "vivero_05.png",
            "vivero_03.png",
            "vivero_02.png",
            "vivero_01.png"
        ],
        github:"https://gist.github.com/Manuf100/6c018b10deefd83240763955a8776c3a",
        web:"",
        playStore:""
    },
    {
       id:5,
       titulo:"Trabajo Principio de Informática",
       categoria:["Aplicación desktop"],
       fechaInicio:"Octubre 2022",
       fechaFin:"Noviembre 2022",
       tecnologias:["Python", "Tkinter", "XlsxWriter"],
       descripcion:"Trabajo para la materia Principio de Informática",
       detalleLargo: "Este fue uno de mis primeros proyectos en la carrera de Ingeniería, enfocado en resolver una problemática real de análisis de datos deportivos utilizando Python.\n\n" + "🚀 Habilidades Técnicas Demostradas:\n" + "• Automatización de Reportes: Utilicé la librería XlsxWriter para generar archivos Excel desde cero, aplicando formatos condicionales para resaltar a los jugadores que superaban el promedio.\n" + "• Visualización de Datos: Implementé la creación de gráficos dinámicos (Barras vs. Líneas) dentro de las hojas de cálculo para facilitar la interpretación del rendimiento.\n" + "• Lógica de Algoritmos: En lugar de usar funciones predefinidas, implementé manualmente un algoritmo de ordenamiento para organizar a los deportistas por su velocidad.\n\n" + "🛠️ Interfaz y Experiencia:\n" + "• Desarrollé una interfaz gráfica (GUI) con Tkinter para que la carga de datos sea sencilla para cualquier usuario, alejándome de la consola y acercándome a una aplicación de escritorio real.\n" + "• Este proyecto sentó las bases de mi pensamiento lógico y mi interés por herramientas que optimizan tareas repetitivas mediante el código.",
       imagenes:[
        "jugadores_02.png",
        "jugadores_01.png"
       ],
       github:"https://github.com/Manuf100/trabajo-final-principio-informatica.git",
       web:"",
       playStore:""
    }
]