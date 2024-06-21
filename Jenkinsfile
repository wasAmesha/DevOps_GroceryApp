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
                    try {
                        docker.build('ameshawas/backend', 'backend')
                    } catch (Exception e) {
                        echo "Failed to build backend image: ${e}"
                        error "Stopping pipeline"
                    }
                }
            }
        }
        stage('Build Frontend Image') {
            steps {
                script {
                    try {
                        docker.build('ameshawas/frontend', 'frontend')
                    } catch (Exception e) {
                        echo "Failed to build frontend image: ${e}"
                        error "Stopping pipeline"
                    }
                }
            }
        }
        stage('Push Images to DockerHub') {
            steps {
                script {
                    try {
                        docker.withRegistry('https://index.docker.io/v1/', 'grocery-app-pass') {
                            docker.image('ameshawas/backend').push('latest')
                            docker.image('ameshawas/frontend').push('latest')
                        }
                    } catch (Exception e) {
                        echo "Failed to push images to DockerHub: ${e}"
                        error "Stopping pipeline"
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    try {
                        sh 'docker-compose down'
                        sh 'docker-compose up -d'
                    } catch (Exception e) {
                        echo "Failed to deploy: ${e}"
                        error "Stopping pipeline"
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
