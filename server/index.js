import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const app = express();

// Middleware
app.use(cors()); // Permite que tu React (puerto 5173) se comunique con Node
app.use(express.json()); // Permite leer el cuerpo (body) de las peticiones JSON

// Conexión con Supabase usando variables de entorno
const supabase = createClient(
    process.env.SUPABASE_URL, 
    process.env.SUPABASE_KEY
);

// Ruta para recibir mensajes del formulario
app.post('/api/contacto', async (req, res) => {
    try {
        const { nombre, email, mensaje } = req.body;
        console.log("Datos recibidos:", req.body); // Esto te confirmará si llegan los datos

        const { data, error } = await supabase
            .from('mensajes_contacto')
            .insert([{ nombre, email, mensaje }]);

        if (error) {
            console.error("Error detallado de Supabase:", error); // ¡ESTO te dirá el problema real!
            return res.status(400).json({ error: error.message });
        }

        res.status(201).json({ success: true });
    } catch (err) {
        console.error("Error crítico del servidor:", err);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});

const PORT = process.env.PORT || 3001;

// Export the Express app for Vercel (serverless function)
export default app;

// Only listen if not running in production (for local dev)
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Servidor de Manuel Figueroa corriendo en http://localhost:${PORT}`);
    });
}