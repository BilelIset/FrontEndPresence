pipeline {
    agent any
    stages {
        stage('Arreter les container en cours') {
            steps {
                script {
                    sh 'docker stop front_iset || true'
                    sh 'docker rm front_iset || true'
                }
            }
        }
        stage('Build and Run Container') {
            steps {
                script {
                    sh 'docker build --tag front_iset .'
                    sh 'docker run -d --name front_iset -p 8082:8082 front_iset'
                }
            }
        }
    }
}
