package com.example.routes

import com.example.API_VERSION
import com.example.data.UnitRepository
import io.ktor.application.*
import io.ktor.http.*
import io.ktor.locations.*
import io.ktor.request.*
import io.ktor.response.*
import io.ktor.routing.*

const val CREATE_UNIT =  "$API_VERSION/unit"

@OptIn(KtorExperimentalLocationsAPI::class)
@Location(CREATE_UNIT)
class CreateUnit

fun Route.unit(
    db: UnitRepository
){
    post<CreateUnit>{
        val parameter = call.receive<Parameters>()

        val name = parameter["name"] ?: return@post call.respondText(
            "MISSING FIELD",
            status = HttpStatusCode.Unauthorized
        )
        val category = parameter["category"] ?: return@post call.respondText(
            "MISSING FIELD",
            status = HttpStatusCode.Unauthorized
        )
        val description = parameter["description"] ?: return@post call.respondText(
            "MISSING FIELD",
            status = HttpStatusCode.Unauthorized
        )


        /*Rest of data fields*/

        try {
            val unit = db.insert(name, category, description)

            unit?.unitId?.let {
                call.respond(status = HttpStatusCode.OK,unit)
            }
        }catch (e:Throwable){
            call.respondText("${e.message}")
        }

    }

    //Get All Units from databe
    get<CreateUnit>{
        try {
            val unitList = db.getAllUnits()
            call.respond(status = HttpStatusCode.OK, unitList)
        }catch (e:Throwable){
            call.respondText("${e.message}")
        }
    }

    //Detele units by id
    delete("$API_VERSION/unit/{id}"){
        val id = call.parameters["id"] ?: return@delete call.respondText(
            "NO ID",
            status = HttpStatusCode.Unauthorized
        )

        val result = db.deleteById(id.toInt())
        try {
            if (result == 1){
                call.respondText("$id deleted sucessfully...")
            }else{
                call.respondText("$id not found...")
            }
        }catch (e:Throwable){
            call.respondText("${e.message}")
        }
    }
}