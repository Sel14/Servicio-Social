class Greeter(val name: String) {
    fun greet() {
        println("Hello, $name")
    }
}
class Respuesta(val respuesta: String){

    var reactivo:Reactivo
        get() {
            return this.reactivo
        }
        set(reactivo){
            this.reactivo = reactivo;
        }

}
class Pregunta(val pregunta:String){

}
class Reactivo(
    val pregunta: Pregunta,
    val esRutaAprendizaje: Boolean,
    respuestaCorrecta: Respuesta,
    respuestasIncorrectas: Array<Respuesta>
){
    var respuestaCorrecta:Respuesta = respuestaCorrecta
        get(){
        return field;
        }
        set(value){
            field = value;
        }


    var respuestasIncorrectas: Array<Respuesta> = respuestasIncorrectas
        get(){
            return field;
        }
        set(value){
            field = value;
        }



    fun agregarRespuestaIncorrecta(respuesta:Respuesta){

    }
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
    val respuestaCorrecta = Respuesta("6x");
    val respuestaIncorrecta1 = Respuesta("6x**2");
    val respuestaIncorrecta2 = Respuesta("ninguna");

    val respuestasIncorrectas:Array<Respuesta> = arrayOf(respuestaIncorrecta1,respuestaIncorrecta2);

    val reactivo1 = Reactivo(pregunta1, true, respuestaCorrecta, respuestasIncorrectas);
    reactivo1.respuestaCorrecta = respuestaCorrecta ;



}