package com.example

import com.example.repository.DatabaseFactory
import com.example.data.UnitRepository
import com.example.routes.unit
import io.ktor.application.*
import io.ktor.routing.*
import io.ktor.locations.*
import io.ktor.gson.*
import io.ktor.features.*

fun main(args: Array<String>): Unit = io.ktor.server.netty.EngineMain.main(args)

@Suppress("unused") // Referenced in application.conf
@kotlin.jvm.JvmOverloads
fun Application.module(testing: Boolean = false) {

    DatabaseFactory.init()
    val db = UnitRepository()

    install(Locations) {
    }

    install(ContentNegotiation) {
        gson {
            setPrettyPrinting()
        }
    }

    routing {
        unit(db)

    }
}

const val API_VERSION = "v1/"

