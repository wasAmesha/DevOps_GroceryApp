pipeline {
    agent any
    
    environment {
        REPO_URL = 'https://github.com/wasAmesha/DevOps_GroceryApp'
        DOCKERHUB_CREDENTIALS = credentials('dockerPassword')
        DOCKER_IMAGE_NAME = 'ameshawas/grocery-app'
    }
    
    stages {
        stage('Checkout') {
            steps {
                git url: "${REPO_URL}", branch: 'main'
            }
        }
        stage('Build and Push Docker Images') {
            steps {
                script {
                    // Build backend Docker image
                    dir('backend') {
                        def backendImage = docker.build("${DOCKER_IMAGE_NAME}-backend:${BUILD_NUMBER}")
                        docker.withRegistry('https://index.docker.io/v1/', 'dockerPassword') {
                            backendImage.push()
                        }
                    }
                    
                    // Build frontend Docker image
                    dir('frontend') {
                        def frontendImage = docker.build("${DOCKER_IMAGE_NAME}-frontend:${BUILD_NUMBER}")
                        docker.withRegistry('https://index.docker.io/v1/', 'dockerPassword') {
                            frontendImage.push()
                        }
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    // Clean up existing containers and networks
                    sh 'docker-compose down'
                    
                    // Deploy using docker-compose
                    sh 'docker-compose up -d'
                }
            }
        }
    }
    
    post {
        always {
            // Clean up Docker login
            script {
                docker.withRegistry('', 'dockerPassword') {
                    docker.image("${DOCKER_IMAGE_NAME}-backend:${BUILD_NUMBER}").push()
                    docker.image("${DOCKER_IMAGE_NAME}-frontend:${BUILD_NUMBER}").push()
                }
                docker.image("${DOCKER_IMAGE_NAME}-backend:${BUILD_NUMBER}").remove()
                docker.image("${DOCKER_IMAGE_NAME}-frontend:${BUILD_NUMBER}").remove()
            }
        }
    }
}
