import React from "react";

export default function Sidebar() {
  return (
    <section className='sidebar'>
      <button className='button'>
        <i className='fas fa-book-open icon'></i>{" "}
        <span className='title'>LIBRARY</span>
      </button>
      <button className='button'>
        <i className='fas fa-book-open icon'></i>{" "}
        <span className='title'>LOGBOOK</span>
      </button>
    </section>
  );
}
