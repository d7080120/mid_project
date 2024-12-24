import Todo from './Components/Todo';

const Todos=()=>{
 const c={body:"Hashem Gadol",title:"WOW"}
    return(  
    <>
   <Todo title={c.title}body={c.body} />
     </>
    )

}
export default Todos