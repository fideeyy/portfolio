function sendMail(){
    var parms={
        name:document.getElementById("text").value,
        email:document.getElementById("email").value,
        subject:document.getElementById("subject").value,
         message:document.getElementById("yourmessage").value,

    };
    if(name === "" || email === "" || subject === "" || message === ""){
        alert("Please fill all fields");
        return;
    }



const serviceID="service_9ox2ir1";
const templateID="template_tpid2fe";


emailjs.send(serviceID, templateID, parms)
.then(
    (res)=>{
        document.getElementById("text").value="";
        document.getElementById("email").value="";
        document.getElementById("subject").value="";
        document.getElementById("yourmessage").value="";
        console.log(res);
        alert("your message sent succesfully");

    }
)
.catch((err)=>console.log(err));
}