pipeline {
  agent any
    
  tools {nodejs "node 10.15.3"}
    
  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com/vibakar/groovy-test.git'
      }
    }
        
    stage('Execute server.js file') {
      steps {
         sh 'node server.js'
      }
    }      
  }
  post {
      always {
          publishHTML (
              target: [
                         allowMissing: false,
                         alwaysLinkToLastBuild: false,
                         keepAll: true,
                         reportDir: 'reports',
                         reportFiles: 'exception_report.html',
                         reportName: 'Exception Report'
                    ]
            )
      }
  }
}