import Navbar from "./assets/components/Navbar"

const Comp = ({name}) =>{
      return(
        <>
        <h1>Hello {name}</h1>
        </>
      )
}

const App = () => {
  console.log("Hello")
  return (
    <div>App {(screen)?"Sagar":"Saini"}
   
   <Comp name="william"/>
   
   </div>
  )
}

export default App