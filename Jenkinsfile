pipeline {
    agent { label "vinod" }

    environment {
        // Public DNS of your target EC2 instance
        EC2_HOST = "ec2-98-81-222-114.compute-1.amazonaws.com"
        EC2_USER = "ubuntu"
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
                // Bind Docker credentials (ID must match exactly as stored)
                withCredentials([usernamePassword(credentialsId: 'dockerHubCredentails', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh '''
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                        docker tag "$DOCKER_IMAGE" "$DOCKER_USER/$DOCKER_IMAGE"
                        docker push "$DOCKER_USER/$DOCKER_IMAGE"
                    '''
                }
            }
        }
        
        stage("Check EC2 Key") {
            steps {
                echo "Checking EC2_KEY variable and file path..."
                withCredentials([sshUserPrivateKey(credentialsId: 'ubuntu-ki-key1', keyFileVariable: 'EC2_KEY')]) {
                    sh '''
                        echo "EC2_KEY file path: $EC2_KEY"
                        chmod 600 "$EC2_KEY"
                        ls -l "$EC2_KEY"
                    '''
                }
            }
        }

        stage("Deploy to EC2") {
            steps {
                echo "Deploying on EC2 server"
                // Bind both the SSH key and Docker credentials so that DOCKER_USER and DOCKER_PASS are available on the remote host
                withCredentials([
                    sshUserPrivateKey(credentialsId: 'ubuntu-ki-key1', keyFileVariable: 'EC2_KEY'),
                    usernamePassword(credentialsId: 'dockerHubCredentails', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')
                ]) {
                    // Use a single-line SSH command that exports the Docker variables on the remote host
                    sh """
                        ssh -o StrictHostKeyChecking=no -i "$EC2_KEY" \$EC2_USER@\$EC2_HOST "export DOCKER_USER='$DOCKER_USER'; export DOCKER_PASS='$DOCKER_PASS'; export DOCKER_IMAGE='$DOCKER_IMAGE'; \
                        echo 'Logging in to Docker Hub'; \
                        docker login -u \$DOCKER_USER -p \$DOCKER_PASS; \
                        echo 'Pulling the latest image from Docker Hub'; \
                        docker pull \$DOCKER_USER/\$DOCKER_IMAGE; \
                        echo 'Stopping and removing old container (if exists)'; \
                        docker rm -f notes-app || true; \
                        echo 'Starting new container'; \
                        docker run -d -p 8000:8000 --name notes-app --restart always \$DOCKER_USER/\$DOCKER_IMAGE"
                    """
                }
            }
        }
    }
}
