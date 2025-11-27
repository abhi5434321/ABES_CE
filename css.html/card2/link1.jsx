import {browserrouter,routes,route,link} from 'react'

function link1() {
    function home() {
        return <h1>home page</h1>
    }
    function about() {
        return <h1>about page</h1>
    }
  return (
    <div>
        <nav>
            <link to="/">home</link>
            <link to="/about">about</link>
        </nav>
        <routes>
            <route path='/' element={<home/>}/>
            <route path=""/about" element={<about/>}/>
        </routes>
    </div>
  )
}

export default link1