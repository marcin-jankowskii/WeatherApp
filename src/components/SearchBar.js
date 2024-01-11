import WheatherApi from "../api/WheatherApi";
import React, { useState } from "react";
import "./assets/SearchBar.css";

function SearchBar({ onSearch }) {
    const [city, setCity] = useState("");

    const handleSearch = async () => {
        if (!city) return;
        const data = await WheatherApi.fetchWeather(city);
        onSearch(data);
    }; // Dodano brakującą klamrę zamykającą

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search for a city..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default SearchBar;