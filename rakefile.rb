task :default do
    sh 'JEKYLL_ENV=prod bundle exec jekyll build'
end

task :dev do
    sh 'bundle exec jekyll build --destination _site/'
end

task :serve do
    sh 'bundle exec jekyll serve --destination _site/'
end

task :serveprod do
    sh 'JEKYLL_ENV=prod bundle exec jekyll serve --destination _site/'
end

task :clean do
    sh 'bundle exec jekyll clean --destination _site/'
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
