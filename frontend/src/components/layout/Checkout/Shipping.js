import React, {useState, useEffect, useRef} from 'react';
import { phAddress } from '../../../ph_address';
import {Row, Container, Form, Col} from 'react-bootstrap';

const Shipping = () => {
    const [shippingInfo, setShippingInfo] = useState({
        firstname: '',
        lastname: '',
        region: '',
        province: '',
        municipality: '',
        barangay: '',
        street: '',
        houseno: '',
        remarks: ''
    })
    const [selectedRegion, setSelectedRegion] = useState();

    const {firstname, lastname, region, province, municipality, barangay, street, houseno, remarks} = shippingInfo;
    
    const regionRef = useRef()
    useEffect(() => {
        setSelectedRegion(phAddress[regionRef.current.value])
        console.log(selectedRegion)
    }, [selectedRegion])

    const onchangeHandler = (e) => {
        setShippingInfo(state => {
            return {
                ...state,
                [e.target.name]: e.target.value
            }
        })
        setSelectedRegion(phAddress[regionRef.current.value])
    }
    return (
        <section className="shipping">
            <Container className="mt-4">
                <Form>
                    <div className="form-group">
                        <h2>Recipient Details</h2>
                        <Row>
                            <Col>
                                <input 
                                    type="text" 
                                    name="firstname" 
                                    placeholder="First Name" 
                                    className="form-control"
                                    onChange={(e) => onchangeHandler(e)}
                                    value={firstname} 
                                />
                            </Col>
                            <Col>
                                <input 
                                    type="text" 
                                    name="lastname" 
                                    placeholder="Last Name" 
                                    className="form-control"
                                    onChange={(e) => onchangeHandler(e)}
                                    value={lastname}  
                                />
                            </Col>
                        </Row>
                    </div>
                    <div className="form-group">
                        <h2>Shipping Details</h2>
                        <Row>
                            <Col>
                                <Form.Select 
                                    className="form-control"
                                    name="region" 
                                    onChange={(e) => onchangeHandler(e)}
                                    value={region}
                                    ref={regionRef} >
                                    <option value="">Region</option>
                                    {Object.keys(phAddress).map((reg) => <option value={reg} key={reg}>{phAddress[reg].region_name}</option>)}
                                </Form.Select>
                            </Col>
                        </Row>
                        {/* {selectedRegion && (<Row>
                                <Col>
                                    <Form.Select 
                                        className="form-control"
                                        name="province"
                                        onChange={(e) => onchangeHandler(e)}
                                        value={province}>
                                        <option value="">Province</option>
                                        {Object.keys(phAddress[region]).map((prv) => <option values={prv} key={prv}>{phAddress[region].province_list}</option>)}
                                    </Form.Select>
                                </Col>
                            </Row>)
                        } */}
                    </div>
                    
                </Form>
            </Container>
        </section>
    );
}
 
export default Shipping;