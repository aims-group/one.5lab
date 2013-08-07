# one.5lab
A open source [Hyde][hyde/hyde]-capable adaptation of LLNL's OneLab project,
which uses [Bootstrap][twitter/bootstrap].

## Usage
You'll need to have Hyde to run this (`pip install hyde`). Once you do, just

    hyde gen

in this directory, then open `deploy/index.html` in a web browser.
Alternatively, run `hyde serve` to run a webserver with `deploy` as the root
directory.

### Adding Content
Look at all of the `.html` files in the `content` directory for an example of
how to begin adding your own content.

### Adding CSS
To extend the CSS of a given page, use the `{% block css %}{% endblock %}`
block. You can do this with a `<style>` block or a `<link>` to a CSS file.

### Updating your site with changes from one.5lab
When one.5lab inevitably gets updated after after you've generated your site and
you want to incorporate some or all of those changes into your site, you can use
`git cherry-pick` to selectively grab the commits you want.

Let's assume your website is its own git repository, with no more ties to the
one.5lab.

First, set up one.5lab as a remote and fetch its changes:

    git remote add one.5lab git://github.com/aims-group/one.5lab
    git fetch one.5lab

Fetching doesn't overwrite anything or try to merge any code (pulling does).
Once you've fetched changes, you can cherry-pick the ones you want. If you just
want the changes performed by the most recent commit, you can do

    git cherry-pick one.5lab/master

Otherwise you can specify a specific commit hash or use one of several other
ways of specifying commits. See `man git-cherry-pick` for more info.

When you're done, just `git commit`, add to the prepopulated commit message if
you like, and you're ready to push.

## Editing
There are a variety of templates that you can subclass using
`{% extends "templatename.j2" %}` on the top of your article or post.

  * `base.j2` contains the bulk of the layout logic, but not the best for
    subclassing because it doesn't have any grid attached to it.
  * `columns.j2` has a main content area and a sidebar with links to content
    within the page.
  * `topbar.j2` adds a top bar to the base layout
  * `hero.j2` places the bootstrap "hero" area on the page (good for a home
    page)

### Bootstrap dropdown menus
Generating Bootstrap's native dropdown menus programmatically is supported in
`site.yaml`. To make a navigation link a dropdown menu, just put a list of links
where you'd normally put a URL:

    context:
        data:
            menu:
                - title: Home
                  url: index.html
                - title: About
                  url: about.html
                - title: Related projects
                  url:
                    - title: Project Red
                      url: project_red.html
                    - title: Project Blue
                      url: project_blue.html

Currently this is not supported recursively.

[hyde/hyde]: https://github.com/hyde/hyde
[twitter/bootstrap]: https://github.com/twitter/bootstrap
[aims-group/webshooter]: https://github.com/aims-group/webshooter
[auzigog/hyde-bootstrap]: https://github.com/auzigog/hyde-bootstrap
[h5bp/html5-boilerplate]: https://github.com/h5bp/html5-boilerplate
