let search = document.querySelector('.search');
let result = document.querySelector('.result');

search.addEventListener('keyup',e=>{
    addChoice(e.target.value);

    if(e.keyCode==13){
        setTimeout(()=>{
            e.target.value = "";
            randomSelect();
            console.log(randTag())
        },100);
    }
});

function addChoice(val){
    let value = val;
    value = value.split(',');
    let y = value.filter(item=> item.trim()!=='').map(ele=>{
        return `<span class='tag me-1'>${ele.trim()}</span>`
    }).join('');
    result.innerHTML = y;
    console.log(value)
}

function randomSelect(){
    let time = 30;
    
    let interval = setInterval(()=>{
        let random = randTag();
        checked(random);

        setTimeout(()=>{
            unChecked(random);
        },100)
    },100);

    setTimeout(()=>{
        clearInterval(interval);
        let rand = randTag();
        checked(rand);
    },time*100);

}

function randTag(){
    let tag = document.querySelectorAll('.tag');
    return tag[(Math.floor(Math.random()*tag.length))];
}

function checked(ind){
    ind.classList.add('checked')
}

function unChecked(ind){
    console.log(ind);
    ind.classList.remove('checked')
}




