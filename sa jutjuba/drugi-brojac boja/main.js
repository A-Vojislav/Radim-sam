function changeColor() {
    let hexnumbers=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']

    let hexcode='';
    for (let i=0; i<6; i++){
        let randomindex=Math.floor(Math.random()*hexnumbers.length);
       
        hexcode+=hexnumbers[randomindex];

    }
    document.getElementById("hexcode").innerHTML = hexcode;
    document.getElementsByTagName("body")[0].style.background='#'+hexcode;
}