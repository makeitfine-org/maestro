/*
 * "Maestro": Reminder and notepad project.
 *
 * Copyright 2021
 */

package net.maestro.backend.data.repository

import net.maestro.backend.data.model.NoteEntity
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface NoteRepository : CrudRepository<NoteEntity, Long> {
    override fun findAll(): List<NoteEntity>
}