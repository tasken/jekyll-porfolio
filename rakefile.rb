task :default do
    sh 'JEKYLL_ENV=nfs bundle exec jekyll build'
end

task :dev do
    sh 'bundle exec jekyll build'
end

task :pull do
    sh 'git pull'
end

task :status do
    sh 'git status'
end

task :reset do
    sh 'git reset --hard HEAD'
end

# task :default do
#     sh 'git clone https://github.com/tasken/tasken.github.io.git'
#     Dir.chdir('tasken.github.io'){
#         sh 'JEKYLL_ENV=nfs jekyll build'
#     }
#     sh 'rm -rf tasken.github.io'
# end
