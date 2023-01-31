import { Link, useParams } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useState } from 'react';


const EditNote = ({notes, setNotes}) => {
  const {id} = useParams();
  const note = notes.find((itme) => itme.id === id);
  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.title);

  const handleForm = (e) => {
    e.preventDefault();

    if(title && details) {
      const newNote = {...note, title, details}
    }
  }
  return (
    <section>
      <header className="create-note__header ">
      <Link to="/" className='btn'><IoIosArrowBack/></Link>
      <button className='btn lg primary'>Save</button>
      <button className='btn danger'><RiDeleteBin6Line/></button>
      </header>
      <form className='create-note__form'>
        <input type="text" placeholder="Title" value={title} onchange={(e) => setTitle(e.target.value)} autoFocus/>
        <textarea  rows='28' placeholder="Note details..." value={details} onchange={(e) => setDetails(e.target.value)}> </textarea>
      </form>
    </section>
  )
}

export default EditNote