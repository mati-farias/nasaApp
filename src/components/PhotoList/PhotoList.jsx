import React from 'react';
import { Row, Col, Card, CardGroup, Container, Button } from 'react-bootstrap';

const PhotoList = ({ photosToShow }) => {
	return (
		<Row xs={1} md={2} className='g-4'>
			{photosToShow?.map((e) => (
				<Col>
					<Card>
						<Card.Img src={e.img_src} alt='' />
					</Card>
				</Col>
			))}
		</Row>
	);
};

export default PhotoList;
