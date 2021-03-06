import "./LandingBody.css"
import video1 from "./videos/video1.mp4"
import video2 from "./videos/video2.mp4"

export default function LandingBody() {
    return(
        <div id="Index">
            <div id="Index__Video--VideoUno" className="Index__Video"> 
                <video width="47%" height="47%" autoPlay muted loop>  
                    <source src={video1}/>
                </video>

                <div id="Index__Video--TextoUno">
                    <h3 id="Index__Video--TextoUno--Titulo">
                        Título
                    </h3>

                    <p> 
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil similique aliquam enim sequi dolorum ullam aut perspiciatis corporis eveniet sapiente. Quis velit molestiae, ut officia tenetur sint ipsum porro repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad numquam cupiditate molestias error doloribus delectus aliquid dignissimos? Magni quidem molestiae, corrupti voluptatum officia totam repellendus minima voluptate, consectetur harum reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur vero culpa beatae unde impedit sint accusantium. Qui, voluptate. Blanditiis, tenetur. Laboriosam dicta ex quam tempore error suscipit id impedit commodi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam consequatur magnam maiores repellendus, minima odit ullam quisquam saepe qui perspiciatis eligendi delectus reprehenderit facere accusamus, iusto doloribus laborum id amet!
                    </p>
                </div>
            </div>

            <div id="Index__Video--VideoDos" className="Index__Video row mt-5"> 
                <div id="Index__Video--TextoDos">
                    <h3 id="Index__Video--TextoDos--Titulo">
                        Título
                    </h3>

                    <p> 
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil similique aliquam enim sequi dolorum ullam aut perspiciatis corporis eveniet sapiente. Quis velit molestiae, ut officia tenetur sint ipsum porro repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad numquam cupiditate molestias error doloribus delectus aliquid dignissimos? Magni quidem molestiae, corrupti voluptatum officia totam repellendus minima voluptate, consectetur harum reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam alias et officia aliquid beatae repellat perferendis repudiandae unde est magnam dolore ratione, a corporis ipsa eos deserunt dolorum voluptas adipisci! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit molestiae quae vitae voluptatibus earum omnis eos at modi nesciunt! Non, odio? Saepe adipisci molestiae in. Sunt, atque repellendus. Odio, doloremque!
                    </p>
                </div>

                <video width="47%" height="47%" autoPlay muted loop>  
                    <source src={video2}/>
                </video>
            </div>
        </div>
    )
}