pipeline{
    agent any
    stages{
        
        stage{
            sh 'docker build --tag front_iset .'
            sh 'docker run -p 8082:8082 front_iset'
            
        }
    }
}