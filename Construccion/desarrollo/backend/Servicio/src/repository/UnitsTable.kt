package com.example.repository

import org.jetbrains.exposed.sql.Column
import org.jetbrains.exposed.sql.Table

object UnitsTable : Table() {
    val unitId:Column<Int> = integer("userId").autoIncrement()
    val name:Column<String> = varchar("name", 512)
    val category: Column<String> = varchar("user", 512)
    val description: Column<String> = varchar("password", 512)

    override val primaryKey: PrimaryKey = PrimaryKey(unitId)
}