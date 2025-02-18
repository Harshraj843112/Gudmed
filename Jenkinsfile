pipeline {
    agent { label "vinod" }  // Use the appropriate label for Jenkins Slave, or leave it as 'master' for Jenkins Master

    environment {
        DOCKER_IMAGE = "notes-app:latest"
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
                withCredentials([usernamePassword(credentialsId: 'dockerHubCredentails', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh "echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin"
                    sh "docker tag $DOCKER_IMAGE $DOCKER_USER/$DOCKER_IMAGE"
                    sh "docker push $DOCKER_USER/$DOCKER_IMAGE"
                }
            }
        }

        stage("Deploy on Jenkins") {
            steps {
                echo "Deploying on Jenkins server (local)"
                script {
                    // Pull the latest Docker image and run it on Jenkins server (Master/Slave)
                    sh """
                        docker login -u $DOCKER_USER -p $DOCKER_PASS
                        docker pull $DOCKER_USER/$DOCKER_IMAGE
                        
                        echo "Stopping and removing old container (if exists)"
                        docker rm -f notes-app || true
                        
                        echo "Starting new container"
                        docker run -d -p 8000:8000 --name notes-app $DOCKER_USER/$DOCKER_IMAGE
                    """
                }
            }
        }
    }
}
