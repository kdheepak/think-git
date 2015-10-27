% Think Like a Git
% Dheepak Krishnamurthy

# What is Git?

##

- Version control system for software development
- Emphasis on speed, data integrity, and support for multiple, distributed, non-linear workflows
- Free and open source
- Easy to learn

# A brief history of Git

## 

- `git` is British English slang for "unpleasant person". (Linus Torvalds likes to name things after himself.)
- Development began in 2005 because Linus wanted a distributed system that was fast and efficient.

# So really, what is Git?

## 

- Git is different. Forget everything you know about Subversion
- Data is a stream of snapshots

## CVS
![](https://git-scm.com/book/en/v2/book/01-introduction/images/deltas.png)

## Git
![](https://git-scm.com/book/en/v2/book/01-introduction/images/snapshots.png)

<div class="notes">
Note: speaker notes FTW!
</div>

# Configure

##

`git config --global user.name "<name>"`

##

`git config --global user.email "<email>"`

##

`git config --global color.ui auto`

##

`.gitconfig`

# Create

## 

`git clone ssh://user@domain.com/repo.git`

## 

`git init`

##

`git init <project-name>; cd <project-name>`

# Local changes

## 

`git status`

## 

`git show <commit-hash>`


## 

`git diff`

## 

`git diff --staged`
`git diff --cached`

## 

`git diff <first-branch-name> <second-branch-name>`

##

`git add <new-file-name>`

## 

`git add .`

##

`git add -p <file-name>`

## 

`git rm <file-name>`

## 

`git rm --cached <file-name>`


## 

`git mv <file-name> <new-file-name>`

## 

`git commit -a`

##

`git commit`

## 

`git commit -m <message>`

## 

`git commit --amend`

## 

`git commit --amend -m <message>`

## 

`git stash`

## 

`git stash pop`

## 

`git stash list`

## 

`git stash drop`


# History

## 

`git log`

## 

`git log -p <file-name>`

## 

`git blame <file-name>`

## 

`git  log --graph --abbrev-commit --decorate --color=always --date=relative --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) - %C(dim red)%an%C(reset)%C(bold yellow)%d%C(reset)' --all`

# Branches & Tags

## 

`git branch`

## 

`git checkout <branch-name>`

## 

`git checkout -b <new-branch-name>`

## 

`git branch <new-branch-name>`

## 

`git branch --track <new-branch-name> <remote-branch-name>`

##

`git branch -D <local-branch-name>`

##

`git push <remote-name> <remote-branch-name> --delete`

## 

`git tag <tag-name>`


# Update & Publish

## 

`git merge <branch-name>`

##

`git remote -v`

##

`git remote show <remote-name>`

##

`git remote add <remote> <url>`

##

`git fetch <remote>`

##

`git pull <remote-name> <branch-name>`

##

`git push <remote-name> <branch-name>`

##

`git push <remote-name> :<branch-name>`

##

`git push --tags`

# Merge & Rebase

##

`git merge <branch-name>`

##

`git rebase <branch-name>`

##

`git rebase --abort`

##

`git rebase --continue`

##

`git rebase -i <branch-name>`

##

`git mergetool`

##

`git add <resolved-file-name>`

##

`git rm <resolved-file-name>`

# Undo

## 

`git reset --hard HEAD`

## 

`git checkout HEAD <file-name>`

## 

`git revert <commit-hash>`

## 

`git reset --hard <commit-hash>`

## 

`git reset (--mixed) <commit-hash>`

## 

`git reset --soft <commit-hash>`

## 

`git reset --keep <commit-hash>`

# Best Practices

## Commit related changes

## Commit often

## Branches are inexpensive

## Commit only if tests pass

## Write good commit messages!

## Discuss workflow with team
