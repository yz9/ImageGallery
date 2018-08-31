import React from 'react';

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
			<a className="navbar-brand" href="/">Image Gallery</a>
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="https://github.com/yz9">Github</a>
          </div>
		</nav>
	);
}

export default Navbar;