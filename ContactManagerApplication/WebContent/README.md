
This repository is a simple demo of Ember (1.1.2) and Ember Data (1.0.0-beta3) which features:

* a `Create` / `Read` / `Update` / `Delete` of a collection of `contacts`
* complex CSS transitions / animations on `views`
* Handlebars templates precompiling with [Grunt](http://gruntjs.com/getting-started)
* full responsive UX (with touch events, and with animations between routes)


## Prerequisites

### First install Grunt

[gruntjs.com/getting-started](http://gruntjs.com/getting-started) or `sudo npm install -g grunt-cli`

### Install the dev dependencies

First `cd` into the project and run `npm install`

This command will install locally the following node modules 

* [grunt](gruntjs.com)
* [grunt-contrib-sass](https://npmjs.org/package/grunt-contrib-sass)
* [grunt-contrib-concat](https://npmjs.org/package/grunt-contrib-concat)
* [grunt-contrib-watch](https://npmjs.org/package/grunt-contrib-watch)
* [grunt-ember-templates](https://npmjs.org/package/grunt-ember-templates)

### How to compile css

**Requirements:**  
Install Ruby, then `gem install sass`

Run the following command:  
`grunt watch` or `grunt sass`

### How to compile .hbs templates

Run the following command:  
`grunt watch` or `grunt emberTemplates`

### How to concatenate js files

Run the following command:  
`grunt watch` or `grunt concat`
