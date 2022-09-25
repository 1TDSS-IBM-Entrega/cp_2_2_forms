import { useState } from "react";

export const PetForm = (props) => {

    const [petName , setPetName] = useState('')
    const [petAge , setPetAge] = useState(0)
    const [petSize , setPetSize] = useState('')
    const [petBreed , setPetBreed] = useState('')
    const [tutorName , setTutorName] = useState('')
    const [tutorPhone , setTutorPhone] = useState(0)
    const [petImage , setPetImage] = useState('')
    const [observations , setObservations] = useState('')
    const [fichaData, setFichaData] = useState({})

    const formSubmissionHandler = (e) =>{
        e.preventDefault()

        setFichaData({
            name: petName, 
            age: petAge,
            size: petSize,
            breed: petBreed,
            tutorName,
            tutorPhone,
            petImage,
            observations
        })

        props.addFicha(fichaData)

        setPetName('')
        setPetAge(0)
        setPetSize('')
        setPetBreed('')
        setTutorName('')
        setTutorPhone(0)
        setPetImage('')
        setObservations('')
    }

    return (
        <>
            <form onSubmit={formSubmissionHandler}>
                <div >
                    <label>Nome</label>
                    <input type='text' id='name' value={petName} onChange={e => setPetName(e.target.value)} autoComplete="none" />
                </div>
                <div>
                    <label>Idade</label>
                    <input type='number' id='age' value={petAge} onChange={e => setPetAge(e.target.value)} autoComplete="none" />
                </div>
                <div>
                    <label>Raça</label>
                    <input type='text' id='raca' value={petBreed} onChange={e => setPetBreed(e.target.value)} autoComplete="none" />
                </div>
                <div >
                    <label>Tamanho</label>
                    <input type='text' id='tamanho' value={petSize} onChange={e => setPetSize(e.target.value)} autoComplete="none" />
                </div>
                <div >
                    <label>Nome do Dono</label>
                    <input type='text' id='nomeDono' value={tutorName} onChange={e => setTutorName(e.target.value)} autoComplete="none" />
                </div>
                <div >
                    <label>Telefone do Dono</label>
                    <input type='tel' id='nomeDono'  value={tutorPhone} onChange={e => setTutorPhone(e.target.value)} autoComplete="none" />
                </div>
                <div>
                    <label>Imagem do Pet</label>
                    <input type='text' id='imagemPet' value={petImage} onChange={e => setPetImage(e.target.value)} autoComplete="none" />
                </div>
                <div >
                    <label >Observações</label>
                    <textarea type='text' id='obs' value={observations} onChange={e => setObservations(e.target.value)} autoComplete="none" />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </>
      );    
}