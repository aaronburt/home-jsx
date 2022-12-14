
import Config from '../../config';
import { Suspense } from 'react';

function Container(){
    function render(){
        return Object.entries(Config.content).map(([k,v]) => {            
            return (
                <a href={v.href} target="_blank" key={k}>
                    <div className="container-item">
                        <div>
                            <img src={v.img} alt={k}/>
                        </div>
                        <div className="text">{k}</div>
                    </div>
                </a>
            );
        });
    }

    return (
        <div className="content-container">
            <Suspense fallback={<h1>Loading profile...</h1>}>
                {render()}
            </Suspense>
        </div>
    );
}

export default Container;