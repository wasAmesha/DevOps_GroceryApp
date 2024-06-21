pipeline {
    agent any

    environment {
        REPO_URL = 'https://github.com/wasAmesha/DevOps_GroceryApp.git'
        DOCKERHUB_CREDENTIALS = credentials('grocery-app-pass')
    }

    stages {
        stage('Checkout') {
            steps {
                git url: "${REPO_URL}", branch: 'main'
            }
        }
        stage('Build Backend Image') {
            steps {
                script {
                    docker.build('ameshawas/backend', 'backend')
                }
            }
        }
        stage('Build Frontend Image') {
            steps {
                script {
                    docker.build('ameshawas/frontend', 'frontend')
                }
            }
        }
        stage('Push Images to DockerHub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'grocery-app-pass') {
                        docker.image('ameshawas/backend').push('latest')
                        docker.image('ameshawas/frontend').push('latest')
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    sh 'docker-compose down'
                    sh 'docker-compose up -d'
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
