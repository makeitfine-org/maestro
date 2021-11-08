plugins {
    id("com.github.node-gradle.node") version "3.0.1"
}

repositories {
    // Use Maven Central for resolving dependencies.
    mavenCentral()
}

node {
    version.set("14.15.5")
}
