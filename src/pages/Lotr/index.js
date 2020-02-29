import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Pagination from 'react-bootstrap/Pagination';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Toast from 'react-bootstrap/Toast';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getLotr } from '../../store/actions';
import LotrCard from '../../components/LotrCard';

class Lotr extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lowestPageItem: 1,
            highestPageItem: 24
        };

        this.goToPreviousPage = this.goToPreviousPage.bind(this);
        this.goToNextPage = this.goToNextPage.bind(this);
    }

    componentDidMount() {
        this.props.getLotr();
    }

    goToPreviousPage() {
        if (this.state.lowestPageItem - 24 < 1) {
            this.setState({
                lowestPageItem: 1,
                highestPageItem: 24
            });
        } else {
            this.setState({
                lowestPageItem: this.state.lowestPageItem - 24,
                highestPageItem: this.state.highestPageItem - 24
            });
        }
    }

    goToNextPage() {
        if (this.state.highestPageItem + 24 > this.props.characters.length) {
            this.setState({
                lowestPageItem: this.props.characters.length - ((this.props.characters.length % 24) - 1),
                highestPageItem: this.props.characters.length
            });
        } else {
            this.setState({
                lowestPageItem: this.state.lowestPageItem + 24,
                highestPageItem: this.state.highestPageItem + 24
            });
        }
    }

    render() {
        return (
            <main>
                <Container>
                    <h1>Lord Of The Rings</h1>
                    <hr className="bg-light" />
                    <Pagination>
                        {this.state.lowestPageItem <= 1 && (<Pagination.Prev className="mr-2" disabled />)}
                        {this.state.lowestPageItem > 1 && (<Pagination.Prev onClick={this.goToPreviousPage} className="mr-2" />)}
                        {this.state.highestPageItem < this.props.characters.length && (<Pagination.Next onClick={this.goToNextPage} className="ml-2" />)}
                        {this.state.highestPageItem >= this.props.characters.length && (<Pagination.Next className="ml-2" disabled />)}
                    </Pagination>
                    <p>Showing {this.state.lowestPageItem} - {this.state.highestPageItem} of {this.props.characters.length} results</p>
                    {this.props.isLoading && (<>
                        <Spinner animation="grow" variant="light" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                        <Spinner animation="grow" variant="light" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                        <Spinner animation="grow" variant="light" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </>)}
                    {
                        this.props.error && (
                        <Toast>
                        <Toast.Header>
                            <strong>Error</strong>
                        </Toast.Header>
                        <Toast.Body>{this.props.error}</Toast.Body>
                        </Toast>
                        )
                    }
                    <Row>
                        {this.props.characters.slice(this.state.lowestPageItem - 1, this.state.highestPageItem).map(character => (
                            <Col key={character._id} md={4} sm={6} xs={12} className="mb-3">
                                <LotrCard character={character} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </main>
        );
    }
}

const mapStateToProps = (state) => ({
    characters: state.lotr.characters,
    error: state.lotr.error,
    isLoading: state.lotr.isLoading
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getLotr
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Lotr);