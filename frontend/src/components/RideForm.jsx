import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Container, Card, Form, Button, Alert, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../context/useAuth";
import { createRide, updateRide, getRide } from "../api/posts";
import { uploadImage } from "../api/cloudinary";
import "./RideForm.css";

const TITLE_MAX = 100;
const DESCRIPTION_MAX = 2000;
const IMAGE_MAX_BYTES = 3 * 1024 * 1024;

export default function RideForm({ mode }) {
  const { postId } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rideDate, setRideDate] = useState("");
  const [distance, setDistance] = useState("");
  const [elevation, setElevation] = useState("");
  const [maxSpeed, setMaxSpeed] = useState("");
  const [imageData, setImageData] = useState(null);

  const [fieldErrors, setFieldErrors] = useState({});
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [loadingRide, setLoadingRide] = useState(mode === "edit");

  useEffect(() => {
    if (mode !== "edit") return;

    async function loadRide() {
      try {
        const ride = await getRide(postId);
        if (String(ride.authorId) !== String(user._id)) {
          navigate("/");
          return;
        }
        setTitle(ride.title);
        setDescription(ride.description);
        setRideDate(ride.rideDate.slice(0, 10));
        setDistance(String(ride.distance));
        setElevation(String(ride.elevation));
        setMaxSpeed(String(ride.maxSpeed));
        setImageData(ride.imageData || null);
      } catch (err) {
        setError(err.error || "Failed to load ride");
      } finally {
        setLoadingRide(false);
      }
    }
    loadRide();
  }, [mode, postId, user, navigate]);

  async function handleImageChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setFieldErrors((prev) => ({ ...prev, image: "File must be an image." }));
      return;
    }
    if (file.size > IMAGE_MAX_BYTES) {
      setFieldErrors((prev) => ({ ...prev, image: "Image must be 3MB or smaller." }));
      return;
    }

    setFieldErrors((prev) => ({ ...prev, image: undefined }));
    try {
      const url = await uploadImage(file);
      setImageData(url);
    } catch (err) {
      setFieldErrors((prev) => ({ ...prev, image: "Image upload failed. Try again." }));
    }
  }

  function validate() {
    const errors = {};

    if (!title.trim()) errors.title = "Title is required.";
    else if (title.trim().length > TITLE_MAX) errors.title = `Title must be ${TITLE_MAX} characters or fewer.`;

    if (!description.trim()) errors.description = "Description is required.";
    else if (description.trim().length > DESCRIPTION_MAX) {
      errors.description = `Description must be ${DESCRIPTION_MAX} characters or fewer.`;
    }

    if (!rideDate || Number.isNaN(new Date(rideDate).getTime())) {
      errors.rideDate = "A valid ride date is required.";
    }

    const distanceNum = Number(distance);
    if (distance === "" || !Number.isFinite(distanceNum) || distanceNum <= 0) {
      errors.distance = "Distance must be a positive number.";
    }

    const elevationNum = Number(elevation);
    if (elevation === "" || !Number.isFinite(elevationNum) || elevationNum < 0) {
      errors.elevation = "Elevation must be a non-negative number.";
    }

    const maxSpeedNum = Number(maxSpeed);
    if (maxSpeed === "" || !Number.isFinite(maxSpeedNum) || maxSpeedNum <= 0) {
      errors.maxSpeed = "Max speed must be a positive number.";
    }

    return errors;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);

    const errors = validate();
    setFieldErrors(errors);
    if (Object.values(errors).some(Boolean)) return;

    const payload = {
      title: title.trim(),
      description: description.trim(),
      imageData,
      rideDate,
      distance: Number(distance),
      elevation: Number(elevation),
      maxSpeed: Number(maxSpeed),
    };

    setSubmitting(true);
    try {
      if (mode === "create") {
        await createRide(payload);
      } else {
        await updateRide(postId, payload);
      }
      navigate("/");
    } catch (err) {
      setError(err.error || "Failed to save ride");
    } finally {
      setSubmitting(false);
    }
  }

  if (loadingRide) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
        <Spinner animation="border" role="status" />
      </Container>
    );
  }

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <Card style={{ width: "500px" }}>
        <Card.Body>
          <Card.Title className="text-center mb-4">
            {mode === "create" ? "Log a Ride" : "Edit Ride"}
          </Card.Title>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                isInvalid={!!fieldErrors.title}
              />
              <Form.Control.Feedback type="invalid">{fieldErrors.title}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                isInvalid={!!fieldErrors.description}
              />
              <Form.Control.Feedback type="invalid">{fieldErrors.description}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="rideDate">
              <Form.Label>Ride Date</Form.Label>
              <Form.Control
                type="date"
                value={rideDate}
                onChange={(e) => setRideDate(e.target.value)}
                isInvalid={!!fieldErrors.rideDate}
              />
              <Form.Control.Feedback type="invalid">{fieldErrors.rideDate}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="distance">
              <Form.Label>Distance (miles)</Form.Label>
              <Form.Control
                type="number"
                step="any"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                isInvalid={!!fieldErrors.distance}
              />
              <Form.Control.Feedback type="invalid">{fieldErrors.distance}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="elevation">
              <Form.Label>Elevation Gain (feet)</Form.Label>
              <Form.Control
                type="number"
                step="any"
                value={elevation}
                onChange={(e) => setElevation(e.target.value)}
                isInvalid={!!fieldErrors.elevation}
              />
              <Form.Control.Feedback type="invalid">{fieldErrors.elevation}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="maxSpeed">
              <Form.Label>Max Speed (mph)</Form.Label>
              <Form.Control
                type="number"
                step="any"
                value={maxSpeed}
                onChange={(e) => setMaxSpeed(e.target.value)}
                isInvalid={!!fieldErrors.maxSpeed}
              />
              <Form.Control.Feedback type="invalid">{fieldErrors.maxSpeed}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="image">
              <Form.Label>Photo</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                isInvalid={!!fieldErrors.image}
              />
              <Form.Control.Feedback type="invalid">{fieldErrors.image}</Form.Control.Feedback>
              {imageData && (
                <img src={imageData} alt="Ride preview" className="ride-form-image-preview mt-2" />
              )}
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100" disabled={submitting}>
              {submitting ? "Saving..." : "Save Ride"}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

RideForm.propTypes = {
  mode: PropTypes.oneOf(["create", "edit"]).isRequired,
};
