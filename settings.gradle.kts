/*
 * "Maestro": Reminder and notepad project.
 *
 * Copyright 2021
 */
pluginManagement {
    repositories {
        gradlePluginPortal()
    }
}

rootProject.name = "maestro"
include("backend")
include("frontend")
include("mid")
include("nodejs-temp")
