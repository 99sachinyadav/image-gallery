 const searchbox=document.querySelector(".seacrchbutton")
 const inputbox=document.querySelector(".inputbox")
 let accesskey='chZhwnIwOAscA_vnTJuMzbmMsPuqlNYDLMTixs8xyVE'
  let page=1;
  let keyword="";
    const getimages = async () => {
        keyword=inputbox.value
        const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}`
        const response = await fetch(url)
        const data = await response.json()
        return  data.results
     // console.log(data)
    }

     
   

     const  showimages= async()=>{
        let data = await getimages();
        console.log(data)
        const container = document.querySelector(".container"); // Make sure to have a container element
    container.innerHTML = ''; 
           data.forEach(element => {
              const box=document.createElement("div");
              box.classList.add("box")
              box.innerHTML=` <div class="card">
                <img class="image_cover" src=${element.urls.raw}>
                <div class="overlay">
                    <div class="info">
                        <h4>${element. alt_description }</h4>
                        <h1>9</h1>
                    </div>
                    <p>${element.description } </p>
                </div>
            </div>`
            container.appendChild(box);
           });
     }
     searchbox.addEventListener("click",(e)=>{
      
        showimages()
     })
  