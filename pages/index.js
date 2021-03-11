// const MiComponente = ()=>(
//     <div>
//         <ul>
//             <li>
//                 Comprar leche
//             </li>
//             <li>
//                 Comprar Pan
//             </li>
//         </ul>
//     </div>
// )

// const Saludo = (properties)=>(
//     <div>
//         <p>
//             Bienvenido a este curso, <b>{properties.name}</b>
//         </p>
//     </div>
// )
import ClassComponent from '../components/ClassComponent';

const math = [{
    "id": 1,
    "first_name": "Welby",
    "last_name": "Woolbrook",
    "email": "wwoolbrook0@salon.com",
    "gender": "Genderfluid",
    "foto": "https://robohash.org/dolorumsedest.png?size=50x50&set=set1"
  }, {
    "id": 2,
    "first_name": "Marcelia",
    "last_name": "Domenicone",
    "email": "mdomenicone1@scribd.com",
    "gender": "Genderfluid",
    "foto": "https://robohash.org/laudantiumofficiisat.jpg?size=50x50&set=set1"
  }, {
    "id": 3,
    "first_name": "Merrill",
    "last_name": "Eadie",
    "email": "meadie2@sitemeter.com",
    "gender": "Male",
    "foto": "https://robohash.org/etimpeditaut.png?size=50x50&set=set1"
  }, {
    "id": 4,
    "first_name": "Bethena",
    "last_name": "Saintsbury",
    "email": "bsaintsbury3@salon.com",
    "gender": "Agender",
    "foto": "https://robohash.org/autetdolorem.png?size=50x50&set=set1"
  }, {
    "id": 5,
    "first_name": "Yalonda",
    "last_name": "Genders",
    "email": "ygenders4@soundcloud.com",
    "gender": "Non-binary",
    "foto": "https://robohash.org/eaquiaet.bmp?size=50x50&set=set1"
  }, {
    "id": 6,
    "first_name": "Hakeem",
    "last_name": "Huckell",
    "email": "hhuckell5@shutterfly.com",
    "gender": "Genderfluid",
    "foto": "https://robohash.org/animiveliusto.bmp?size=50x50&set=set1"
  }, {
    "id": 7,
    "first_name": "Charin",
    "last_name": "Wadesworth",
    "email": "cwadesworth6@apple.com",
    "gender": "Male",
    "foto": "https://robohash.org/veletlabore.png?size=50x50&set=set1"
  }, {
    "id": 8,
    "first_name": "Orazio",
    "last_name": "Bexley",
    "email": "obexley7@prnewswire.com",
    "gender": "Bigender",
    "foto": "https://robohash.org/illumexercitationemiusto.jpg?size=50x50&set=set1"
  }, {
    "id": 9,
    "first_name": "Blythe",
    "last_name": "Gorgl",
    "email": "bgorgl8@webeden.co.uk",
    "gender": "Non-binary",
    "foto": "https://robohash.org/quidemsitrepellendus.bmp?size=50x50&set=set1"
  }, {
    "id": 10,
    "first_name": "Palmer",
    "last_name": "Schober",
    "email": "pschober9@narod.ru",
    "gender": "Polygender",
    "foto": "https://robohash.org/velitetamet.jpg?size=50x50&set=set1"
  }];

export default () => (
    <div>
        <h1>Cursos del plan</h1>
        <ClassComponent className="Mathematics" students={math}/>
        {/* <p>Esta es mi página de prueba y estoy probando el gitignore otra vez jeje</p> */}
        {/* <MiComponente/>
        <Saludo name = "Nestor Galvis"/>
        <Saludo name = "Camila Botero"/>
        <Saludo name = "Camilo Parra"/> */}
    </div>
)