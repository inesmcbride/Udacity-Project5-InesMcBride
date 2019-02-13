# Udacity Front-End Web Developer Project 5

## Project Overview:

For the **Restaurant Reviews** projects, a static webpage was converted to a mobile-ready web application. A static design that lacked accessibility was converted to be responsive on different sized displays and accessible for screen reader use. A service worker  was also added to begin the process of creating a seamless offline experience for users.

### Specification

The code was provdided but it had a lot of issues. It wasn'n usable on a desktop browser, much less a mobile device. It also didn’t include any standard accessibility features, and it didn’t work offline at all. My job was to update the code to resolve these issues while still maintaining the included functionality.

### Launching the project

1. Clone this repository onto your desktop.

2. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

    * In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.
   * Note -  For Windows systems, Python 3.x is installed as `python` by default. To start a Python 3.x server, you can simply enter `python -m http.server 8000`.
   
2. With your server running, visit the site: `http://localhost:8000`, to view the finished site.

### References

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/).
[Matthew Cranfords Walkthrough Blog](https://matthewcranford.com/restaurant-reviews-app-walkthrough-part-1-map-api/) and [Doug Brown's Webinar](https://www.youtube.com/watch?v=92dtrNU1GQc) were used as reference alongside the development of this project.
