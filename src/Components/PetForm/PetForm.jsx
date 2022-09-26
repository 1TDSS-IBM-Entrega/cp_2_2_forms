import { useState } from "react";

export const PetForm = ({addFicha}) => {

    const [petName , setPetName] = useState('')
    const [petAge , setPetAge] = useState('')
    const [petSize , setPetSize] = useState('')
    const [petBreed , setPetBreed] = useState('')
    const [tutorName , setTutorName] = useState('')
    const [tutorPhone , setTutorPhone] = useState()
    const [petImage , setPetImage] = useState('')
    const [observations , setObservations] = useState('')

    const emptyFields = () => {
        setPetName('')
        setPetAge('')
        setPetSize('')
        setPetBreed('')
        setTutorName('')
        setTutorPhone('')
        setPetImage('')
        setObservations('')
    }
    

    const formSubmissionHandler = (e) =>{
        e.preventDefault()

        addFicha(petName, petAge, petSize, petBreed, tutorName, tutorPhone, petImage, observations)
        
        emptyFields()
    }

    return (
        <>
            <form onSubmit={formSubmissionHandler}>
                <div >
                    <label>Nome</label>
                    <input type='text' id='name' value={petName} onChange={e => setPetName(e.target.value)} autoComplete="none" required />
                </div>
                <div>
                    <label>Idade</label>
                    <input type='number' id='age' value={petAge} onChange={e => setPetAge(e.target.value)} autoComplete="none" required />
                </div>
                <div>
                    <label>Raça</label>
                    <input type='text' id='raca' value={petBreed} onChange={e => setPetBreed(e.target.value)} autoComplete="none" required />
                </div>
                <div >
                    <label>Tamanho</label>
                    <input type='text' id='tamanho' value={petSize} onChange={e => setPetSize(e.target.value)} autoComplete="none" required />
                </div>
                <div >
                    <label>Nome do Dono</label>
                    <input type='text' id='nomeDono' value={tutorName} onChange={e => setTutorName(e.target.value)} autoComplete="none" required />
                </div>
                <div >
                    <label>Telefone do Dono</label>
                    <input type='tel' id='nomeDono'  value={tutorPhone} onChange={e => setTutorPhone(e.target.value)} autoComplete="none" required />
                </div>
                <div>
                    <label>Imagem do Pet</label>
                    <input type='text' id='imagemPet' value={petImage} onChange={e => setPetImage(e.target.value)} autoComplete="none" required />
                </div>
                <div >
                    <label >Observações</label>
                    <textarea type='text' id='obs' value={observations} onChange={e => setObservations(e.target.value)} autoComplete="none" required />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </>
      );    
}