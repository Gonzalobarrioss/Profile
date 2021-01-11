document.addEventListener('DOMContentLoaded', cargar_audio_js);




    let Teclas = new Array(255);

    let tecla = {
        "letra_enter": 13,
        "letra_retroceso": 08
    }

    function cargarTeclas () {

        //console.log("entra");
        for (var i = 0 ; i < Teclas.length; i++) {
            Teclas[i] = false;
            
        }
    }


    function cargar_audio_js(){

        "use_strict";

        function isMobile(){
            return (
                (navigator.userAgent.match(/Android/i)) ||
                (navigator.userAgent.match(/iPhone/i)) ||
                (navigator.userAgent.match(/iPod/i)) ||
                (navigator.userAgent.match(/iPad/i)) ||
                (navigator.userAgent.match(/BlackBerry/i))
            );
    }       

        if (isMobile()){
            modalFotoPerfil = document.getElementById("modalFotoPerfil");
            modalFotoPerfil.style.maxWidth ="100%";
            modalFotoPerfil.marginTop="0px";
            modalFotoPerfil.style.left="10%";
            alert("hola");
        }
        else{            
        }
        


        cargarTeclas();

        let sonido_bienvenida = document.createElement("audio");
        sonido_bienvenida.volume = 0.9;
        sonido_bienvenida.src = "./sounds/bienvenida.mp3";
        sonido_bienvenida.play();

        let sonido_confirmacion = document.createElement("audio");
        sonido_confirmacion.volume = 0.9;
        sonido_confirmacion.src = "./sounds/confirmacion.mp3"; 

        let sonido_presentacion = document.createElement("audio");
        sonido_presentacion.volume = 0.9;
        sonido_presentacion.src = "./sounds/presentacion.mp3";
        
        let sonido_informacion = document.createElement("audio");
        sonido_informacion.volume = 0.9;
        sonido_informacion.src = "./sounds/informacion.mp3";

        let sonido_lenguajes = document.createElement("audio");
        sonido_lenguajes.volume = 0.9;
        sonido_lenguajes.src = "./sounds/lenguajes.mp3"; 
        
        let sonido_idioma = document.createElement("audio");
        sonido_idioma.volume = 0.9;
        sonido_idioma.src = "./sounds/idioma.mp3"; 
        
        let sonido_experiencia_laboral = document.createElement("audio");
        sonido_experiencia_laboral.volume = 0.9;
        sonido_experiencia_laboral.src = "./sounds/experiencia_laboral.mp3"; 
        
        let sonido_educacion = document.createElement("audio");
        sonido_educacion.volume = 0.9;
        sonido_educacion.src = "./sounds/educacion.mp3"; 

        let sonido_copyright = document.createElement("audio");
        sonido_copyright.volume = 0.9;
        sonido_copyright.src = "./sounds/copyright.mp3"; 
        
        let sonido_tecla_incorrecta = document.createElement("audio");
        sonido_tecla_incorrecta.volume = 0.9;
        sonido_tecla_incorrecta.src = "./sounds/tecla_incorrecta.mp3"; 


        document.addEventListener("keydown", (e) => {
            
            Teclas[e.KeyCode] = true;
        })

        document.addEventListener("keyup", (e) => {
            Teclas[e.keyCode] = false
            //  console.log(Teclas[e.keyCode]);
        });
        var targetReproducir = 0;


        document.addEventListener('keyup', event => {


            if (event.keyCode == 13) {
                targetReproducir +=1 ;
                if (targetReproducir == 9){
                    targetReproducir = 0;
                }
                console.log("id Actual: "+ targetReproducir)
                reproducirSonido(targetReproducir);
            }
            else if (event.keyCode == 08) {
                if (targetReproducir >= 1){
                    targetReproducir -= 1;
                }
                console.log("id Actual: "+ targetReproducir)

                reproducirSonido(targetReproducir);
            }
            else {
                reproducirSonido();
            }

        });

        function reproducirSonido(targetReproducir){

            switch(targetReproducir){
                case 0: sonido_tecla_incorrecta.stop();
                        sonido_copyright.pause();
                        sonido_confirmacion.pause();
                        sonido_bienvenida.play();
                    break;
                case 1: sonido_tecla_incorrecta.pause();
                        sonido_bienvenida.pause();
                        sonido_presentacion.pause();
                        sonido_confirmacion.play();
                    break;
                case 2: sonido_tecla_incorrecta.pause();
                        sonido_confirmacion.pause();
                        sonido_informacion.pause();
                        sonido_presentacion.play();
                    break;
                case 3: sonido_tecla_incorrecta.pause();
                        sonido_presentacion.pause();
                        sonido_lenguajes.pause();
                        sonido_informacion.play();
                    break;
                case 4: sonido_tecla_incorrecta.pause();
                        sonido_informacion.pause();
                        sonido_idioma.pause();
                        sonido_lenguajes.play();
                    break;
                case 5: sonido_tecla_incorrecta.pause();
                        sonido_lenguajes.pause();
                        sonido_experiencia_laboral.pause();
                        sonido_idioma.play();
                    break;
                case 6: sonido_tecla_incorrecta.pause();
                        sonido_idioma.pause();
                        sonido_educacion.pause();
                        sonido_experiencia_laboral.play();
                    break;
                case 7: sonido_tecla_incorrecta.pause();
                        sonido_experiencia_laboral.pause();
                        sonido_copyright.pause();
                        sonido_educacion.play();
                    break;
                case 8: sonido_tecla_incorrecta.pause();
                        sonido_educacion.pause();
                        sonido_copyright.play();
                        
                    break;
                case 9:
                default: sonido_tecla_incorrecta.play();
                    break;
            }


        }

       

    }
    
    
    



