let  scripts=["/assets/libs/jquery/dist/jquery.min.js",
"/assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js",
"/assets/libs/simplebar/dist/simplebar.min.js",
"/assets/js/theme.min.js",
"/assets/libs/tiny-slider/dist/min/tiny-slider.js",
"/assets/libs/@popperjs/core/dist/umd/popper.min.js",
"/assets/libs/tippy.js/dist/tippy-bundle.umd.min.js",
"/assets/js/vendors/tnsSlider.js",
"/assets/js/vendors/tooltip.js",]


function loadScripts(){
   let  count=0
    for(let geekScript of scripts){
        setTimeout(()=>{
        let script= document.createElement("script");
        script.setAttribute("src",geekScript);
        document.body.append(script)
        },count)
        count+=100
    }
}

export default loadScripts;