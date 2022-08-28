import Link from "next/link";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Logo</div>
      <nav>
        <ul>
          <li>
            <Link href="/forum">Forum</Link>
          </li>
          <li>
            <Link href="/">Market</Link>
          </li>
        </ul>
      </nav>
      <button>Log in</button>
    </header>
  );
}

export default MainNavigation;
