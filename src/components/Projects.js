import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/clipboard.png";
import projImg2 from "../assets/img/imdb.png";
import projImg3 from "../assets/img/ssr.png";
import projImg4 from "../assets/img/hcdr.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Esportz",
      description: "MernStack-GitHub-Postman-Render",
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8vEBpfuMGKxwYNF1NyjArJ-K1q2Lp6-iBNA&usqp=CAU",
    },
    {
      title: "MOVIE RECOMMENDATION SYSTEM",
      description: "MACHINE LEARNING, MERN STACK",
      imgUrl: projImg2,
    },
    {
      title: "STUDENT SMART RENTALS",
      description: "MERN STACK, GITHHUB, POSTMAN, RENDER",
      imgUrl: projImg3,
    },
    {
      title: "Home Credit Default Risk",
      description: "Machine Learning, AnacondaNavigator, ParallelProcessing, NeuralNetworks",
      imgUrl: projImg4,
    },
    {
      title: "Advanced Mushroom Classification",
      description: "Machine Learning, AnacondaNavigator, ParallelProcessing, NeuralNetworks",
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs6J02c4vy5pzz39Dsqpqsrh7MDA9CeWSWyQ&usqp=CAU",
    },
    
  ];

  const experience = [
    {
      title: "Amazon Devops Engineer Intern",
      description: "",
      imgUrl: "data:image/png;base64,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",
    },

    {
      title: "Amazon Devops Engineer",
      description: "",
      imgUrl: "data:image/png;base64,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",
    }
  ];

  const edu = [
    {
      title: "VNRVJIET",
      description: "Information Technology",
      imgUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASMAAAB/CAMAAACTxVQnAAAAM1BMVEUAAAD///9gYGDf399AQECAgIAgICCfn5/v7++/v7/Pz89wcHCQkJBQUFAQEBAwMDCvr6/9xmmeAAAXRklEQVR4nO1diYLrqK4EBIgd/v9rXwm8Jb2kz7nd0y+Z0czpxI7jmIqWkhCOUj8ozYu0n/yI3xS/PXZrrQz02G/9edAafesGh1T8wbEcIYmcvOAo6BAivRpIRgfSWhNpGWuIOhERxol9Ac/woE3Ay0SpMBAI+lZSyxxVD4Fwnu6Gi2qY3x7UN8uwSpElpThSsUBKZeuc8jraTuSVT9rp4Qq7MSJr11oa3fqQlR+19liUAyyKissu4HnGCfi3B/W94gkYBaWbKoGHhc4UgjY0pR2XWi2XHkcYsCFKOdqcU+kmDvJlDE95hAyoqJpgUk6hDleDKbr/9rC+VapOMB8VBieyyZYcODQnpld6yYZ6zsFkbOBQ1Ych38rwOG7YUUKpsEjddYqaK95LZLweHOx2dgNv5T/9/P+3Yh3XzUsbMpZJpWJGUqb76AwshlsLcRguFBNG7kKO2bCF7qSwfBU0Sw884aaowVKj4w6zHbWF5hMwag6nGrW79IweHF6aS4A6xOxVHt7bqGL1RrOmqGFHyumQxD3nDv3ophDDoQ8ysQxy2STuntn3oTu0j5IiKJMjRdBIq8SpI8oF4yIBfub82wP+c/GpYFzOxG50ha3BWoaKEqKKIcd4XcEJtwg37W0NvTE8OiIX7CtamxDzRzR5niFYcvBOCnpkWTdtLXVFxpgEyyxwawhwqT6hBy8wH2E3USU4GQfnEllx9hUemLk2aBXG6GtshZkLXA02K55Dj2jEwdAk52pzxloXuu0Ma7MqGp9qSR5WR1kYklNwWngo8bdH/OeSMr52lWto8jXHQlAsVbgGRDQDk0kDTgqkMDXjKtwKUw3OqO4ibA1cwJnuQqo0SLwVp1LAHUIuJo+I6K8YChiAflIlFdtjTr894j+XkOGdFacgGqM0pxYzeI3hwLYnRK4CjCKYYUjAKoyeLNUCVx0MWOZIhpOGlkHbijWZS3bAqHApyY6JUZ6BrScDdY2IjU+oR7js0rkXC/faKgKUTRWuO4EpBgwdPEeZ4PwwsSIAQoMYo6xQqZxjB1/yFs7eIc7hgWJG+FNQJzzQgKODcYUAooSjO2i7MbDJ3x7xn0sXQwD9K0aRBzBw1h2xTo+UIgcEtyqRryCwgRVGBC7wSkcFipejJmdSqh3wRF1sEHakq50e38gf6IwBSwoG1AgfBbfUn1CNJPMEM3I6Nq9VFraoEZa0JKYI1THqHKFdYlUWytM92A5oIQhPgKa43lo23rDxDpkLrAnejEGSGsOPKbFe+Wci0OdqfXdPmuAWzdYgUoUZ5SXYew9HokYIFQTQaK8xOotENyVhi1ZPfdGV9Xp25LURkY9ylNwfHIkQ93A6yYrPnJf4GYl242veTkFDb+IcvDGS1ndgBH1KmpGDaKrDpuRyAENAhp8dfI8fIJQ2uWAhiAHRWCFbHuER59fe51BcMS4XXcETfnvAfyE+VJtNiXlQF9KXYxsdSa2wP1YNCIkeQbXABwAN3DOP7Eh4UUF6z5xM4ehcMAAVfBF7BliQltDmgIhQdYolhZhG8mSeEiNtMIDEoYzKkWKIyrdpPlHUiTwY8xTwIfDB0UcmYdRQJvYIeFzZ8+g07DS66IY7tJITs5YiQayRc2Oj9LNi5JJO3kUPbcJ4HJJ8N6KeXgUvaCXDHdq1QiE3j2AG7zQMgjkoUUzVd4q2Nxd8cqO4CA0Ck6qgXdkZD+/uYb+dXCPrnxOjTtn5NN00MBo8oE/R5wwonNFpCEbCbwjJh8Q0QwEU2/FQXKKPyYF4g4gjMwleIHLsYLODO3VDFa8ij9PgXGD0UEH9lP5IzEYIsPaNoT7Mpgcoj1kY2YmRV9C1CueLkKekiL9HcO87/rXeq/Lg10jdjJQoLUX8G3DvZUAtcRprq6455vKMeT8YooHTAB80JTAlhq1wrhjoxAg5WYTbhWPRSLzgkQvUjmvKhRwju4MbS8ISwQngpmFiFvYFljWiDVCkoeGISCdJWyQlLkj3fnvAfyEggFOqRG6nxS8jKZXCve9ghzN84+XOuyBYubI/QXayv7eShdEiBIruDHahWK6xgifoWtdn2GrIPryi/3+C1PMYPkc9BpshFXtjBAEkbg55BlTgPCpeBSpCm9zMkbjrBgmiKRHOEp6RQ6oIRWLkVCKkbyQkmToSS4nnK2GDJO0wjQVdSOYQcPeUp3ZBr7poJ6AG33TjCUtsECv+pMQFxNUSXLgkV12bOeRq5N8ucNIZf0XjYKHdbrurcqXtR8BOo1QjwVLZPKcaSa3ZREPilkJY/mWNeoBWnjalCYxZUxka/8PbUMEOOHuHN8UwSNJhCmGZnEUIu+qjZDOhMgj3bw/2L4WHCTWAN4s9JfAcADJRCWkUMHDQR1fmQIECBySpszwwsANJ7sxzAwMf4p7BfrgIV4ITMo4k0wFDJfg5iZpgU7892L+UPOemoQGpVp1hE6DG4j+ipRWr9WDhkpVBn4wGGYdvGWwR1+HMMxhVyqBA0ChQIWBE4rwAIJw78r0hD2DzqzzwrBit7Ax/4IygQGSkZgsfDCuETcnErXOpKGQdOY0GtGJ0YIl+pIIMw+vSKAEZHxHzcbSQgmh9YluKnAkGKyxsSfntwf6tRHHH+O5BlvWIE5WIhA2pf0gyEQ3gAqsOhjw8aJPyGKlDIgalsDJhqyw2soqxyHulXIIDOFDAAfBzRQrmyGwt4Bu/Pda/FZYZsBg0K0lYRRfwYAjgZCtVkoAs5AvONiJPk5rmQM4mwPcoMy1gBiSmlvBarE+LEXLZpuCVda5gezLOMEYEbgR+hNenL398Gng06B70aLpmmpVxKBCXoOCz8Q3U+JRZ/5SGHAwRCJFb5n5knKkYmXdLVTRMbLHSw7N0ZKxyFOKjTMbC0hLQBnvsWhHIhffUnzITWYIkDX4lFsQiJOnYkczo0K3UumA07MiPMbLIUgL4JYcgsyDIayU6JiS7ocWQfEvOPCfLntIRqGAWYlJwrvAg4IWkfQ8pCi/QCdnXwwkNIx5+lR/1mN5/8UcISITM2M55qqeV5MUnCz/kmX2VUUf0Vhfw48hcXeSHNQ3ORNnWXOGOorJIzoyF67fwbeAG0FVY8z8wlB+T6LhMooQcdhY+CE+60ZKcYBvMOjycX+UQKY1VFyAlHVour2x3gHl58omeNqqJRLghae6A83Y5S0HIVLbO+U2sNQ/rhzyOyhInNbgaZPyzwsRIjrNA/bRRTaQgn3IKdoHUysqcNc9WBx3CXgYJDzGy5DjnmgsUaggD0IwgGR3J7Fxz2ZB+xjrtITUUM9SoAk7tOTFbhk8Zo1LvTOxTehiSfDQDCdkQc2Xl2IyhO9JYm0wMA75oMsznlQb+KNPTyFnhmkQHLDJR/LPaS8NDLY/D9sQoDBfgs4ERkBkaNJvAHLkb2Kp/1sLIJqk3a30DRvAqRmZUeWLktYmZQXjMw2wUGGUdZRozCkahpgKMAlkyetVyn9odgSbOHoYwMapIRNm7tGFksgm9Ps4i/Kw25ZIQDFmmH5m0g+EZENIm00zlyTHaeqihBklKhkF6awQjKnMtRPiCEnhNo1XmbAUj4+KwoN6cfXTF+25B1n98GD8qYRWrExffvZcFQ8jQOo8+Fw/hz+N+WB8l2kuVX3y2yTidFxbBUnwT0c+brE0pMoxECZYCFmBNYQM9YummLRLOh/0CRrOLOYJKCkaFZQvnLPDls0g+nrM/6xCE6jznd0hKGalESRyAkQ2glKwLfwUjz0iKkRiLzzbawmf7OIJMKEiD8tOvP5oVbJZ2YVGgyNRJC0Zdu1KyLuYrsb8jKzbgR0Uwol4Q1zJSY2mhgDzrtNEpMBERh6QWXjZSBUbij3TuyG3zyI9jf5Bpktn8JxjB8pIGddQpGqNas0/YmH0nNnXx0864LfuAEviRz/m1x3pEc0ofgsRWmX3WNgPfOdf07KamZj1ba3JHCaRBjy61jC/0npNMB0hbYBxDGUT+tk3ojgn7j1z1Pyt+TbINxxaZFlyT7l3PSX0i7pQer9RDlte2ZpKhKnyQtw7OmuGzzausPG6+J3z7vbXZyRBqozk0WVrd/ePVeQSuuLWWBLBuIGbkOfL+8A9c/T8mIyB5qGY6JCjO3lxV2pou+VR8EltbEpuNflM8x/353fVFIvLaBmZtu62gxWm1x5jqXX7Yod9AjPrstXFMc/K3lwl2SE9df7wX0oG51ulTdBM9WrbT3HisC4dXTnMOctc7+8Qzj+9JZEld5/0dLGwN/NhPTVLWPY5roKFtVmt1lBnfyF6WCXJ6yjVrH0sSAjDK1q4H69laGboU4B68N4OFrsWSJRbFaQzvZtNkKc9PsU9pwczuvHn7jEJWu63XE774YWO1rA6RtmQvfahqyAzADg2/k/Gv/sorobBzT11P3JsX7Pmu1buatzevYHpzeeuwzYO2/bzS0wIx5zmvYq4nP+VNQSfELO20tVfrc/K6du61m2p6f9jyMWRJUk0l5Q4HX3IE4rkglXU1vlM5cm96bcbcY7dGnMtbVmPOHFq86dekxd1Xs+olpvi5I91sTQzXFOl5zqvw3ck3ufcxLcLOWFcty2AodF1GyNFRQTb35uB7IVlBi3Q2Uyls2MYRA1PVWSa13x6+VqFcmNMaCh3Xf+rehxhtGLsThCXlfMO3YwRlgR/hlCwhNuke3CDAlY2s1X+kR05Wz+C/pEMkm+fz/ft+rwIZ30UiH89OQvYJRnPA/X4wy43u7/9ejBRdDwuKWpzdx1+q2Nuxd9tWaYQcUpPsM0LWd322nR9yIp+OgW3Xf0TDNxitsqY+QL6D255Q/ABGCT57DlNyLlIhZ7dLepS3e2HlE1INPJve+7ex+X4usloMj6UnJ2T3jYH3GC0i5scxhnyiIMK3kH2CUbaneLW3Tq8LO/qo7wTfEHOEA0EAx1eqZ0stIgiwesNx3hSU5NYA3WWkHhIDybNqrfhstX3flS03spvhxYcc33H+DKMdZHV0dG6719ZZZ/gEo/cr7HT7/nuMTBw2OxmpLNbSOdRYg+U6erjPRe4TOK+77cnU4YbwbLLsgdMoVX9QV7l1I5cLOzDaenE+wmjB6o9n24gvh/8IRhlMe8Az2OI1Nl1Q3YWqO/v7lth2XzQjRLBGrsXKbt6FJbTECjRCmw949rL/hf3Vh5y+YiWJjzG68UDx2P0zGJnYUtE2WQQmaRzWqtbWU61+3PXp2TvQEAeluVRMEBRA1hqP2uowiP72g8+7uhG+DOziTy/+6S1GdFrYdPhL1f0Vrx/BKBXv2StXrfijEhScFlhlhwndZv75to20az9vAwG7zMhmcKpaKxiTdQ4s6f1P25bt3j29jTnuQ4y2BeUrMLrzkHX0xdV+ghEfIcld3vAAo1miH4FSTPh0HIlIFYilQaaFG8XhK/9TjRha55rZgqBUJZ3ftspHn3e6kRsfsjYc7a/eYxSuC6GWy1qMNL47wq/F/oviPcCoSLVoLSwaEXHtXG6VZMrscmjU1+otoqAse5hda4yspKltCxvS1va+LDdS1J0NbZisV8GtPuOQe8A/fFs/zvlTGG3L00BzAs6qKewVJGlpvLnVo76GDisfQbvmInHxKuV9YiTwh7WRpRb3PmTHZPmr1D7B6OBEdt+8OrYfwSieYdqLPzpnHqUGdHXTHWZ5bpFc1OHUCe5bxX6c6OM5leVG7HbF+zsOTNZ4y0cYhXFR7N2h0fb4gxhdGDwwckeqMMcZT2tDrnpeiZtXcBCmODE6Dv0Eo7Zd3ryqt7lHW04n3WEUlh+7zXA2uOt57Bcwylea/XcYyYTrFSOvD2tz2h4phl/5J+16MDEaX8FoG7O9HdipN/6yRvca11YachNDlh9y/HZ83xz7P8FofsvluK6hW9qtntYFHLY2MeIvYbT55fn3vTy/vo/RpmA35YR4nul2Trn/KEb6gtF8D2jMxiOSVrw9d1sZ48CIv46ROhXlHNiVCJR3MdqxvZYxL4tTb7OkeuL5PRjd+ux7PZIi0bqAIPeNzOvALbqkC0b+qxida9zfraldvPQth1zYXQNtO+/DtO3J69VLGeA7MEofY7ReaLRdAR7M+jTaTxc/wqh+gpHfB3btLbhi5HeyeMezF3bXwt+hcts7od9yh9NyOf13YERXjNo7GIniivY0YGTnFbrzG98/sfyBHh16cglFt4l7fx+jzZ1fXJLdDtwqFBs22841kHuMrnKC8nWMZB3kW4zkKq1cuCwtoqkH+9kOjFz5A4z2i/X3uw7Q8rsY7W+8qEK8wnFze7C98PsTGJUDo8Ne7PxAIdZebm93aSw6bc39AUabG7kazX0B6FJ+u+Ysb1ySu6J2czOP3bl/D0bHS3d6dNYSo6QHVct9yLQvl5PFPXXmez36tPdoDfVaEr3HqKV3MdoIwPkFtJuxXkA6mNsPYHThR2cNSLwsZ4ll684rx1g+9NmfY2RngnjdU2dN/1rdSPs2yys7Kn3NRpxgjptNzxuIp8+ax5fzM65yYh1vN++EzpKhYETvYTS/eMl4130Nzv1/idFPipcFHt98zjt/9D5GbbvjQ78ziY/j2iv0+R1CJ5WRmv8Fo2tvpFsYmTuzPeMaI4U/F5eGF8PodM1N32DkL+PcCqvhVo1Onw2MrOLjFXpZjNTHGF1CxnVv3FG5x+gLNwd4IvkYo5u5jTM1uhZqbjEqJ0YfzYs8p3wRo0ORbnbeYuT+JRjpjzDaFemm3jc+wCjZl+o9/ipGmyLd7uMPMIpW/8S1/paEL9rapki3s9lHW9xrY3Rp8fB3ce1unO5tSnO0JP6H0ZL2Ro2uGNELY0TnKrN7Dnk/zvgmMz4wKnc+27wWRv2o40itls67jLzRBfNmQdqJkbnByNTXwojmbWdmD6T8oh8da/zC7N1LZynhtitxFrL2u7TKbxzOf8fmb4/rO4Xs/yr7nW76Zd+L6dEH+/3/tNTzjS97apHbshnT5Z6Ppqna5W6QLcuW/LgWXmzyP8TX6r3FS3Lr3m68MV75vB0hS0bxfzOtdjx7PYxGICN3hYTikFPMKlKoLpDcwsbDF69aqKVS5P5aocSAuGV11I2S/CZdVfLjZFHVIFGy5viCGElqmjFYPbp2cOKKqqnsKlktd6X1q2RuMf5YtQWG8msPYOHAqQ/bdVER6ETp2gIHaDG0OVX3OrJhNKL0ZzlynkKTG9iyAygIcmTrvKsmMEI20k6MAiDR3XoTE5hTDlGlZCweQrKTRryObBgFWIguAdozkMznUCdGkWBwJc9pUCiO9AKeGEk/ZNZmOKgOa45NZ8Z5eir5JTHqegRJS5yDxynZs+MiGLkSYWHzDn/ACPBcbE1Q9dFQRFqcg4k2DBIOGmJ8SYxMMgFu28stoYv8qIFxlJKNvsEFGWksHikJRiR2uDCCzwkjZPnFH4BsYxkGXtwMzuEFMTK9WvyRGz9b55uT+181uc0T9MfYrLo8FvCDqnzJTWU5JqvcfTF4tBXcwcvaydwzWIFy7fV89vfLi8X+n5GXwug/+U/+k39a/PaLT+eefbX8dYWOsm4ySpcluvsst+GWoCZh7fVlay48p0n2xaL+ZmnYXAQx6/9+dSjmrdf3ie+4/mWxesxa2bFjL19fMZLVuV4WG7c8lzV7H4L8ekL+t+jRBoWPUJIqqw8IPFvu+H9ipKPokZ09bUFqBLOvPWpbX4lYfyh21bIx4lAtyeK14BrwMXTByIruKKmHSP9ogg4NbWbrPj3znfu/KnatNhQU2IhWiK3JKhp742oEIzkkafkl6cTikAZSk4d33ngFOaDoMvXBbWK0GrLfYOQ5OuHSJg7e6t7/Cmp9YNR8z/J7WJ/oUZUyWkKyK7bWu3QefXBriNcSO3/EUeofoXr5YYcQjPijKv4on0vVBKMQsvgh+UlDWTeFI8u/JPYvmbYmP3gAV9Ola9xh+O5YgTAxkp+RdKunXO7CVuXxlaohXxC/WpwnV/qg23nbvdOpV7lj5pL/A/kO3nfWQTsqAAAAAElFTkSuQmCC",
    },

    {
      title: "Indiana University Bloomington",
      description: "Computer Science",
      imgUrl: "data:image/png;base64,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"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Professional Life</h2>
                
    <section class="container">
        <h3 class="text-center">AMAZON FTE - DevOps</h3>
        <p>
            I have substantial experience in DevOps roles at Amazon, contributing to the development
            of an application for log analysis using AWS cloud services. This involved managing risks, resolving bugs,
            and handling on-call responsibilities.
        </p>
        
    </section>

    
    <section class="container">
        <h3 class="text-center">AMAZON Internship and Previous Roles</h3>
        <p>
            Additionally, as a DevOps Intern, I implemented and maintained CI/CD pipelines, reduced
            incident response time, and addressed high-priority risks during on-call duties. In previous roles at Esportz
            and on personal projects, I showcased proficiency in the MERN stack, GitHub, Postman, and
            deployment strategies. Noteworthy achievements include leading the development of an e-commerce sports
            application, contributing to a movie recommendation system using machine learning, and spearheading the
            end-to-end development of a rental application platform for students.
        </p>
    </section>

    
    <section class="container">
        <h3 class="text-center">Education and Current Pursuits</h3>
        <p>
            I am currently pursuing a Master's in Computer Science at Indiana University Bloomington,
            building expertise in applied algorithms, software engineering, and applied machine learning, following a
            successful undergraduate program in Information Technology at VNRVJIET Hyderabad, India.
        </p>
    </section>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Professional Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Work Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Education</Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          experience.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          edu.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
