# Senten

Generador de **código morse** desde el navegador. Convierte texto a morse y morse a texto, con interfaz limpia para crear y compartir mensajes codificados.

## Qué hace

- Convierte texto plano a código morse
- Convierte código morse de vuelta a texto
- Permite crear y guardar nuevos mensajes en una vista separada

## Stack

- HTML5 · CSS3 · JavaScript (vanilla)
- Sin librerías externas — toda la conversión está implementada manualmente

## Estructura

```
├── index.html      # Vista principal de conversión
├── crear.html      # Crear y guardar nuevos mensajes
├── css/            # Estilos
└── js/             # Lógica de conversión
```

## Uso local

```bash
git clone https://github.com/felixBD04/Senten.git
cd Senten
# Abre index.html en tu navegador
```

## Por qué este proyecto

Práctica de:
- Manipulación de strings y traducción entre alfabetos
- Diseño de mapas de equivalencia (texto ↔ morse)
- Interfaces multi-página con HTML/CSS/JS vanilla
- Implementación de lógica de cifrado desde cero, sin dependencias
