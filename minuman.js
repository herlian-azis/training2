var name = "udag"
var age = 19
var money = 50000
var juice = 50000
var wine = 300000

if (name == "") 
{
    console.log ('maaf tidak bisa masuk')
}

else if ( age < 17 && money > 50000){
    console.log ('juice, kembalian anda Rp.', money - juice);
}

else if (age > 17 && money > 300000){
    console.log('wine, kembalian anda Rp.', money - wine);
}

else { console.log('uang tidak cukup')};