import { useState } from "react";
import AddCategory from "./components/addCategory";
// import { AddCategory } from "./components/addCategory";

    const giffExpertApp = ()=>{
        
        // if (true){               //En React mismo hooks no tienen un nombre aunque React los identifica por su posicionamiento. En relación a esto no hay que poner hooks dentro de condicionales ya que Rear termina perdiendo esta relacion.
        //     const [categories, setcategories] = useState( ['Jujutsu Kaisen', 'Naruto', 'Huner X Hunter ']); 
        // }
        const [categories, setcategories] = useState( ['Jujutsu Kaisen', 'Naruto', 'Huner X Hunter ']); //Recordar que los hooks se importan

        console.log('Instancia Prueba',categories, Array.isArray(categories))

        const onAddCategory =()=>{
            setcategories(['Valorant', ...categories]) //En React a principios no estaríamos pudiendo de mutar arrays dentro de los set. Lo que hacemos entonces es devolverle exactamente lo que queremos. En este caso, para no mutarlo, hacemos con el spread una copia del respectivo arreglo, todo dentro de un array, y le sumamos lo que queremos como otro item
            // setcategories(cat=>{[...cat, 'Valorant']})//Podemos ponerle el nombre que queramos cuando lo recibimos como parametro de instancia local                                           //React intenta no mutar estados
            //Arriba hay otra forma de hacerlo
        }                                               
        // console.log('Instancia 1',categories.map(categoria=>{         //==>Probando el .map()
        //     return categoria.length
        // }));
        
        
        return (        //El cuerpo del return debe estar dentro de un parentesis si se usan fargments. Asimismo es necesario que el primer parentesis esté en la misma linea que el respectivo return. Sino te pone que es unreachable code. 
            <>
                <h1>GiffExpertApp</h1>  
                <AddCategory/>                  
                {/* <AddCategory/> */}
                
                {/* En el onClick va unicamente la referencia a la funcion, recordar que estamos trabajando con jsx acá y no con js */}
                    <button onClick={onAddCategory}>Agregar categoría Valorant</button>
                    <ol>
                        {categories.map(categorie=> {           //Si bien las llaves están hechas para poder usar codigo js, se demuestra que no es simplemente jQuery ya que tambien estamos usando codigo html, por ende terminado por ser jsx
                            return <li key={categorie}>{categorie}</li>
                        })}
                    </ol>
            </>)
            
}
export default giffExpertApp;


