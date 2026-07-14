import React from 'react';
import styled from 'styled-components';
import { FaLinkedinIn } from "react-icons/fa";
import sonu from '../../assets/Sonu_Sir.jpg'

const OurTeam = () => {
    const teamMembers = [
        {
            id: 1,
            name: "Manish",
            role: "Cryptocurrency",
            image: sonu
        },
        {
            id: 2,
            name: "Sarah Johnson",
            role: "Creative Director",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1000"
        },
        {
            id: 3,
            name: "David Smith",
            role: "Tech Lead",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000"
        },
        {
            id: 4,
            name: "Sarah Johnson",
            role: "Creative Director",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1000"
        },
        {
            id: 5,
            name: "David Smith",
            role: "Tech Lead",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000"
        },
        {
            id: 6,
            name: "Sarah Johnson",
            role: "Creative Director",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1000"
        },
        {
            id: 8,
            name: "nakul gupta",
            role: "Blockchain Developer",
            image: "https://imgs.search.brave.com/3YkYJ1b1Yk1bX5E9wWcX1J5f0KkY5Y2F1F2v1Z5nQY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU3/MTk0NDQyL3Bob3Rv/L25ha3VsLWdwdXQt/YmxvY2tjaGFpbi1k/ZXYuanBnP3M9/NjEyeDYxMiZ3/PTAmaz0yMCZjPWgweVVp/VkY1eGhjMzFz/V3pIcWVTbkRIVHpu/VVE3LWZuQWM0eUhK/TnA4MkU9"
        },
        {
            id: 6,
            name: "David Smith",
            role: "Tech Lead",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000"
        },
        {
            id: 7,
            name: "Manish",
            role: "Cryptocurrency",
            image: "https://imgs.search.brave.com/pIgRsf5jVevcid3yYahuoWchwJSg0Puq5v-MgXiBDcQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU3/MTk0NDQyL3Bob3Rv/L3N1aXQtYm95LXBy/b2ZpbGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPWgweVVp/VkY1eGhjMzFzV3pI/cWVTbkRIVHpuVVE3/LWZuQWM0eUhKTnA4/MkU9"
        },
        {
            id: 8,
            name: "Sarah Johnson",
            role: "Creative Director",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1000"
        },
        {
            id: 9,
            name: "David Smith",
            role: "Tech Lead",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000"
        },
        {
            id: 10,
            name: "Sarah Johnson",
            role: "Creative Director",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1000"
        },
        {
            id: 11,
            name: "David Smith",
            role: "Tech Lead",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000"
        },
        {
            id: 12,
            name: "David Smith",
            role: "Tech Lead",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000"
        },

    ];

    return (<>

        <h2 className='text-5xl font-bold text-white text-center sm:text-left sm:pl-36 mt-20 tracking-tight'>Our Team</h2>
        <StyledWrapper>
            <div className="cards-container">
                {teamMembers.map((member) => (
                    <div className="card" key={member.id}>
                        <img
                            src={member.image}
                            alt={member.name}
                            className="img"
                        />
                        <div className="textBox">
                            <p className="head">{member.name}</p>
                            <p className="discription">{member.role}</p>
                            <p className="price"><FaLinkedinIn /></p>
                        </div>
                    </div>
                ))}
            </div>
        </StyledWrapper>
    </>
    );
}

const StyledWrapper = styled.div`
  padding: 4rem 1rem;
  display: flex;
  justify-content: center;
  background-color: transparent;

  .cards-container {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;
      align-items: center;
    }

  .card {
      width: 18rem;
      height: 20rem;
      background: #313131;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
      transition: 0.2s ease-in-out;
    position: relative;
    cursor: pointer;
    overflow: hidden;
  }

  .img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: absolute;
    transition: 0.2s ease-in-out;
    z-index: 1;
  }

  .textBox {
      opacity: 0;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: end;
      width: 100%;
      height: 100%;
      gap: 0em;
      padding: 1em;
      z-index: 5;
      transition: 0.2s ease-in-out;
      background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
    }

  .textBox > .head {
      font-size: 1.2em;
      font-weight: bold;
      color: #fff;
    }

  .textBox > .price {
      font-size: 1.2em;
      font-weight: bold;
      color: #fff;
      margin-top: 5px;
    }

  .textBox > .discription {
      font-size: 0.9em;
      color: #ccc;
      font-weight: light;
    }

  .card:hover > .textBox {
      opacity: 1;
      gap: 0.5em;
    }

  .card:hover > .img {
      filter: blur(3px);
      animation: anim 1s infinite ease-in-out;
    }

  @keyframes anim {
      50% {
          transform: scale() translateY(-10%) rotate(1deg);
        }
    }

  .card:hover {
      transform: scale(1.04);
      box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    }
`;

export default OurTeam;
