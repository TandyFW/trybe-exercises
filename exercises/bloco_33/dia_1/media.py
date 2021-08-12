def media(lista):
    total = 0
    for valor in lista:
        total += valor
    return total / len(lista)


print(media([2, 4, 11, 85]))
