import React, { useState } from 'react';

function App() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        gender: '',
        cars: []
    });

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;

        const updatedValue = type === 'checkbox' ? (checked ? name : '') : value

        if (name === "bmw" || name === "audi") {
            setFormData({
                ...formData,
                cars: updatedValue === '' ?
                    formData.cars.filter(car => car !== name) :
                    [...formData.cars, name]
            });
        } else {
            setFormData({
                ...formData,
                [name]: updatedValue,
            });
        }

    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData); 
    };

    return (
        <div>
            <h2>React Form Example</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Gender:</label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={formData.gender === 'male'}
                            onChange={handleInputChange}
                        />
                        Male
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={formData.gender === 'female'}
                            onChange={handleInputChange}
                        />
                        Female
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="bmw"
                            checked={formData.cars.bmw}
                            onChange={handleInputChange}
                        />
                        BMW
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="audi"
                            checked={formData.cars.audi}
                            onChange={handleInputChange}
                        />
                       Audi
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default App;
