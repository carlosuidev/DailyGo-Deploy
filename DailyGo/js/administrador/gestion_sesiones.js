function comprobarSesion(){
    const tipoUsuario = localStorage.getItem("tipoUsuario");
    if(tipoUsuario !== "administrador"){
        if(tipoUsuario !== null){
            
            const redirecciones = {
                'usuario': '../usuarios/inicio.php',
                'rider': '../riders/inicio.html',
                'proveedor': '../proveedores/inicio.html',
            }

            window.location.href = redirecciones[tipoUsuario];
        }else{
            window.location.href = '../index.html';
        }
    }else{
        return true;
    }
}

comprobarSesion();