import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: {
    absolute: "Blog"
  },
}

export const Blog = () => {
  return (
    <div>Blog page</div>
  )
}

export default Blog;