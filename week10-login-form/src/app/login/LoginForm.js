'use client'
import React, {useState} from 'react'

export default function LoginForm() {
    const INITIAL_VALUES = {
        username: '',
        password: '',
        city: ''
    }
    const cityOptions = [
        { value: '', label: '[--Select a city---]' },
        { value: 'NYC', label: 'New York' },
        { value: 'LA', label: 'Los Angeles' },
        { value: 'CHI', label: 'Chicago' },
        { value: 'HOU', label: 'Houston' },
        { value: 'PHX', label: 'Phoenix' },
        { value: 'PHI', label: 'Philadelphia' },
        { value: 'SA', label: 'San Antonio' },
        { value: 'SD', label: 'San Diego' },
        { value: 'DAL', label: 'Dallas' },
        { value: 'SJC', label: 'San Jose' }
    ];
    const onChangeValue = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        console.log(data);
    }

    const onResetForm = (e) => {
        e.preventDefault();
        setData(INITIAL_VALUES);
    }   
    const [data, setData] = useState(INITIAL_VALUES);

  return (
    <div>
      <h3 className="text-3xl font-bold underline">Login</h3>
      <form>
        <label htmlFor="username" className="block mb-2">
          Username:
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={data.username}
          onChange={onChangeValue}
          placeholder="Enter your username"
          className="border border-gray-300 rounded-md p-2"
        />
        <br />
        <label htmlFor="password" className="block mb-2">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={data.password}
          onChange={onChangeValue}
          placeholder="Enter your password"
          className="border border-gray-300 rounded-md p-2"
        />
        <br />
        <label htmlFor="city" className="block mb-2">
          City:
        </label>
        <select
          id="city"
          name="city"
          value={data.city}
          onChange={onChangeValue}
          className="border border-gray-300 rounded-md p-2"
        >
          {cityOptions.map((option) => (
            // Using the option value as the key for each option element
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <br />
        <button type="submit" 
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        onClick={onSubmitForm}>
          Login
        </button>
        <button type="reset"
         className="bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600"
         onClick={onResetForm}>
          Reset
        </button>
      </form>
      <div className="text-center mt-4">
        <h4 className="bg-blue-500 text-white p-2">Form Data:</h4>
        <p className="text-sm">Username: {data.username}</p>
        <p className="text-sm">Password: {data.password}</p>
        <p className="text-sm">City: {data.city}</p>
      </div>
    </div>
  );
}
