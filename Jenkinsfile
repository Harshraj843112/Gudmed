pipeline {
    agent { label "vinod" }

    environment {
        NGINX_HOST = "44.206.233.53"  // Enclose the IP address in double quotes
        NGINX_USER = "ubuntu"         // Enclose the username in double quotes
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

        stage("Deploy to Nginx Server") {
            steps {
                echo "Deploying on Nginx server"
                withCredentials([sshUserPrivateKey(credentialsId: 'nginx-server-key', keyFileVariable: 'NGINX_KEY')]) {
                    sh """
                        ssh -o StrictHostKeyChecking=no -i $NGINX_KEY $NGINX_USER@$NGINX_HOST << 'EOF'
                            echo "Pulling the latest image from Docker Hub"
                            docker login -u $DOCKER_USER -p $DOCKER_PASS
                            docker pull $DOCKER_USER/$DOCKER_IMAGE
                            
                            echo "Stopping and removing old container (if exists)"
                            docker rm -f notes-app || true
                            
                            echo "Starting new container"
                            docker run -d -p 8000:8000 --name notes-app $DOCKER_USER/$DOCKER_IMAGE
                        EOF
                    """
                }
            }
        }
    }
}
