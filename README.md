# Analizador de Gramática

Tema 39568_9. Analizador e intérprete para un sub-lenguaje de C, implementado con ANTLR4 y Node.js.

<img width="942" height="793" alt="image" src="https://github.com/user-attachments/assets/7add0773-8bef-4473-87ae-ee4979b4920a" />


## Características de la Gramática

Este analizador procesa un sub-conjunto reducido del lenguaje C con las siguientes reglas:

**Decisiones**
* Condicionales: `if (condicion) { sentencia }`
* Condicionales con alternativa: `if (condicion) { sentencia } else { sentencia }`

**Sentencias**
* Salida por consola: `printf("cadena");`
* Terminación de bloque: `return;`
* Se permiten múltiples sentencias anidadas o secuenciales dentro de los bloques.

**Condiciones**
* Valores booleanos estrictos representados por `0` (Falso) o `1` (Verdadero).

**Cadenas**
* Texto alfanumérico y símbolos encerrados entre comillas dobles (ej. `"Mensaje de prueba!"`).

## Requisitos

* **Node.js** (v18 o superior recomendado)
* **npm** (incluido con Node.js)
* **Java Runtime (JRE)** (Para la compilación de la gramática ANTLR4)
* **Visual Studio Code** (Recomendado para visualización y ejecución)

## Configuración Inicial

Estas instrucciones se pueden ejecutar en cualquiera de los siguientes entornos de línea de comandos: Terminal de Linux/macOS, Windows PowerShell, CMD, o la Terminal integrada de VS Code.

**Pasos:**

1. Primero clonamos el repositorio en tu entorno local:
   ```bash
   git clone [https://github.com/TU_USUARIO_DE_GITHUB/52050.git](https://github.com/TU_USUARIO_DE_GITHUB/52050.git)

2. Después nos dirigimos al directorio del proyecto y abrimos Visual Studio Code:
   cd 52050
   code .
4. Abrimos la terminal integrada de VS Code (Terminal > Nuevo terminal), ingresamos a la carpeta del analizador e instalamos las dependencias necesarias:
 cd analizador
 npm install
 (foto: captura de la terminal ejecutando npm install)

Uso Básico
El proyecto incluye cuatro archivos de prueba en la raíz (prueba_correcta_1.txt, prueba_correcta_2.txt, prueba_incorrecta_1.txt, prueba_incorrecta_2.txt).

Para ejecutar el analizador, asegurate de estar dentro de la carpeta analizador en tu terminal y ejecutá Node pasándole la ruta del archivo que querés leer:
 node index.js ../prueba_correcta_1.txt
 (foto: captura de la ejecución del comando)

El programa mostrará secuencialmente:

Análisis léxico y sintáctico: Verificación de la estructura del código. Si hay errores, mostrará la línea y la causa.

Tabla de lexemas-tokens: Un listado tabular con cada lexema reconocido y su respectivo token (ej. if -> IF).

Árbol de análisis sintáctico: Representación en formato de texto (CST) de la estructura jerárquica del código.

Interpretación: La traducción literal del código al lenguaje JavaScript y su ejecución nativa mostrando el resultado final.

(foto: captura grande mostrando toda la salida exitosa en la consola)

Ejemplos de Prueba
Códigos Válidos (Correctos)

Ejemplo 1 (Condición Verdadera):
if (1) {
    printf("El analisis fue exitoso!");
    return;
} else {
    printf("Hubo un error.");
    return;
}
Comentarios Finales
Este proyecto fue desarrollado como evaluación formativa para la materia de Sintaxis y Semántica de los Lenguajes por el alumno Valentin (Legajo: 52050).

El repositorio contiene todos los archivos fuente de la gramática .g4, los analizadores generados por ANTLR, el código del intérprete en JavaScript y los archivos de prueba requeridos para evaluar la correcta funcionalidad del sistema.

Gracias por su tiempo.
