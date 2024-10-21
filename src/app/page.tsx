'use client'

import React, { useState, useEffect } from 'react'
import styles from './page.module.css'

// پوسٹ کی قسم کی وضاحت
interface Post {
  id: number;
  title: string;
  body: string;
}

export default function Home() {
   const [data, setData] = useState<Post[] | null>(null)
   const [loading, setLoading] = useState(true)
   
   useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then((fetchedData: Post[]) => {
        setData(fetchedData)
        setLoading(false)
    })
    .catch(error => {
        console.error('Error fetching data:', error)
        setLoading(false)
    })
   },[])
  return (
  <div className={styles.container}>
      <h1 className={styles.title}>پوسٹس</h1>
      {loading ? (
        <p className={styles.loading}>لوڈ ہو رہا ہے...</p>
      ) : (
        <div className={styles.grid}>
          {data && data.map((post) => (
            <div key={post.id} className={styles.card}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      )}
  </div>
  )
}
