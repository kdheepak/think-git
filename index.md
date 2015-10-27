% Think Like a Git
% Dheepak Krishnamurthy

# What is Git?

##

<script>
var vis = d3.select("#chart")
  .append("svg:svg").style("padding-top", "100px").style("padding-bottom", "100px");

function displayData() {

    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
var JSONData = {"directed": true, "HEAD": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", "links": [{"source": 0, "target": 1}, {"source": 1, "target": 2}], "multigraph": false, "graph": [], "labels": ["gh-pages"], "gh-pages": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", "nodes": [{"message": "Initial commit", "id": "3a253b5c7ff62479e333c4f60dc41d46863e8905", "pos": [100, 200]}, {"message": "Use template.html", "id": "1ddefaae6634d68350f4b738702f1103442c1af4", "pos": [400.0, 200.0]}, {"message": "Add index.html", "id": "0b66dad086ed9fafe3c1adab66a8bc9d4f2c43b2", "pos": [700.0, 200.0]}, ]};

render(JSONData, vis)
}

displayData()

</script>

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

`git diff <branch-name-1> <branch-name-2>`

## 

`git diff <commit-hash-1> <commit-hash-2>`

##

`git diff <commit-hash-1> <commit-hash-2> -- <file-name>`

##

`git diff --stat origin/master`

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

lists branches merged into master
`git branch --merged master` 

##

 # lists branches merged into HEAD (i.e. tip of current branch)
`git branch --merged`

##

 # lists branches that have not been merged
`git branch --no-merged`

By default this applies to only the local branches. The -a flag will show both local and remote branches, and the -r flag shows only the remote branches.

##

`git push <remote-name> <remote-branch-name> --delete`

## 

`git tag <tag-name>`


# Update & Publish

## 

`git merge <branch-name>`

##

`git remote show <remote-name>`

##

`git remote -v`

##

`git remote show <remote-name>`

##

`git remote add <remote> <url>`

##

`git remote set-url <remote-name> git@github.com:<user-name>/<repo-name>.git`

##


`git fetch <remote>`

##

`git pull <remote-name> <branch-name>`

##

`git push --dry-run`

##

`git push <remote-name> <branch-name>`

##

`git push -u <remote-name> <branch-name>`

##

`git push <remote-name> :<branch-name>`

##

`git push <remote-name> --force`

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

This works because 'reset' copied the old head to .git/ORIG_HEAD. If you don't need to edit the old message, use -C instead of -c.

`git commit -c ORIG_HEAD` 

## 

`git reset --keep <commit-hash>`

# Best Practices

## Commit related changes

## Commit often

## Branches are inexpensive

## Commit only if tests pass

## Write good commit messages!

## Discuss workflow with team



