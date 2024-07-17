import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EmployeeList.css';

const API_URL = 'https://localhost:7272/api/Employees';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [employeesPerPage] = useState(5); // Número de empleados por página
  
    useEffect(() => {
      axios.get(API_URL)
        .then(response => {
          setEmployees(response.data);
        })
        .catch(error => {
          console.error('Error fetching data: ', error);
        });
    }, []);
  
    // Index del último empleado en la página actual
    const indexOfLastEmployee = currentPage * employeesPerPage;
    // Index del primer empleado en la página actual
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
    // Empleados de la página actual
    const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee);
  
    // Número total de páginas
    const totalPages = Math.ceil(employees.length / employeesPerPage);
  
    // Cambiar a la página siguiente
    const nextPage = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    // Cambiar a la página anterior
    const prevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    return (
      <div className="container">
        <h1>Lista de Empleados</h1>
        <table className="employee-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Número de Documento</th>
              <th>Salario</th>
              <th>Edad</th>
              <th>Perfil</th>
              <th>Fecha de Admisión</th>
            </tr>
          </thead>
          <tbody>
            {currentEmployees.map(employee => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td className="left-align">{employee.name}</td>
                <td>{employee.document_Number}</td>
                <td>{employee.salary}</td>
                <td>{employee.age}</td>
                <td>{employee.profile}</td>
                <td>{new Date(employee.admission_Date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Información de la página actual */}
        <div className="pagination">
          <span>Página {currentPage} de {totalPages}</span>
          <button onClick={prevPage} disabled={currentPage === 1}>Atrás</button>
          <button onClick={nextPage} disabled={currentPage === totalPages}>Siguiente</button>
        </div>
      </div>
    );
  };
  
  export default EmployeeList;