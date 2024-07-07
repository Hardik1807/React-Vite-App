import React, { useState } from 'react';
import { List, ListItem, ListItemText, Checkbox, IconButton } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

interface SubDepartment {
  name: string;
  selected: boolean;
}

interface Department {
  name: string;
  selected: boolean;
  subDepartments: SubDepartment[];
}

const departmentData: Department[] = [
  {
    name: 'customer_service',
    selected: false,
    subDepartments: [
      { name: 'support', selected: false },
      { name: 'customer_success', selected: false },
    ],
  },
  {
    name: 'design',
    selected: false,
    subDepartments: [
      { name: 'graphic_design', selected: false },
      { name: 'product_design', selected: false },
      { name: 'web_design', selected: false }
    ],
  },
];

const DepartmentList: React.FC = () => {
  const [departments, setDepartments] = useState<Department[]>(departmentData);
  const [open, setOpen] = useState<{ [key: string]: boolean }>({});

  const handleToggle = (departmentName: string) => {
    console.log(departmentName)
    console.log(open)
    setOpen((prevOpen) => ({
      // console.log(prevOpen)
      ...prevOpen,
      [departmentName]: !prevOpen[departmentName],
    }));
    console.log(open)
  };

  const handleDepartmentSelect = (index: number) => {
    const updatedDepartments = [...departments];
    updatedDepartments[index].selected = !updatedDepartments[index].selected;
    updatedDepartments[index].subDepartments.forEach(
      (subDept) => (subDept.selected = updatedDepartments[index].selected)
    );
    setDepartments(updatedDepartments);
  };

  const handleSubDepartmentSelect = (deptIndex: number, subDeptIndex: number) => {
    const updatedDepartments = [...departments];
    const subDept = updatedDepartments[deptIndex].subDepartments[subDeptIndex];
    subDept.selected = !subDept.selected;

    if (updatedDepartments[deptIndex].subDepartments.every((subDept) => subDept.selected)) {
      updatedDepartments[deptIndex].selected = true;
    } else {
      updatedDepartments[deptIndex].selected = false;
    }

    setDepartments(updatedDepartments);
  };

  return (
    <List>
      {departments.map((department, deptIndex) => (
        <div key={department.name}>
          <ListItem>
            <Checkbox
              checked={department.selected}
              onChange={() => handleDepartmentSelect(deptIndex)}
            />
            <ListItemText primary={department.name} />
            <IconButton onClick={() => handleToggle(department.name)}>
              {open[department.name] ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </ListItem>
          {open[department.name] &&
            department.subDepartments.map((subDepartment, subDeptIndex) => (
              <List component="div" disablePadding key={subDepartment.name}>
                <ListItem sx={{ pl: 4 }}>
                  <Checkbox
                    checked={subDepartment.selected}
                    onChange={() => handleSubDepartmentSelect(deptIndex, subDeptIndex)}
                  />
                  <ListItemText primary={subDepartment.name} />
                </ListItem>
              </List>
            ))}
        </div>
      ))}
    </List>
  );
};

export default DepartmentList;
