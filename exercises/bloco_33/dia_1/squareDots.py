def squareDot(size):
    dot = ""
    if size > 0:
        for column in range(0, size):
            dot += "*"
        for line in range(0, size):
            print(f"{dot}\n")
    else:
        print("Função deve ter um parametro positivo")


squareDot(2)
