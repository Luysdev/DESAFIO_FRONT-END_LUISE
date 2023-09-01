"use client";

import Link from "next/link";
import { useForm} from "react-hook-form";
import { AiOutlineArrowLeft } from "react-icons/Ai";

const FormPage = () => {

    const { register,handleSubmit, formState: { errors} } = useForm()
    const onSub = ( data : any ) => {
        console.log(data)
    }
    console.log(errors)
    return(
        <div className={"bg-neutral-200 w-screen h-screen flex  justify-center relative "}>
            <div className={"w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center absolute top-5 left-5  shadow-2xl "}>
                <Link href={"/"}><AiOutlineArrowLeft/></Link>
            </div>
            <div className={"flex flex-col items-center p-40 mt-20 ml-40 w-[960px] h-[717px]  bg-stone-300 shadow-2xl "}>
                <form onSubmit={handleSubmit(onSub)} className={"flex flex-col"} >
                    <label className={"ml-[170px]"}>Nome</label>
                    {errors?.nome?.type === 'required' && <p className={"text-red-500"}>!</p>}
                    <input
                        className={ "border-b-[1px] mb-10 outline-none bg-transparent border-b-black"}
                        type="text"
                        {...register("nome", {required: true})}
                    />

                    <label className={"ml-[175px]"}>email</label>
                    {errors?.email?.type === 'required' && <p className={"text-red-500"}>!</p>}
                    <input
                        className={" border-b-[1px] mb-10  outline-none bg-transparent border-b-black"}
                        type="email"
                        {...register("email",{required: true})}
                    />

                    <label className={"ml-[165px]"}>telefone</label>
                    {errors?.tel?.type === 'required'&& <p className={"text-red-500"}>!</p>}
                    {errors?.tel?.type === 'maxLength' && <p className={"text-red-500"}>!</p>}
                    {errors?.tel?.type === 'minLength' && <p className={"text-red-500"}>!</p>}
                    <input
                        className={" border-b-[1px] mb-10  outline-none bg-transparent border-b-black w-96"}
                        type="tel"
                        {...register("tel", {required: true, maxLength : 11, minLength: 8})}
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


                    <button type="submit" className={"bg-neutral-400 mt-2 h-12 hover:bg-neutral-500   "}>Enviar</button>
                </form>
            </div>

        </div>
    )
}

export default  FormPage