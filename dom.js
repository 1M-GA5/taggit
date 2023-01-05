
//Modification by tag name

var li = document.getElementsByTagName('li')
console.log(li);
li[0].style.backgroundColor= 'red'

li[1].style.backgroundColor = 'grey'

li[2].style.backgroundColor = 'pink'

li[3].style.backgroundColor= 'purple'


for(var i=0;i<li.length;i++)
{
    li[i].style.fontWeight = 'bold'
}

// Modification by class name 

var items = document.getElementsByClassName('list-group-item-1')

items[0].style.backgroundColor = 'gray'

items[1].style.backgroundColor = 'red'

items[2].style.backgroundColor = 'pink'

items[3].style.backgroundColor = 'purple'


for(var i=0;i<li.length;i++)
{
    li[i].style.fontWeight = 'solid'
}



