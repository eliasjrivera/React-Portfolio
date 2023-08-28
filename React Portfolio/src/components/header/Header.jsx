import NavTabs from "../NavTabs";

export default function Header(props) {
    const { currentPage, handlePageChange } = props;
    return (
        <div>
            <header className="flex-row px-1">
            <div>
                <h1>Elias Rivera's Portfolio</h1>
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