let arr = [];
for(let i=1; i<=999; i++){
    arr[i] = i;
}
let filteredArr = arr;

let container = document.getElementById('number-container');

// show numbers in page
function showNumbers(xArr){
    if(xArr){
        let html = '';
        xArr.forEach(element => {
            html += `
            <button class="number" onclick="addActiveAndFilterNumber(this)" id="${element}">${element}</button>
            `
        });

        container.innerHTML = html;
    }
}

// when user select number, add active class and update filteredArr
function addActiveAndFilterNumber(x){
    //add active class
    x.classList.toggle('active');

    let numbers = document.querySelectorAll('button')

    for(let i=0; i<numbers.length; i++){
        if(numbers[i].classList.contains('active')){
            filteredArr = filteredArr.filter(el => {
                return el != numbers[i].innerText
            })
        } 
    }
}

// to show number first
showNumbers(filteredArr);

