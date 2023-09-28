let greenCharacter = document.createElement('img')
greenCharacter.src = 'https://github.com/HackerUSA-CE/JS-Web-Game-Part-1/blob/main/assets/green-character.gif?raw=true'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)

let pineTree = document.createElement('img')
pineTree.src = 'https://github.com/HackerUSA-CE/JS-Web-Game-Part-1/blob/main/assets/pine-tree.png?raw=true'
pineTree.style.position = 'fixed'
pineTree.style.left = '450px'
pineTree.style.bottom = '200px'
document.body.append(pineTree)


function newImage(src, left, bottom) {
  const image = document.createElement('img');
  image.src = src;
  image.style.position = 'fixed';
  image.style.left = left;
  image.style.bottom = bottom;
  document.body.append(image);
}


newImage('https://github.com/HackerUSA-CE/JS-Web-Game-Part-1/blob/main/assets/green-character.gif?raw=true', '100px', '100px');
newImage('https://github.com/HackerUSA-CE/JS-Web-Game-Part-1/blob/main/assets/pine-tree.png?raw=true', '450px', '200px');
newImage('https://github.com/HackerUSA-CE/JS-Web-Game-Part-1/blob/main/assets/tree.png?raw=true', '200px', '300px');
newImage('https://github.com/HackerUSA-CE/JS-Web-Game-Part-1/blob/main/assets/pillar.png?raw=true', '350px', '100px');
newImage('https://github.com/HackerUSA-CE/JS-Web-Game-Part-1/blob/main/assets/crate.png?raw=true', '150px', '200px');
newImage('https://github.com/HackerUSA-CE/JS-Web-Game-Part-1/blob/main/assets/well.png?raw=true', '500px', '425px');


function newItem(src, left, bottom) {
  const item = document.createElement('img');
  item.src = src;
  item.style.position = 'fixed';
  item.style.left = left;
  item.style.bottom = bottom;
  document.body.append(item);


  item.addEventListener('dblclick', function() {
    item.remove();
  });
}

//  sword item using the newItem function
newItem('https://github.com/HackerUSA-CE/JS-Web-Game-Part-1/blob/main/assets/sword.png?raw=true', '500px', '405px');
newItem('https://github.com/HackerUSA-CE/JS-Web-Game-Part-1/blob/main/assets/shield.png?raw=true', '165px', '185px');
newItem('https://github.com/HackerUSA-CE/JS-Web-Game-Part-1/blob/main/assets/staff.png?raw=true', '600px', '100px');



function tile(url, left, bottom, width, height){
    for(let h = 0; h < height; h++){
        for(let w = 0; w < width; w++){
            newImage(url, left + w*100, bottom+h*100)
        }
    }
}

function newImage(url, left, bottom){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

function newItem(url, left, bottom){
    let object = newImage(url, left, bottom)

    object.addEventListener('dblclick', () => {
        object.remove()
    })
}

let horizon = window.innerHeight / 1.75
let heightOfSky = window.innerHeight-horizon
let heightOfGrass = horizon

tile('https://github.com/HackerUSA-CE/JS-Web-Game-Part-1/blob/main/assets/sky.png?raw=true', 0, horizon, window.innerWidth/100, heightOfSky/100)
tile('https://github.com/HackerUSA-CE/JS-Web-Game-Part-1/blob/main/assets/grass.png?raw=true', 0, 0, window.innerWidth/100, heightOfGrass/100)


newImage('https://github.com/HackerUSA-CE/JS-Web-Game-Part-1/blob/main/assets/green-character.gif?raw=true', 100, 100)
newImage('https://github.com/HackerUSA-CE/JS-Web-Game-Part-1/blob/main/assets/tree.png?raw=true', 200, 300)
newImage('https://github.com/HackerUSA-CE/JS-Web-Game-Part-1/blob/main/assets/pillar.png?raw=true', 350, 100)
newImage('https://github.com/HackerUSA-CE/JS-Web-Game-Part-1/blob/main/assets/pine-tree.png?raw=true', 450, 200)
newImage('https://github.com/HackerUSA-CE/JS-Web-Game-Part-1/blob/main/assets/crate.png?raw=true', 150, 200)
newImage('https://github.com/HackerUSA-CE/JS-Web-Game-Part-1/blob/main/assets/well.png?raw=true', 500, 425)

newItem('https://github.com/HackerUSA-CE/JS-Web-Game-Part-1/blob/main/assets/sword.png?raw=true', 500, 405)
newItem('https://github.com/HackerUSA-CE/JS-Web-Game-Part-1/blob/main/assets/shield.png?raw=true', 165, 185)
newItem('https://github.com/HackerUSA-CE/JS-Web-Game-Part-1/blob/main/assets/staff.png?raw=true', 600, 100)
