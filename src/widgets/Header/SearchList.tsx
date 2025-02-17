const SearchList = ({ active }: {active: any}) => {
  return (
    <>
      <div
        className={`search-list d-none d-xl-block ${active ? "active" : ""}`}
      >
        <div className="container py-11">
        </div>
      </div>
    </>
  );
};
export default SearchList;
