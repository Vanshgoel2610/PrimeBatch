git init
git add
git commit -m "title" -m "description"
git push
    (if i have not configured a remote branch)
        git remote add repoName repoLink
    if my branch does not exists on the remote server
        git push --set-upstream origin main