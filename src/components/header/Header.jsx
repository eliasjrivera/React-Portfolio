import NavTabs from "../NavTabs";
import headerImg from '../../assets/images/headerImg.png';

export default function Header(props) {
    const { currentPage, handlePageChange } = props;
    return (
        <div>
            <header className="flex-row px-1">
            <div>
                <img src={headerImg} alt='headerImg' className='headerImg'/> 
            </div>
            <div>
                <NavTabs
                currentPage={currentPage}
                handlePageChange={handlePageChange}
                ></NavTabs>
            </div>
            </header>
        </div>
    );
}