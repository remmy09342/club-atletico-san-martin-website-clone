# Club Atlético San Martín - Website Clone

Este proyecto es un clon del sitio web oficial del Club Atlético San Martín de Tucumán (https://clubatleticosanmartin.com/), desarrollado con HTML5, CSS3 y JavaScript vanilla.

## 🏆 Características

- **Diseño Responsivo**: Adaptado para dispositivos móviles, tablets y desktop
- **Colores Institucionales**: Esquema de colores rojo y blanco del club
- **Navegación Moderna**: Menú hamburguesa para móviles con animaciones
- **Secciones Completas**: 
  - Noticias destacadas
  - Información del club
  - Partidos anteriores y próximos
  - Galería de videos
  - Sección de sponsors
  - Artículos detallados

## 📁 Estructura del Proyecto

```
/
├── index.html              # Página principal
├── article.html            # Plantilla de artículo detallado
├── assets/
│   ├── css/
│   │   └── style.css       # Estilos principales
│   └── js/
│       └── script.js       # Funcionalidades JavaScript
└── README.md               # Documentación del proyecto
```

## 🚀 Características Técnicas

### HTML5
- Estructura semántica con elementos `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Meta tags optimizados para SEO y responsive design
- Atributos de accesibilidad (ARIA labels, alt text)

### CSS3
- Flexbox y CSS Grid para layouts modernos
- Gradientes y transiciones suaves
- Media queries para diseño responsivo
- Animaciones CSS para mejorar la experiencia de usuario
- Variables CSS para consistencia de colores

### JavaScript
- Navegación móvil interactiva
- Scroll suave para enlaces internos
- Lazy loading de imágenes con fallbacks
- Funcionalidad de búsqueda básica
- Botón "volver arriba"
- Efectos de intersección para animaciones

## 🎨 Diseño

### Paleta de Colores
- **Rojo Principal**: #dc143c
- **Rojo Secundario**: #b22222
- **Blanco**: #ffffff
- **Gris Texto**: #333333
- **Gris Claro**: #f8f9fa

### Tipografía
- **Fuente Principal**: Roboto (Google Fonts)
- **Pesos**: 300, 400, 500, 700
- **Fallback**: Arial, sans-serif

## 📱 Responsive Design

### Breakpoints
- **Desktop**: > 768px
- **Tablet**: 481px - 768px
- **Mobile**: < 480px

### Características Móviles
- Menú hamburguesa animado
- Navegación vertical
- Imágenes optimizadas
- Touch-friendly buttons
- Contenido apilado verticalmente

## 🔧 Funcionalidades JavaScript

### Navegación
- Toggle del menú móvil
- Animación del botón hamburguesa
- Cierre automático al hacer clic en enlaces

### Interactividad
- Scroll suave a secciones
- Botones de reproducción de video (simulados)
- Paginación funcional
- Búsqueda en tiempo real

### Optimizaciones
- Lazy loading de imágenes
- Fallbacks para imágenes rotas
- Observer API para animaciones
- Manejo de errores

## 🌐 Compatibilidad

### Navegadores Soportados
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Características Modernas Utilizadas
- CSS Grid
- Flexbox
- Intersection Observer API
- ES6+ JavaScript
- CSS Custom Properties

## 📋 Instalación y Uso

1. **Clonar o descargar** los archivos del proyecto
2. **Abrir** `index.html` en un navegador web
3. **Para desarrollo local** (opcional):
   ```bash
   # Usando Python
   python -m http.server 8000
   
   # Usando Node.js
   npx serve .
   
   # Usando PHP
   php -S localhost:8000
   ```

## 🔍 SEO y Accesibilidad

### SEO
- Meta descriptions optimizadas
- Títulos jerárquicos (H1-H6)
- URLs semánticas
- Estructura de datos clara

### Accesibilidad
- Contraste de colores adecuado
- Navegación por teclado
- Atributos ARIA
- Texto alternativo en imágenes
- Focus states visibles

## 🎯 Mejoras Futuras

### Funcionalidades Pendientes
- [ ] Integración con CMS real
- [ ] Sistema de comentarios
- [ ] Newsletter subscription
- [ ] Galería de imágenes avanzada
- [ ] Integración con redes sociales
- [ ] PWA (Progressive Web App)

### Optimizaciones
- [ ] Compresión de imágenes
- [ ] Minificación de CSS/JS
- [ ] Service Workers
- [ ] Caché del navegador

## 📊 Performance

### Métricas Objetivo
- **First Contentful Paint**: < 2s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

### Optimizaciones Implementadas
- Imágenes optimizadas desde Unsplash
- CSS crítico inline
- JavaScript no bloqueante
- Lazy loading de contenido

## 🤝 Contribuciones

Este proyecto es una demostración educativa. Para contribuir:

1. Fork del repositorio
2. Crear una rama para la feature
3. Commit de los cambios
4. Push a la rama
5. Crear un Pull Request

## 📄 Licencia

Este proyecto es solo para fines educativos y de demostración. Todos los derechos del contenido original pertenecen al Club Atlético San Martín de Tucumán.

## 📞 Contacto

Para consultas sobre este proyecto de demostración, por favor contactar al desarrollador.

---

**Nota**: Este es un clon no oficial creado con fines educativos. No está afiliado oficialmente con el Club Atlético San Martín de Tucumán.
