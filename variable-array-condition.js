var bottleColor = 'yellow';
var water = 1;
var isFull = false;

//array
var items = ['bottle', 1, 'mug', 'paper', 'pen'];
items.indexOf('paper');
items.push('pencil');
items.push('watch');

items.pop();

//conditionals

if(items.length >= 4){
    console.log('you have to many stuff');
}
else if(items.length==4){
    console.log('you have one hali items');
}
else{
    console.log('WOW! You have clean  desk');
}