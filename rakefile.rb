task :default do
    sh 'JEKYLL_ENV=production bundle exec jekyll build'
end

task :serve do
    sh 'bundle exec jekyll serve --destination _site/'
end

task :serveprod do
    sh 'JEKYLL_ENV=production bundle exec jekyll serve --destination _site/'
end

task :clean do
    sh 'bundle exec jekyll clean --destination _site/'
end

task :reset do
    sh 'git reset --hard HEAD'
end
