import React from 'react';
import ProfileLinks from '../layout/ProfileLinks/ProfileLinks';
import {Row, Container, Col} from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Profile = () => {
    const {userData} = useSelector(state => state.login);
 
    return (
        <section className="profile">
            <Container>
                <Row>
                    <Col md={3}>
                        <ProfileLinks />
                    </Col>
                    <Col md={9}>
                        <h4>Welcome {userData.name},</h4>
                        <p>Email Address: {userData.email}</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
 
export default Profile;