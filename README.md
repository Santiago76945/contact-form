# Contact Form Web Page

Una sencilla página de contacto inspirada en la estética “Liquid Glass” de Apple, que detecta el idioma del navegador (español o cualquier otro) y muestra el formulario en el idioma correspondiente.

## Estructura de archivos

```

/
├── index.html       # Página principal con el formulario
├── styles.css       # Estilos (glassmorphism)
├── script.js        # Lógica de detección de idioma y reemplazo de textos
└── README.md        # Este archivo

```

## Características

- **Detección de idioma**:  
  - Si `navigator.language` comienza con `es`, se muestran los textos en español.  
  - En cualquier otro caso, se muestran en inglés.

- **Glassmorphism**:  
  - Fondos translúcidos con `backdrop-filter: blur()`.  
  - Esquinas redondeadas suaves.  
  - Sombras sutiles para crear profundidad.

- **Formulario funcional** vía Formspree:  
  - Envía la información a `https://formspree.io/f/xgvyylyg` por POST.  
  - Campos incluidos:  
    - Motivo de contacto (`personal` / `professional`)  
    - Número de WhatsApp  
    - Nombre completo  
    - Mensaje

- **Botón destacado**:  
  - Color azul (estilo iOS `#007AFF`) con sombra y animaciones al pasar el cursor.

## Instalación y uso

1. Clona o descarga este repositorio.
2. Asegúrate de que los archivos `index.html`, `styles.css` y `script.js` estén en la misma carpeta.
3. Abre `index.html` en tu navegador.
4. Completa el formulario y haz clic en **Enviar**.  
   Los datos se enviarán a tu endpoint de Formspree.

## Personalización

- **Fondo de pantalla**:  
  Edita la propiedad `background` en `body` (en `styles.css`) para usar tu propia imagen o color.

- **Niveles de desenfoque**:  
  Ajusta `backdrop-filter: blur(…)` en los selectores `.container`, `input`, `textarea` y `button`.

- **Paleta de colores**:  
  - Para cambiar el azul del botón, modifica los valores RGBA en `button` y `button:hover`.  
  - Para otros elementos, cambia el color de texto (`color`) y el fondo translúcido (`background: rgba(...)`).

- **Textos**:  
  Edita los objetos `texts.es` y `texts.en` en `script.js` para adaptar etiquetas, placeholders y botones.

## Consideraciones

- Requiere navegador moderno con soporte para `backdrop-filter`.  
- Asegúrate de tener habilitado JavaScript para la detección de idioma.

---

Made with 💧 and ☁️ by Santiago Haspert.

