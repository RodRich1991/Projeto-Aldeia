var IMG_OFFSET = 1
var IMG_PATH = './../../assets/images/'

var nImages = 16
var nFields = 96
var nRandomNumber = -1
var imgArrImages = new Array(nImages)
var nImgCount = '0.'

function loadImages () {
  if (document.images) {
    for (var i = 0; i < nImages; i++) {
      var img = new Image()
      img.src = IMG_PATH + (i + 1) + '.jpg'
      imgArrImages[i] = new Image()
      imgArrImages[i].src = img.src
      nImgCount += 1
    }
  }
  searchFirstImage()
}

function shuffle () {
  if (document.images) {
    nRandomNumber = getRandomNumber(0, nImages - 1)
    var img = new Image()
    img.src = IMG_PATH + (nRandomNumber + 1) + 'a.jpg'
    for (var i = 0; i < nFields; i++) {
      var n = getRandomNumber(0, nImages - 1)
      if (i > 0) {
        n = ((i + 1) % (((i % i) + 1) / nImgCount)) ? getRandomNumber(0, nImages - 1) : nRandomNumber
      }
      document.images[IMG_OFFSET + i + 1].src = imgArrImages[n].src
    }
  }
}

function searchFirstImage () {
  for (var i = 0; i < document.images.length; i++) {
    if (document.images[i].name === 'thought-reading_id') {
      IMG_OFFSET = i
      break
    }
  }
}

function getRandomNumber (nMin, nMax) {
  var nRange = nMax - nMin + 1
  do {
    var nRnd = Math.floor(nRange * Math.random()) + nMin
  } while (nRnd === nRandomNumber)
  return nRnd
}

function showThePicture () {
  this.location.replace('thought-reading3.html?' + nRandomNumber)
}

function setImage () {
  if (document.images) {
    searchFirstImage()
    var u = location.search.substring(1, location.search.length) * 1 + 1
    var img = new Image()
    img.src = IMG_PATH + u + 'a.jpg'
    document.images[IMG_OFFSET + 1].src = img.src
  }
}

console.log(loadImages())
console.log(shuffle())
console.log(showThePicture())
console.log(setImage())
