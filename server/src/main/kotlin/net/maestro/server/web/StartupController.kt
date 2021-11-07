package net.maestro.server.web

import lombok.extern.slf4j.Slf4j
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@Slf4j
@RestController
class StartupController {

    @GetMapping("/startup")
    fun index() = "Hi, it's \"Maestro\" project"
}