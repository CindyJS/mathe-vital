# MatheVital

MatheVital is a collection of various applets and texts interactively explaining mathematics. The collection is hosted at [mathe-vital.de](https://mathe-vital.de/), which points to [https://cindyjs.github.io/mathe-vital/](https://cindyjs.github.io/mathe-vital/).

This repository contains the files required for building this website. Any commit to the `main`-branch in this GitHub repository triggers the deployment of the webpages via the static site generator [Jekyll](https://docs.github.com/en/github/working-with-github-pages/setting-up-a-github-pages-site-with-jekyll) and the website is published and hosted via [github-pages](https://pages.github.com/). Jekyll is based on
[Ruby](https://www.ruby-lang.org/en/) and combines .html,
.md, .png and other files to a structured HTML website.

This way, clearly structured and easy-to-handle MarkDown files
can be combined with [CindyJS](https://cindyjs.org) applets
(which are HTML files) and hosted as HTML webpages.

Applets that do not work in CindyJS yet are offered as
[Cinderella](http://cinderella.de/)-file downloads.

## Building or testing the website locally with Jekyll

*Prerequisites*: Install [Ruby](https://www.ruby-lang.org/en/documentation/installation/) and [Bundler](https://bundler.io/). 

Download or clone the repository via `git clone git@github.com:CindyJS/mathe-vital.git`.

Then in the repository, run the following commands.

```
bundle install

bundle exec jekyll build
```

The compiled page is then available in `mathevital_jekyll/_site`.

The site can also be automatically hosted locally by running.

`bundle exec jekyll s -l`

This builds the whole project starts a local server at `localhost:4000`.
Here the flag `-l` stands for live reload, which automatically refreshes the browser when changes have been rebuilt.

Changes are updated much quicker when using the command `bundle exec jekyll s -il`,
but this does not work for all changes. The flag `-i` stands for
an incremental rebuild, so only changes are rebuilt and not the whole project.


## Documentation

The structure of the website is `baseurl/category/x-y.html` where category is the courseID (e.g., LinAlg1, GeoCal,...), x is the chapter number and y is the topic number. The layout (defined in \_layout) automatically creates the course overview at `baseurl/category/` and the navigation on the bottom of each page.

Convenient keyboard shortcuts for quick navigation between pages in one course works with Ctrl+Alt+J for Previous and Ctrl+Alt+L for Next.

**Layout**
The layout is defined in the \_layouts folder. The webpages have either the lecture, chapter or page layout, all of which inherit the default layout. In these layouts the [Liquid Template language](https://shopify.github.io/liquid/) (used by Jekyll) is used to enable Navigation of the page and structure the content overviews of the lectures/chapters. This is done with the help of the navigation.yml file in the \_data folder, which in turn can be automatically created from the project folder with the NavigationCrawler notebook.

**Caveats**
- GeoCal is a special case as it has *Excursion* chapters for each chapter, so here, the navigation and layout are different.
- At the moment also LinAlg1 is a special case because it has plain HTML pages with the content and the applet mixed, whereas the rest of the courses are divided into markdown for the content and separate HTML file for the applet.
- Sometimes, changes aren't shown in the browser, for example, when changing the CSS. Here it helps to delete browser cache and cookies for the page (hard refresh). In Chrome, this can be done by Ctrl-click on the reload button or Cmd+Shift+R.


**Rebuilding the Menu**

If new chapters are added or the order or titles are changed, this change needs to be reflected in the file `_conf/navigation.yml`. This can be done automatically by running the python-script `NavigrationCrawler.py`. On a new machine, it can be executed via
```
sudo apt install python3 
python3 NavigationCrawler.py
```

## License

The contents, i.e. texts, images and applets, are licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode).

The website (built system based on Jekyll) is under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).
