interface TodoListProps{
    title:string,
  }
const TodoList =({title}:TodoListProps)=>{
   
    return (
        <div >
            <h2 className = "title">{title}</h2>
        </div >
    )
}
export default TodoList;