const container = document.querySelector(".container");

function display(arrayOfItems) {
  for (item of arrayOfItems) {
    try {
      const div = document.createElement("div");

      const image = document.createElement("img");
      image.src = item.image;
      image.classList.add("imageBox");
      div.append(image);

      const description = document.createElement("div");
      const desc = document.createElement("p");
      desc.append(item.description);
      description.appendChild(desc);
      description.classList.add("description");
      div.appendChild(description);

      const price = document.createElement("p");
      price.append(item.price);
      price.classList.add("price");
      div.appendChild(price);

      const rating = document.createElement("p");
      rating.append("Rating - ", item.rating);
      rating.classList.add("rating");
      div.appendChild(rating);

      div.classList.add("itemBox");
      container.appendChild(div);
    } catch (error) {
      console.log("no image found", error);
    }
  }
}

axios
  .get("https://fakestoreapi.com/products")
  .then((response) => {
    let arrayOfItems = [];
    for (res of response.data) {
      let obj = Object.create(null);
      obj.price = res.price;
      obj.rating = res.rating.rate;
      obj.description = res.title;
      obj.image = res.image;
      arrayOfItems.push(obj);
      console.log(obj);
    }

    display(arrayOfItems);

    const button1 = document.querySelector(".button1");
    const button2 = document.querySelector(".button2");
    const button3 = document.querySelector(".button3");
    const button4 = document.querySelector(".button4");

    // const buttons = document.querySelectorAll(".button");

    // for (let i = 0; i < 4; i++) {
    //   buttons[i].addEventListener("click", () => {
    //     while (container.firstChild) {
    //       container.removeChild(container.lastChild);
    //     }

    //     let orderOfItems = arrayOfItems;
    //     orderOfItems.sort((a, b) => {
    //       return b.price - a.price;
    //     });
    //     display(orderOfItems);
    //   });
    // }

    button1.addEventListener("click", async () => {
      while (container.firstChild) {
        container.removeChild(container.lastChild);
      }

      let orderOfItems = arrayOfItems;
      orderOfItems.sort((a, b) => {
        return b.price - a.price;
      });
      display(orderOfItems);
    });

    button2.addEventListener("click", async () => {
      while (container.firstChild) {
        container.removeChild(container.lastChild);
      }

      let orderOfItems = arrayOfItems;
      orderOfItems.sort((a, b) => {
        return a.price - b.price;
      });

      display(orderOfItems);
    });

    button3.addEventListener("click", async () => {
      while (container.firstChild) {
        container.removeChild(container.lastChild);
      }

      let orderOfItems = arrayOfItems;
      orderOfItems.sort((a, b) => {
        return b.rating - a.rating;
      });

      display(orderOfItems);
    });

    button4.addEventListener("click", async () => {
      while (container.firstChild) {
        container.removeChild(container.lastChild);
      }

      let orderOfItems = arrayOfItems;
      orderOfItems.sort((a, b) => {
        return a.rating - b.rating;
      });

      display(orderOfItems);
    });
  })
  .catch((e) => {
    console.log(e);
  });
