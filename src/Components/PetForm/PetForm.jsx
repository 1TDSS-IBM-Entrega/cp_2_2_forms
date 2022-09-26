import { useState } from "react";

import { FormPet, Input, Button, Label, TextArea } from "./styled";

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

            <FormPet onSubmit={formSubmissionHandler}>
                <div >
                    <Label>Nome</Label>
                    <Input type='text' id='name' value={petName} onChange={e => setPetName(e.target.value)} autoComplete="none" required />
                </div>
                <div>
                    <Label>Idade</Label>
                    <Input type='number' id='age' value={petAge} onChange={e => setPetAge(e.target.value)} autoComplete="none" required />
                </div>
                <div>
                    <Label>Raça</Label>
                    <Input type='text' id='raca' value={petBreed} onChange={e => setPetBreed(e.target.value)} autoComplete="none" required />
                </div>
                <div >
                    <Label>Tamanho</Label>
                    <Input type='text' id='tamanho' value={petSize} onChange={e => setPetSize(e.target.value)} autoComplete="none" required />
                </div>
                <div >
                    <Label>Nome do Dono</Label>
                    <Input type='text' id='nomeDono' value={tutorName} onChange={e => setTutorName(e.target.value)} autoComplete="none" required />
                </div>
                <div >
                    <Label>Telefone do Dono</Label>
                    <Input type='tel' id='nomeDono'  value={tutorPhone} onChange={e => setTutorPhone(e.target.value)} autoComplete="none" required />
                </div>
                <div>
                    <Label>Imagem do Pet</Label>
                    <Input type='text' id='imagemPet' placeholder="url" value={petImage} onChange={e => setPetImage(e.target.value)} autoComplete="none" required />
                </div>
                <Label >Observações</Label>
                <TextArea type='text' id='obs' value={observations} onChange={e => setObservations(e.target.value)} autoComplete="none" required />
                <Button>Submit</Button>
            </FormPet>
        </>
      );    
}