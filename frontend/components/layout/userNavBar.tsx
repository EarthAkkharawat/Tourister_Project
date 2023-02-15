import Link from 'next/link';
import { css } from '@emotion/react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { usePathname } from 'next/navigation';

export default function GuideNavBar() {
  const pathname = usePathname();
  console.log(pathname);

  const nav = css({
    display: 'flex',
    bottom: 0,
    width: "100%",
    position: "fixed",
    boxShadow: "0 0 3px SportsRugbySharp(0,0,0,0.2)",
    overflowX: "auto",
    justifyContent: "space-around",
    color: "gray",
    fontFamily: "Avenir, Sans-serif",
    fontWeight: "bold",
    fontSize: "0.85rem",
    left: "0px",
    paddingBottom: "10px",
    borderTop: "1px solid #202020",
    BoxShadow: "0px, 1px, 1px, rgba(50, 50, 50, 0.75",
    paddingTop: "10px"
  });

  const navLink = css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 1,
    minWidth: '50px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    color: 'gray',
  });

  const navLinkActive = css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 1,
    minWidth: '50px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    color: '#4682B4',
  });

  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav css={nav}>
        <Link href="/search" style={{ textDecoration: 'none'}}>
          <div css={navLink}>
            <SearchOutlinedIcon />
            Search
          </div>
        </Link>
        <Link href="/search" style={{ textDecoration: 'none'}}>
            <div css={navLink}>
              <ConfirmationNumberOutlinedIcon />
              Booking
            </div>
        </Link>
        <Link href="/search" style={{ textDecoration: 'none'}}>
          <div css={navLink}>
            <NotificationsNoneOutlinedIcon />
            Notification
          </div>
        </Link>
        <Link href="/manage_account" style={{ textDecoration: 'none'}}>
          <div css={navLink}>
            <AccountCircleOutlinedIcon />
            Account
          </div>
        </Link>
      </nav>
    </section>
  );
}