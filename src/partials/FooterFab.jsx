import { AiOutlineInfoCircle } from 'react-icons/ai';

function FooterFab(){
    return (
        <div className="sidebar">
            <div className='sidebar-grid'>
                <a className='sidebar-item group'>
                    <AiOutlineInfoCircle className='sidebar-item-icon'/>
                    <div className="credit-popout">Created by Aaron Michael Burt</div>
                </a>
            </div>
        </div>
    );

}

export default FooterFab;