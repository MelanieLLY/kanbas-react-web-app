export default function BootstrapNavigation() {
  return (
    <div>
      <div id="wd-css-navigating-with-tabs">
        <h2>Tabs</h2>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Active
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
      </div>
      <div id="wd-css-navigating-with-cards">
        <h2>Cards</h2>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://store.moma.org/cdn/shop/files/1d64afa7-83ab-43be-98c1-4d454af0ed49_205cbd25-10b9-42d4-a915-ea6f6cfb40df_900x.jpg?v=1704586418"
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">Stacking Starship</h5>
            <p className="card-text">
              Stacking the most powerful rocket in history. Mars or bust!
            </p>
            <a href="#" className="btn btn-primary">
              Boldly Go
            </a>
            <br />
          </div>
        </div>{" "}
        <br />
        <br />
      </div>
    </div>
  );
}
