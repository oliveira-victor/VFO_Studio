# VFO Studio: art & design portfolio

This repository contains the source code for a portfolio which displays different kinds of artworks. It includes several peges with a good CSS work to look more appealling, including galleries that work with JavaScript.

Deploy link: https://vfostudio.vercel.app/

## Features

* Dynamic image galleries in JavaScrpit with the use of lightbox.
* Two languages option: English and Brazilian Portuguese.
* Includes a social media links page.
* Lightweight images and compressed CSS and JavaScript for an enhanced performance.

## Technologies used:
* HTML
* JavaScript
* Sass
* Gulp JS (imagemin, gulp-sass, uglify)

## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/oliveira-victor/VFO_stories.git

2. Navigate to the project directory
   ```bash
   cd project

3. Install dependencies
   ```bash
   npm install

4. Start Gulp JS to run imagemin, gulp-sass and gulp-uglify functions whenever there's change
   ```bash
   npm run gulp

5. You can start gulp-watch to keep track of any saved changes related to JavaScript and Scss files, and process the files on the run
   ```bash
   npm run gulp watch

6. Open your browser: Navigate to http://127.0.0.1:5500/ or simply start Live Server VS Code plugin

## Developing

Keep the source files you're working on in the /src folder. Gulp will search for the files in the following folders:
* Image files: src/images (and any folders inside)
* Scss files: src/styles
* JavaScript files: src/scripts

Gulp will compile Sass and compress images, JavaScript and CSS files and save them into /dist folder every time you run the 4th step of installation. If you run gulp-watch, make sure you run 'npm run gulp' manually every time a new image file is included in the src/images folder of the project, so it will be compressed and saved into the destination folder.

## Contributing

1. Fork the project
2. Create a new branch
3. Make your changes
4. Submit a pull request

## License:
This project is licensed under the MIT License. See the LICENSE file for details.
