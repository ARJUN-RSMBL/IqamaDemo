package com.iqama.demo.service;

import com.iqama.demo.Exception.ResourceNotFoundException;
import com.iqama.demo.entity.Employee;
import com.iqama.demo.repository.EmployeeRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public Employee createEmployee(Employee employee) {
        System.out.println("Employee received: " + employee);
      return   employeeRepository.save(employee);
    }

    public Optional<Employee> getEmployeeById(Long id) {
        return   employeeRepository.findById(id);
    }

    public Employee updateEmployee(Long id, Employee updatedEmployee) {
       return employeeRepository.save(updatedEmployee);
    }

    public void deleteEmployeeById(Long id) {
        employeeRepository.deleteById(id);
    }


    public List<Employee> getAllEmployee() throws ResourceNotFoundException {
        try {
            List<Employee> allService = employeeRepository.findAll();

            return allService;

        } catch (Exception e) {
            throw new ResourceNotFoundException("Could not Get all Service ");
        }

    }


}
