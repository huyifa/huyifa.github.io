let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/handsome-man.jpg'){
        myImage.setAttribute('src','images/warning.jpeg');
    }else{
        myImage.setAttribute('src','images/handsome-man.jpg')
    }
};

let myButton = document.querySelector('button');
let myUsername = document.querySelectorAll('.user-name');

function setUserName(){
    let userName = prompt('请输入你的名字');
    if(!userName||userName === null){
        setUserName();
    }
    else{
        localStorage.setItem('name', userName);
        myUsername[0].innerHTML = userName;
        myUsername[1].innerHTML = userName;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myUsername[0].textContent = storedName;
    myUsername[1].textContent = storedName;
}

myButton.onclick = function(){
    setUserName();
};



