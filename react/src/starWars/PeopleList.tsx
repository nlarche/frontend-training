import React from "react";
import { useState } from "react";
import { People, fetchPeoples } from "../domain/people";
import { PeopleCard } from "./PeopleCard";
import { useEffect } from "react";

export function PeopleList() {
  const [peopleList, setPeopleList] = useState<People[]>([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const fetchPeople = async () => {
      const list = await fetchPeoples();
      setPeopleList(list);
    };

    fetchPeople();
  }, []);

  const handlePeopleSelect = (value: string) => {
    setTitle(value);
  };

  return (
    <div>
      <h2>{title}</h2>
      {peopleList &&
        peopleList.map((people, index) => (
          <PeopleCard
            key={index}
            peopleProps={people}
            onPeopleSelect={handlePeopleSelect}
          />
        ))}
    </div>
  );
}
