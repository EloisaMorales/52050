# Analizador de Gramática

Tema 39568_9. Analizador e intérprete para un sub-lenguaje de C, implementado con ANTLR4 y Node.js.

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

1. Primero clonamos el repositorio dentro de una carpeta cualquiera (en el caso del ejemplo una llamada "PruebaClon"):

    git clone https://github.com/EloisaMorales/52050.git

2. Después nos dirigimos al directorio del proyecto:

     cd 52050

3. Y por ultimo abrimos el visual studio para trabajar con el comando:

    code .

   <img width="961" height="242" alt="image" src="https://github.com/user-attachments/assets/bf267376-a93b-4484-b8bc-38562f5ebb9e" />

   <img width="477" height="40" alt="image" src="https://github.com/user-attachments/assets/aee4540e-f3a6-4e85-b92b-e5cb9bdc046a" />

Ahora deberia estar adentro de visual studio con el proyecto abierto

<img width="1913" height="1017" alt="image" src="https://github.com/user-attachments/assets/ad34b59f-4266-4f06-a679-5b1f02425f51" />


## Uso Básico
El proyecto incluye cuatro archivos de prueba en la raíz principal (prueba_correcta_1.txt, prueba_correcta_2.txt, prueba_incorrecta_1.txt, prueba_incorrecta_2.txt).

Para ejecutar el analizador, asegurate de estar dentro de la carpeta analizador en tu terminal (Ir a **Terminal > Nuevo terminal** en la barra superior) y ejecutá "node index.js ../" pasándole la ruta del archivo que querés leer (por ejemplo prueba_correcta_1.txt):

<img width="1098" height="101" alt="image" src="https://github.com/user-attachments/assets/6244991e-6d94-4e90-85a2-738978ae561b" />

El programa mostrará:

1.Análisis léxico y sintáctico: Verificación de la estructura del código. Si hay errores, mostrará la línea y la causa.

2.Tabla de lexemas-tokens: Un listado tabular con cada lexema reconocido y su respectivo token (ej. if -> IF).

3.Árbol de análisis sintáctico: Representación en formato de texto (CST) de la estructura jerárquica del código.

4.Interpretación: La traducción literal del código al lenguaje JavaScript y su ejecución nativa mostrando el resultado final.

Ejemplo de como debería salir:

<img width="525" height="693" alt="image" src="https://github.com/user-attachments/assets/b3b452e5-2be6-4910-894e-b6e88d0210db" />

<img width="1462" height="446" alt="image" src="https://github.com/user-attachments/assets/5a90c210-3916-4190-8080-f8b2bfdcca82" />


Puedes probar otros códigos correctos como:

prueba_correcta_2.txt

<img width="408" height="206" alt="image" src="https://github.com/user-attachments/assets/a976e9ed-fec1-4473-80c9-5d900f0088ff" />

------------------------------------

O incorrectos como: 

prueba_incorrecta_1.txt ((Falta de paréntesis de apertura))

<img width="417" height="132" alt="image" src="https://github.com/user-attachments/assets/7a3a565e-83e3-40be-b839-ee2cd8a7d47e" />

---------------------------------

prueba_incorrecta_2.txt (Falta de punto y coma)

<img width="428" height="131" alt="image" src="https://github.com/user-attachments/assets/68a35b8f-e836-4840-b5ef-5e0990e4f631" />

## Comentarios Finales

Este proyecto fue desarrollado para la materia de Sintaxis y Semántica de los Lenguajes por la alumna Eloisa Morales (legajo 52050)

El repositorio contiene los archivos necesarios para compilar y ejecutar el proyecto, junto con pasos que nos permiten la correcta ejeccucion del mismo.

Gracias por su tiempo.
