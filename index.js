// Define the newImage function
function newImage(src, left, bottom) {
  const imageElement = document.createElement('img');
  imageElement.src = src;
  imageElement.style.position = 'fixed';
  imageElement.style.left = left;
  imageElement.style.bottom = bottom;
  document.body.append(imageElement);
}

// Create the green character using the newImage function
newImage('https://github.com/Nini1997/JS-Web-Game-Part-1/blob/main/assets/green-character.gif?raw=true', '100px', '100px');

// Create the pine tree using the newImage function
newImage('https://github.com/Nini1997/JS-Web-Game-Part-1/blob/main/assets/pine-tree.png?raw=true', '450px', '200px');

// Define the newImage function
function newImage(src, left, bottom) {
  const imageElement = document.createElement('img');
  imageElement.src = src;
  imageElement.style.position = 'fixed';
  imageElement.style.left = left;
  imageElement.style.bottom = bottom;
  document.body.append(imageElement);
}

// Create the green character using the newImage function
newImage('assets/green-character.gif', '100px', '100px');

// Create the pine tree using the newImage function
newImage('assets/pine-tree.png', '450px', '200px');

// Add more images
newImage('https://github.com/Nini1997/JS-Web-Game-Part-1/blob/main/assets/tree.png?raw=true', '200px', '300px');
newImage('https://github.com/Nini1997/JS-Web-Game-Part-1/blob/main/assets/pillar.png?raw=true', '350px', '100px');
newImage('https://github.com/Nini1997/JS-Web-Game-Part-1/blob/main/assets/crate.png?raw=true', '150px', '200px');
newImage('https://github.com/Nini1997/JS-Web-Game-Part-1/blob/main/assets/well.png?raw=true', '500px', '425px');

let sword = document.createElement('img')
sword.src = 'https://github.com/Nini1997/JS-Web-Game-Part-1/blob/main/assets/sword.png?raw=true'
sword.position = 'fixed'
sword.left = '500px'
sword.bottom = '405px'
document.body.append(sword)

sword.addEventListener('click', function(){
    sword.remove()
})


// Define the newImage function
function newImage(src, left, bottom) {
  const imageElement = document.createElement('img');
  imageElement.src = src;
  imageElement.style.position = 'fixed';
  imageElement.style.left = left;
  imageElement.style.bottom = bottom;
  document.body.append(imageElement);
}

// Create the green character using the newImage function
newImage('assets/green-character.gif', '100px', '100px');

// Create the pine tree using the newImage function
newImage('assets/pine-tree.png', '450px', '200px');

// Add more images
newImage('assets/tree.png', '200px', '300px');
newImage('assets/pillar.png', '350px', '100px');
newImage('assets/crate.png', '150px', '200px');
newImage('assets/well.png', '500px', '425px');

// Add shield and staff
newImage('https://github.com/Nini1997/JS-Web-Game-Part-1/blob/main/assets/shield.png?raw=true', '165px', '185px');
newImage('https://github.com/Nini1997/JS-Web-Game-Part-1/blob/main/assets/staff.png?raw=true', '600px', '100px');
