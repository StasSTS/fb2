let url = "book.xml";

const xmlParser = (url) => {
    fetch(url)
        .then((response) => response.text())
        .then((data) => {
            someMethod(data)
        });
};

// при попытке вызова undefined

function someMethod(data) {
    let parser = new DOMParser();
    let xml = parser.parseFromString(data, "text/xml");
    
    console.log(xml); //xml документ

    const node = 'annotation';
    content = '';
    const start = xml.querySelector('description')
    const parent = xml.getElementsByTagName(node)

    // console.log(start)
    console.log(parent[0].innerHTML)
   
   
    // document.getElementById("annotation").innerHTML = parent[0].innerHTML;
    let content1 = '';
    let tag_start = '';
    let  tag_end = '';
    let nodecont = '';
   for (const iterator of parent) {
    console.log(iterator.children)
    let children = iterator.children
    for (const key of children){
        console.log(key.tagName)
        console.log(key.children)
        if (key.childNodes.length > 0) {
        for (let i = 0; i < key.childNodes.length; i++){
            console.log(key.children  )

    // данную проверку оформить рекурсивно через функцию 
            
            if(key.tagName === 'title'){
                tag_start = '<p>';
                tag_end = '</p>'  
                content1 += tag_start+key.innerHTML+tag_end
                              
            }

            if(key.tagName === 'poem'){
                tag_start = '<p>';
                tag_end = '</p>'  
                content1 = tag_start+key.innerHTML+tag_end
                              
            }
            

            if(key.tagName === 'v'){
                console.log(key.tagName)
                tag_start = '<p>';
                tag_end = '</p>'  
                content1 = tag_start+key.textContent+tag_end
                              
            }
            // console.log(content1)
        }
    }

    }
    document.getElementById("annotation").innerHTML = content1;
   }
   


    //если всё, что ниже вынести за пределы fetch - не работает.
    // const bodyTitle = xml.querySelector("body").querySelector('title').textContent
    // const titleBook = xml.querySelector("book-title").textContent;
    // const author = xml.querySelector("first-name").textContent +  " " +  xml.querySelector("last-name").textContent;;
    // const annotation =  xml.querySelector("annotation").innerHTML 
    // document.getElementById("titleBook").textContent = `Название: ${titleBook}`;
    // document.getElementById("author").textContent = `Автор: ${author}`;
    // console.log(titleBook);
    // console.log(bodyTitle)
    // console.log(author);
    // console.log(annotation);

    // document.getElementById("annotation").innerHTML = `${annotation}`;

    // const section = [];
    // const sectionAll = xml.querySelectorAll("section");
    // console.log(sectionAll)

    // проходим foreach по блоку ssection
    // let content = '';
    // let title_content = ''
    //      sectionAll.forEach(element => {
            
            
    //        let tag_start = '';
    //        let  tag_end = '';
    //        let node = element.tagName

            

            // Не обрабатывать вложенную секцию
            // if (node === 'section') {
            //     title_content = element.firstElementChild.innerHTML 
                
            //     content  +=  title_content        
                          
            //     content += element.innerHTML
                
            // } 

            // if (element.childNodes.length) {
            //     console.log(element.childElementCount.length)
            //     //   $content .= $tag_start . $this->parseHtml($child_element) . $tag_end;
            //     //  } else {
            //     //  $content .= ($tag_start . $child_element->nodeValue . $tag_end);
            //                 }

            

        // });

        //   document.getElementById("section").innerHTML = `${content}`;

         



}
const xml1 = xmlParser(url);
// console.log(xml1);

// const  function parseHtml($element, $clear_node = false): ?string
//     {
//         $content = '';
    
//         if (!isset($element->childNodes)) {
//             return null;
//         }
    
//         foreach ($element->childNodes as $child_element) {
//             $tag_start = '';
//             $tag_end = '';
//             $node = $child_element->nodeName;
    
//         // Обработка тегов (под каждый тег одно условие)
//             if ($node == 'Название тега') {
//                 $tag_start = 'Открытие html тега';
//                 $tag_end = 'Закрытие html тега';
//             }
    
          
//             // Не обрабатывать вложенную секцию
//             if ($node == 'section') {
//                 continue;
//             }
    
//             // Вернуть чистый текст без обработки
//             if (isset($child_element->nodeValue) and $clear_node) {
//                 $content .= $child_element->nodeValue;
//                 continue;
//             }
    
//             // Если есть дочерние ноды вызвать рекурсивно
//             if ($child_element->childNodes->length) {
//                 $content .= $tag_start . $this->parseHtml($child_element) . $tag_end;
//             } else {
//                 $content .= ($tag_start . $child_element->nodeValue . $tag_end);
//             }
//         }
    
//         return $content;
//     }


// sectionAll.forEach((element) => {
//     // console.log(element);
//     if (element.tagName == "section") {
//         //   console.log(element.tagName);
//         sectionAll.forEach((title) => {
//             // console.log(title.firstElementChild);
//             if (title.firstElementChild.tagName === "title") {
//                 document.getElementById(
//                     "section__title"
//                 ).textContent = `${title.firstElementChild}`;
//                 console.log(title.firstElementChild);
//             }
//         });
//     }

// });
