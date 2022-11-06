import React from 'react';
import './Pagination.css';

const Pagination = ({ photosPerPage, roverPics, pagination, currentPage }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(roverPics / photosPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<nav className='pagination'>
			<ul className='ulPagination'>
				{pageNumbers &&
					pageNumbers.map((number) =>
						currentPage === number ? (
							<li key={number}>
								<button
									className='activePage'
									onClick={() => pagination(number)}>
									{number}
								</button>
							</li>
						) : (
							<li key={number}>
								<button
									className='liPagination'
									onClick={() => pagination(number)}>
									{number}
								</button>
							</li>
						)
					)}
			</ul>
		</nav>
	);
};

export default Pagination;
