# Followers Pokémon Go!!

## Índice

* [1. Definición del producto](#1-Definición-del-producto)
* [2. Investigación UX](#2-Investigación-UX)
* [3. Historias de usuario](#3-Historias-de-usuario)
* [4. Prototipos](#4-Prototipos)
* [5. Diseño final](#5-Diseño-final)
* [6. Test de usabilidad](#6-Test-de-usabilidad)
* [7. Pruebas unitarias](#7-Pruebas-unitarias)
* [8. Checklist](#8-Checklist)
***

## 1. Definición del producto

Follwers Pokémon Go, es una aplicación web para nuevos jugadores de pokémon Go, este  proyecto busca que los nuevo usuarios puedan acceder de manera sencilla a información básica de pokemons como nombre, tipo, imagen, además de una pequeña estadísticas donde encontraran fortaleza, debilidad y resistencia. De esta manera podran iniciarse en el mundo de entrenadores pokémon.

## 2. Investigación UX

Para conocer a nuestros usuarios realizamos encuestas a personas con conocimientos básicos en pokémon Go y obtuvimos los siguientes hallazgos.

- Para los jugadores principiantes es importante conocer el tipo de pokémon para utilizarlo como estrategia en las batallas
- Los datos como nombre, tipo e imagen son importantes para comenzar a profundizar en cada uno de los pokemons

## 3. Historias de usuario

* UH-1: Yo como jugador QUIERO ver en la página principal toda la lista de Pokemons PARA           visualizarlos rápidamente.

* UH-2: Yo como jugador QUIERO poder filtrar las cards de acuerdo al tipo de pokemon PARA           poder escoger fácilmente con que pokemon me irá mejor en el juego.

* UH-3: Yo como Jugador QUIERO poder buscar mi pokemon de interés por su nombre PARA no             tener que buscar entre todas las cards.

* UH-4: Yo como Jugador QUIERO poder organizar alfabéticamente las cards PARA poder                 encontrar aquellos pokemons de los cuales no se muy bien la ortografía de su               nombre.  

* UH-5: Yo como Jugador QUIERO poder ver estadísticas de debilidad y fuerza de los pokemons         PARA escoger el mejor.

## 4. Prototipos

Nuestro proyecto esta diseñado para desktop, nos enfocamos en los colores tanto del pokémon insigna (pikachu) como en los colores del juego pokémon GO.


### Prototipo de baja fidelidad
<img src="https://user-images.githubusercontent.com/79486039/130478281-cc5d5740-3ece-4d9c-bd12-bf2d9f617c5d.jpeg" width="50%">

<img src="https://user-images.githubusercontent.com/79486039/130478336-e253bfc9-373f-4c0e-bc7a-e9a2cc93b053.jpeg" width="50%">


### Prototipo de alta fidelidad

<img src="https://user-images.githubusercontent.com/79486039/130477995-10793b39-1f7b-4688-916c-0189f5f9ae2e.png">


<img src="https://user-images.githubusercontent.com/79486039/130478686-363c93f3-69d7-4375-a3c5-42f5ad241523.png">


## 5. Diseño final 

<img src="https://user-images.githubusercontent.com/79486039/130479199-0c62413c-9f98-4a0f-a530-57b24d71c6d2.png">

<img src="https://user-images.githubusercontent.com/79486039/130479306-4656f661-4fb4-4008-af67-d8f1aa94395e.png">


## 6. Test de usabilidad

problemas encontrados en nuestro test que nos permitieron realizar los cambios correspondientes.

* El diseño de iconos del tipo de pokémon para el filtro no era claro, así que se             incluyeron estos iconos a botones para hacer evidente el filtro.
 

## 7. Pruebas unitarias

Se realizaron las respectivas pruebas unitarias a las funciones.


## 8. Checklist

* [x] Usa VanillaJS.
* [X] Pasa linter (`npm run pretest`)
* [X] Pasa tests (`npm test`)
* [X] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [X] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [X] Incluye historias de usuario en `README.md`.
* [X] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [X] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [X] Incluye link a Zeplin en `README.md`.
* [X] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [X] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [X] UI: Permite ordenar data por uno o más campos (asc y desc).
* [X] UI: Permite filtrar data en base a una condición.
* [X] UI: Es _responsive_.
