"use client";
import axios from "axios";
import React, {useState} from "react";

const CepPage = () =>{

    const [rua, setRua] = useState<string>('')
    const [infoCep, setInfoCep] = useState<any[]>([{
    }])
    const procuraPorRua = () => {
        axios.get(`http://cep.la/${rua}`, {
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(response => {
                console.log(response.data)
                setInfoCep(response.data)

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
            console.log('do validate');
            procuraPorRua()
        }
    }

    return(

        <div className={"w-screen h-screen flex items-center justify-end bg-image-cep  min-h-screen bg-cover bg-center "} >
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
                                </div>
                            )
                        ))}
                </div>
            </div>

        </div>

    )
}
export default CepPage
