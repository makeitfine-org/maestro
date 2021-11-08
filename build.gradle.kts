/*
 * "Maestro": Reminder and notepad project.
 *
 * Copyright 2021
 */

plugins {
    base
    kotlin("jvm") version "1.5.31"
    id("io.spring.dependency-management") version "1.0.11.RELEASE" apply false
}

allprojects {
    group = "net.maestro"
    version = "0.0.1-SNAPSHOT"

    repositories {
        mavenLocal()
        mavenCentral()
    }
}

tasks.register<Exec>("all") {
    description = "Execute build on modules"
    println(description)

    workingDir(".")

    commandLine(
        "gradle",
        ":backend:clean", "--build-cache",
        ":backend:build", "--build-cache",
        ":frontend:npmInstall", "--build-cache"
    )
}
