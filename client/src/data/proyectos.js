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
    }
]