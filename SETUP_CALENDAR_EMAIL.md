# Configuración de Calendario y Email

## 📧 Configuración de Email (Gmail)

### 1. Habilitar contraseña de aplicación en Gmail

1. Ve a tu cuenta de Google: https://myaccount.google.com/
2. Selecciona "Seguridad" en el panel izquierdo
3. Habilita la verificación en 2 pasos si no la tienes
4. Ve a "Contraseñas de aplicaciones": https://myaccount.google.com/apppasswords
5. Genera una nueva contraseña de aplicación para "Correo"
6. Copia la contraseña generada (16 caracteres)

### 2. Configurar variables de entorno

En tu archivo `.env`, configura:

```env
EMAIL_USER="tu-email@gmail.com"
EMAIL_PASS="tu-contraseña-de-aplicacion-de-16-caracteres"
CONTACT_FORM_TO_EMAIL="tu-email@gmail.com"
```

## 📅 Configuración de Google Calendar

### 1. Crear proyecto en Google Cloud Console

1. Ve a: https://console.cloud.google.com/
2. Crea un nuevo proyecto o selecciona uno existente
3. Habilita la API de Google Calendar:
   - Ve a "APIs y servicios" > "Biblioteca"
   - Busca "Google Calendar API"
   - Haz clic en "Habilitar"

### 2. Crear cuenta de servicio

1. Ve a "APIs y servicios" > "Credenciales"
2. Haz clic en "Crear credenciales" > "Cuenta de servicio"
3. Completa el formulario:
   - Nombre: "calendar-service"
   - ID: se genera automáticamente
   - Descripción: "Servicio para gestionar eventos de calendario"
4. Haz clic en "Crear y continuar"
5. Omite los roles por ahora y haz clic en "Continuar"
6. Haz clic en "Listo"

### 3. Generar clave JSON

1. En la lista de cuentas de servicio, haz clic en la que acabas de crear
2. Ve a la pestaña "Claves"
3. Haz clic en "Agregar clave" > "Crear nueva clave"
4. Selecciona "JSON" y haz clic en "Crear"
5. Se descargará un archivo JSON con las credenciales

### 4. Extraer credenciales del JSON

Del archivo JSON descargado, necesitas:

- `client_email`: Copia este valor
- `private_key`: Copia este valor (incluye las líneas BEGIN y END)

### 5. Crear y configurar calendario

1. Ve a Google Calendar: https://calendar.google.com/
2. En el panel izquierdo, haz clic en el "+" junto a "Otros calendarios"
3. Selecciona "Crear nuevo calendario"
4. Completa la información:
   - Nombre: "Citas KronoSoft"
   - Descripción: "Calendario para citas de clientes"
5. Haz clic en "Crear calendario"

### 6. Compartir calendario con la cuenta de servicio

1. En la lista de calendarios, haz clic en los tres puntos del calendario que creaste
2. Selecciona "Configuración y uso compartido"
3. En "Compartir con personas específicas", haz clic en "Agregar personas"
4. Ingresa el `client_email` de tu cuenta de servicio
5. Selecciona "Realizar cambios en los eventos" como permiso
6. Haz clic en "Enviar"

### 7. Obtener ID del calendario

1. En la configuración del calendario, ve a "Integrar calendario"
2. Copia el "ID del calendario" (algo como: `abc123@group.calendar.google.com`)

### 8. Configurar variables de entorno

En tu archivo `.env`, configura:

```env
GOOGLE_CLIENT_EMAIL="tu-service-account@tu-proyecto.iam.gserviceaccount.com"
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nTU_PRIVATE_KEY_AQUI\n-----END PRIVATE KEY-----\n"
GOOGLE_CALENDAR_ID="tu-calendar-id@group.calendar.google.com"
```

**Importante**: En `GOOGLE_PRIVATE_KEY`, asegúrate de que los saltos de línea estén representados como `\n`.

## 🔗 Configuración de enlace público de Google Calendar

Para el enlace público de agendamiento:

1. Ve a Google Calendar
2. Haz clic en el engranaje (configuración) > "Configuración"
3. Ve a "Páginas de citas" en el panel izquierdo
4. Crea una nueva página de citas
5. Configura los horarios disponibles
6. Copia el enlace público generado
7. Configura en `.env`:

```env
PUBLIC_GOOGLE_CALENDAR_URL="https://calendar.google.com/calendar/appointments/schedules/TU_SCHEDULE_ID"
```

## 🧪 Probar la configuración

1. Reinicia tu servidor de desarrollo: `bun dev`
2. Ve a la página de contacto: `http://localhost:4321/contact`
3. Prueba el formulario de contacto
4. Prueba el agendamiento de citas

## 🔒 Seguridad

- Nunca subas el archivo `.env` a tu repositorio
- El archivo `.env` ya está en `.gitignore`
- Usa variables de entorno en producción (Vercel, Netlify, etc.)
- Revisa regularmente los permisos de tu cuenta de servicio

## 🚀 Despliegue en producción

Para Vercel:

1. Ve a tu dashboard de Vercel
2. Selecciona tu proyecto
3. Ve a "Settings" > "Environment Variables"
4. Agrega todas las variables de tu archivo `.env`

Para otros proveedores, consulta su documentación sobre variables de entorno.
