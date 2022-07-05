/*
 * "Maestro": Reminder and notepad project.
 *
 * Copyright 2022
 */

package net.maestro.backend.web

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.mail.SimpleMailMessage
import org.springframework.mail.javamail.JavaMailSender
import org.springframework.mail.javamail.MimeMessageHelper
import org.springframework.stereotype.Component


@Component
class EmailSender(
    @Autowired private val mailSender: JavaMailSender
) {
    fun send() {
        val mail = SimpleMailMessage().also {
            it.setFrom("jsendmsg@i.ua")
            it.setTo("timferisto@gmail.com")
            it.setSubject("abc")
            it.setText("Hello!!!")
        }

        mailSender.send(mail)
    }
}