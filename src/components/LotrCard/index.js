import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function LotrCard({ character }) {
    return (
        <Card bg="secondary">
            <Card.Body>
                <Card.Title>{character.name}</Card.Title>
                <Card.Subtitle className="mb-2">{character.race} - {character.gender}</Card.Subtitle>
                <Card.Text>From the realm of {character.realm}</Card.Text>
                <Card.Text>Born in {character.birth}</Card.Text>
                <Card.Text>Married to {character.spouse}</Card.Text>
                <Card.Text>Died in {character.death}</Card.Text>
                <Button href={character.wikiUrl} variant="light" text="dark" target="_blank" rel="noopener noreferrer" className="btn-block">Learn More</Button>
            </Card.Body>
        </Card>
    );
}

export default LotrCard;