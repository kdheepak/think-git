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
	pandoc -s -t revealjs --standalone --section-divs \
  --variable theme="beige" \
  --variable transition="linear" \
  -o $@ $<

clean:
	rm -f *.html 

