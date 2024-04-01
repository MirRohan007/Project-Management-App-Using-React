import React, { useRef } from 'react'
import Input from './Input'
import Modal from './Modal';

const NewProject = ({onSave, onCancel}) => {

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  const handleOnSave = () => {
    const t = title.current.value;
    const desc = description.current.value;
    const dd = dueDate.current.value;

    if(t.trim() === "" || desc.trim() === "" || dd.trim() === ""){
        modal.current.open();
        return;
    }

    onSave({
        title: t,
        description : desc,
        dueDate : dd
    })
  }

  return (
    <>
    <Modal ref={modal} buttonText="Okay">
        <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid input!</h2>
        <p className='text-stone-600 mb-4'>Looks like you forgot to enter some value.</p>
        <p className='text-stone-600 mb-4'>Please fill all the input fields.</p>
    </Modal>
    <div className='w-[35rem] mt-16 '>
      <menu className='flex items-center justify-end gap-4 my-4'>
        <li><button onClick={onCancel} className='text-stone-800 hover:text-stone-950'>Cancel</button></li>
        <li><button onClick={handleOnSave} className='px-6 py-2 bg-stone-800 hover:bg-stone-950 text-stone-50 rounded-md'>Save</button></li>
      </menu>
      <div>
       <Input ref={title} label="Title" type="text"/>
       <Input ref={description} label="Description" textarea={true}/>
       <Input ref={dueDate} label="Due Date" type="date"/>
      </div>
    </div>
    </>
  )
}

export default NewProject
