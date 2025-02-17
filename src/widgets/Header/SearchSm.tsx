import IconSearch from "@icons/IconSearch";

const SearchSm = ({ isActive, onClose }:{isActive:any, onClose:any}) => {
  return (
    <>
      <div className={`search-list ${isActive ? "active" : ""}`}>
        <div className="container mt-4">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="search d-flex align-items-center">
                <div className="search-input w-100">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                  <button className="btn-search px-3 h-100">
                    <IconSearch className="icon md" />
                  </button>
                </div>
                <div className="search-close d-flex justify-content-end">
                  <button className="btn-close" onClick={onClose} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="list-content-sm">
          <div className="container my-6">
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchSm;
