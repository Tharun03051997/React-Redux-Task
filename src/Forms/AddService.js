import React,{useState} from 'react';
import BasicCta from '../Elements/Button/index.style';
import TextInput from '../Elements/TextInput/Index';
import BasicSelect from '../Elements/Select';
import { useDispatch,useSelector } from 'react-redux';
import { addNewServices,updateService,deleteService} from '../Redux/Reducers/ServicesSlice';

const categories = ["spa","Makeup","Grooming"]
function AddService()
{
    const dispatcher =useDispatch()
    const tharun = useSelector((state)=>state.services.items)
    const[mode, setMode] = useState("create")
    const[form, setForm] = useState(null)
    function handleInput(e)
    {
        if(e)
        {
            let formCopy ={
                ...form,
            }
            formCopy[e.target.id] = e.target.value;
            setForm(formCopy)
        }
    }

    function saveService(e)
    {
       if(form)
       {
        dispatcher(addNewServices(form))
        setForm(null)
       }
    }

    function handleEdit(e,item={})
    {
        if(e){
            setMode("update")
            console.log(tharun)
            console.log(tharun.filter((d)=>d.serviceName===item.serviceName))
            setForm(item)
        }
    }
    function handleUpdate()
    {
        dispatcher(updateService(form))
        setForm(null)
        setMode("create")
    }
    function handleDelete(e,name="")
    {
         dispatcher(deleteService(name));
    }
    return (
        <div className="form">
           <TextInput id="serviceName" marginBottom={"10px"} placeholder='Enter Service name' onChange={handleInput} value={form?.serviceName || "" } disabled={mode === "update"}/>
           <TextInput id="serviceDescription" marginBottom={"10px"} placeholder='Enter Service Desription' onChange={handleInput} value={form?.serviceDescription || ""}/>
           <TextInput id="servicePricing" marginBottom={"10px"} placeholder='Enter Service Pricing' onChange={handleInput} value={form?.servicePricing || ""}/>
           <BasicSelect marginBottom={"10px"} options={categories} id="servicecategory" onSelect={handleInput} value ={form?.servicecategory || ""}/>
            <BasicCta text={mode==="create"?"save":"update"} onClick={mode==="create"?saveService:handleUpdate}/>
            <div className='listing-container'>
                  <h3>All Services</h3>
                  <div className='listing-section row'>
                    {
                        tharun.length>0 && tharun.map((d,i) =>(
                        <div className='services-card' key={'${i}'}>
                        <h4>{d.serviceName}</h4>
                        <p>{d.serviceDescription}</p>
                        <p>{d.servicePricing}</p>
                        <div className='row'>
                           <BasicCta text ="Edit" onClick={(e) =>handleEdit(e,d)}/>
                           <BasicCta text ="Delete" onClick={(e) =>handleDelete(e,d.serviceName)}/>
                           </div>
                        
                            </div>
                         ) )
                    }
                  </div>
            </div>
        </div>
    )
}

export default AddService