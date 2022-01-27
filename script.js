async function get_kural()
{
    try {
        var num=document.getElementById('num').value;
        if((num>=1)&&(num<=1330))
        {
            var data=await fetch(`https://api-thirukkural.vercel.app/api?num=${num}`);
            var kural=await data.json();
           
            document.querySelector('.jumbotron').style.display="block";
            document.getElementById('title1').innerHTML=`<b>குறள் பால்: </b>${kural.sect_tam}<br><b>Sections: </b>${kural.sect_eng}.`
            document.getElementById('title2').innerHTML=`<b>குறள் இயல்: </b>${kural.chapgrp_tam}<br><b>Chapter Groups: </b>${kural.chapgrp_eng}.`
            document.getElementById('title3').innerHTML=`<b>அதிகாரம்: </b>${kural.chap_tam}<br><b>Chapter: </b>${kural.chap_eng}.`
            document.getElementById('kural_tam').innerHTML=`<b>குறள்${kural.number}: </b><br> ${kural.line1}<br>${kural.line2}`;
            document.getElementById('kural_eng').innerHTML=`<b>Couplet${kural.number}: </b><br>${kural.eng}`;
            document.getElementById('tam_exp').innerHTML=`<b>பொருள்: </b><br>${kural.tam_exp}`;
            document.getElementById('eng_exp').innerHTML=`<b>Explanation: </b><br>${kural.eng_exp}`;
        }
        else{
            document.querySelector('.jumbotron').style.display="none"; 
            alert("Please Enter Valid Couplet Number(1-1330)");
            document.getElementById('num').value="";
            document.getElementById('num').focus();
        }
        
    } catch (error) {
        alert(error.message);
    }
   

}
