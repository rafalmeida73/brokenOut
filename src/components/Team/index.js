import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import './styles.css';

let team = [
 {
  id: 1,
  name: "Rafael Santana",
  job: "Desenvolvedor Full Stack",
  email: 'rafaelsantana7213@gmail.com',
  github: "https://github.com/rafalmeida73",
  linkedin: "https://www.linkedin.com/in/rafael-santana-5876a117a/",
  img: "https://avatars3.githubusercontent.com/u/49356234?s=460&u=7a90cc7df33c841e5ed74fdf93605ef7365cf817&v=4"
 },
 {
  id: 2,
  name: "Rafael Santana",
  job: "Desenvolvedor Full Stack",
  email: 'rafaelsantana7213@gmail.com',
  github: "https://github.com/rafalmeida73",
  linkedin: "https://www.linkedin.com/in/rafael-santana-5876a117a/",
  img: "https://avatars3.githubusercontent.com/u/49356234?s=460&u=7a90cc7df33c841e5ed74fdf93605ef7365cf817&v=4"
 },
 {
  id: 3,
  name: "Claudio Zanelatto",
  job: "Desenvolvedor Full Stack",
  email: 'claudiozanelatto@gmail.com',
  github: "https://github.com/claudiozanelatto",
  linkedin: "https://www.linkedin.com/in/claudio-zanelatto-79bb4911a/",
  img: "https://media-exp1.licdn.com/dms/image/C4E03AQE3mkEIHbhOHQ/profile-displayphoto-shrink_400_400/0?e=1605139200&v=beta&t=uFoC6isetaxAVComzXdCUbzsTblhHmMFn3DP6LWH2tA"
 },
 {
  id: 4,
  name: "Rafael Santana",
  job: "Desenvolvedor Full Stack",
  email: 'rafaelsantana7213@gmail.com',
  github: "https://github.com/rafalmeida73",
  linkedin: "https://www.linkedin.com/in/rafael-santana-5876a117a/",
  img: "https://avatars3.githubusercontent.com/u/49356234?s=460&u=7a90cc7df33c841e5ed74fdf93605ef7365cf817&v=4"
 },
]

function TeamProfile() {
  return (
   <div>
    <div>
     {team.map(t => {
      return (
       <div key={t.id}>
        <div className="col s12 m6 l3">
         <div className='white TeamProfile'>
          <div className="info">

           <img src={t.img} alt={t.name} />
           <h3>{t.name}</h3>
           <p>{t.job}</p>

          </div>

          <div className='iconsTeam'>
           <a href={t.github} target="_blank" rel="noopener noreferrer">
            <svg width="65" height="63" viewBox="0 0 65 63" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path id="git" fill-rule="evenodd" clip-rule="evenodd" d="M31.9988 0.0108C14.3293 0.0108 0 14.3377 0 32.0095C0 46.1487 9.1678 58.1393 21.8826 62.3725C23.483 62.6689 24.0712 61.6768 24.0712 60.8311C24.0712 60.0681 24.0393 57.5476 24.0263 54.8759C15.1231 56.8118 13.2463 51.0987 13.2463 51.0987C11.7911 47.3994 9.6934 46.4156 9.6934 46.4156C6.7902 44.4277 9.9143 44.4714 9.9143 44.4714C13.1269 44.6959 14.8183 47.7668 14.8183 47.7668C17.6743 52.659 22.3066 51.2428 24.1314 50.4266C24.4196 48.3585 25.2464 46.9459 26.1629 46.1463C19.0549 45.3396 11.5832 42.5947 11.5832 30.3323C11.5832 26.8397 12.8352 23.9838 14.8797 21.7443C14.5467 20.9365 13.4506 17.6837 15.188 13.2769C15.188 13.2769 17.875 12.4159 23.9909 16.5569C26.5421 15.8494 29.2787 15.4927 31.9965 15.4809C34.7165 15.4927 37.4579 15.8482 40.0127 16.5569C46.1203 12.4183 48.8049 13.2769 48.8049 13.2769C50.5447 17.6849 49.4534 20.94 49.1203 21.7444C51.1719 23.9838 52.4133 26.8397 52.4133 30.3323C52.4133 42.623 44.925 45.3253 37.8016 46.1179C38.9497 47.11 39.9749 49.0577 39.9749 52.0412C39.9749 56.3204 39.9383 59.7692 39.9383 60.8216C39.9383 61.6732 40.5147 62.6689 42.1375 62.357C54.8451 58.1216 64.0012 46.1296 64.0012 31.9988C64.0012 14.3293 49.6743 0 32.0012 0L31.9989 0.0107L31.9988 0.0108Z" fill="black" />
            </svg>
           </a>

           <a href={"mailto:" + t.email}>
            <svg width="123" height="89" viewBox="0 0 123 89" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path id="email" d="M7.048 0H115.832C117.771 0 119.533 0.794 120.809 2.069C122.086 3.346 122.879 5.111 122.879 7.048V81.807C122.879 83.268 122.428 84.629 121.658 85.758C121.517 86.123 121.297 86.463 120.996 86.752C120.795 86.941 120.574 87.096 120.34 87.213C119.115 88.234 117.541 88.856 115.832 88.856H7.048C5.111 88.856 3.347 88.063 2.069 86.786C0.794 85.51 0 83.748 0 81.807V7.048C0 5.107 0.792 3.344 2.068 2.069C3.344 0.792 5.107 0 7.048 0ZM5.406 78.842L43.53 40.622L5.406 9.538V78.842ZM47.729 44.045L8.424 83.449H114.125L76.563 44.051L64.18 54.602C63.209 55.432 61.755 55.479 60.727 54.645L47.729 44.045ZM80.674 40.549L117.473 79.147V9.198L80.674 40.549ZM8.867 5.406L62.388 49.045L113.611 5.406H8.867V5.406Z" fill="black" />
            </svg>
           </a>

           <a href={t.linkedin} target="_blank" rel="noopener noreferrer">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path id="link" fill-rule="evenodd" clip-rule="evenodd" d="M57.9999 0H6C2.7 0 0 2.7 0 6V58C0 61.3 2.7 64 6 64H57.9999C61.2999 64 63.9999 61.3 63.9999 58V6C63.9999 2.7 61.2999 0 57.9999 0ZM23.9991 51.9999H16.0006V23.9992H23.9991V51.9999V51.9999ZM19.9987 19.9987C17.7877 19.9987 15.9994 18.2105 15.9994 15.9994C15.9994 13.7872 17.7876 11.999 19.9987 11.999C22.2109 11.999 23.9991 13.7872 23.9991 15.9994C23.9991 18.2104 22.2109 19.9987 19.9987 19.9987ZM51.9999 51.9999H44.0013V36.0005C44.0013 33.7883 42.212 32.0001 40.0009 32.0001C37.7887 32.0001 36.0005 33.7883 36.0005 36.0005V51.9999H27.9995V23.9992H36.0005V28.9634C37.6481 26.698 40.1757 23.9992 42.9998 23.9992C47.9758 23.9992 51.9998 28.4756 51.9998 33.9997V51.9999H51.9999Z" fill="black" />
            </svg>
           </a>

          </div>
         </div>
        </div>
       </div>
      )

     })}
    </div>
   </div>
  )
}

export default TeamProfile;
