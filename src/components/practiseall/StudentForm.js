// StudentForm.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './StudentForm.css';

function StudentForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        course: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = () => {
        let formErrors = {};
        if (!formData.name) formErrors.name = 'Name is required';
        if (!formData.email) {
            formErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = 'Email is invalid';
        }
        if (!formData.age) formErrors.age = 'Age is required';
        if (!formData.course) formErrors.course = 'Course is required';

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validate()) {
            console.log('Form data submitted:', formData);
        }
    };

    const clear = () => {
        setFormData({
            name: '',
            email: '',
            age: '',
            course: '',
        });
        let formErrors = {};
        setErrors(formErrors);
    }

    return (
        <div className="container mt-5">
            <h2>Student Form</h2>
            <form onSubmit={handleSubmit} validate>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input
                        type="number"
                        className={`form-control ${errors.age ? 'is-invalid' : ''}`}
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                    />
                    {errors.age && <div className="invalid-feedback">{errors.age}</div>}
                </div>

                <div className="mb-3">
                    <label className="form-label">Course</label>
                    <input
                        type="text"
                        className={`form-control ${errors.course ? 'is-invalid' : ''}`}
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                    />
                    {errors.course && <div className="invalid-feedback">{errors.course}</div>}
                </div>
                <button type="submit" onClick={clear} className="btn btn">Clear</button>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default StudentForm;
