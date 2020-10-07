import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import './styles.css';

let team = [
  {
    id: 1,
    name: "Claudio Zanelatto",
    job: "Desenvolvedor Full Stack",
    email: 'claudiozanelatto@gmail.com',
    github: "https://github.com/claudiozanelatto",
    linkedin: "https://www.linkedin.com/in/claudio-zanelatto-79bb4911a/",
    img: "https://media-exp1.licdn.com/dms/image/C4E03AQE3mkEIHbhOHQ/profile-displayphoto-shrink_400_400/0?e=1605139200&v=beta&t=uFoC6isetaxAVComzXdCUbzsTblhHmMFn3DP6LWH2tA"
  },
   {
    id: 2,
    name: "Mosias Alves",
    job: "Desenvolvedor Full Stack",
    email: 'mosias.melo@gmail.com',
    github: "https://github.com/mosiasalves",
    linkedin: "https://www.linkedin.com/in/mosiasmelo",
    img: "https://media-exp1.licdn.com/dms/image/C4D03AQENVtIGmM63LQ/profile-displayphoto-shrink_200_200/0?e=1605744000&v=beta&t=IsPKcecxk-JPjUrMQr25iQiSjqKBSFasofAImEej2Yw"
  },
  {
    id: 3,
    name: "Rafael Santana",
    job: "Desenvolvedor Full Stack",
    email: 'rafaelsantana7213@gmail.com',
    github: "https://github.com/rafalmeida73",
    linkedin: "https://www.linkedin.com/in/rafael-santana-5876a117a/",
    img: "https://avatars3.githubusercontent.com/u/49356234?s=460&u=7a90cc7df33c841e5ed74fdf93605ef7365cf817&v=4"
  },
  {
    id: 4,
    name: "Thiago Henrique",
    job: "Desenvolvedor Full Stack",
    email: 'rickboto10@gmail.com',
    github: "https://github.com/thiagorick",
    linkedin: "https://www.linkedin.com/in/thiagomoraesz/",
    img: "https://media-exp1.licdn.com/dms/image/C4D03AQHWFaPKs8ML8g/profile-displayphoto-shrink_200_200/0?e=1605139200&v=beta&t=4D_XSMlxOVC-5Svwd639T8_N2AB9THYFabTPDUYINIg"
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
                      <svg width="100" height="78" viewBox="0 0 100 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="email">
                          <path id="Vector" d="M93.6075 76.9597H6.24011C2.85346 76.9597 0 74.1941 0 70.7196V7.59778C0 4.21113 2.76557 1.35767 6.24011 1.35767H93.6075C96.9942 1.35767 99.8477 4.12324 99.8477 7.59778V70.7196C99.8477 74.1941 97.0821 76.9597 93.6075 76.9597Z" fill="#EAEAEA" />
                          <path id="Vector_2" d="M12.48 76.9575L49.8386 46.9112L50.1023 45.3058L11.5894 17.5798L11.5015 75.6158L12.48 76.9575Z" fill="#231F20" fill-opacity="0.101961" />
                          <path id="Qesquerda" d="M6.24011 76.9582C2.76557 76.9582 0 74.1927 0 70.7181V7.5084C0 7.45567 0 7.40294 0 7.3502V7.34434C0.0820296 4.11589 2.64253 3.44794 5.91199 3.40692H6.07605H6.24011H6.40417H6.56823C9.8377 3.44794 12.4041 4.11589 12.4802 7.34434V7.3502C12.4802 7.40294 12.4802 7.45567 12.4802 7.5084V76.9582H6.24011Z" fill="black" />
                          <path id="Qdireita" d="M87.376 76.9595V7.33391C87.376 3.85937 90.1415 3.41406 93.6161 3.41406C97.0906 3.41406 99.8562 3.85937 99.8562 7.33391V70.8073C99.8562 70.86 99.8562 70.9127 99.8562 70.9655V70.9713C99.7742 74.3697 97.0379 77.0474 93.6161 77.0474H87.376V76.9595Z" fill="black" />
                          <path id="Vector_3" d="M66.8537 76.9567L0.515137 10.1026L4.00726 11.5205L50.19 44.7718L99.8472 8.35651V70.7986C99.8472 74.1853 97.0816 76.9509 93.6071 76.9509H66.8595L66.8537 76.9567Z" fill="url(#paint0_linear)" />
                          <path id="v" d="M96.6307 1.78392C97.451 2.22336 98.1952 2.85616 98.7811 3.67646C100.832 6.44203 100.205 10.3619 97.3573 12.4126L77.2893 26.9846L49.8445 46.9998L2.68335 12.6763L2.55445 12.5767L2.4314 12.4771L2.30836 12.3716C2.26734 12.3364 2.22633 12.3013 2.19117 12.2661L2.07399 12.1607L1.96266 12.0493L1.85134 11.938C1.81618 11.9029 1.78102 11.8618 1.74587 11.8208L1.6404 11.7036C-0.24628 9.54158 -0.603694 6.30727 1.08377 3.93427C2.3318 2.24094 4.29465 1.35033 6.25164 1.35033C7.58755 1.35033 8.92346 1.70775 9.99571 2.51047L49.8445 31.4845L89.9629 2.15305C91.0351 1.35033 92.3711 0.99292 93.6191 0.99292C94.6796 0.99292 95.7167 1.25659 96.6424 1.77806L96.6307 1.78392Z" fill="black" />
                        </g>
                        <defs>
                          <linearGradient id="paint0_linear" x1="0.509277" y1="42.6625" x2="99.8706" y2="42.6625" gradientUnits="userSpaceOnUse">
                            <stop stop-opacity="0.101961" />
                            <stop offset="1" stop-opacity="0.2" />
                          </linearGradient>
                        </defs>
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
