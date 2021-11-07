/*
 * "Maestro": Reminder and notepad project.
 *
 * Copyright 2021
 */

package net.maestro.server.data.service

import net.maestro.server.data.model.NoteEntity

interface NoteService {
    fun findAll(): List<NoteEntity>

    fun save(entity: NoteEntity): NoteEntity
}