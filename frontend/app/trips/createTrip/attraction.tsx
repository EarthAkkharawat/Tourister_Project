"use client";

import { useState, MouseEvent, Fragment } from "react";
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import PropTypes from 'prop-types'

type FormData = {
  // name: string;
  // option: string;
  // editing: boolean;
}
// type accountType = 'tourist' | 'guide';
const validationSchema = yup.object().shape({
  name: yup.string(),
});

const attraction = ({id,handleDelete}:{id:string,handleDelete:Function}) => {
  const [name,setName] = useState("");
  const [editing, setEditing] = useState(true);
  const [option,setOption] = useState("Admission not needed")
  const [error,setError] = useState(false);

  const {
    register,
    watch,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });
  
  return (
    <div>
      {/* <a>{id}</a> */}
        {editing===true ? (
          <Fragment>
          <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
          {error===true&&editing===true ? <p>Please add a name for the location</p> : <Fragment/>}
          <select onChange={(e)=>setOption(e.target.value)}>
            <option value={option}>{option}</option>
            {option==="Admission not needed" ? <Fragment></Fragment> : <option value="Admission not needed">Admission not needed</option>}
            {option==="Admission included" ? <Fragment></Fragment> : <option value="Admission included">Admission included</option>}
            {option==="Admission not included" ? <Fragment></Fragment> : <option value="Admission not included">Admission not included</option>}
          </select>
          <button type="button" onClick={()=>{handleDelete(id)}}>delete</button>
          <button type="button" onClick={()=>{if(name==="") {(setError(true))} else {setEditing(false);setError(false)}}}>done</button>
          </Fragment>
        ) : (
          <Fragment>
            <a>{name}</a>
            <button type="button" onClick={()=>{setEditing(true)}}>edit</button>
            <a>{option}</a>
          </Fragment>
        )
        }
    </div>
  );
};

// attraction.defualtProps = {
//   name: ''
// }
export default attraction;