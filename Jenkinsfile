pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    def customImage = docker.build("zasvoih/sdf:latest")
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    customImage.inside {
                        sh 'npm test'
                    }
                }
            }
        }
    }
}
