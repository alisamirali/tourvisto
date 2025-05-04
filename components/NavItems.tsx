import { Link, NavLink, useLoaderData, useNavigate } from "react-router";
import { sidebarItems } from "~/constants";
import { cn } from "~/lib/utils";
// import { logoutUser } from "~/appwrite/auth";

const NavItems = ({ handleClick }: { handleClick?: () => void }) => {
  const user = useLoaderData();
  const navigate = useNavigate();

  const handleLogout = async () => {
    // await logoutUser();
    // navigate("/sign-in");
    console.log("Logout function is not implemented yet.");
  };

  return (
    <section className="nav-items">
      <Link to="/" className="link-logo-dashboard">
        <img src="/assets/icons/logo.svg" alt="logo" className="size-[30px]" />
        <h1>Tourvisto</h1>
      </Link>

      <div className="container">
        <nav>
          {sidebarItems.map(({ id, href, icon, label }) => (
            <NavLink to={href} key={id}>
              {({ isActive }: { isActive: boolean }) => (
                <div
                  className={cn("group nav-item", {
                    "bg-primary-100 !text-white": isActive,
                  })}
                  onClick={handleClick}
                >
                  <img
                    src={icon}
                    alt={label}
                    className={`group-hover:brightness-0 size-6 group-hover:invert ${
                      isActive ? "brightness-0 invert" : "text-dark-200"
                    }`}
                  />
                  {label}
                </div>
              )}
            </NavLink>
          ))}
        </nav>

        <footer className="nav-footer flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={user?.imageUrl || "/assets/images/david.webp"}
              alt={user?.name || "Ali Samir"}
              referrerPolicy="no-referrer"
            />

            <article>
              <h2>{user?.name} Ali Samir</h2>
              <p>{user?.email} ali@code.com</p>
            </article>
          </div>

          <button
            onClick={handleLogout}
            className="cursor-pointer"
            title="Logout"
          >
            <img
              src="/assets/icons/logout.svg"
              alt="logout"
              className="size-6"
            />
          </button>
        </footer>
      </div>
    </section>
  );
};

export default NavItems;
