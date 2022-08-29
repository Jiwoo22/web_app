import Link from "next/link";
import Button from "../ui/Button";
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
      <Button>Log in</Button>
    </header>
  );
}

export default MainNavigation;
