import React from 'react';

const Header = () => {
	return (
		<header>
			<nav className='navbar navbar-expand-lg navbar-light bg-white'>
				<div className='container-fluid'>
					<button
						className='navbar-toggler'
						type='button'
						data-mdb-toggle='collapse'
						data-mdb-target='#navbarExample01'
						aria-controls='navbarExample01'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<i className='fas fa-bars'></i>
					</button>
					<div
						className='collapse navbar-collapse'
						id='navbarExample01'>
						<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
							<li className='nav-item active'>
								<a
									className='nav-link'
									aria-current='page'
									href='#'>
									Home
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='#'>
									Features
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='#'>
									Pricing
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='#'>
									About
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div
				className='p-5 text-center bg-image'
				style={{
					backgroundImage: `url(
						"https://mars.nasa.gov/layout/mars2020/images/PIA23764-RoverNamePlateonMars-web.jpg"
					)`,
					height: '400px',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
				}}>
				<div
					className='mask'
					style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
					<div className='d-flex justify-content-center align-items-center h-100'>
						<div className='text-white'>
							<h1 className='mb-3'>Heading</h1>
							<h4 className='mb-3'>Subheading</h4>
							<a
								className='btn btn-outline-light btn-lg'
								href='#!'
								role='button'>
								Call to action
							</a>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
