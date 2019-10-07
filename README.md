#SIX Documentation

## Installation
Dans un command line lancer
npm install gulp gulp-sass gulp-autoprefixer browser-sync --save-dev

La commande
gulp watch 
permet de lancer le serveur et de surveiller les fichiers .scss et .html

gulp svgSprite
permet de créer un fichier svg avec toutes les icônes

gulp styleTests
permet de compiler les css des tests d'assemblage

gulp styleComponents
permet de compiler les css des composantes

gulp styleWebsite
permet de compiler les css du site de documentation

gulp copyFonts et gulp copyImages
permet de copier, les fonts et les images, du dossier source (src) au dossier de build (build) 

gulp scripts
permet de minifier les javascripts du site de documentation (sauf ceux des composantes)

gulp templates
permet de compiler les fichiers handlebars en html