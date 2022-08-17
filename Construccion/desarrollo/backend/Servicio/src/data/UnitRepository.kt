package com.example.data

import com.example.dao.UnitDao
import com.example.repository.DatabaseFactory
import com.example.repository.UnitsTable
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.statements.InsertStatement

class UnitRepository : UnitDao {
    override suspend fun insert(name: String, category:String, description: String): Units? {
        var statement:InsertStatement<Number>? = null
        DatabaseFactory.dbQuery {
            statement = UnitsTable.insert { units ->
                units[UnitsTable.name] = name
                units[UnitsTable.category] = category
                units[UnitsTable.description] = description
                //insert rest data
            }
        }

        return rowToUnit(statement?.resultedValues?.get(0))
    }

    override suspend fun getAllUnits(): List<Units> =
        DatabaseFactory.dbQuery {
            UnitsTable.selectAll().mapNotNull {
                rowToUnit(it)
            }
        }

    override suspend fun getUnitsById(unitId: Int): Units? =
        DatabaseFactory.dbQuery {
            UnitsTable.select { UnitsTable.unitId.eq(unitId) }
                .map {
                    rowToUnit(it)
                }.singleOrNull()
        }

    override suspend fun deleteById(unitId: Int): Int =
        DatabaseFactory.dbQuery {
            UnitsTable.deleteWhere { UnitsTable.unitId.eq(unitId) }
        }

    override suspend fun update(unitId: Int, name: String, category:String, description: String): Int =
        DatabaseFactory.dbQuery {
            UnitsTable.update({ UnitsTable.unitId.eq(unitId) }) { unit ->
                unit[UnitsTable.name] = name
                unit[UnitsTable.category] = category
                unit[UnitsTable.description] = description
                //Other data from columns

            }
        }

    private fun rowToUnit(row:ResultRow?) : Units? {
        if(row == null){
            return null
        }
        return Units(
            unitId = row[UnitsTable.unitId],
            name = row[UnitsTable.name],
            category = row[UnitsTable.category],
            description = row[UnitsTable.description]
        )
    }
}