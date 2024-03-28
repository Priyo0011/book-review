import ListedBooks from '../pages/ListedBooks.jsx'
import PageToRead from '../pages/PageToRead.jsx'
import About from '../pages/About.jsx'
import UpcomingBooks from '../pages/UpcomingBooks.jsx'
import MainLayout from '../layouts/MainLayout.jsx'
import Home from '../pages/Home.jsx'
import Book from '../pages/Book.jsx'
import { createBrowserRouter } from 'react-router-dom'
import ReadBook from '../pages/ReadBook.jsx'
import Wishlist from '../components/Wishlist.jsx'
import ErrorPage from '../pages/ErrorPage.jsx'




export const router = createBrowserRouter([
    {
      path:'/',
      element:<MainLayout></MainLayout>,
      errorElement: <ErrorPage />,
      children:[
        {
          path:'/',
          element:<Home></Home>,
          loader:()=> fetch('./books.json')
        },
        {
          path:'/book/:id',
          element:<Book></Book>,
          loader:()=> fetch('./books.json')
        },
      
        {
          path:'/listed-books',
          element:<ListedBooks></ListedBooks>,
          loader:()=> fetch('./books.json'),
          children:[
            {
              index:true,
              element:<ReadBook></ReadBook>,
              loader:()=> fetch('./books.json'),
            },
            {
              path:'wish-list',
              element:<Wishlist></Wishlist>,
              loader:()=> fetch('./books.json'),
            },
          ],
        },
        {
          path:'/pages-to-read',
          element:<PageToRead></PageToRead>
        },
        {
          path:'/favorite-books',
          element:<About></About>
        },
        {
          path:'/upcoming-books',
          element:<UpcomingBooks></UpcomingBooks>
        }
      ]
    },
  ])