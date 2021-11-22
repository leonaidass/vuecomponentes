Vue.component('navbar',{
  props:['nombre'],
  template:`<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>`
}),

Vue.component('componente-cards',{
  props:['presentacion'],
  template:`<div class="card  p-4" >
         <h3>{{presentacion.titulo}}</h3>
         <h4>$ {{presentacion.costo}}</h4>
         <img :src="presentacion.portada">
  </div>`
})

var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      comidas:[{id: 1,
                titulo: "Spaghetti alla bolognesa",
                costo: 575.00,
                portada: "https://4.bp.blogspot.com/-D5Wvi_gX_Kg/WLatk_GVnKI/AAAAAAAAA5M/-y0gB26R0Dkb01QmdgfZqQALtd9NMV2DACLcB/s1600/P70301-072354.jpg"},
                {id: 2,
                 titulo: "Pizza Napoletana ai carciofi",
                 costo: 675.00,
                 portada: "https://static.cookist.it/wp-content/uploads/sites/21/2017/12/istock-480277738.jpg"},
                 {id: 3,
                  titulo: "Porchetta umbra a cottura lunga",
                  costo: 845.00,
                  portada: "https://www.fontecesia.it/wp-content/uploads/2018/11/porchetta-umbra-1920x1280.jpg"},
                  {id: 4,
                    titulo: "Orecchiette alle cime di rapa",
                    costo: 845.00,
                    portada: "https://irepo.primecp.com/2016/03/259860/recipe-8673_ExtraLarge1000_ID-1461628.jpg"
                   }
                  ]
  }})