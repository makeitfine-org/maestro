/*
 * "Maestro": Reminder and notepad project.
 *
 * Copyright 2021
 */

package net.maestro.backend.data.service.impl

import net.maestro.backend.data.model.NoteEntity
import net.maestro.backend.data.repository.NoteRepository
import net.maestro.backend.data.service.NoteService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class NoteServiceImpl(@Autowired val noteRepository: NoteRepository) : NoteService {
    override fun findAll() = noteRepository.findAll()

    override fun save(entity: NoteEntity) = noteRepository.save(entity)
}