/*
 * "Maestro": Reminder and notepad project.
 *
 * Copyright 2021
 */

import com.github.gradle.node.task.NodeTask
import org.gradle.api.tasks.testing.logging.TestExceptionFormat.FULL
import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    id("org.springframework.boot") version "2.5.6"
    id("io.spring.dependency-management") version "1.0.11.RELEASE"
    id("com.github.node-gradle.node") version "3.0.1"
    war
    kotlin("jvm") version "1.5.31"
    kotlin("plugin.spring") version "1.5.31"
    //    todo: to be deleted
    kotlin("plugin.jpa") version "1.5.31"
}

group = "net.maestro"
version = "0.0.1-SNAPSHOT"
java.sourceCompatibility = JavaVersion.VERSION_15

repositories {
    // Use Maven Central for resolving dependencies.
    mavenCentral()
}

dependencies {
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("org.jetbrains.kotlin:kotlin-reflect")
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
    providedRuntime("org.springframework.boot:spring-boot-starter-tomcat")
    testImplementation("org.springframework.boot:spring-boot-starter-test") {
        exclude(group = "junit", module = "junit")
        exclude(group = "org.junit.vintage", module = "junit-vintage-engine")
    }

    compileOnly("org.projectlombok:lombok:1.18.22")
    annotationProcessor("org.projectlombok:lombok:1.18.22")

    testCompileOnly("org.projectlombok:lombok:1.18.22")
    testAnnotationProcessor("org.projectlombok:lombok:1.18.22")

    //    todo: to be deleted
    implementation("org.springframework.boot:spring-boot-starter-data-jpa")
    //    todo: to be deleted
    runtimeOnly("com.h2database:h2")
}

tasks.withType<KotlinCompile> {
    kotlinOptions {
        freeCompilerArgs = listOf("-Xjsr305=strict")
        jvmTarget = "15"
    }
}

tasks.withType<Test> {
    useJUnitPlatform() {
        excludeTags("smoke", "healthCheck", "integration")
    }
    jvmArgs = mutableListOf("--enable-preview")
    maxParallelForks = Runtime.getRuntime().availableProcessors()

    testLogging {
        showStandardStreams = false
        exceptionFormat = FULL
        afterSuite(KotlinClosure2({ desc: TestDescriptor, result: TestResult ->
            if (desc.parent == null) { // will match the outermost suite
                println("Results: ${result.resultType} (${result.testCount} tests, ${result.successfulTestCount} successes, ${result.failedTestCount} failures, ${result.skippedTestCount} skipped)")
            }
        }))
    }
}

val healthCheckTest = tasks.register<Test>("healthCheck") {
    description = "Run healthCheck tests"

    useJUnitPlatform() {
        includeTags("healthCheck")
    }

    mustRunAfter(tasks.test)
}

val smokeTest = tasks.register<Test>("smokeTest") {
    description = "Run smoke tests"

    useJUnitPlatform() {
        includeTags("smoke")
    }

    mustRunAfter(healthCheckTest)
}

val intTest = tasks.register<Test>("intTest") {
    description = "Run integration tests"

    useJUnitPlatform() {
        includeTags("integration")
    }

    mustRunAfter(smokeTest)
}

tasks.check {
    dependsOn(healthCheckTest)
    dependsOn(smokeTest)
    dependsOn(intTest)
}

node {
    version.set("14.15.5")
}

val buildReactApp = tasks.register<NodeTask>("buildReactApp") {
    dependsOn(tasks.npmInstall)

    script.set(project.file("node_modules/webpack/bin/webpack.js"))
    args.set(
        listOf(
            "--mode", "development",
            "--entry", "./src/main/webapp/javascript/Main.jsx",
            "-o", "./src/main/resources/static/dist"
        )
    )
}

tasks.processResources {
    dependsOn(buildReactApp)
}

tasks.withType<Delete>(){
    delete("node_modules")
    delete("src/main/resources/static/dist")
}