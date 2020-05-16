const TYPES_PLANTS = { 'helechos': 'Helechos', 'musgos': 'Musgos'};
const HIGHTLIGH_PLANTS = ['helechos'];

const plantasList = [
    { id: "01", name: "Andrómeda, Enquianto", description: "Joven planta en cepellón - Altura de la planta: 10/15 cm.Rústico hasta -23°C, prefiere los climas frescos.", date: "08-29-2020", care: "Medio sombra a plena luz", country: "Japón", type: 'musgos' },
    { id: "02", name: "Andrómeda, Enquianto", description: "Joven planta en cepellón - Altura de la planta: 10/15 cm.Rústico hasta -23°C, prefiere los climas frescos.", date: "08-29-2020", care: "Medio sombra a plena luz", country: "Japón", type: 'helechos' },
    { id: "03", name: "Andrómeda, Enquianto", description: "Joven planta en cepellón - Altura de la planta: 10/15 cm.Rústico hasta -23°C, prefiere los climas frescos.", date: "08-29-2020", care: "Medio sombra a plena luz", country: "Japón", type: 'musgos' },
    { id: "04", name: "Andrómeda, Enquianto", description: "Joven planta en cepellón - Altura de la planta: 10/15 cm.Rústico hasta -23°C, prefiere los climas frescos.", date: "08-29-2020", care: "Medio sombra a plena luz", country: "Japón", type: 'musgos' },
	{ id: "05", name: "Andrómeda, Enquianto", description: "Joven planta en cepellón - Altura de la planta: 10/15 cm.Rústico hasta -23°C, prefiere los climas frescos.", date: "08-29-2020", care: "Medio sombra a plena luz", country: "Japón", type: 'musgos' },
    { id: "06", name: "Andrómeda, Enquianto", description: "Joven planta en cepellón - Altura de la planta: 10/15 cm.Rústico hasta -23°C, prefiere los climas frescos.", date: "08-29-2020", care: "Medio sombra a plena luz", country: "Japón", type: 'helechos' },
    { id: "07", name: "Andrómeda, Enquianto", description: "Joven planta en cepellón - Altura de la planta: 10/15 cm.Rústico hasta -23°C, prefiere los climas frescos.", date: "08-29-2020", care: "Medio sombra a plena luz", country: "Japón", type: 'musgos' },
    { id: "08", name: "Andrómeda, Enquianto", description: "Joven planta en cepellón - Altura de la planta: 10/15 cm.Rústico hasta -23°C, prefiere los climas frescos.", date: "08-29-2020", care: "Medio sombra a plena luz", country: "Japón", type: 'musgos' },
]


function getContentPlanta(item, i, list) {
    let hightligh = HIGHTLIGH_PLANTS.includes(item.type) ? 'higthligh' : '';
    let premium = item.type == 'helechos' ? '<div class="premium"><i class="fas fa-medal"></i></div>' : '';
    let datePlanta = getDateFormatPlanta(item.date);
    let descripcion = list ? truncateDescription(item.description) : item.description;
    let result = list ? `<div class="cards_item">
    <div class="card  ${hightligh} ${item.type} card_item">
       ` : '';

    result += `  ${premium} 
   <img src="https://picsum.photos/id/306/300/150" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">${descripcion}</p>
       <div clss="card-more"> <div class="place left"><span class="fa fa-leaf"></span> ${item.care} , ${item.country}</div><div class="${item.type} rigth"><span class="badge badge-info">${TYPES_PLANTS[item.type]}</span></div></div>
    </div>`;
    result += list ? ` <div class="card-body">
    <div class="details left"> <div data-id="${i}" class="more" data-toggle="modal" data-target="#GSCCModal" > Ver detalle</div></div>
        <div class="social rigth">
            <ul>
                <li class="facebook" style="width:50%;"><a href="https://www.facebook.com/sharer.php?u=${encodeURIComponent('https://www.plantas.com')}&p[title]=${encodeURIComponent(item.name)}" target="_blank"><span class="fa fa-facebook"></span></a></li>
                <li class="whatsapp" style="width:50%;"><a href="https://api.whatsapp.com/send?phone=66666666&text=${encodeURIComponent(item.name)}" target="_blank"><span class="fa fa-whatsapp"></span></a></li>

            </ul>
        </div>
    </div>
</div>
</div>` : '';
    return result;
}

function showPlantas(items) {
    let plantasElements = document.getElementById("plantas");
    let item = "";
    for (let i = 0; i < items.length; i++) {
        item = getContentPlanta(items[i], i, true);
        plantasElements.innerHTML += item;
    }
}

showPlantas(plantasList);

$(document).on("click", ".more", function() {
    let plantaid = $(this).data('id');
    let hightligh = HIGHTLIGH_PLANTS.includes(plantasList[plantaid].type) ? 'higthligh' : '';
    let premium = plantasList[plantaid].type == 'musgo' ? '<div class="premium"><i class="fas fa-medal"></i></div>' : '';
    let datePlanta = getDateFormatPlanta(plantasList[plantaid].date);
    let modal = `<div class="modal-header">
    <h4 class="modal-title" id="myModalLabel">Planta : ${plantasList[plantaid].name}</h4>
    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;  </button>
</div>
<div class="modal-body">
    ${getContentPlanta(plantasList[plantaid], plantaid,false)}
    <div class="card-body">
        <p class="date">  <span class="fa fa-calendar-alt"></span>  ${datePlanta[1]} ${datePlanta[0]},${datePlanta[2]} </p>
        <div class="aplay"><h5>Desea más información?</h5>
        <p>Estamos a su disposición para brindar cualquier información.</p>
        <div class="details"> <div id="apply" class="apply ${ plantasList[plantaid].type == 'premium_webminar'?'check':''}" > Consultar precio</div> </div>
    </div>

</div>`;

    let plantasContent = document.getElementById("planta_custom");
    plantasContent.innerHTML = modal;

    var userapply = document.getElementById('apply');
    userapply.addEventListener("click", function(e) {
        e.preventDefault();
        let applyid = $(this);
        if (applyid.hasClass('check') && !applyid.parent().next("p").length) {
            applyid.parent().parent().append("<p><div class='alert alert-danger' role='alert'>Pregúntenos!,<a href='https://plantas.com/premium' >Buy a merbership plan</a></div> </p>");
        }
        if (!applyid.hasClass('check') && !applyid.parent().next("p").length) {
            applyid.parent().parent().append("<p><div class='alert alert-success' role='alert'>Gracias por confiar en nosotros!</div> </p>");
            this.innerHTML = "Consulte su Email";
        }

    });

});

function getDateFormatPlanta(cad) {
    const d = new Date(cad);
    const ann = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    const mes = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    const dia = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    return [dia, mes, ann];
}

function truncateDescription(text) {

    return text.slice(0,50) + '...';
}