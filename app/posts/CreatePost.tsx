'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export const CreatePost = () => {
  const [title, setTitle] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await fetch('http://127.0.0.1:8090/api/collections/posts/records', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        title
      })
    })
    setTitle('')
    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button type="submit">Create Post</button>
    </form>
  )
}
