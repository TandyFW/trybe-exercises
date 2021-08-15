# nome = input("Digite um nome ")

# for indice in range(0, len(nome)):
#     print(nome[indice:indice + 1])

# total = 0
# valores = input(
#     "Digite varios numeros separados por espaço, iremos somá-los para você. "
# )
# lista = valores.split()
# for valor in lista:
#     if valor.isdigit():
#         total += int(valor)
#     else:
#         print(f"Erro ao somar valores, {valor} é um valor inválido")
# print(f"Soma dos números válidos inseridos: {total}.")

import sys

with open("texto.txt") as texto:
    for line in texto:
        found = False
        for param in sys.argv[1:]:
            if param.lower() in line.lower():
                found = True
                break
                # Ternátio do Python!
        row = line.strip() # strip para tirar a quebra de linha extra.
        print(row.upper()) if found else print(row)
