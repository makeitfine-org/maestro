/*
 * "Maestro": Reminder and notepad project.
 *
 * Copyright 2021
 */

package net.maestro

import org.springframework.boot.Banner
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class MaestroApplication

fun main(args: Array<String>) {
    runApplication<MaestroApplication>(*args) {
        setBannerMode(Banner.Mode.OFF)
    }
}
