
document.getElementById("txt").addEventListener("mouseover", ChangerTitre);
function ChangerTitre() {
    var txt = document.getElementById("txt").innerHTML;
    if (txt == "Console de controle") {
        document.getElementById("txt").innerHTML = "Par Funky Company";
        setTimeout(ChangerTitre, 1000);
    }
    else {
        document.getElementById("txt").innerHTML = "Console de controle";
    }
}

function ChangerSection ()
{    console.debug(this.id)
    if(this.id=="nav_Acceuil")
    {
        document.getElementById("Acceuil").style.display = "block";
        document.getElementById("Support").style.display = "none";
        document.getElementById("Console").style.display = "none";
    }

    else if(this.id=="nav_A_propos")
    {
        document.getElementById("Acceuil").style.display = "none";
        document.getElementById("Support").style.display = "block";
        document.getElementById("Console").style.display = "none";
    }
    else if(this.id=="nav_Console")
    {
        document.getElementById("Acceuil").style.display = "none";
        document.getElementById("Support").style.display = "none";
        document.getElementById("Console").style.display = "block";
    }
}


document.getElementById('nav_Acceuil').addEventListener('click',ChangerSection);
document.getElementById('nav_Support').addEventListener('click',ChangerSection);
document.getElementById('nav_Console').addEventListener('click',ChangerSection);
