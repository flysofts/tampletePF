let dark = false;

function darkMode(){
    
    if(dark == false){
        dark = true;
        document.querySelector(".fa-moon").classList.add("fa-sun");
        document.querySelector(".fa-moon").classList.remove("fa-moon");
        document.querySelector("html").classList.add("dark");
        localStorage.setItem("dark", true);
        // <!--  애플리케이션 > 로컬은 닫혀도 없어지지않음 세션은 반대로  닫히면 없어짐 -->
    }else{
        dark = false;
        document.querySelector(".fa-sun").classList.add("fa-moon");
        document.querySelector(".fa-sun").classList.remove("fa-sun");
        document.querySelector("html").classList.remove("dark");
        localStorage.removeItem("dark");
    }
    
}
const dark_mode = localStorage.getItem("dark");

if(dark_mode == "true"){
    darkMode()    
}

function language(lang){
    if(lang == "en"){
        localStorage.setItem("lang", "en");
    }else{
        localStorage.removeItem("lang", "en");
    }
}

const $lang = localStorage.getItem("lang");
// 다국어
const url = new URL(location.href).searchParams;
const lang = url.get("Lang");

// 모바일 네비

function mNav(){
    document.querySelector(".m-btn").classList.toggle("on");
}



axios.get("data/data.json")
.then(function(res){

    if($lang == "en"){   
        res.data.EnNav.map((e,i)=>{
            // console.log(e)
            document.querySelectorAll(".list li a")[i].textContent = e.title
        })
    }

    if(lang == "en"){   
        res.data.EnNav.map((e,i)=>{
            // console.log(e)
            document.querySelectorAll(".list li a")[i].textContent = e.title
        })
    }

})
.catch(function(error){
    console.log(error)
})

if(lang == "kr"){
    // console.log("한국어")
}else{
    // console.log("영어")
}