# 🛒 La Colina — Q-Commerce Hiperlocal

Tienda en línea para entrega en puerta en **menos de 5 minutos** dentro de un fraccionamiento cerrado. Operada por una sola persona. Construida en **Next.js 14 (App Router) + TypeScript + Tailwind CSS**.

## ✨ Qué incluye

- **Hero de urgencia**: "¿Te faltó algo? Te lo llevamos a tu puerta en 5 MINUTOS. Paga al recibir."
- **Catálogo** con las 4 categorías y 17 productos de la tienda piloto.
- **Carrito** que se guarda solo en el celular del cliente (localStorage).
- **Checkout de fricción cero**: solo pide *Casa/Calle* y *WhatsApp*. Sin estado, ciudad, CP ni colonia.
- **Pago a contra-entrega** como única opción (efectivo o transferencia al recibir).
- **Notificación instantánea al operador por Telegram** (sonido + alerta visual en su celular).
- **Pantalla de confirmación** con botón directo de WhatsApp a la tienda.

---

## 🚀 Puesta en marcha local

```bash
npm install
cp .env.example .env.local   # luego edita .env.local con tus datos
npm run dev
```

Abre http://localhost:3000

---

## 🔔 Configurar las notificaciones de Telegram (IMPORTANTE)

Esto es lo que hace que al operador **le llegue la notificación con sonido** cada vez que alguien hace un pedido. Toma 5 minutos:

### Paso 1 — Crear el bot
1. En Telegram, busca **@BotFather**.
2. Envía el comando `/newbot`.
3. Ponle un nombre y un usuario (debe terminar en `bot`, ej. `colina_pedidos_bot`).
4. BotFather te dará un **TOKEN**, algo como `8123456789:AAH...xyz`.

### Paso 2 — Obtener tu CHAT_ID
1. Búsca tu bot por su usuario y **envíale cualquier mensaje** (ej. "hola").
2. Abre en el navegador (reemplaza `<TU_TOKEN>`):
   ```
   https://api.telegram.org/bot<TU_TOKEN>/getUpdates
   ```
3. Busca un texto como `"chat":{"id":123456789,...}`. Ese número es tu **CHAT_ID**.

> 💡 Tip: si quieres que varios celulares reciban el aviso, crea un **grupo** de Telegram, mete al bot, y usa el `id` del grupo (suele ser negativo, ej. `-1001234567890`).

### Paso 3 — Poner los datos en `.env.local`
```env
TELEGRAM_BOT_TOKEN=8123456789:AAH...xyz
TELEGRAM_CHAT_ID=123456789
NEXT_PUBLIC_WHATSAPP_TIENDA=5219611234567
```

### Paso 4 — Activar el sonido
En el celular del operador, abre el chat del bot → ajustes de notificación → **activa el sonido** y desactiva "silenciar". Así cada pedido suena y vibra al instante.

**Ejemplo del mensaje que recibe el operador:**
```
🚨 NUEVO PEDIDO - URGENTE 🚨

🏠 Casa/Calle: Casa 24, Calle Roble
📱 Teléfono: 961 123 4567

🛍️ Artículos:
• 2x Coca Cola (coca-cola) — $100.00
• 1x Pan Blanco Bimbo (pan-bimbo) — $45.00

💰 Total a cobrar: $145.00
💵 Pago: Efectivo o transferencia al recibir

🕒 14:32
```

---

## ☁️ Subir a GitHub + Vercel

1. **Crea un repositorio nuevo** en GitHub (vacío, sin README).
2. En esta carpeta:
   ```bash
   git init
   git add .
   git commit -m "Tienda La Colina - Q-Commerce"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
   git push -u origin main
   ```
3. Entra a **vercel.com** → *Add New Project* → importa tu repo.
4. En **Settings → Environment Variables**, agrega las mismas 3 variables del `.env.local`:
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`
   - `NEXT_PUBLIC_WHATSAPP_TIENDA`
5. **Deploy.** Listo.

> ⚠️ El archivo `.env.local` NO se sube a GitHub (está en `.gitignore`). Por eso debes capturar las variables directamente en Vercel.

---

## 🧩 Estructura del proyecto

```
app/
  page.tsx            → Inicio (Hero + Catálogo)
  carrito/page.tsx    → Bolsa de compra
  checkout/page.tsx   → Datos mínimos + pago contra entrega
  confirmacion/page.tsx → "Pedido recibido" + WhatsApp
  api/pedido/route.ts → Envía la notificación a Telegram
components/           → Header, Hero, ProductCard, Catalogo
context/CartContext.tsx → Estado del carrito
lib/productos.ts      → Catálogo (categorías y productos)
```

## ✏️ Cambiar productos o precios
Edita `lib/productos.ts`. Para usar fotos reales en vez de emojis, agrega una propiedad `imagen` y cámbiala en `components/ProductCard.tsx`.
