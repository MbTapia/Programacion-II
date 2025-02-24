import math

class Punto:
    def _init_(self, x: float, y: float):
        self.x = x
        self.y = y

    def _str_(self):
        return f"Punto({self.x}, {self.y})"

class Linea:
    def _init_(self, p1: Punto, p2: Punto):
        self.p1 = p1
        self.p2 = p2

    def dibujaLinea(self):
        return f"Dibujando línea de {self.p1} a {self.p2}"

    def _str_(self):
        return f"Linea({self.p1}, {self.p2})"

class Circulo:
    def _init_(self, centro: Punto, radio: float):
        self.centro = centro
        self.radio = radio

    def dibujaCirculo(self):
        return f"Dibujando círculo con centro en {self.centro} y radio {self.radio}"

    def _str_(self):
        return f"Circulo(Centro: {self.centro}, Radio: {self.radio})"

# Ejemplo de uso
p1 = Punto(1, 2)
p2 = Punto(4, 5)
linea = Linea(p1, p2)
circulo = Circulo(p1, 3)

print(linea)  # Salida: Linea(Punto(1, 2), Punto(4, 5))
print(linea.dibujaLinea())  # Salida: Dibujando línea de Punto(1, 2) a Punto(4, 5)

print(circulo)  # Salida: Circulo(Centro: Punto(1, 2), Radio: 3)
print(circulo.dibujaCirculo())  # Salida: Dibujando círculo con centro en Punto(1, 2) y radio 3
