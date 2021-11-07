/*
 * "Maestro": Reminder and notepad project.
 *
 * Copyright 2021
 */

package net.maestro.backend

import net.maestro.backend.data.model.NoteEntity
import net.maestro.backend.data.service.NoteService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.ApplicationArguments
import org.springframework.boot.ApplicationRunner
import org.springframework.stereotype.Component

@Component
class NoteFiller(@Autowired val noteService: NoteService) : ApplicationRunner {
    override fun run(args: ApplicationArguments?) {
        noteService.save(NoteEntity("note1"))
        noteService.save(NoteEntity("note2"))
        noteService.save(NoteEntity("note3"))
    }
}