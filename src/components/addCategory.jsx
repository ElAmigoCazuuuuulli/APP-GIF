import { useState } from "react";



 const addCategory =()=>{
    
    const [inputValue, setInputValue] = useState('Jujutsu Kaisen')
    const onInputChange=({target})=>{
        //  console.log(event.target.value);
        setInputValue(target.value)
        console.log(target.value);
    }   
   const  onSubmit=(event)=>{   //El evento es el que contiene toda la info
         console.log(event)
        event.preventDefault(); //Esto es para evitar el reseteo producto del submit del form
        console.log('INSTANCIA onSubmit',inputValue)
    }
    return (        
                        // Al parecer los forms funcionan como fragments si se usan solos
        <form onSubmit={(event)=>{onSubmit(event)} }> 
            <input type="text"  placeholder="Gif a buscar" value={inputValue} onChange={(event)=> onInputChange(event)}/>    {/* Cuando mandas la funcion por su referencia significa que  obvias estar mandandole el parametro que te viene en la funcion en la que está. Evidentemente el interprete reconoce si lo haces o no, como para responder a errores. */}           
        </form>
    )
}
export default addCategory;
  