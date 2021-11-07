/*
 * "Maestro": Reminder and notepad project.
 *
 * Copyright 2021
 */

package net.maestro.backend

import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertThrows
import org.springframework.context.annotation.Description

// TODO: 05.11.21 should be removed
@Description("should be removed")
class TempTest {
    @Test
    fun temp() {
        assertThrows<IndexOutOfBoundsException> { listOf("sdf")[1] }
    }
}