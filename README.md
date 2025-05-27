[![Stories in Ready](https://badge.waffle.io/jordwest/news-feed-eradicator.png?label=ready&title=Ready)](https://waffle.io/jordwest/news-feed-eradicator)
News Feed Eradicator
====================

A browser extension that deletes your Facebook news feed
and replaces it with a nice quote.

[Install from Chrome Web Store](https://chrome.google.com/webstore/detail/news-feed-eradicator-for/fjcldmjmjhkklehbacihaiopjklihlgg?hl=en)

[Download Firefox add-on package](https://github.com/jordwest/news-feed-eradicator/releases/download/v0.6.2.3/Firefox.Plugin.-.news-feed-eradicator-0.6.3.xpi)

![Screenshot](https://raw.githubusercontent.com/jordwest/news-feed-eradicator/master/assets/screenshot.jpg)

Development
-----------

To get started, clone the repository and then run:

    make install
    BROWSER=chrome webpack

Project folder structure:

    src                             # Common code across all browsers
    browsers                        # Browser specific code
    assets                          # Images
    news-feed-eradicator.west.io    # Companion website

    # Build output:
    build                           # The raw extension contents for each browser
    dist                            # Distributable extension package for browsers
