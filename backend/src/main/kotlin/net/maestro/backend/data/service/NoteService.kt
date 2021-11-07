/*
 * "Maestro": Reminder and notepad project.
 *
 * Copyright 2021
 */

package net.maestro.backend.data.service

import net.maestro.backend.data.model.NoteEntity

interface NoteService {
    fun findAll(): List<NoteEntity>

    fun save(entity: NoteEntity): NoteEntity
}