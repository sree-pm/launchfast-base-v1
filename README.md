sree@Srees-iMac launchfast-base-v1 % git add README.md LICENSE.md
sree@Srees-iMac launchfast-base-v1 % git status
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   LICENSE.md
        modified:   README.md

sree@Srees-iMac launchfast-base-v1 % git commit -m "Update README and license for LaunchFast branding"
[main 1941f98] Update README and license for LaunchFast branding
 2 files changed, 100 insertions(+), 87 deletions(-)
sree@Srees-iMac launchfast-base-v1 % git push origin main
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 8 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 1.95 KiB | 1.95 MiB/s, done.
Total 4 (delta 2), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/sree-pm/launchfast-base-v1.git
   37ed03f..1941f98  main -> main
sree@Srees-iMac launchfast-base-v1 % git add .
git status
git commit -m “Update README to plain-text format”
git push origin main
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   README.md

error: pathspec 'README' did not match any file(s) known to git
error: pathspec 'to' did not match any file(s) known to git
error: pathspec 'plain-text' did not match any file(s) known to git
error: pathspec 'format”' did not match any file(s) known to git
To https://github.com/sree-pm/launchfast-base-v1.git
 ! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'https://github.com/sree-pm/launchfast-base-v1.git'
hint: Updates were rejected because the remote contains work that you do not
hint: have locally. This is usually caused by another repository pushing to
hint: the same ref. If you want to integrate the remote changes, use
hint: 'git pull' before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
sree@Srees-iMac launchfast-base-v1 % git add .
git status
git commit -m “Update README to plain-text format”
git push origin main
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   README.md

error: pathspec 'README' did not match any file(s) known to git
error: pathspec 'to' did not match any file(s) known to git
error: pathspec 'plain-text' did not match any file(s) known to git
error: pathspec 'format”' did not match any file(s) known to git
To https://github.com/sree-pm/launchfast-base-v1.git
 ! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'https://github.com/sree-pm/launchfast-base-v1.git'
hint: Updates were rejected because the remote contains work that you do not
hint: have locally. This is usually caused by another repository pushing to
hint: the same ref. If you want to integrate the remote changes, use
hint: 'git pull' before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
sree@Srees-iMac launchfast-base-v1 % 
