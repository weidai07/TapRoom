import React from 'react';

function NewBeerForm(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='names'
          placeholder='Beer Names'/>
        <input
          type='text'
          id='location'
          placeholder='Location'/>
        <textarea
          id='issue'
          placeholder='Describe your issue.'/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

export default NewBeerForm; 