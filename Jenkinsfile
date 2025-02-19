pipeline {
    agent { label "vinod" }

    environment {
        // Public DNS or IP of the EC2 instance
        EC2_HOST    = "ec2-98-81-222-114.compute-1.amazonaws.com"
        EC2_USER    = "ubuntu"
        DOCKER_IMAGE = "notes-app:latest"
    }

    stages {
        stage("Clone Repository") {
            steps {
                echo "Cloning the repository..."
                dir('devops') {  
                    // Verify that this repository contains your React app and Dockerfile.
                    git branch: 'main', url: 'https://github.com/Harshraj843112/django-notes-app.git'
                }
            }
        }

        stage("Build Docker Image") {
            steps {
                echo "Building Docker image..."
                dir('devops') {  
                    sh "docker build -t ${DOCKER_IMAGE} ."
                }
            }
        }

        stage("Push to Docker Hub") {
            steps {
                echo "Pushing Docker image to Docker Hub..."
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
                echo "Verifying EC2 SSH key..."
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
                echo "Deploying the application on EC2..."
                withCredentials([
                    sshUserPrivateKey(credentialsId: 'ubuntu-ki-key1', keyFileVariable: 'EC2_KEY'),
                    usernamePassword(credentialsId: 'dockerHubCredentails', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')
                ]) {
                    sh """
                        ssh -o StrictHostKeyChecking=no -i "\$EC2_KEY" \$EC2_USER@\$EC2_HOST <<EOF
echo "Logging into Docker Hub..."
echo "\$DOCKER_PASS" | docker login -u "\$DOCKER_USER" --password-stdin

echo "Pulling the latest image..."
docker pull "\$DOCKER_USER/\$DOCKER_IMAGE"

echo "Stopping and removing old container..."
docker rm -f notes-app || true

echo "Running new container..."
docker run -d -p 3000:3000 --name notes-app --restart always "\$DOCKER_USER/\$DOCKER_IMAGE"
EOF
                    """
                }
            }
        }
    }

    post {
        success {
            echo "Deployment successful! Application is running on http://$EC2_HOST:3000"
        }
        failure {
            echo "Deployment failed. Check logs for errors."
        }
    }
}
