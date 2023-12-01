let url = "Kent.fb2";

const xmlParser = () => {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      let parser = new DOMParser();
      let xml = parser.parseFromString(data, "text/xml");
      console.log(xml); //xml документ

      //если всё, что ниже вынести за пределы fetch - не работает.
      const titleBook = xml.querySelector("book-title").textContent;
      const author = xml.querySelector("first-name").textContent;
      const annotation =
        xml.querySelector("annotation").textContent +
        " " +
        xml.querySelector("last-name").textContent;
      document.getElementById(
        "titleBook"
      ).textContent = `Название: ${titleBook}`;
      document.getElementById("author").textContent = `Автор: ${author}`;
      console.log(titleBook);
      console.log(author);

      document.getElementById("annotation").textContent = `${annotation}`;

      const section = [];
      const sectionAll = xml.querySelectorAll("section");
      // console.log(sectionAll)

      // проходим foreach по блоку ssection
      sectionAll.forEach((element) => {
        // console.log(element);
        if (element.tagName == "section") {
          //   console.log(element.tagName);
          sectionAll.forEach((title) => {
            // console.log(title.firstElementChild);
            if (title.firstElementChild.tagName === "title") {
              document.getElementById(
                "section__title"
              ).textContent = `${title.firstElementChild}`;
              console.log(title.firstElementChild);
            }
          });
        }
        // document.getElementById('element').textContent = `Автор: ${element}`;
      });
    });
};

// при попытке вызова undefined
const xml1 = xmlParser();
console.log(xml1);
