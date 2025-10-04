pipeline {
    agent {
        label 'neuronomous'
    }
    triggers {
        githubPush()
    }
    environment {
        WORKSPACE_DIR = '/home/workspace/REJOYAN'
        WORK_DIR = '/home/apps/rejoyan'
        GIT_REPO = 'https://github.com/md-rejoyan-islam/md-rejoyan-islam.github.io.git'
    }
    stages {
        stage('Clone Repository') {
            steps {
                script {
                        echo 'Cloning repository into workspace'
                        git branch: 'main', url: "${GIT_REPO}", credentialsId: 'github-pat-for-client'
                        echo '✅ Repository cloned successfully'
                        // Get current branch name and commit SHA
                        String branchName = sh(
                        script: 'git rev-parse --abbrev-ref HEAD',
                        returnStdout: true
                            ).trim()

                        String commitSHA = sh(
                                script: 'git rev-parse HEAD',
                                returnStdout: true
                        ).trim()

                        // Store the values in the global 'env' map for use in post-build steps
                        env.GIT_BRANCH = branchName
                        env.GIT_COMMIT = commitSHA

                        echo "Current Branch: ${env.CURRENT_GIT_BRANCH}"
                        echo "Current Commit: ${env.CURRENT_GIT_COMMIT}"
                }
            }
        }
        stage('Generate .env file') {
            steps {
                script {
                    def envContent = '''
                        NEXT_PUBLIC_FIREBASE_API_KEY = AIzaSyCNC7SgNVtEFMNOVF299TSvP2Cmagf4vto
                        NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN = portfolio-d96b9.firebaseapp.com
                        NEXT_PUBLIC_FIREBASE_PROJECT_ID = portfolio-d96b9
                        NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET = portfolio-d96b9.firebasestorage.app
                        NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID = 498240279077
                        NEXT_PUBLIC_FIREBASE_APP_ID = 1:498240279077:web:70496acd3063c0d84325cc

                        NEXT_PUBLIC_API_KEY = "rejoyan001468"
                        '''
                    writeFile file: "${WORKSPACE}/.env", text: envContent
                    echo '✅ .env file generated'
                }
            }
        }

        stage('Npm Build') {
            steps {
                script {
                        echo '🔹 Installing dependencies...'
                        // Export PATH and verify Node/npm
                        sh '''
                            export PATH=/root/.nvm/versions/node/v22.19.0/bin:$PATH
                            npm install
                            npm run build
                        '''
                        echo '✅ Build completed successfully'
                }
            }
        }
        stage('Copy Build Files') {
            steps {
                script {
                        echo '🔹 Remove old WORK_DIR and create fresh'
                        sh """
                            if [ -d "${WORK_DIR}" ]; then
                                echo "Directory exists. Removing..."
                                rm -rf "${WORK_DIR}"
                            fi
                            mkdir -p "${WORK_DIR}"
                            echo "Directory ready: ${WORK_DIR}"
                        """
                        echo '🔹 Copy files from workspace to work dir'
                        sh """
                            cp -a ${WORKSPACE_DIR}/. ${WORK_DIR}/
                        """
                        echo '✅ Files copied to WORK_DIR successfully'
                }
            }
        }
        stage('Reload PM2') {
            steps {
                script {
                        echo '🔹 Reloading PM2'
                        sh """
                            # Ensure PM2 path
                            export PATH=/root/.nvm/versions/node/v22.19.0/bin:\$PATH
                            cd ${WORK_DIR}
                            # Reload if already running, else start
                            PORT=4000 pm2 reload rejoyan || PORT=4000 pm2 start npm --name "rejoyan" -- run start
                        """
                        echo '✅ PM2 reloaded successfully'
                }
            }
        }
    }

    post {
        always {
            script {
                    echo 'Cleaning up the build workspace directory'
                    cleanWs()
                    echo '✅ Workspace cleaned'
            }
        }
            success {
            script {
                node { // Runs on Jenkins host
                    emailext(
                    subject: "✅ SUCCESS: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'",
                    body: """
                        ✅ Jenkins Build Successful!

                        🔹 Job Name: ${env.JOB_NAME}
                        🔹 Build Number: #${env.BUILD_NUMBER}
                        🔹 Branch: ${env.GIT_BRANCH}
                        🔹 Commit: ${env.GIT_COMMIT}
                        🔹 Triggered By: ${currentBuild.getBuildCauses()[0].shortDescription}
                        🔹 Duration: ${currentBuild.durationString}

                        📂 Workspace: ${env.WORKSPACE}
                        📄 Console Log: ${env.BUILD_URL}console
                        📦 Artifacts: ${env.BUILD_URL}artifact
                    """,
                    to: 'rejoyanislam0014@gmail.com'
                )
                }
            }
            }

        failure {
            script {
                node { // Runs on Jenkins host
                    emailext(
                    subject: "❌ FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'",
                    body: """
                        ❌ Jenkins Build Failed!

                        🔹 Job Name: ${env.JOB_NAME}
                        🔹 Build Number: #${env.BUILD_NUMBER}
                        🔹 Branch: ${env.GIT_BRANCH}
                        🔹 Commit: ${env.GIT_COMMIT}
                        🔹 Triggered By: ${currentBuild.getBuildCauses()[0].shortDescription}
                        🔹 Duration: ${currentBuild.durationString}

                        ⚠️ Console Output: ${env.BUILD_URL}console
                        📦 Artifacts: ${env.BUILD_URL}artifact
                    """,
                    to: 'rejoyanislam0014@gmail.com'
                )
                }
            }
        }
    }
}
