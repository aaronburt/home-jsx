import Config from "./config";
import Content from "./partials/Content";

document.title = Config.title;

function App(){
    return (
        <>
            <Content/>
        </>
    );
}

export default App;