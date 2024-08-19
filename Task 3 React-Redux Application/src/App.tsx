import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import ListPosts from './pages/ListPosts'
import Layout from './layout/Layout';
import CreatePost from './pages/CreatePost';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Navigate to="/task3/listPosts" />} />
        <Route path="/task3/listPosts" element={<ListPosts />} />
        <Route path="/task3/createPost" element={<CreatePost />} />
      </Route>
    </Routes>
  );
}

export default App
