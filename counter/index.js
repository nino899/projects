const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;
console.log(count);

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
    console.log(count);
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
    console.log(count);
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
    console.log(count);
}


