class Punto {
    private float x;
    private float y;

    public Punto(float x, float y) {
        this.x = x;
        this.y = y;
    }

    
    public String toString() {
        return "Punto(" + x + ", " + y + ")";
    }
}

class Linea {
    private Punto p1;
    private Punto p2;

    public Linea(Punto p1, Punto p2) {
        this.p1 = p1;
        this.p2 = p2;
    }

    public String dibujaLinea() {
        return "Dibujando línea de " + p1 + " a " + p2;
    }

   
    public String toString() {
        return "Linea(" + p1 + ", " + p2 + ")";
    }
}

class Circulo {
    private Punto centro;
    private float radio;

    public Circulo(Punto centro, float radio) {
        this.centro = centro;
        this.radio = radio;
    }

    public String dibujaCirculo() {
        return "Dibujando círculo con centro en " + centro + " y radio " + radio;
    }

    public String toString() {
        return "Circulo(Centro: " + centro + ", Radio: " + radio + ")";
    }
}

public class Main {
    public static void main(String[] args) {
        Punto p1 = new Punto(1, 2);
        Punto p2 = new Punto(4, 5);
        Linea linea = new Linea(p1, p2);
        Circulo circulo = new Circulo(p1, 3);

        System.out.println(linea);  // Salida: Linea(Punto(1, 2), Punto(4, 5))
        System.out.println(linea.dibujaLinea());  // Salida: Dibujando línea de Punto(1, 2) a Punto(4, 5)

        System.out.println(circulo);  // Salida: Circulo(Centro: Punto(1, 2), Radio: 3)
        System.out.println(circulo.dibujaCirculo());  // Salida: Dibujando círculo con centro en Punto(1, 2) y radio 3
    }
}
