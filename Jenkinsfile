pipeline {
    agent { label "vinod" }  // Use the appropriate label for Jenkins Slave, or leave it as 'master' for Jenkins Master

    environment {
        DOCKER_IMAGE = "notes-app:latest"
        DOCKER_REGISTRY = "docker.io"  // Docker Hub
        DOCKER_USER = credentials('dockerHubCredentails').username  // Fetch username from credentials
        DOCKER_PASS = credentials('dockerHubCredentails').password  // Fetch password from credentials
    }

    stages {
        stage("Code") {
            steps {
                echo "Cloning the repository"
                dir('devops') {  
                    git branch: 'main', url: 'https://github.com/Harshraj843112/django-notes-app.git'
                }
            }
        }

        stage("Build") {
            steps {
                echo "Building the Docker image"
                dir('devops') {  
                    sh "docker build -t $DOCKER_IMAGE ."
                }
            }
        }

        stage("Push to DockerHub") {
            steps {
                echo "Pushing image to Docker Hub"
                script {
                    // Docker login and push
                    withCredentials([usernamePassword(credentialsId: 'dockerHubCredentails', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                        sh """
                            echo \$DOCKER_PASS | docker login -u \$DOCKER_USER --password-stdin
                            docker tag $DOCKER_IMAGE \$DOCKER_USER/\$DOCKER_IMAGE
                            docker push \$DOCKER_USER/\$DOCKER_IMAGE
                        """
                    }
                }
            }
        }

        stage("Deploy on Jenkins") {
            steps {
                echo "Deploying on Jenkins server (local)"
                script {
                    // Pull the latest Docker image and run it on Jenkins server (Master/Slave)
                    try {
                        sh """
                            echo "Logging into Docker"
                            echo \$DOCKER_PASS | docker login -u \$DOCKER_USER --password-stdin

                            echo "Pulling the latest image from Docker Hub"
                            docker pull \$DOCKER_USER/\$DOCKER_IMAGE
                            
                            echo "Stopping and removing old container (if exists)"
                            docker rm -f notes-app || true
                            
                            echo "Starting new container"
                            docker run -d -p 8000:8000 --name notes-app \$DOCKER_USER/\$DOCKER_IMAGE
                        """
                    } catch (Exception e) {
                        currentBuild.result = 'FAILURE'
                        echo "Error during Docker deployment: ${e.message}"
                        throw e  // rethrow the error to mark the pipeline as failed
                    }
                }
            }
        }
    }

    post {
        always {
            echo "Cleaning up the environment after the build"
            // You can add cleanup commands here if necessary
        }
        success {
            echo "Deployment succeeded!"
        }
        failure {
            echo "Deployment failed!"
        }
    }
}
