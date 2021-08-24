import math

# Exercício 2: Para exercitar nossa capacidade de abstração,
# vamos modelar algumas partes de um software de geometria.
# Como poderíamos modelar um objeto retângulo?

class triangulo:
    """
        objeto recebe 3 parâmetros, lado_a, lado_b e lado_c.
        caso só receba um, todos os lados serão iguais.
    """
    def __init__(self, lado_a, lado_b=None, lado_c=None):
        self.lado_a = lado_a
        self.lado_b = lado_b if lado_b is not None else lado_a
        self.lado_c = lado_c if lado_c is not None else lado_a

    def calcular_perimetro(self):
        return self.lado_a + self.lado_b + self.lado_c

    def calcular_area(self):
        perimetro = self.calcular_perimetro()
        return math(perimetro * (perimetro - self.lado_a) *
            (perimetro - self.lado_b) * (perimetro - self.lado_c))


# Exercício 3: E como poderíamos definir um círculo? Qual seu nome, atributos e comportamentos?

class circulo:
    def __init__(self, diametro):
        self.diametro = diametro
        self.pi = 3.14
    
    def calcular_circunferencia(self):
        return 2 * self.pi * (self.diametro / 2)

    def calcular_area(self):
        return self.pi * (self.diametro / 2) ** 2
