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

# Create

## Clone an existing repository

`git clone ssh://user@domain.com/repo.git`

## Create a new local repository

`git init`

# Local changes

## 

`git status`

## 

`git diff`

## 

`git add .`

##

`git add -p <file>`

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


