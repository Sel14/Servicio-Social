class Greeter(val name: String) {
    fun greet() {
        println("Hello, $name")
    }
}
class Respuesta(respuesta: String){
    val respuesta = respuesta;

    var reactivo:Reactivo
        get() {
            return this.reactivo
        }
        set(reactivo){
            this.reactivo = reactivo;
        }

}
class Pregunta(val pregunta:String){
    var respuestaCorrecta:Respuesta
        get() {
            return this.respuestaCorrecta
        }
        set(value) {this.respuestaCorrecta = value}
    var respuestasIncorrectas:Array<Respuesta> = arrayOf();
}
class Reactivo( pregunta: Pregunta,  esRutaAprendizaje:Boolean){
    val pregunta = pregunta;
    var esRutaAprendizaje = esRutaAprendizaje;
}
class Tema( tema:String) {

    val reactivos:Array<Reactivo> = arrayOf();
    var tema = tema;
}


fun main() {
    Greeter("something").greet()
    //Usuario genera 1 tema
    val sumaBinomios = Tema("suma de binomios");
    //Agregar 1 reactivo
    val pregunta1 = Pregunta("2x + 4x");
    val respuesta1 = Respuesta("6x");
    val respuesta2 = Respuesta("6x**2");
    val respuesta3 = Respuesta("ninguna");

    val respuestasIncorrectas:Array<Respuesta> = arrayOf(respuesta2,respuesta3);
    pregunta1.respuestaCorrecta = respuesta1;
    pregunta1.respuestasIncorrectas = respuestasIncorrectas;

    val reactivo1 = Reactivo(pregunta1,true);



}