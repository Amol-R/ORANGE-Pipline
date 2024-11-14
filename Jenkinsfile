


pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                bat 'npm install'  // Use 'bat' instead of 'sh' on Windows
                bat 'npx cypress install'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                bat 'npm run e2e'
            }
        }
        // stage('Deploy') {
        //     steps {
        //         echo 'Deploying...'
        //         // Add your deployment commands here
        //     }
        // }
    }
}
