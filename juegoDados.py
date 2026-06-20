# Importamos la libreria que se utilizara para
# generar los numeros de los dados de forma aleatoria
import random

puntaje1 = puntaje2 = 0

jugador1 = input("Digite el nombre del primer jugador: ")
jugador2 = input("Digite el nombre del segundo jugador: ")
rondas = int(input("Digite el numero de rondas: "))

# Utilizamos la estructura ciclica for para controlar las rondas del juego
for r in range(0, rondas):
    print("Ronda #",r+1)

    # Utilizamos la estructura ciclica for para los 2 lanzamientos de los dados
    # Uno por cada jugador
    for i in range(0,2):
        puntaje = 0
        print("Turno del jugador ",i+1)
        input("Presione la tecla Enter para lanzar los dados")

        # Guardamos en las variables dado1, dado2 y dado3 el valor de la
        # cara del dado generado al azar
        dado1 = random.randint(1,6)
        dado2 = random.randint(1,6)
        dado3 = random.randint(1,6)

        # Sumamos las caras de los dado 
        suma = dado1 + dado2 + dado3

        # Verificamos las reglas del juego para asignar los puntos ganados
        # 1. Trio perfecto (los tres dados iguales): 15 puntos
        if dado1 == dado2 and dado1 == dado3:
            puntaje += 15
        # 2. Si dos dados son iguales: 8 puntos
        elif dado1 == dado2 or dado1 == dado3 or dado2 == dado3:
            puntaje += 8

        # 3. Suma mayor o igual a 15: 10 puntos
        elif suma >= 15:
            puntaje += 10


        # 4. Suma menor a 10: 5 puntos
        elif suma < 10:
            puntaje +=5

        # Cualquier otro resultado: 6 puntos
        else:
            puntaje +=6

        if i == 0:
            puntaje1 += puntaje 
        else:
            puntaje2 += puntaje

# Mostramos los resultados
print("Jugador 1:",jugador1)
print("Puntaje: ",puntaje1)
print("-------------------")
print("Jugador 2:",jugador2)
print("Puntaje: ",puntaje2)
print("-------------------")

# Establece el ganador
if puntaje1 > puntaje2:
    print("Ganador: ",jugador1)
elif puntaje2 > puntaje1:
    print("Ganador: ",jugador2)
else:
    print("Empate")