var arButton = document.getElementById("ar-button");
var url = '';
var modelAR = '';
var flagInterract = true;

var configuration = {
    annotations: {
        hide: [
            'Annotation 1', 
            'Annotation 2', 
            'Annotation 3'
        ],
    }
}

var options = {    
    distID: 'latest',
    solution3DName: 'github-example',
    projectName: 'website-threedium-3d-models',
    solution3DID: '31229',
    containerID: 'container3d_replace',

    onLoadingChanged: function(loading) {
        loadingBar.style.width = loading.progress + "%";
    },

    onCameraInteraction: function(){
        if(flagInterract){
            document.getElementsByClassName('drag-and-scroll')[0].style.display = 'none';

            Unlimited3D.enableAutoRotate({ 
                enable: false,
            });  

            flagInterract = false;
        }       
    }
};

Unlimited3D.init(options, configuration, function(error, status){
    loadingContent.style.display = "none";

    if (error || !status) {
        console.log(error);

        return;
    }
});

//  do not change code below
if (checkAr() == 'android') {
    arButton.setAttribute("rel", "ar");
    arButton.setAttribute(
        "href",
        "intent://arvr.google.com/scene-viewer/1.0?file=.glb#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;S.browser_fallback_url=%23;end;",
    );
    
    arButton.addEventListener("click", arMobile )

} else if (checkAr() == "ios" || checkAr() == 'ipad') {
    arButton.setAttribute("rel", "ar");
    arButton.setAttribute(
        "href",
        ".usdz"
    ); 

    arButton.addEventListener("click", arMobile )
    
}else{
    arButton.addEventListener("click", function() {
        
        if (document.querySelector('.QRcode').style.display == 'flex')
            document.querySelector('.QRcode').style.display = 'none'
        else
            document.querySelector('.QRcode').style.display = 'flex'
    });
    document.getElementById("closeQRcode").addEventListener("click", function() {
        document.querySelector('.QRcode').style.display = 'none'
        // analitika ovde 
    });

    arButton.addEventListener("click", arMobile);
};

function arMobile() {
    // gtag('event', 'Interact', {
    //     'event_category': 'Click',
    //     'event_label': "ime",
    //     'value': 'AR Icon Click',
    // });
};