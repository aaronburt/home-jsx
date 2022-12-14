import FooterFab from "./FooterFab";
import Taskbar from "./sub/Container";

function Content(){

    const opacityFull = () => { 
        document.getElementById('full').style.opacity = 1; 
    }

    return (
        <main className="main">  
            <img src="https://wallpaper.streamsave.xyz/embed.jpg" 
            className="w-full h-full fixed opacity-0 transition-opacity object-cover" id="full" onLoad={opacityFull}></img>          
            <div className="primary">   
                <Taskbar/>
                <FooterFab/>
            </div>
        </main>
    );
}

export default Content;

