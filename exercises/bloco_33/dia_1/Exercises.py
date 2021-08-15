from math import ceil

# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.


def maior(x, y):
    if x > y:
        return x
    else:
        return y


# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.


def media(lista):
    total = 0
    for valor in lista:
        total += valor
    return total / len(lista)


# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n.


def squareDot(size):
    if size > 1:
        for column in range(size):
            print("*" * size)


# Exercício 4: Crie uma função que receba uma lista de nomes e
# retorne o nome com a maior quantidade de caracteres.


def nameLen(name):
    return len(name)


def biggerName(listOfNames):
    lenList = list(map(nameLen, listOfNames))
    sortedList = sorted(lenList)
    index = lenList.index(sortedList[-1])
    print(listOfNames[index])


# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada 3
# metros quadrados e que a tinta é vendida em latas de 18 litros,
# que custam R$ 80,00. Crie uma função que retorne dois valores em uma
# tupla contendo a quantidade de latas de tinta a serem compradas e o preço
# total a partir do tamanho de uma parede(em m²).
# Reference: https://www.kite.com/python/answers/how-to-print-a-float-with-two-decimal-places-in-python


def painting(meters):
    cans = ceil(meters / 3 / 18)
    value = "R$" + str("{:.2f}".format(cans * 80))
    print((cans, value))


# Exercício 6: Crie uma função que receba os três lado de um triângulo
# e informe qual o tipo de triângulo formado ou "não é triangulo" ,
# caso não seja possível formar um triângulo.


def triangleType(face_a, face_b, face_c):
    if (
        ((face_a + face_b) > face_c)
        and ((face_b + face_c) > face_a)
        and ((face_a + face_c) > face_b)
    ):
        if face_a == face_b == face_c:
            print("Triângulo Equilátero")
        elif face_a != face_b != face_c != face_a:
            print("Triângulo Escaleno")
        else:
            print("Triângulo Isósceles")
    else:
        print("Its not a triangle")
