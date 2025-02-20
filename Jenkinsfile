pipeline {
    agent { label "vinod" }

    environment {
        EC2_HOST    = "ec2-54.166.222.92.compute-1.amazonaws.com"
        EC2_USER    = "ubuntu"
        DOCKER_IMAGE = "notes-app:latest"
    }

    stages {
        stage("Clone Repository") {
            steps {
                echo "Cloning the repository..."
                dir('devops') {  
                    git branch: 'main', url: 'https://github.com/Harshraj843112/Gudmed.git'
                }
            }
        }

        stage("Build Docker Image") {
            steps {
                echo "Building Docker image..."
                dir('devops') {  
                    sh '''
                        export DOCKER_BUILDKIT=0
                        docker build --build-arg NODE_OPTIONS="--max-old-space-size=4096" -t ${DOCKER_IMAGE} .
                    '''
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
docker run -d -p 3000:80 --name notes-app --restart always "\$DOCKER_USER/\$DOCKER_IMAGE"
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
