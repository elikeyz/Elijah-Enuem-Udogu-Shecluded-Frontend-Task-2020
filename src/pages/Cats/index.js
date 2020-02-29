import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Pagination from 'react-bootstrap/Pagination';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Toast from 'react-bootstrap/Toast';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getCats } from '../../store/actions';
import CatCard from '../../components/CatCard';

class Cats extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.goToPreviousPage = this.goToPreviousPage.bind(this);
        this.goToNextPage = this.goToNextPage.bind(this);
    }

    componentDidMount() {
        this.props.getCats(this.props.page);
    }

    goToPreviousPage() {
        this.props.getCats(this.props.page - 1);
    }

    goToNextPage() {
        this.props.getCats(this.props.page + 1);
    }

    render() {
        return (
            <main>
                <Container>
                    <h1>Cats</h1>
                    <hr className="bg-light" />
                    <Pagination>
                        {this.props.page <= 0 && (<Pagination.Prev className="mr-2" disabled />)}
                        {this.props.page > 0 && (<Pagination.Prev onClick={this.goToPreviousPage} className="mr-2" />)}
                        {this.props.cats.length > 0 && (<Pagination.Next onClick={this.goToNextPage} className="ml-2" />)}
                        {this.props.cats.length <=0 && (<Pagination.Next className="ml-2" disabled />)}
                    </Pagination>
                    <p>Showing Page {this.props.page + 1}</p>
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
                        {this.props.cats.map((cat) => (
                            <Col key={cat.id} md={4} sm={6} xs={12} className="mb-3">
                                <CatCard cat={cat} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </main>
        );
    }
}

const mapStateToProps = (state) => ({
    cats: state.cats.cats,
    error: state.cats.error,
    isLoading: state.cats.isLoading,
    page: state.cats.page
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getCats
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cats);