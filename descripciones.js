function toggleDescripcion(id) {
    let desc = document.getElementById(id);

    let allDescs = document.querySelectorAll('.descripcion');
    allDescs.forEach(function(d) {
        if (d.id !== id) {
            d.style.display = "none";  
        }
    });

    if (desc.style.display === "none" || desc.style.display === "") {
        desc.style.display = "block";
        setTimeout(() => { 
            document.addEventListener("click", function(event) {
                cerrarDescripcion(event, id);
            });
        }, 100); 
    } else {
        desc.style.display = "none";
        document.removeEventListener("click", function(event) {
            cerrarDescripcion(event, id);
        });
    }
}

function cerrarDescripcion(event, id) {
    let desc = document.getElementById(id);

    if (!desc.contains(event.target) && event.target.tagName !== "BUTTON") {
        desc.style.display = "none";
        document.removeEventListener("click", function(event) {
            cerrarDescripcion(event, id);
        });
    }
}
