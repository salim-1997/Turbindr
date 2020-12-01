pipeline {
    agent any 
    stages {
        stage('Build') { 
            steps {
                withMaven{
                    sh 'mvn clean compile'
                } 
            }
        }
        stage('Test') { 
            steps {
                withMaven{
                    sh 'mvn test'
                }  
            }
        }
        stage('Deploy') { 
            steps {
                withMaven{
                    sh 'mvn deploy'
                }  
            }
        }
    }
}