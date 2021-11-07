/*
 * "Maestro": Reminder and notepad project.
 *
 * Copyright 2021
 */

package net.maestro.server.data.service.impl

import net.maestro.server.data.model.NoteEntity
import net.maestro.server.data.repository.NoteRepository
import net.maestro.server.data.service.NoteService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class NoteServiceImpl(@Autowired val noteRepository: NoteRepository) : NoteService {
    override fun findAll() = noteRepository.findAll()

    override fun save(entity: NoteEntity) = noteRepository.save(entity)
}