pipeline {
    agent { label "vinod" }

    environment {
        // The EC2_HOST should be the public DNS or IP of your target EC2 instance.
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
                // Use the dockerHubCredentails stored in Jenkins.
                withCredentials([usernamePassword(credentialsId: 'dockerHubCredentails', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh '''
                        echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
                        docker tag $DOCKER_IMAGE $DOCKER_USER/$DOCKER_IMAGE
                        docker push $DOCKER_USER/$DOCKER_IMAGE
                    '''
                }
            }
        }
        
        // This stage checks the EC2_KEY variable and its file details.
        stage("Check EC2_KEY") {
            steps {
                echo "Checking EC2_KEY variable and file path..."
                // Print the value of EC2_KEY (this will show the full temporary file path)
                sh 'echo "EC2_KEY is: $EC2_KEY"'
                // List the details of the key file to verify its existence and permissions.
                sh 'ls -l "$EC2_KEY"'
            }
        }

        stage("Deploy to EC2") {
            steps {
                echo "Deploying on EC2 server"
                // Use your SSH private key credential (e.g., 'ubuntu-ki-key1')
                withCredentials([sshUserPrivateKey(credentialsId: 'ubuntu-ki-key1', keyFileVariable: 'EC2_KEY')]) {
                    sh """
                        ssh -o StrictHostKeyChecking=no -i "$EC2_KEY" \$EC2_USER@\$EC2_HOST << 'EOF'
                            echo "Pulling the latest image from Docker Hub"
                            docker login -u \$DOCKER_USER -p \$DOCKER_PASS
                            docker pull \$DOCKER_USER/\$DOCKER_IMAGE
                            
                            echo "Stopping and removing old container (if exists)"
                            docker rm -f notes-app || true
                            
                            echo "Starting new container"
                            docker run -d -p 8000:8000 --name notes-app \$DOCKER_USER/\$DOCKER_IMAGE
                        EOF
                    """
                }
            }
        }
    }
}
