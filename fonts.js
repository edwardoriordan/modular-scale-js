var FONT_STRINGS = [
  'Merriweather:400,300,700,900:latin', 
  'Open+Sans:400,300,800:latin'
];

var FONT_OBJECTS = [];

addFontsScript(FONT_STRINGS);

$.each(FONT_STRINGS, function(index, val) {
    FONT_OBJECTS = FONT_OBJECTS.concat(makeFont(val));
});

// 'fonts-body', FontApp.fontObjects
//addCustomFontSelectlist('fonts', FONTS);

// -----------------------------
function addFontsScript(fonts) {
    var ss = document.createElement("link");
    ss.type = "text/css";
    ss.rel = "stylesheet";
    ss.href = "http://fonts.googleapis.com/css?family=" + fonts.join('|');
    document.getElementsByTagName("head")[0].appendChild(ss);
}

function makeFont(value) {
  var font,
      fonts = [],
      fontName = value.split(":")[0].replace('+', ' '),
      weights = typeof value.split(":")[1] === 'undefined' ? ['regular'] : value.split(":")[1].split(",");
      
      $.each(weights, function(index, val) {
           font = {
              _id: fontName.replace(' ', '_') + '-' + index,
              fontName: fontName,
              weight: val.replace('italic', ''),
              style: val.indexOf('italic', fontName) === -1 ? 'normal' : 'italic'
           }
           fonts.push(font);
      });

  return fonts;
}

function addSelectlistContent(selectList, list) {
  var $select = $(selectList),
      html = "";

      console.log(list);
  $.each(list, function(index, value){
    var text = value.fontName + '-' + value.weight + '-' + value.style;
    html += "<option value=" + index + ">" + text + "</option>";
  });

  html = $select.append(html);
}