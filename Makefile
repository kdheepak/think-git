## Markdown extension (e.g. md, markdown, mdown).
MEXT = md

## All markdown files in the working directory
SRC = $(wildcard *.$(MEXT))

## Location of Pandoc support files.
PREFIX = /Users/$(USER)/.pandoc

HTML=$(SRC:.md=.html)

all:	$(HTML) 
html:	clean $(HTML)

%.html:	%.md
	pandoc -s -t revealjs --template=template.html \
	--variable theme="simple" \
	--variable transition="linear" \
	--variable history=false \
	--variable controls=false \
	  -o $@ $<

clean:
	find . -name "*.html" ! -name "template.html" -maxdepth 1  -delete

