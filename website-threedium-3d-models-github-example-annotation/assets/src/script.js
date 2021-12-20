var arButton = document.getElementById("ar-button");
var url = '';
var modelAR = '';
var flagInterract = true;

var options = {    
    distID: 'latest',
    solution3DName: 'github-example',
    projectName: 'website-threedium-3d-models',
    solution3DID: '31229',
    containerID: 'container3d_replace',

    onLoadingChanged: function(loading) {
        loadingBar.style.width = loading.progress + "%";
    },

    onPointerClick: function(objectsClick){
        if(objectsClick.length > 0) {
            if(objectsClick[0].type == "annotation"){
                iteractAnnotation(objectsClick[0].name);
            }
        }
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

Unlimited3D.init(options, {},function(error, status){
    loadingContent.style.display = "none";

    if (error || !status) {
        console.log(error);

        return;
    }
});

function iteractAnnotation(name) {
    Unlimited3D.changeAnnotationMaterial({ 
        annotations: ["Annotation 1"],
        material : "Annotation 1-Mat"
    }, () => {
        Unlimited3D.changeAnnotationMaterial({ 
            annotations: ["Annotation 2"],
            material : "Annotation 2-Mat"
        }, () => {
            Unlimited3D.changeAnnotationMaterial({ 
                annotations: ["Annotation 3"],
                material : "Annotation 3-Mat"
            });
        });
    });

    document.querySelector('.wrapper-1').style.display = 'none';
    document.querySelector('.wrapper-2').style.display = 'none';
    document.querySelector('.wrapper-3').style.display = 'none';

    switch (name) {
        case 'Annotation 1':
            document.querySelector('.wrapper-1').style.display = 'block';

            Unlimited3D.changeAnnotationMaterial({ 
                annotations: ['Annotation 1'],
                material : 'Annotation 1 click-Mat'
            });

            break;        
        case 'Annotation 2':
            document.querySelector('.wrapper-2').style.display = 'block';

            Unlimited3D.changeAnnotationMaterial({ 
                annotations: ['Annotation 2'],
                material : 'Annotation 2 click-Mat'
            });

            break;                
        case 'Annotation 3':
            document.querySelector('.wrapper-3').style.display = 'block';

            Unlimited3D.changeAnnotationMaterial({ 
                annotations: ['Annotation 3'],
                material : 'Annotation 3 click-Mat'
            });

            break;  
        default:
            break;
    }
}

function closeAnnotationPopUp(name){
    document.querySelector(name).style.display = 'none';

    Unlimited3D.changeAnnotationMaterial({ 
        annotations: ["Annotation 1"],
        material : "Annotation 1-Mat"
    }, () => {
        Unlimited3D.changeAnnotationMaterial({ 
            annotations: ["Annotation 2"],
            material : "Annotation 2-Mat"
        }, () => {
            Unlimited3D.changeAnnotationMaterial({ 
                annotations: ["Annotation 3"],
                material : "Annotation 3-Mat"
            });
        });
    });
}

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