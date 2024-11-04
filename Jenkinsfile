pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    // Используйте 'docker' из библиотеки Docker Pipeline
                    def customImage = docker.build("Dockerfile")
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    // Выполнение тестов внутри контейнера
                    customImage.inside {
                        sh 'npm test' // Замените команду на вашу
                    }
                }
            }
        }
    }
}
