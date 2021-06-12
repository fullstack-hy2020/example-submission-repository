import React from 'react'

const Note = ({ note }) => {
  return (
    <li>{note.id} {note.important} {note.date} {note.content}</li>
  )
}

export default Note
