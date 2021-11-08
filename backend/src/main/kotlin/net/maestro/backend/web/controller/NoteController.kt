/*
 * "Maestro": Reminder and notepad project.
 *
 * Copyright 2021
 */

package net.maestro.backend.web.controller

import net.maestro.backend.data.model.NoteEntity
import net.maestro.backend.data.service.NoteService
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/note")
class NoteController(@Autowired val noteService: NoteService) {

    companion object {
        val log: Logger = LoggerFactory.getLogger(this.javaClass)
    }

    @GetMapping
    fun list(): List<NoteEntity> {
        log.info("find all")
        return noteService.findAll()
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    fun create(@RequestParam title: String): NoteEntity {
        val noteEntity = NoteEntity(title)
        log.info("create note: ${noteEntity}")
        return noteService.save(noteEntity)
    }
}