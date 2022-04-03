import {useState,useState} from "react"
import { Button,Form,Grid,Loader } from "semantic-ui-react"
import { useRouter } from "next/dist/client/router"
const CreateTask = () =>{
    const[newTask,setNewTask]=useState({
        title:"",
        description:"",
    });

    const {push} =useRouter();
    const [isSubmit,setIsSubmit]=useState(false);
    const [errors,setErrors] = useState({});

    return(
        <div>
            <h2>creating task</h2>
        </div>
    )
}

export default CreateTask