
function toggleMenus(){
    let tabHeader = document.getElementsByClassName("tab-header")[0];
    let tabIndicator = document.getElementsByClassName("tab-indicator")[0];
    let tabBodys = document.getElementsByClassName("tab-bodys")[0];
    let tabBody2 = document.getElementsByClassName("tab-body")[0];

    let tabsPane = tabHeader.getElementsByTagName("div");

    for (let i = 0; i < tabsPane.length; i++) {
        tabsPane[i].addEventListener("click",function(){
            tabHeader.getElementsByClassName("active")[0].classList.remove("active");
            tabsPane[i].classList.add("active");

            tabBodys.getElementsByClassName("active")[0].classList.remove("active");
            tabBodys.getElementsByClassName("tab-body")[i].classList.add("active");

            tabIndicator.style.left = `calc(calc(100% / 4) * ${i})`;
        });
    }
}

toggleMenus();

document.querySelector("#menu").addEventListener("click", () =>{
    document.querySelector("#menu").classList.toggle("icon");
    document.querySelector("#content-sb").classList.toggle("change");
    document.querySelector(".lif").classList.toggle("lif2");

})


document.addEventListener("click", (e) =>{
    if(e.target.id !== "menu" && e.target.id !== "sidebar" && e.target.id !== "content-sb"){
        let menu1 = document.querySelector(".content-sb");
        if(menu1.classList.contains("change")){
            document.querySelector("#menu").classList.toggle("icon");
            document.querySelector("#content-sb").classList.toggle("change");
            document.querySelector(".lif").classList.toggle("lif2");
        }
    }
})

