import React from 'react'

const page = () => {
  return (
    <div>Contact page<figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-30 dark:bg-slate-800">
    <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-" src="/phone.jpg" alt="" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          contact number 03106518644.email is dyamalik237@gmail.com.
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          Diya malik
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          Student of Ai
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page