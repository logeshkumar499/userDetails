import React, { useEffect, useState } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GENDER, ROLES, SKILLS } from "../../contents";
import { addUserData, updateUserData } from "../../store/action";

const FormDetails = ({ handleClose, type, data }) => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);
  const [userDetails, setUserDetails] = useState({
    name: "",
    dob: "",
    role: "",
    gender: "",
    skill: {},
    others: "",
    address: "",
    comments: "",
  });
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    if (type === "edit") {
      setUserDetails({
        name: data.name,
        dob: data.dob,
        role: data.role,
        gender: data.gender,
        skill: data.skill,
        others: data.others,
        address: data.address,
        comments: data.comments,
      });
    }
  }, [type]);

  const handleSkills = (type) => {
    let result;
    if (userDetails.skill[type] !== type) {
      result = {
        skill: { ...userDetails.skill, [type]: type },
      };
    } else {
      delete userDetails.skill[type];
      result = {
        skill: { ...userDetails.skill },
      };
    }

    setUserDetails({ ...userDetails, ...result });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setValidated(true);

    let form = event.currentTarget;
    if (form.checkValidity() === true) {
      if (type === "add") {
        dispatch(addUserData({ ...userDetails, id: userData.length + 1 }));
      }
      if (type === "edit") {
        dispatch(updateUserData({ id: data.id, ...userDetails }));
      }
      handleClose();
    }
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              value={userDetails.name}
              onChange={(e) =>
                setUserDetails({ ...userDetails, name: e.target.value })
              }
              type="text"
              placeholder="Name"
            />
            <Form.Control.Feedback type="invalid">
              Name is required
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-2">
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>DOB</Form.Label>
            <Form.Control
              required
              type="date"
              placeholder="DOB"
              value={userDetails.dob}
              onChange={(e) =>
                setUserDetails({ ...userDetails, dob: e.target.value })
              }
            />
            <Form.Control.Feedback type="invalid">
              DOB is required
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Role</Form.Label>
            <Form.Control
              required
              as="select"
              type="select"
              value={userDetails.role}
              onChange={(e) =>
                setUserDetails({ ...userDetails, role: e.target.value })
              }
            >
              <option value="">Select Role</option>
              {ROLES.map((value) => {
                return (
                  <option key={value} value={value}>
                    {value}
                  </option>
                );
              })}
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              Role is required
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-2">
          <Form.Group as={Col} md="3">
            <Form.Label>Gender</Form.Label>
            {GENDER.map((type) => {
              return (
                <div key={type}>
                  <Form.Check
                    inline
                    required
                    label={type}
                    name="group"
                    type="radio"
                    checked={userDetails.gender === type ? true : false}
                    onChange={(e) =>
                      setUserDetails({ ...userDetails, gender: type })
                    }
                  />
                </div>
              );
            })}
          </Form.Group>
          <Form.Group as={Col} md="9">
            <Form.Label>Skill</Form.Label>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {SKILLS.map((type) => {
                let length = Object.keys(userDetails.skill).length;
                return (
                  <Form.Check
                    key={type}
                    inline
                    checked={userDetails.skill[type] === type}
                    label={type}
                    name="group"
                    isInvalid={length === 0}
                    isValid={length > 0}
                    type="checkbox"
                    onChange={(e) => handleSkills(type)}
                  />
                );
              })}
            </div>
          </Form.Group>
        </Row>
        <Row className="mb-2">
          <Form.Group as={Col} md="6">
            <Form.Label>Others</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Others Skills"
              value={userDetails.others}
              onChange={(e) =>
                setUserDetails({ ...userDetails, others: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom04 ">
            <Form.Label>Address</Form.Label>
            <Form.Control
              as="textarea"
              value={userDetails.address}
              onChange={(e) =>
                setUserDetails({ ...userDetails, address: e.target.value })
              }
              required
              placeholder="Address"
            />
            <Form.Control.Feedback type="invalid">
              Address is required
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-2">
          <Form.Group as={Col} md="12" controlId="validationCustom05 ">
            <Form.Label>Comments</Form.Label>
            <Form.Control
              as="textarea"
              required
              value={userDetails.comments}
              onChange={(e) =>
                setUserDetails({ ...userDetails, comments: e.target.value })
              }
              placeholder="Comments"
            />
            <Form.Control.Feedback type="invalid">
              Comments is required
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mt-3">
          <Col md xs lg={6}>
            <Button
              className="btn btn-success"
              style={{ width: "100%" }}
              type="submit"
            >
              Submit
            </Button>
          </Col>
          <Col md xs lg={6}>
            <Button
              className="btn btn-success"
              style={{ width: "100%" }}
              onClick={handleClose}
            >
              Cancel
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default FormDetails;
