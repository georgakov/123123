pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'zasvoih/sdf:latest' // Имя вашего Docker образа
        DOCKER_CREDENTIALS_ID = 'dockerhub-credentials' // ID учетных данных Docker Hub
    }

    stages {
        stage('Clone Repository') {
            steps {
                // Клонируем репозиторий из GitHub
                git 'https://github.com/georgakov/123123.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Создаем Docker образ
                    sh "docker build -t ${DOCKER_IMAGE} ."
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    // Запускаем тесты внутри Docker контейнера
                    sh "docker run --rm ${DOCKER_IMAGE} npm test" // Запустите свои тесты здесь
                }
            }
        }

        stage('Push to Docker Hub') {
            when {
                expression { currentBuild.result == null } // Проверяем, что тесты успешны
            }
            steps {
                script {
                    // Логинимся в Docker Hub и загружаем образ
                    docker.withRegistry('https://index.docker.io/v1/', "${DOCKER_CREDENTIALS_ID}") {
                        sh "docker push ${DOCKER_IMAGE}"
                    }
                }
            }
        }
    }

    post {
        always {
            // Удаляем временные Docker образы
            sh "docker rmi ${DOCKER_IMAGE} || true"
        }
        success {
            echo 'Build succeeded!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}

