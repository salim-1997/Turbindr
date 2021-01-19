#!groovy

properties ([
    [$class: 'GitLabConnectionProperty', gitLabConnection: 'htw'],
    buildDiscarder(logRotator(numToKeepStr: '10')),
    ])

timeout(time: 60, unit: 'MINUTES') {

ansiColor('css') {

stage ('Build') {

    node {


        checkout scm

        try {

            sh 'npm install'

            echo "\u2713 success"
            currentBuild.result = 'SUCCESS'

        } catch (any) {
            echo "\u274C failure"
            currentBuild.result = 'FAILURE'
            throw any //rethrow exception to prevent the build from
proceeding
        } finally {
            mail()
        }

    }
    junit '*/build/test-results/*.xml'
        step( [ $class: 'JacocoPublisher' ] )
}

stage ('Test') {

    node {


        checkout scm

        try {

            
            sh 'npm test -- --code-coverage --watch=false'
            echo "\u2713 success"
            currentBuild.result = 'SUCCESS'

        } catch (any) {
            echo "\u274C failure"
            currentBuild.result = 'FAILURE'
            throw any //rethrow exception to prevent the build from
proceeding
        } finally {
            mail()
        }

    }
}

stage ('Sonar') {

    node {


        checkout scm

        try {

            sh 'npm run sonar-scanner'

            echo "\u2713 success"
            currentBuild.result = 'SUCCESS'

        } catch (any) {
            echo "\u274C failure"
            currentBuild.result = 'FAILURE'
            throw any //rethrow exception to prevent the build from
proceeding
        } finally {
            mail()
        }

    }
}

stage ('SonarTest') {

    node {


        checkout scm

        try {

            sh 'npm run test --coverage --watchAll'

            echo "\u2713 success"
            currentBuild.result = 'SUCCESS'

        } catch (any) {
            echo "\u274C failure"
            currentBuild.result = 'FAILURE'
            throw any //rethrow exception to prevent the build from
proceeding
        } finally {
            mail()
        }

    }
}

}
}

@NonCPS
def mail() {

    def subject = '${DEFAULT_SUBJECT}'

    // nur fehlerhafte Builds melden
    if (currentBuild.result == "SUCCESS") {

        if (currentBuild.previousBuild != null &&
            currentBuild.previousBuild.result != 'SUCCESS') {
            subject = "Job '${JOB_NAME}' (${BUILD_NUMBER}) - back to normal"
        } else {
            return
        }

    }

    def attachLog = (currentBuild.result != "SUCCESS")
    emailext(body: '${DEFAULT_CONTENT}', attachLog: attachLog,
            replyTo: '$DEFAULT_REPLYTO', subject: subject,
            recipientProviders: [[$class: 'FailingTestSuspectsRecipientProvider'],
                                 [$class: 'DevelopersRecipientProvider'],
                                 [$class: 'CulpritsRecipientProvider']])
}


// vim: ft=groovy

