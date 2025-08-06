pipeline {
    agent any

    tools {
        nodejs "NodeJS"  // Make sure NodeJS is configured in Jenkins > Global Tools
    }

    environment {
        CYPRESS_CACHE_FOLDER = "${HOME}/.cache/Cypress"
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
                bat 'npx cypress install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                bat 'npx cypress run'
            }
        }

        stage('Archive Reports') {
            when {
                expression { fileExists('cypress/reports') }
            }
            steps {
                publishHTML(target: [
                    reportDir: 'cypress/reports',
                    reportFiles: 'index.html',
                    reportName: 'Cypress Test Report'
                ])
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
            cleanWs()
        }
    }
}
