import {CiSearch} from 'react-icons/ci'
import { Link } from 'react-router-dom'
import {BsPlusLg} from 'react-icons/bs'

import NoteItem from '../components/NoteItem'

const Notes = ({notes}) => {
    return (

        <section>
            <header className="notes__header">
                <h2>My Notes</h2>
                {/* <input type="text" autoFocus placeholder='Keyword...' /> */}
                <button className='btn'><CiSearch/></button>
            </header>
            <div className="notes__container">
               {
                notes.map(note => <NoteItem key={note.id} note={note} />)
               }
               <Link className='btn add__btn'><BsPlusLg/></Link>
            </div>
        </section>
        
    )
}

export default Notes