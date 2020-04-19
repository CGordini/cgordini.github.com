# cory's personal site

## Pages

Each `.md` file will be turned into a page on the site, so it should be very easy to add new top-level pages. See the `contact` page for a super simple example to copy. `.html` will also work if you want to customize more.

The social links at the bottom and the nav links at the top are all controlled via the `_config.yml`. The syntax is a little confusing, but there's probably tools to make it more straightforward.

The gist is that `social` is a bunch of `key-value` paris while `nav` is a list of `key-values`, where most entries only have the one key (`name`). The kdy difference is which lines start with a `-`. We can probably move this bit of the customization into json if that's easier.

## Posts

Anything in the `_posts` directory is a new, independent post. They should be titled `YYYY-MM-DD-url-slug.md` (where the slug is how people will get to it). They'll need a title in the _frontmatter_ (the data in between `---` at the top of files:

```
---
title: This can be anything, woo title!
```

> fun trivia, the lack of that frontmatter in this file is why you can see it on github, but not on the site itself!

After that, just ship plain markdown.

There's also a hidden page at `/styles` that shows you what the css will look like w/ different constructs. Feel free to delete that page once you don't feel like you need it (or don't, whatever. It's hidden).

## Initial Setup

1. Fork this repo
2. (assuming you're hosting the site on Github, which you should) rename the repo to `cgordini.github.io`
3. Address `FIXME` comments in `_config.yml` to customize the site to your liking
4. Add a `CNAME` file with `corygordinier.com` (aka follow [these instructions](https://help.github.com/en/github/working-with-github-pages/configuring-a-custom-domain-for-your-github-pages-site)
5. Probably remove the posts in `_posts` and replace them with items of your choosing.
6. Make sure your [github pages settings](https://help.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) are as you want them (you're deploying from the `master` branch if it asks
7. Push! The production site will correspond with whatever's in master.
8. Edits can also be made in the Github UI. You know the drill.
