pipeline {
    agent any

    stages {
        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    // Обратите внимание на корректное имя образа
                    sh 'docker build -t georgakov/myapp .'
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    sh 'docker run --rm georgakov/myapp npm test'
                }
            }
        }
    }
}
