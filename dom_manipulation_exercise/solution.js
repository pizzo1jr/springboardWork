document.addEventListener("DOMContentLoaded", function() 
{
    task1();
    task2();
    task3();
    task4();
    task5();
    task6();
    task7();
    task8();
    task9();
}) 

function task1 () 
{
    document.getElementById('task1').innerText = "Changed with innerText!"; 
}

function task2() 
{
    document.getElementById('task2').innerHTML = '<button type="submit">Submit</button>';
}

function task3()
{
    document.body.style.backgroundColor = '#232323';
}

function task4()
{
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.style.border = '1px solid black';
    });
}

function task5() 
{
    document.getElementById('task5').setAttribute('href', 'https://www.springboard.com');
}

function task6()
{
    document.getElementById('task6').value = 'DOM Master';
}

function task7() 
{
    document.getElementById('task7').classList.add("new-class");
}

function task8() 
{
    const newButton = document.createElement('button');
    newButton.innerText = 'Click Me'; 
    document.getElementById('task8').appendChild(newButton);
}

function task9()
{
    document.getElementById('task9').remove();
}