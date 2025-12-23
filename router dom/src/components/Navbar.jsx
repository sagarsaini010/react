import { Link } from 'react-router-dom'
const Navbar = () => {
  console.log('i am navbar')
  return (
    <>
      <div className="flex justify-between p-4">
        <h1 className="text-4xl">Logo</h1>
        <div className="flex gap-10 text-2xl hover:cursor-pointer">
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="contact">Contact</Link>
          <Link to="blog">Blog</Link>
          <Link to="text">Text</Link>

        </div>
        <div>
          <input
            type="search"
            placeholder="enter something.."
            className="border-2 border-black px-4 py-1 mr-4 rounded-2xl"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
