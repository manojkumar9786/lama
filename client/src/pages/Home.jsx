import React, { useEffect, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { Button, Modal } from "flowbite-react";
import ProjectItem from "../components/ProjectItem";

const Home = () => {
  const [projectsList, setProjectsList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(()=>{
      const getProjectList = ()=>{
        fetch('http://localhost:5000/projects')
        .then((res)=> res.json())
        .then((data) => setProjectsList(data))
      }

      getProjectList()
  },[projectsList])



  const handleSubmit = async (e) => {
    e.preventDefault();
    
        const newProject = { name };
        if (name !== '') {
            setErrorMsg('');
            setOpenModal(false);
            const response = await fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProject)
        });
        } else {
            setErrorMsg("Project Name Can't be empty");
            setOpenModal(true)
        }
};



  return (
    <div className="px-24 py-8">
      <div className="border border-[#999999] px-2 py-1 rounded-xl flex items-center gap-x-2 w-[170px] cursor-pointer">
        <IoHomeOutline />
        <h2>Back to Home</h2>
      </div>

      <div className="py-3 text-center">
        {projectsList.length === 0 ? (
          <div>
            <h1 className="text-primary text-5xl font-bold">
              Create a New Project
            </h1>
            <div className="py-6">
              <img
                src="./images/home.png"
                className="mx-auto w-[500px]"
                alt=""
              />
            </div>
            <p className="lg:mx-64 text-center text-lg text-[#838383]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in
            </p>
            <div className="my-4">
              <button className="w-[300px] rounded-md bg-[#211935] px-3 py-2 flex items-center mx-auto gap-x-3" onClick={() => setOpenModal(true)}>
                <div className="bg-white rounded-full p-2">
                  <FaPlus />
                </div>
                <h1
                  className="font-semibold text-2xl text-white"
                >
                  Create New Project
                </h1>
              </button>
            </div>
          </div>
        ) : (
          <div className="py-3">
              <div className="flex justify-between items-center">
                <h1 className="text-primary text-5xl font-bold">
                  Projects
                </h1>
                <div>
                    <button className="w-[300px] rounded-md bg-[#211935] px-3 py-2 flex items-center mx-auto gap-x-3" onClick={() => setOpenModal(true)}>
                        <div className="bg-white rounded-full p-2">
                        <FaPlus />
                        </div>
                        <h1
                        className="font-semibold text-2xl text-white"
                        >
                        Create New Project
                        </h1>
                   </button>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-10 my-10">
                {
                    projectsList.map((project, i)=>(
                        <ProjectItem key={i} project={project} />
                    ))
                }
              </div>
          </div>
        )}

        <div>
          <Modal show={openModal} onClose={() => setOpenModal(false)}>
            <Modal.Header>Create Project</Modal.Header>
            <Modal.Body>
               <form action="" className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                 <label htmlFor="projectName" className="text-lg">Enter Project Name:</label>
                 <input type="text" name="" value={name} onChange={(e)=> setName(e.target.value)} id="projectname" placeholder="Type here" className="outline-none border-gray-400 rounded-lg p-3" />

                 <p className="text-red-500">{errorMsg}</p>

               <div className="my-6 flex items-center gap-x-4 justify-end">
                  <button className="text-red-500 font-semibold" onClick={() => setOpenModal(false)}>Cancel</button>
                  <button type="submit" className="bg-primary px-4 py-1 text-white rounded-lg">Create</button>
               </div>
               </form>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Home;
