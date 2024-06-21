pipeline {
    agent any

    environment {
        REPO_URL = 'https://github.com/wasAmesha/DevOps_GroceryApp.git'
    }

    stages {
        stage('Checkout') {
            steps {
                git url: "${REPO_URL}", branch: 'main'
            }
        }
        stage('Build Docker Frontend Image') {
            steps {  
                bat 'docker build -t ameshawas/grocery-app-frontend:%BUILD_NUMBER% .'
            }
        }
        stage('Build Docker Backend Image') {
            steps {  
                bat 'docker build -t ameshawas/grocery-app-backend:%BUILD_NUMBER% .'
            }
        }
        stage('Login to Docker Hub') {
            steps {
                withCredentials([string(credentialsId: 'dockerPassword', variable: 'dockerPassword')]) {
                    script {
                        bat "docker login -u ameshawas -p ${dockerPassword}"
                    }
                }
            }
        }
        stage('Push Frontend Image') {
            steps {
                bat 'docker push ameshawas/grocery-app-frontend:%BUILD_NUMBER%'
            }
        }
        stage('Push Backend Image') {
            steps {
                bat 'docker push ameshawas/grocery-app-backend:%BUILD_NUMBER%'
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
