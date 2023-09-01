"use client";
import axios from "axios";
import Link from "next/link";
import React, {useState} from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const CepPage = () =>{



    const [rua, setRua] = useState<string>('')
    const [infoCep, setInfoCep] = useState<any[]>([{
    }])


    const procuraRua = async () => {
        await axios.get(`http://cep.la/${rua}`, {
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(response => {
                console.log(response.data);
                setInfoCep(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setRua(e.target.value);
    };
    const handleKeyDown = (e: { key: string; }) => {
        if (e.key === 'Enter') {
            procuraRua()
            console.log('do validate');


        }
    }

    return(
        //Access-Control-Allow-Methods
        <div className={"w-screen h-screen flex items-center justify-end bg-image-cep  min-h-screen bg-cover bg-center "} >
            <div className={"w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center absolute top-5 left-5  shadow-2xl "}>
                <Link href={"/"}><AiOutlineArrowLeft/></Link>
            </div>
            <div className={"bg-cyan-600 w-1/2 h-4/5 mr-32 rounded overflow-auto drop-shadow-[0_35px_10px_rgba(0,0,0,0.25)] "}>
                <input onKeyDown={handleKeyDown} type="text" value={rua} onChange={handleChange} className={"w-10/12 h-11 m-8 rounded shadow-2xl"}/>
                <div  >
                    {   infoCep.length > 0 &&(
                        infoCep.map((res, index )=> (
                                <div key={index} className={" m-8 rounded shadow-2xl bg-cyan-600 text-gray-300"}>
                                    <div className={""}>CEP: {res.cep}</div>
                                    <div>UF: {res.uf}</div>
                                    <div>Cidade: {res.cidade}</div>
                                    <div>Bairro: {res.bairro} </div>
                                    <div>Rua: {res.logradouro}</div>
                                </div>
                            )
                        ))}
                </div>

            </div>

        </div>

    )
}
export default CepPage
