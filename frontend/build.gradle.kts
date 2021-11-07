import com.github.gradle.node.task.NodeTask

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
