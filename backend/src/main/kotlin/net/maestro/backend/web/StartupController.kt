package net.maestro.backend.web

import lombok.extern.slf4j.Slf4j
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@Slf4j
@RestController
class StartupController(
    @Autowired private val emailSender: EmailSender
) {
    @GetMapping("/startup")
    fun index() = "Hi, it's \"Maestro\" project"

    @GetMapping("/email")
    fun sendEmail(): String {
        emailSender.send()
        return "Send email"
    }
}
