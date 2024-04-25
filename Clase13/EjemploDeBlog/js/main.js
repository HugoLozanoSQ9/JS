const blogEntries = [
    {
      image: "https://picsum.photos/id/237/200/300",
      title: "Los Secretos de la Cocina Italiana",
      content:
        "Explorar la cocina italiana va más allá de la pizza y la pasta. En este artículo, descubrimos los ingredientes autóctonos, las técnicas de cocción y los platos menos conocidos que definen la verdadera esencia de la cocina italiana.",
      abstract:
        "Explorar la cocina italiana va más allá de la pizza y la pasta...",
      rating: 8.75,
      fechaCreacion: "2024-04-18",
      autor: "Daniel Torres",
      avatar: "https://randomuser.me/api/portraits/men/38.jpg",
    },
    {
      image: "https://picsum.photos/id/102/200/300",
      title: "Avances en la Energía Solar",
      content:
        "La energía solar ha alcanzado nuevos hitos en la última década, con avances en la eficiencia de los paneles y la reducción de costos. Analizamos cómo estos cambios están configurando el futuro de las energías renovables.",
      abstract:
        "La energía solar ha alcanzado nuevos hitos en la última década...",
      rating: 9.3,
      fechaCreacion: "2024-04-17",
      autor: "Laura Martínez",
      avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
      image: "https://picsum.photos/id/401/200/300",
      title: "La Revolución de la Inteligencia Artificial",
      content:
        "La inteligencia artificial está transformando industrias enteras, desde la automotriz hasta la financiera. Este artículo explora los desarrollos más recientes y cómo están influyendo en nuestras vidas cotidianas.",
      abstract:
        "La inteligencia artificial está transformando industrias enteras...",
      rating: 7.9,
      fechaCreacion: "2024-04-16",
      autor: "Sofía Hernández",
      avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
      image: "https://picsum.photos/id/200/200/300",
      title: "El Futuro del Trabajo Remoto",
      content:
        "El trabajo remoto se ha convertido en una parte fundamental de muchas industrias. Este artículo analiza las herramientas, técnicas y culturas que están moldeando esta nueva forma de trabajar.",
      abstract: "El trabajo remoto se ha convertido en una parte fundamental...",
      rating: 8.65,
      fechaCreacion: "2024-04-15",
      autor: "Daniel Torres",
      avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      image: "https://picsum.photos/id/305/200/300",
      title: "Secretos para un Jardín Sostenible",
      content:
        "Crear un jardín sostenible no solo es beneficioso para el medio ambiente, sino también relajante y gratificante. Descubre técnicas y consejos para mantener tu jardín verde y próspero con un impacto mínimo en la naturaleza.",
      abstract:
        "Crear un jardín sostenible no solo es beneficioso para el medio ambiente...",
      rating: 9.5,
      fechaCreacion: "2024-04-14",
      autor: "Sofía Hernández",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    },
    {
      image: "https://picsum.photos/id/180/200/300",
      title: "Explorando la Historia del Jazz",
      content:
        "El jazz es un género musical que ha influido en muchas otras formas de música a lo largo del tiempo. Este artículo explora la historia del jazz, sus figuras clave y su impacto en la música moderna.",
      abstract:
        "El jazz es un género musical que ha influido en muchas otras formas...",
      rating: 8.2,
      fechaCreacion: "2024-04-13",
      autor: "Miguel Ángel García",
      avatar: "https://randomuser.me/api/portraits/men/50.jpg",
    },
  ];
  
  console.log(blogEntries);
  
  /*
  <div class="card blog-card mb-3">
      <img src="https://picsum.photos/id/237/200/300" alt="" />
      <div class="card-body">
        <h3 class="card-title">'Los Secretos de la Cocina Italiana'</h3>
        <p class="card-text">
          Explorar la cocina italiana va más allá de la pizza y la
          pasta...
        </p>
      </div>
    </div>
  </div>
  */
  
  const createBlogCard = (entryObject) => {
    let { image, title, abstract } = entryObject;
    let {autor,avatar} = entryObject
    let {fechaCreacion, rating} = entryObject
  
    let card = document.createElement("div");
    card.classList.add("card", "blog-card", "mb-3");
  
    let cardImage = document.createElement("img");
    cardImage.setAttribute("src", image);
  
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
  
    let cardTitle = document.createElement("h3");
    cardTitle.classList.add("card-title");
    let cardTitleText = document.createTextNode(title);
    cardTitle.append(cardTitleText);
  
    let cardText = document.createElement("p");
    cardText.classList.add("card-text");
    let cardTextContent = document.createTextNode(abstract);
    cardText.append(cardTextContent);
    // h
    let entryItemList = document.createElement('ul')
    entryItemList.classList.add('list-group')

    let entryItem = document.createElement('li')
    entryItem.classList.add('list-group-item')

    let avatarItem = document.createElement('img')
    avatarItem.setAttribute('src',avatar)
    avatarItem.classList.add('avatar1')

    let spanItem = document.createElement('span')
    spanItem.classList.add('spanSpace')
    let entrySpanItem= document.createTextNode(autor)

    let dateAndRatenig = document.createElement('div')
    let dateSpan = document.createElement('span')
    dateSpan.classList.add('spanSpace2')
    let dateText = document.createTextNode(`${fechaCreacion} / ${rating}`)

    // <button type="button" class="btn btn-outline-primary" disabled>Primary button</button>
    let buttonContainer = document.createElement('div')
    buttonContainer.classList.add('buttonWidth')

    let buttonContainerSpace = document.createElement('br')
    buttonContainer.append(buttonContainerSpace)

    let buttonCreate = document.createElement('button')
    buttonCreate.setAttribute('type','button')
    buttonCreate.classList.add('btn','btn-outline-primary','dimension')

    let buttonText = document.createTextNode('Ir al post')
    buttonCreate.append(buttonText)
    buttonContainer.append(buttonCreate)

    dateSpan.append(dateText)
    dateAndRatenig.append(dateSpan)
    

    entryItemList.append(entryItem)
    entryItem.append(avatarItem)
    spanItem.append(entrySpanItem)
    entryItem.append(spanItem)
    

    cardBody.append(cardTitle, cardText);
    card.append(cardImage, cardBody);
    card.append(entryItemList,dateAndRatenig)
    card.append(buttonContainer)

  
    return card;
  };
  
  const printBlogCards = (blogData, wrapperId) => {
    let wrapper = document.getElementById(wrapperId);
    blogData.forEach((entry) => {
      let blogCard = createBlogCard(entry);
      wrapper.append(blogCard);
    });
  };
  
  const createPopularItem = (entryObject) => {
    let { title } = entryObject;
  
    let entryItem = document.createElement("li");
    entryItem.classList.add("list-group-item");
  
    let itemAnchor = document.createElement("a");
    itemAnchor.setAttribute("href", "#");
  
    let entryHeading = document.createElement("h3");
    let entryTitle = document.createTextNode(title);
  
    entryHeading.append(entryTitle);
    itemAnchor.append(entryHeading);
    entryItem.append(itemAnchor);
  
    return entryItem;
  };

  
  //Estructura de creación de autor
  const createAuthorItem = (entryObject) =>{
    let {autor} = entryObject
    let {avatar} = entryObject

    let entryItem = document.createElement('li')
    entryItem.classList.add('list-group-item')

    let avatarItem = document.createElement('img')
    avatarItem.setAttribute('src',avatar)
    avatarItem.classList.add('avatar','col-md-3')

    let spanItem = document.createElement('span')
    let entrySpanItem= document.createTextNode(autor)

    spanItem.append(entrySpanItem)
    entryItem.append(avatarItem,spanItem)
    return entryItem

  }

  const printPopularEntries = (popularArray, wrapperId) => {
    let wrapper = document.getElementById(wrapperId);
    popularArray.forEach((entry) => {
      let popularEntry = createPopularItem(entry);
      wrapper.append(popularEntry);
    });
  };


  //Crea y muestra en pantalla la cantidad de cards necesarias para el blog 
  printBlogCards(blogEntries, "main-posts");
  
  //crea filtra y muestra en pantalla las entradas con rating mayor a 9 
  printPopularEntries(
    blogEntries.filter((entry) => entry.rating > 9),
    "popular-entries"
    );
  
    //crea y muestra en pantalla los elementos para cada autor 
  const printAuthtorItem = (authorArray,wrapperId) =>{
      let wrapper = document.getElementById(wrapperId)
      authorArray.forEach((author)=>{
        let authorWrapper = createAuthorItem(author)
        wrapper.append(authorWrapper)
      })
    }
    
    
    //Obtiene solamente a los autores sin repetir alguno 
    const getAutor = (dataArray) => {
      let result = dataArray.reduce((accum, current) => {
        // Verificar si el autor actual ya está presente en la acumulación
        const autorExistente = accum.find(autor => autor.autor === current.autor);
        // Si el autor no está presente, agregar el objeto completo a la acumulación
        if (!autorExistente) {
          accum.push(current);
        }
        return accum
      }, []);
      return result;
    }
    //crea y muestra en pantalla a los autores sin repetir
    printAuthtorItem(getAutor(blogEntries),'avatar-item')
    
    //printAuthtorItem(blogEntries,'avatar-item')