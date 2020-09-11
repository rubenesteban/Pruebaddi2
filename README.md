# Prueba

1. Consultar el endpoint `http://jservice.io/api/random` este devolverá un json con una pregunta de una trivia al azar.
1. Utilizando componentes de React, presentar la pregunta devuelta por el endpoint en pantalla.
1. Debajo de la pregunta colocar un campo de texto que permita escribir la respuesta y un botón que permita validar la respuesta. Se debe comparar con la respuesta correcta de la pregunta. La comparación debe ignorar las mayúsculas y minúsclas.
1. Si la respuesta es correcta, se debe sumar el puntaje correspondiente de la pregunta a un acumulador de puntos. El acumulador de puntos debe mostrarse en el formato "puntos obtenidos / puntos posibles", Ej. 400 / 1200.
1. Incluir un botón "Siguiente" que permita obtener una nueva pregunta aleatoria.
1. Cuando el usuario conteste 10 preguntas, la aplicación debe validar si el usuario ha obtenido el 85% del puntaje posible y debe mostrar el mensaje "Ganaste", caso contrario "Perdiste"
1. Presentar un botón volver a jugar que reiniciará el juego.
