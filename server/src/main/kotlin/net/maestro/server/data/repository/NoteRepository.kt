/*
 * "Maestro": Reminder and notepad project.
 *
 * Copyright 2021
 */

package net.maestro.server.data.repository

import net.maestro.server.data.model.NoteEntity
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface NoteRepository : CrudRepository<NoteEntity, Long> {
    override fun findAll(): List<NoteEntity>
}