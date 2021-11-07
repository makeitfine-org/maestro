/*
 * "Maestro": Reminder and notepad project.
 *
 * Copyright 2021
 */

package net.maestro.server.data.model

import lombok.NoArgsConstructor
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id


@Entity
@NoArgsConstructor
data class NoteEntity(
    @Id
    @GeneratedValue
    var id: Long?,
    var title: String?,
//    private var note: String?
)