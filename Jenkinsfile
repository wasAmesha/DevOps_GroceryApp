pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('grocery-app-pass')
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/wasAmesha/DevOps_GroceryApp.git'
            }
        }

        stage('Build Backend Image') {
            steps {
                script {
                    def backendImage = docker.build('grocery-backend', './backend')
                }
            }
        }

        stage('Build Frontend Image') {
            steps {
                script {
                    def frontendImage = docker.build('grocery-frontend', './frontend')
                }
            }
        }

        stage('Push Images to DockerHub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'DOCKERHUB_CREDENTIALS') {
                        docker.image('grocery-backend').push("${env.BUILD_ID}")
                        docker.image('grocery-frontend').push("${env.BUILD_ID}")
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'DOCKERHUB_CREDENTIALS') {
                        docker.image('grocery-backend:${env.BUILD_ID}').run('-d -p 7000:7000')
                        docker.image('grocery-frontend:${env.BUILD_ID}').run('-d -p 3000:80')
                    }
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
