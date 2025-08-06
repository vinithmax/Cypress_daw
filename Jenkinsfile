pipeline {
    agent any

    tools {
        nodejs "NodeJS"  // Ensure this matches the name in Jenkins > Global Tool Configuration
    }

    environment {
        // Cypress binary path override (change to local writable dir to avoid Jenkins system issues)
        CYPRESS_CACHE_FOLDER = "C:\\Users\\vinit\\AppData\\Local\\Cypress\\Cache"
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
                expression { fileExists('cypress/reports/index.html') }
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
