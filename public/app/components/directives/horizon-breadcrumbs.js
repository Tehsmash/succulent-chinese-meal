'use strict';

function horizonBreadcrumbs() {

  var hash = window.location.hash;
  var path = hash.split('/').shift();
  var link = '<li><a href="path">name</a></li>'
    var html = '<ul class="breadcrumbs">';

  function readableName(str) {
    str.replace("-", " ");
  }

  for(var i = 0; i < path.length; i++) {
    var link = '<li><a href="{0}">{1}</a></li>';
    link.replace("{0}", path[i]);
    link.replace("{1}", readableName(path[i]));
    html + link;
  }

  html + "</ul>";

  return html;
};
