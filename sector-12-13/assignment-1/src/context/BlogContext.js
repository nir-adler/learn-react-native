import React from 'react'

const BlogContext = React.createContext()
const blogPosts=[
    {name:'blog #1'},
    {name:'blog #2'},
    {name:'blog #3'},
]
export const BlogProvider = ({ children }) => {
    return <BlogContext.Provider
        value={blogPosts}
    >
        {children}
    </BlogContext.Provider>
}

export default BlogContext