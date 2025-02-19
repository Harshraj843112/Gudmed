pipeline {
    agent any   // Run  everything on the Jenkins controller

    environment {
        EC2_HOST     = "34.201.241.156"
        EC2_USER     = "ubuntu"
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
                echo "Building Docker image on Jenkins machine..."
                sh '''
                    export DOCKER_BUILDKIT=1
                    docker build --build-arg NODE_OPTIONS="--max-old-space-size=512" -t ${DOCKER_IMAGE} .
                '''
            }
        }

        stage("Push to Docker Hub") {
            steps {
                echo "Pushing Docker image to Docker Hub..."
                withCredentials([usernamePassword(credentialsId: 'dockerHubCredentials', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh '''
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin || exit 1
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
                    sshUserPrivateKey(credentialsId: 'ubuntu-ki-key8', keyFileVariable: 'EC2_KEY'),
                    usernamePassword(credentialsId: 'dockerHubCredentials', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')
                ]) {
                    sh '''
                        ssh -o StrictHostKeyChecking=no -i "$EC2_KEY" $EC2_USER@$EC2_HOST <<EOF
echo "Cleaning up old Docker images..."
docker system prune -f

echo "Logging into Docker Hub..."
echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin || exit 1

echo "Pulling the latest image..."
docker pull "$DOCKER_USER/$DOCKER_IMAGE" || exit 1

echo "Stopping and removing old container..."
docker rm -f notes-app || true

echo "Running new container..."
docker run -d -p 3000:80 --name notes-app --restart always "$DOCKER_USER/$DOCKER_IMAGE"

echo "Deployment completed successfully!"
EOF
                    '''
                }
            }
        }
    }

    post {
        success {
            echo "✅ Deployment successful! Application is running on http://$EC2_HOST:3000"
        }
        failure {
            echo "❌ Deployment failed. Check logs for errors."
        }
    }
}
