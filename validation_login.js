/**
 * Created by mohankrishnareddybade on 3/23/17.
 */

$('.form-disable').on('submit',function validation(){

        var x = document.forms["myForm"]["email"].value;
        var y=document.forms["myForm"]["password"].value;

        if (x!="") {
            document.getElementById("error").innerHTML="email good ";
        } else{
            // if(x=="admin@gmail.com"){
            //     document.getElementById("error").innerHTML="userName Correct"
            //
            // }else{
            //     document.getElementById("error").innerHTML="must enter correct username ";

            // }
            document.getElementById("error").innerHTML="must enter userName ";

        }
        var name = 'gopi';
        if(!empty()){
            document.getElementById("error1").innerHTML="password good";
        } else{
        //     if(y=='root'){
        //         document.getElementById("error1").innerHTML="Password good";
        //
        //     }else{
        //         document.getElementById("error1").innerHTML="must enter correct password";
        //     }
            document.getElementById("error1").innerHTML="must enter password";
            return false;
        }

        if(x!=""&&y!=""){

            return true;
        }

    return false;
});

//
// $('.form1-disable').on('submit',function signup_validation() {
//
//     var a =document.forms["myForm"]["userName"].value;
//     var lastnmae =document.forms["myForm"]["lastName"].value;
//     // var email = document.forms["myForm"]["email"].value;
//     var password1 = document.forms["myForm"]["password1"].value;
//     var password2 =document.forms["myForm"]["password2"].value;
//
//     if (a=="") {
//         document.getElementById("error4").innerHTML = "must enter userName ";
//     }else{
//         document.getElementById("error4").innerHTML = " perfect username ";
//     }
//     if (lastnmae=="") {
//         document.getElementById("error5").innerHTML = "must enter lastName ";
//     }else{
//         document.getElementById("error5").innerHTML = " good lastname  ";
//     }
//     // if(email=""){
//     //     document.getElementById("error6").innerHTML="must enter email";
//     //
//     // }else{
//     //     document.getElementById("error6").innerHTML=" enter email good";
//     // }
//     if (password1=="") {
//         document.getElementById("error7").innerHTML = "must enter password ";
//     }else{
//         document.getElementById("error7").innerHTML = " good password ";
//     }
//     if (password2=="") {
//         document.getElementById("error8").innerHTML = "must enter password ";
//     }else{
//         if(password1!=password2){
//             document.getElementById("error8").innerHTML="must enter same password as you enter before"
//         }else{
//             return true;
//         }
//     }
//
//     return false;
//
//
// });



//