# Exercício 1: Dada uma lista, descubra o menor elemento. Por exemplo,
# [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 2.


def smaller(list):
    print(sorted(list)[0])


# Exercício 2: Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um triângulo retângulo com 5 asteriscos de base.


def pyramid(base):
    for size in range(base + 1):
        print("*" * size)


# Exercício 3: Crie uma função que receba um número inteiro N e retorne
# o somatório de todos os números de 1 até N.
# Por exemplo, para N = 5, o valor esperado será 15.


def fatorial(value):
    result = 0
    for number in range(value + 1):
        result += number
    print(result)


# Exercício 4: Um posto está vendendo combustíveis com a
# seguinte tabela de descontos:
# Álcool:
#   - Até 20 litros, desconto de 3% por litro;
#   - Acima de 20 litros, desconto de 5% por litro.
# Gasolina:
#   - Até 20 litros, desconto de 4% por litro;
#   - Acima de 20 litros, desconto de 6% por litro.
# Escreva uma função que receba o número de litros vendidos, o tipo de
# combustível (codificado da seguinte forma: A - álcool, G - gasolina),
# e retorne o valor a ser pago pelo cliente, sabendo-se que o preço do litro
# da gasolina é R$ 2,50, e o preço do litro do álcool é R$ 1,90.


def fillup(liters, gas):
    alcool = {"A": 2.5, "A_low_discount": 0.03, "A_high_discount": 0.05}
    gasolina = {"B": 1.9, "B_low_discount": 0.04, "B_high_discount": 0.06}
    combustivel = {**alcool, **gasolina}
    if liters < 20:
        print(
            liters
            * combustivel[gas]
            * (1 - combustivel[gas + "_low_discount"])
        )
    else:
        print(
            liters
            * combustivel[gas]
            * (1 - combustivel[gas + "_high_discount"])
        )
