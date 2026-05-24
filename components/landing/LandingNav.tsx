export function LandingNav() {
  return (
    <nav>
      <span className="nav-logo">Persistence</span>
      <ul className="nav-links">
        <li>
          <a href="#how">How it works</a>
        </li>
        <li>
          <a href="#memory">Memory model</a>
        </li>
        <li>
          <a href="#">Sign in</a>
        </li>
      </ul>
      <a href="#access" className="btn-primary">
        Request access
      </a>
    </nav>
  );
}
