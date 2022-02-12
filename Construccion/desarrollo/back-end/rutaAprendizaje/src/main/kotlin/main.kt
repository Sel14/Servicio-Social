/*Puedes comentar todo el main excepo el llamado al Greeter para que cheques que si esté todo en orden, el jdk que está usando es el 1.8 del jvm*/

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
    /*
    val sumaBinomios = Tema("suma de binomios");
    //Agregar 1 reactivo
    val pregunta1 = Pregunta("2x + 4x");
    val respuestaCorrecta1 = Respuesta("6x");
    val respuestaIncorrecta1 = Respuesta("6x**2");
    val respuestaIncorrecta2 = Respuesta("ninguna");

    val respuestasIncorrectas:Array<Respuesta> = arrayOf(respuestaIncorrecta1,respuestaIncorrecta2);

    val reactivo1 = Reactivo(pregunta1, true, respuestaCorrecta, respuestasIncorrectas);
    reactivo1.respuestaCorrecta = respuestaCorrecta ;
*/
    var reactivos:ArrayList<Reactivo> = arrayListOf();
    println("Bienvenido profesor");
    for(i in 0..2) {
        println("Agregue un nuevo tema ");
        val tema =
            readLine();//tiene un bug con la primera lectura, pero al crear el jar debe desaparecer, ref: https://stackoverflow.com/questions/65119516/odd-behavior-with-kotlins-readline-function


        println("Agregue una pregunta");
        val pregunta = readLine()!!;


        println("Agregue una respuesta correcta");
        val respuestaCorrecta = readLine()!!;


        println("Agregue dos respuestas incorrecta");
        val respuestaInc1 = readLine()!!;
        val respuestaInc2 = readLine()!!;


        var respCorr = Respuesta(respuestaCorrecta);
        var question = Pregunta(pregunta);
        var respuestasInc = arrayOf(Respuesta(respuestaInc1),Respuesta(respuestaInc2));
        var react = Reactivo(question,true,respCorr,respuestasInc);
        reactivos.add(react);



        println("Hemos creado un reactivo!");
    }
    println("Hemos creado 3 reactivos, hagamos una secuencia!");
    println("Seleccione un reactivo");


    var showReactivo:String = "";
    var index = 1;
    for (current in reactivos){
        showReactivo +="$index.- ${current.pregunta.pregunta}\n";
        index++;
    }
    println("Elija un reactivo \n $showReactivo");
    val seleccion = readLine();











}
