// Welcome Message
window.onload = function () {alert("WELCOME TO SCHOOL MANAGEMENT");
    };
    // Smooth scroll
    document.queryselecterAll('a').forEach(link=>{link.addEventlistener('click',function(e){if(this.hash !==""){e.preventdefault();
        const hash = this.hash;
        document.queryselecter(hash).scrollIntoView({behavior:"smooth"});
    }});});
const form =
document.getElementByld("admissionform");
if(form){
    form.addEventListener("submit",function(e){
        e.preventdefault();
        alert("Admission Form Submitted Successfully!");
        form.reset();
    });
} 
const loginForm = 
document.getElementByld("loginForm")
if(loginForm){
    loginForm.addEventListener("submit",function(e){
        e.preventdefault();
        const username = 
        document.getElementByld("username").value;
        const password = 
        document.getElementByld("password").value;
        if(username === "admin" && password === "12345"){
            alert("Login successful")
        }
        else{
            alert("Invalid Username or Password");
        }
    });
}   
function addStudent(){
    let 
    name=document.getElementByld("studentName").value;
    let 
    cls=document.getElementByld("studentClass").value;
    if(name=="" || cls==""){
        alert("Please Fill All Fields");return;
    }
    let 
    student=JSON.prase(localstorage.getItem("students")) ||[];
    student.push({
        name:name,
        className:cls
    });
    localstorage.setItem("students",JSON.stringify(students));
    loadstudents();
    document.getElementByld("studentName").value="";
    document.getElementByld("studentClass").value="";
    }
function deleteRow(btn){
    btn.parentElement.parentElement.remove();
}
let
slides=document.queryselecterALL(".slide");
let current=0;
function slider(){
    slides[current].classList.remove("active");
    current++;
    if(current==slides.lenght){
        current=0;
    }
    slides[current].classList.add("active");
}
setInterval(slider,3000);
const themeBtn =
document.getElementByld("theme-btn");
if(themeBtn){
    // Agar pehle se dark mode save hai
    if(localstorage.getItem(theme)==="dark"){
        document.body.classList.add("dark-mode");
        themeBtn.innerHTML = "Light Mode";
    }
    themeBtn.addEventListener("click",function(){
        document.body.classList.toggle("dark-mode")
        if(document.body.classList.contains(dark-mode)){
            themeBtn.innerhtml="Light Mode";
            localstorage.setItem("theme","light");
        }
    });
}
function loadstudents(){
    let
    table=document.get.getElementByld("studentTable");
    if(!table) return;
    table.innerHTML="<tr><th>Name</th><th>Class</th><th>Action</th></tr>";
    let
    student=JSON.prase(localstorage.getItem("students")) ||[];
    students.forEach(function(student,index){
        let row=table.insertRow();
        row.insertCell(0).innerHTML=student.name;
        row.insertCell(1).innerHTML=studentClass;
        row.insertCell(2).innerHTML=<button onclick="editstudent(${index})"></button>
        <button onclick="deleteStudent(${index})">Delete</button>;
    });
    }
    function deleteStudent(index){
        let
        student=JSON.parse(localstorage.getItem("students")) ||[];
        students.splice(index,1);
        localstorage.setItem("students",JSON.stringify(students));
        loadStudents();
    }
    function searchStudent(){
        let
        input=document.getElementByld("searchBox").value.toLowerCase();
        let
        row=document.querySelectorALL("#studentTable tr");
        rows.forEach(function(row,index){
            if(index===0) return;
            let text=row.innerText.toLowerCase();
            row.style.display=text.includes(input)? "" : "none";
        });
    }
    window.onload=function(){
        loadStudents();
    }
    function editstudent(index){
        let students =
        JSON.parse(localstorage.getItem("students"))||[];
        let newName = prompt("ENTER NEW STUDENT NAME",students[index].name);
        let newClass = prompt("ENTER NEW CLASS",student[index].className);
        if(newNAme && newClass){
            student[index].name = newName;
            student[index].className = newClass;
            localstorage.setItem("students",JSON.stringify(students));
            loadStudents();
        }
    }
    function toogleMenu(){
        document.getElementByld("menu").classList.toggle("active");
    }
    let
    topBtn=document.getElementByld("topBtn");
    window.onscroll=function({
        if(document.body.scrollTop>200 || document.documentElement.scrollTop>200){
            topBtn.style.display="block";
        }else{
            topBtn.style.display="none";
        }
    }
    function topFunction(){
        window.scrollTo({
            top:0;
            behavior:"smooth"
        });
    }
        
    