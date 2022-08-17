package com.example.dao

import com.example.data.Units


interface UnitDao {
    suspend fun insert(
        name:String,
        category: String,
        description: String
        //carrer: String
        //Agregar resto de los datos segun el modelo de la base
    ): Units?

    suspend fun getAllUnits():List<Units>?

    suspend fun getUnitsById(unitId:Int): Units?

    suspend fun deleteById(unitId: Int):Int

    suspend fun update(
        unitId: Int,
        name:String,
        category: String,
        description: String
    ):Int
}