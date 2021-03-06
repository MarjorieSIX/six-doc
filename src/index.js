var Handlebars = require("handlebars");

exports["app"] = exports["app"] || {};

exports["app"]["documentation"] = exports["app"]["documentation"] || {};


exports["app"]["documentation"]["partials"] = exports["app"]["documentation"]["partials"] || {};
/* footer */
exports["app"]["documentation"]["partials"]["_footer"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<script src=\"documentation/js/templates.js\"></script>\r\n\r\n<!-- Components -->\r\n<script type=\"text/javascript\" src=\"components/Tabs/tabs.js\"></script>";
},"useData":true});
/* grid */
exports["app"]["documentation"]["partials"]["_grid"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"grid-container\">\r\n  <!-- Display grid when S + X keys are pushed -->\r\n  <script type=\"text/javascript\" src=\"../../assets/js/grid-display.js\"></script>\r\n    <div class=\"grid-size-name\"></div>\r\n    <div class=\"grid-display\">\r\n        <div class=\"grid-column\"></div>\r\n        <div class=\"grid-column\"></div>\r\n        <div class=\"grid-column\"></div>\r\n        <div class=\"grid-column\"></div>\r\n        <div class=\"grid-column\"></div>\r\n        <div class=\"grid-column\"></div>\r\n        <div class=\"grid-column\"></div>\r\n        <div class=\"grid-column\"></div>\r\n        <div class=\"grid-column\"></div>\r\n        <div class=\"grid-column\"></div>\r\n        <div class=\"grid-column\"></div>\r\n        <div class=\"grid-column\"></div>\r\n        <div class=\"grid-column\"></div>\r\n        <div class=\"grid-column\"></div>\r\n        <div class=\"grid-column\"></div>\r\n        <div class=\"grid-column\"></div>\r\n        <div class=\"grid-column\"></div>\r\n        <div class=\"grid-column\"></div>\r\n        <div class=\"grid-column\"></div>\r\n        <div class=\"grid-column\"></div>\r\n        <div class=\"grid-column\"></div>\r\n        <div class=\"grid-column\"></div>\r\n        <div class=\"grid-column\"></div>\r\n        <div class=\"grid-column\"></div>\r\n    </div>\r\n</div>";
},"useData":true});
/* head */
exports["app"]["documentation"]["partials"]["_head"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<meta charset=\"UTF-8\"></meta>\r\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"></meta>\r\n<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"></meta>\r\n\r\n<!-- Code Highlighting -->\r\n<link rel=\"stylesheet\" href=\"//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/default.min.css\" />\r\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/highlight.min.js\"></script>\r\n<script>hljs.initHighlightingOnLoad();</script>\r\n\r\n<script type=\"text/javascript\" src=\"assets/js/dssite.js\"></script>\r\n\r\n<link href=\"css/styles.css\" rel=\"stylesheet\" />\r\n<link href=\"css/dssite/styles.css\" rel=\"stylesheet\" />\r\n";
},"useData":true});