const id = location.href.split("?")[1];

onload = () => {
  detalhes();
};

async function detalhes() {
  let data = await fetch(
    `https://api.rawg.io/api/games/${id}?key=620acfb0fbdf4254aa1c6a5a7834175c`
  )
    .then((res) => res.json());
    console.log(data);
    let str = `
    <div class="teste">
    <section class="row mb-3">
        
                
            
            <div class="carousel-inner pb-5">
                
                    <div class=" col-12 col-lg-6 col-sm-12 float-end ps-4" id="nopading">
                        <article class="descrição">
                            <h1>${data.name}</h1>
                            <p> <b>Sobre:</b> ${data.description}</p>
                            <p><b>Publisher:</b> </p>
                            <p><b>Plataformas:</b> PC, Xbox , playstation</p>

                            
                        </article>
                    </div>
                </div>
                
                
                
                    
                </div>
            </div>
        </div>
    </section>
    </div>`;
  document.querySelector('#detalhes').innerHTML=str;
}