import { useState } from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const NavBar = () => (
  <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-2xl px-6 py-2 flex gap-6">
    <Link to="/" className="hover:text-blue-500">Home</Link>
    <Link to="/projects" className="hover:text-blue-500">Projects</Link>
    <Link to="/blog" className="hover:text-blue-500">Blog</Link>
  </nav>
);

const Home = () => (
  <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="text-center mt-20">
    <h1 className="text-3xl font-bold">About Me</h1>
    <p className="mt-4 text-lg">This is a simple about me page.</p>
  </motion.div>
);

const Projects = () => {
  const [projects] = useState(["Project One", "Project Two", "Project Three"]);
  return (
    <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="text-center mt-20">
      <h1 className="text-3xl font-bold">Projects</h1>
      <ul className="mt-4 space-y-2">
        {projects.map((project, index) => (
          <li key={index} className="text-lg">{project}</li>
        ))}
      </ul>
    </motion.div>
  );
};

const Blog = () => {
  const [posts] = useState([
    { title: "First Blog Post", content: "This is my first blog post." },
    { title: "Another Post", content: "More content here!" },
  ]);
  return (
    <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="text-center mt-20">
      <h1 className="text-3xl font-bold">Blog</h1>
      <div className="mt-4 space-y-4">
        {posts.map((post, index) => (
          <div key={index} className="p-4 border rounded-xl">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="mt-2">{post.content}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}