import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet
} from 'react-router-dom';
import Home from './pages/Home';
import JobDetails from './pages/JobDetails';
import PostJob from './pages/PostJob';
import EditJob from './pages/EditJob';
import Header from './components/Header';
import Footer from './components/Footer';
import JobList from './pages/JobList';

const AppLayout = () => {
  return (
    <>
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/jobs/:id" element={<JobDetails />} />
      <Route path="/jobs/:id/edit" element={<EditJob />} />
      <Route path="/post" element={<PostJob />} />
      <Route path="/jobs" element={<JobList />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;