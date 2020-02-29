import React from 'react';
import Card from 'react-bootstrap/Card';

function CatCard({ cat }) {
    return (
        <Card bg="secondary">
            <Card.Img variant="top" src={cat.url} />
            {cat.breeds.length > 0 && (
                <Card.Body>
                    <Card.Title>{cat.breeds[0].name}</Card.Title>
                    <Card.Text>{cat.breeds[0].description}</Card.Text>
                    <Card.Text><strong>Temperament: </strong>{cat.breeds[0].temperament}</Card.Text>
                    <Card.Text><strong>Life Span: </strong>{cat.breeds[0].life_span} years</Card.Text>
                    <Card.Text><strong>Shedding Level: </strong>{cat.breeds[0].shedding_level}</Card.Text>
                    <Card.Text><strong>Dog Friendly: </strong>{cat.breeds[0].dog_friendly}</Card.Text>
                    <Card.Text><strong>Child Friendly: </strong>{cat.breeds[0].child_friendly}</Card.Text>
                </Card.Body>
            )}
        </Card>
    );
}

export default CatCard;