import React from "react";
import { BrowserRouter , Route, Routes, Link } from 'react-router-dom';
import { useState } from "react";
 const Text = ()=> {
        const myArr = [
            {
                studenName: "Vagdevi",
                studenClass: 6,
                studenSection: "A"
            },
            {
                studenName: "Anwesh",
                studenClass: 7,
                studenSection: "B"
            },
            {
                studenName: "Akshay",
                studenClass: 6,
                studenSection: "C"
            },
            {
                studenName: "Shravan",
                studenClass: 6,
                studenSection: "D"
            },
            {
                studenName: "Divya",
                studenClass: 6,
                studenSection: "A"
            }
        ];
    
        const [searchQuery, setSearchQuery] = useState('');
        const [filteredArr, setFilteredArr] = useState(myArr);
    
        const handleSearch = (e) => {
            const query = e.target.value.toLowerCase();
            setSearchQuery(query);
            const filteredData = myArr.filter(student => student.studenName.toLowerCase().includes(query));
            setFilteredArr(filteredData);
        };
    
        return (
            <div>
                <input
                    type="text"
                    placeholder="Search Student Name"
                    value={searchQuery}
                    onChange={handleSearch}
                />
                <ul>
                    {filteredArr.map((student, index) => (
                        <li key={index}>
                            {student.studenName} - Class {student.studenClass}, Section {student.studenSection}
                        </li>
                    ))}
                </ul>
            </div>
        );
    };
    
    
//     return(
//         <div>
//             <h1>
//                 Divya
//             </h1>
//         </div>
//     );
//  };
 export default Text;