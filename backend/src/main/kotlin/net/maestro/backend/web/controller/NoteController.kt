/*
 * "Maestro": Reminder and notepad project.
 *
 * Copyright 2021
 */

package net.maestro.backend.web.controller

import lombok.extern.slf4j.Slf4j
import net.maestro.backend.data.model.NoteEntity
import net.maestro.backend.data.service.NoteService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*

@Slf4j
@RestController
@RequestMapping("/api/note")
class NoteController(@Autowired val noteService: NoteService) {

    @GetMapping
    fun list() = noteService.findAll()

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    fun create(@RequestParam title: String) = noteService.save(NoteEntity(title))
}