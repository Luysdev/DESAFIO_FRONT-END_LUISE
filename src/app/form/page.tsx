"use client";

import { useForm} from "react-hook-form";

const FormPage = () => {

    const { register,handleSubmit } = useForm()
    const onSub = ( data : any ) => {
        console.log(data)
    }

    return(
        <div className={"bg-neutral-200 w-screen h-screen flex  justify-center relative"}>

            <div className={"flex flex-col items-center p-40 mt-20 ml-40 w-[960px] h-[717px]  bg-stone-300 shadow-2xl "}>
                <form onSubmit={handleSubmit(onSub)} className={"flex flex-col"} >
                    <label className={"ml-[170px]"}>Nome</label>
                    <input
                        className={"border-b-[1px] mb-10 outline-none bg-transparent border-b-black"}
                        type="text"
                        {...register("nome", {required: true})}
                    />
                    <label className={"ml-[175px]"}>email</label>
                    <input
                        className={" border-b-[1px] mb-10  outline-none bg-transparent border-b-black"}
                        type="email"
                        {...register("email",{required: true})}
                    />

                    <label className={"ml-[165px]"}>telefone</label>
                    <input
                        className={" border-b-[1px] mb-10  outline-none bg-transparent border-b-black w-96"}
                        type="tel"
                        {...register("tel", {required: true})}
                    />
                    <label className={"ml-[160px]"}>Mensagem</label>
                    <input
                        className={"border-b-[1px] mb-10 outline-none bg-transparent border-b-black"}
                        type="text"
                        {...register("mensagem", {required: false})}
                    />

                    <label className={"ml-44"}>Arquivo</label>
                    <input
                        type="file"
                        accept=".pdf"
                        {...register("pdf", {required: false})}
                    />


                    <button type="submit" className={"bg-neutral-400 mt-2 h-12   "}>Enviar</button>
                </form>
            </div>

        </div>
    )
}

export default  FormPage