"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CustomProviders } from "../components/provider";
import { useSession, signOut, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation'




const Admin = () => {
    const [files, setFiles] = useState([]);
    const [title, setTitle] = useState('');
    const [headline, setHeadline] = useState('');
    const [content, setContent] = useState('');
    const [videos, setVideos] = useState('');
    const [selectedFiles, setSelectedFiles] = useState(null);

    const { data: session } = useSession();

    const router = useRouter()

    useEffect(() => {
        fetchFiles();
    }, []);

    const fetchFiles = async () => {
        try {
            const response = await axios.get('https://apipost.ad-dev.net/api/images');
            setFiles(response.data);
        } catch (error) {
            console.error('Error fetching files:', error);
        }
    };

    const handleFileChange = (event) => {
        setSelectedFiles(event.target.files);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        for (let i = 0; i < selectedFiles.length; i++) {
            formData.append('files', selectedFiles[i]);
        }
        formData.append('title', title);
        formData.append('headline', headline);
        formData.append('content', content);
        formData.append('videos', videos);

        try {
            await axios.post('https://apipost.ad-dev.net/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            fetchFiles();
        } catch (error) {
            console.error('Error uploading files:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://apipost.ad-dev.net/api/images/${id}`);
            fetchFiles();
        } catch (error) {
            console.error('Error deleting file:', error);
        }
    };


    if (!session) {
      router.push('/login');
      }


 

    return (

        
      
    
    
        <div>
       
            <form className='login' onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" className='form-control mb-3' value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="text" placeholder="Headline" className='form-control mb-3' value={headline} onChange={(e) => setHeadline(e.target.value)} />
                <textarea placeholder="Content" className='form-control mb-3' value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                <input type="text" placeholder="Videos" className='form-control mb-3' value={videos} onChange={(e) => setVideos(e.target.value)} />
                <input type="file" className='form-control mb-3' multiple onChange={handleFileChange} />
                <button type="submit" className='btn btn-info'>Upload</button>
            </form>





         
          <div className="container text-center">
            
            
             <ul>
                {files.map(file => (
                    <li key={file.id}>
                        <img src={`https://apipost.ad-dev.net/uploads/${file.filename}`} alt={file.title} style={{ width: '100px', height: '100px' }} />
                        <p>Title: {file.title}</p>
                        <p>Headline: {file.headline}</p>
                        <p>Content: {file.content}</p>
                        <p>Videos: {file.videos}</p>
                        <button onClick={() => handleDelete(file.id)}>Delete</button>
                    </li>
                  
                ))}
                  <hr />
            </ul>
      
        </div></div>

       
    );
};

export default Admin;
