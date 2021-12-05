import React, { useState, useEffect } from "react";
import { Tables, Thead, Tbody, Th, Td, Tr } from "../Styles/Table.styled";
import { FcEditImage, FcDeleteColumn } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Table = () => {
  const Navigate = useNavigate();

  const [userData, setUserData] = useState([]);

  const URL = "http://localhost:7000/users";

  const getUserData = async () => {
    await fetch(URL)
      .then((res) => res.json())
      .then((data) => setUserData(data));
    console.log("userData", userData);
  };

  const deleteUserData = async (id) => {
    await fetch(`http://localhost:7000/users/${id}`, {
      method: "DELETE",
    });

    const removeItems = userData.filter((rm) => rm.id !== id);
    setUserData(removeItems);
  };

  const editUserData = async (id) => {
    const res = await fetch(`http://localhost:7000/users/${id}`);

    const data = await res.json();
    Navigate("/create", { state: data });
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Tables>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Age</Th>
          <Th>Email</Th>
          <Th>Number</Th>
          <Th>Address</Th>
          <Th>Action</Th>
        </Tr>
      </Thead>

      <Tbody>
        {userData?.map((users, i) => {
          return (
            <Tr key={i}>
              <Td>
                {users.firstName}-{users.lastName}
              </Td>
              <Td>{users.age}</Td>
              <Td>{users.email}</Td>
              <Td>{users.mobileNumber}</Td>
              <Td>{users.address}</Td>
              <Td>
                <span
                  onClick={() => {
                    editUserData(users.id);
                    console.log(users.id);
                  }}
                >
                  <FcEditImage />
                </span>

                <span
                  clr="red"
                  onClick={() => {
                    deleteUserData(users.id);
                    console.log(users.id);
                  }}
                >
                  <FcDeleteColumn />
                </span>
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Tables>
  );
};

export default Table;
