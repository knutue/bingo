let unpickedNumbers = generateNumbers();
let b = generateSubset(1, "B");
let i = generateSubset(16, "I");
let n = generateSubset(31, "N");
let g = generateSubset(46, "G");
let o = generateSubset(61, "O");


let pickedNumbers =[];


function list(){
    for(index= 0; index< 15; index++){
        let table = document.getElementById("listOfNumbers");
        let row = table.insertRow(index+1);
        row.insertCell(0).innerHTML= unpickedNumbers[index];
        row.insertCell(1).innerHTML= unpickedNumbers[index+15];
        row.insertCell(2).innerHTML= unpickedNumbers[index+30];
        row.insertCell(3).innerHTML= unpickedNumbers[index+45];
        row.insertCell(4).innerHTML= unpickedNumbers[index+60];
    };
}



function generateNumbers(){
    let array = [];
    for(let x = 1; x<76; x++){
        if (x < 16){
            array.push("B "+x);
        } else if (x>15 & x<31){
            array.push("I "+x);
        } else if (x>30 & x<46){
            array.push("N "+x);
        } else if (x>45 & x<61){
            array.push("G "+x);
        } else {
            array.push("O "+x);
        }
    };
    return array;
};

function generateSubset(n, l){
    let array = [];
    for(let x = n; x< (n+15); x++){
        array.push(l + " " + x)
    };
    return array;
};


function pickNumber(){
    if(unpickedNumbers.length > 0){
        const random = Math.floor(Math.random() * unpickedNumbers.length);
        pickedNumbers.push(unpickedNumbers[random]);
        unpickedNumbers.splice(random,1);
        document.getElementById("pickedNumber").innerHTML= pickedNumbers[pickedNumbers.length -1]; 
    } else {
        document.getElementById("pickedNumber").innerHTML = "X"
    }

    td_array = document.getElementsByTagName("td");

    for (x =0; x<td_array.length; x++){
        if(pickedNumbers.includes(td_array[x].textContent)){
            td_array[x].style.color = "black"
        } else {
            td_array[x].style.color = "white"
        }
    }
};

function generateBoard(){
    const board = new Object();
    board.b = generateArray(b);
    board.i = generateArray(i);
    board.n = generateArray(n);
    board.g = generateArray(g);
    board.o = generateArray(o);

    function generateArray(source){
        let array=[];
        for (x=0; x<5; x++){
            const random = Math.floor(Math.random() * source.length);
            array.push(source[random]);
            source.splice(random,1);
        }
        return array;
    }
    for(index= 0; index< 5; index++){
        let table = document.getElementById("board");
        let row = table.insertRow(index+1);

        let bCell = row.insertCell(0);
        let iCell = row.insertCell(1);
        let nCell = row.insertCell(2);
        let gCell = row.insertCell(3);
        let oCell = row.insertCell(4);

        let btnB = document.createElement("input");
        btnB.type = "button";
        btnB.className = "btn";
        btnB.value = board.b[index];
        btnB.onclick = function(){this.style.backgroundColor = 'red'};
        bCell.appendChild(btnB);
        
        let btnI = document.createElement("input");
        btnI.type = "button";
        btnI.className = "btn";
        btnI.value = board.i[index];
        btnI.onclick = function(){this.style.backgroundColor = 'red'};
        iCell.appendChild(btnI);

        let btnN = document.createElement("input");
        btnN.type = "button";
        btnN.className = "btn";
        btnN.value = board.n[index];
        btnN.onclick = function(){this.style.backgroundColor = 'red'};
        nCell.appendChild(btnN);

        let btnG = document.createElement("input");
        btnG.type = "button";
        btnG.className = "btn";
        btnG.value = board.g[index];
        btnG.onclick = function(){this.style.backgroundColor = 'red'};
        gCell.appendChild(btnG);

        let btnO = document.createElement("input");
        btnO.type = "button";
        btnO.className = "btn";
        btnO.value = board.o[index];
        btnO.onclick = function(){this.style.backgroundColor = 'red'};
        oCell.appendChild(btnO);
    };
}

function reload() {
    r = confirm("Vil du starte på nytt?");
    if (r == true){
        location.reload();
    }
}
