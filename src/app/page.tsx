import React from 'react';
import Notes from '@/components/Notes'
import { SignUpButton } from '@clerk/nextjs';


const NotePage = () => {
  return (
    <main className="my-5">
      <div className="container mx-auto h-full">
          {/* <Notes /> */}
          <SignUpButton redirectUrl='/notes' />
      </div>
    </main>
  )
}
export default NotePage
